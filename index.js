import { Readable, Transform } from 'stream'
import { execFileSync } from 'child_process'
import addStream from 'add-stream'
import { getRawCommitsStream } from 'git-raw-commits'
import { parseCommitsStream } from 'conventional-commits-parser'
import { writeChangelogStream } from 'conventional-changelog-writer'
import mergeConfig from './lib/merge-config.js'

/**
 * @typedef {import('conventional-changelog-config-spec').Config} XchangelogSpec
 */

/**
 * @typedef {import('conventional-changelog-core').Options.Config.Object} XchangelogConfigOptions
 */

/**
 * @typedef {import('conventional-changelog-core').Options} XchangelogOptions
 */

/**
 * @typedef {Omit<
 *   import('type-fest').OmitIndexSignature<
 *     import('conventional-changelog-writer').CommitKnownProps &
 *       import('conventional-commits-parser').Commit & {
 *         scope?: string | null;
 *         subject?: string | null;
 *         shortHash?: string | null;
 *       }
 *   >,
 *   'revert'
 * > & { revert?: Record<string, string | null | undefined> | null }} XchangelogCommit
 */

/**
 * @typedef {XchangelogSpec & XchangelogConfigOptions & {
 *   context: { packageName?: string },
 *   options: XchangelogOptions;
 *   parserOpts: import('conventional-commits-parser').ParserOptions;
 *   writerOpts: Omit<import('conventional-changelog-writer').Options<XchangelogCommit>, 'commitsSort'> & { commitsSort?: string[] }
 * }} XchangelogConfig
 */

/**
 * This function is a patched version of `conventionalChangelog` and works
 * identically.
 *
 * @param {import('conventional-changelog-core').Options<XchangelogCommit> & { cwd ?: string }} [options]
 * @param {import('conventional-changelog-core').Context} [context]
 * @param {import('conventional-changelog-core').GitRawCommitsOptions}
 * [gitRawCommitsOpts]
 * @param {import('conventional-changelog-core').ParserOptions} [parserOpts]
 * @param {import('conventional-changelog-core').WriterOptions<XchangelogCommit> & { includeDetails?: boolean }} [writerOpts]
 * @param {Record<string, unknown>} [gitRawExecOpts]
 * @returns {Readable}
 */
export default function conventionalChangelog (options, context, gitRawCommitsOpts, parserOpts, writerOpts, gitRawExecOpts) {
  const cwd = options?.cwd

  writerOpts = writerOpts || {}

  const readable = new Readable({
    objectMode: writerOpts.includeDetails
  })
  readable._read = function () { }

  let commitsErrorThrown = false

  let commitsStream = new Readable({
    objectMode: true
  })
  commitsStream._read = function () { }

  function commitsRange (from, to) {
    return getRawCommitsStream({
      ...gitRawCommitsOpts,
      from,
      to,
      cwd
    })
      .on('error', function (err) {
        if (!commitsErrorThrown) {
          setImmediate(commitsStream.emit.bind(commitsStream), 'error', err)
          commitsErrorThrown = true
        }
      })
  }

  mergeConfig(options, context, gitRawCommitsOpts, parserOpts, writerOpts, gitRawExecOpts)
    .then(function (data) {
      options = data.options
      context = data.context
      gitRawCommitsOpts = data.gitRawCommitsOpts
      parserOpts = data.parserOpts
      writerOpts = data.writerOpts
      gitRawExecOpts = data.gitRawExecOpts

      try {
        execFileSync('git', ['rev-parse', '--verify', 'HEAD'], {
          cwd,
          stdio: 'ignore'
        })
        let reverseTags = context.gitSemverTags.slice(0).reverse()
        reverseTags.push('HEAD')

        if (gitRawCommitsOpts.from) {
          if (reverseTags.indexOf(gitRawCommitsOpts.from) !== -1) {
            reverseTags = reverseTags.slice(reverseTags.indexOf(gitRawCommitsOpts.from))
          } else {
            reverseTags = [gitRawCommitsOpts.from, 'HEAD']
          }
        }

        let streams = reverseTags.map((to, i) => {
          const from = i > 0
            ? reverseTags[i - 1]
            : ''
          return commitsRange(from, to)
        })

        if (gitRawCommitsOpts.from) {
          streams = streams.splice(1)
        }

        if (gitRawCommitsOpts.reverse) {
          streams.reverse()
        }

        streams.reduce((prev, next) => next.pipe(addStream(prev)))
          .on('data', function (data) {
            setImmediate(commitsStream.emit.bind(commitsStream), 'data', data)
          })
          .on('end', function () {
            setImmediate(commitsStream.emit.bind(commitsStream), 'end')
          })
      } catch (_e) {
        commitsStream = getRawCommitsStream({
          ...gitRawCommitsOpts,
          ...gitRawExecOpts
        })
      }

      commitsStream
        .on('error', function (err) {
          err.message = 'Error in git-raw-commits: ' + err.message
          setImmediate(readable.emit.bind(readable), 'error', err)
        })
        .pipe(parseCommitsStream(parserOpts))
        .on('error', function (err) {
          err.message = 'Error in conventional-commits-parser: ' + err.message
          setImmediate(readable.emit.bind(readable), 'error', err)
        })
        // it would be better if `gitRawCommits` could spit out better formatted data
        // so we don't need to transform here
        .pipe(
          new Transform({
            objectMode: true,
            highWaterMark: 16,
            transform (chunk, enc, cb) {
              try {
                options.transform.call(this, chunk, cb)
              } catch (err) {
                cb(err)
              }
            }
          })
        )
        .on('error', function (err) {
          err.message = 'Error in options.transform: ' + err.message
          setImmediate(readable.emit.bind(readable), 'error', err)
        })
        .pipe(writeChangelogStream(context, writerOpts, writerOpts.includeDetails))
        .on('error', function (err) {
          err.message = 'Error in conventional-changelog-writer: ' + err.message
          setImmediate(readable.emit.bind(readable), 'error', err)
        })
        .pipe(
          new Transform({
            objectMode: writerOpts.includeDetails,
            transform (chunk, enc, cb) {
              try {
                readable.push(chunk)
              } catch (err) {
                setImmediate(function () {
                  throw err
                })
              }

              cb()
            },
            flush (cb) {
              readable.push(null)

              cb()
            }
          })
        )
    })
    .catch(function (err) {
      setImmediate(readable.emit.bind(readable), 'error', err)
    })

  return readable
}
