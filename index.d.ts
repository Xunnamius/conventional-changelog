/**
 * @typedef {import('conventional-changelog-config-spec').Config} XchangelogSpec
 */
/**
 * @typedef {import('conventional-changelog-core').Options} XchangelogOptions
 */
/**
 * This function is a patched version of `conventionalChangelog` and works
 * identically.
 *
 * @param {import('conventional-changelog-core').Options} options
 * @param {import('conventional-changelog-core').Context} context
 * @param {import('conventional-changelog-core').GitRawCommitsOptions}
 * gitRawCommitsOpts
 * @param {import('conventional-changelog-core').ParserOptions} parserOpts
 * @param {import('conventional-changelog-core').WriterOptions} writerOpts
 * @param {Record<string, unknown>} gitRawExecOpts
 * @returns {Readable}
 */
export default function conventionalChangelog(options: import("conventional-changelog-core").Options, context: import("conventional-changelog-core").Context, gitRawCommitsOpts: import("conventional-changelog-core").GitRawCommitsOptions, parserOpts: import("conventional-changelog-core").ParserOptions, writerOpts: import("conventional-changelog-core").WriterOptions, gitRawExecOpts: Record<string, unknown>): Readable;
export type XchangelogSpec = import("conventional-changelog-config-spec").Config;
export type XchangelogOptions = import("conventional-changelog-core").Options;
import { Readable } from 'stream';
