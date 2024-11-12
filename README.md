<p align="center" width="100%">
  <img width="300" src="./xchangelog.png">
</p>

<p align="center" width="100%">
A <a href="https://github.com/conventional-changelog/conventional-changelog" target="_blank">conventional-changelog-core</a> fork with bug fixes
</p>

<hr />

<!-- badges-start -->

<div align="center">

[![Black Lives Matter!][x-badge-blm-image]][x-badge-blm-link]
[![Last commit timestamp][x-badge-lastcommit-image]][x-badge-repo-link]
[![Codecov][x-badge-codecov-image]][x-badge-codecov-link]
[![Source license][x-badge-license-image]][x-badge-license-link]
[![Uses Semantic Release!][x-badge-semanticrelease-image]][x-badge-semanticrelease-link]

[![NPM version][x-badge-npm-image]][x-badge-npm-link]
[![Monthly Downloads][x-badge-downloads-image]][x-badge-npm-link]

</div>

<!-- badges-end -->

<br />

# xchangelog (@-xun/changelog)

This [conventional-changelog-core][1] fork slightly tweaks the original to fix
some bugs and bundle type definitions that are more well-formed.

Among the bugs fixed by this fork is one where [conventional-changelog-core][1],
when given a release commit with multiple tags, will only accept the first tag
in the list as the version tag if it matches (i.e. starts with
[`tagPrefix`][4]). Without this fix, when the _actual_ matching version tag is
not first in the list, strange things happen.

Multiple tags on the same release commit is useful when, for instance, you
transmute a polyrepo into a monorepo and need to alias the original
`v${version}`-style tags with the more monorepo-friendly
`${package-name}@${version}`-style tags.

> \[!NOTE]
>
> The only reason to use xchangelog over [conventional-changelog-core][1] is if
> you are using an [xscripts][2]-powered project or you need the bug fixes.
> Otherwise, just use [conventional-changelog][1].

<br />

## Install

To install xchangelog:

```shell
npm install --save-dev @-xun/changelog
```

If you want to use a specific version of xchangelog, provide its semver:

```shell
npm install --save-dev @-xun/changelog@1.2.3
```

> \[!NOTE]
>
> xchangelog installations can reuse the "conventional-changelog-core" name so that
> plugins with conventional-changelog-core as a peer dependency are able to
> recognize xchangelog's presence. For example:
>
> ```
> npm install --save-dev conventional-changelog-core@npm:@-xun/changelog
> ```

## Usage

```js
import conventionalChangelogCore from '@-xun/changelog';

conventionalChangelogCore().pipe(process.stdout); // or any writable stream
```

See the [`conventionalChangelogCore`][3] upstream documentation for more
details.

## Contributing

Consider contributing to upstream [conventional-changelog][1] instead.

[x-badge-blm-image]: https://xunn.at/badge-blm "Join the movement!"
[x-badge-blm-link]: https://xunn.at/donate-blm
[x-badge-codecov-image]: https://img.shields.io/codecov/c/github/Xunnamius/xchangelog/main?style=flat-square&token=HWRIOBAAPW "Is this package well-tested?"
[x-badge-codecov-link]: https://codecov.io/gh/Xunnamius/xchangelog
[x-badge-downloads-image]: https://img.shields.io/npm/dm/@-xun/changelog?style=flat-square "Number of times this package has been downloaded per month"
[x-badge-lastcommit-image]: https://img.shields.io/github/last-commit/Xunnamius/xchangelog?style=flat-square "Latest commit timestamp"
[x-badge-license-image]: https://img.shields.io/npm/l/@-xun/changelog?style=flat-square "This package's source license"
[x-badge-license-link]: https://github.com/Xunnamius/xchangelog/blob/main/LICENSE
[x-badge-npm-image]: https://xunn.at/npm-pkg-version/@-xun/changelog "Install this package using npm or yarn!"
[x-badge-npm-link]: https://www.npmjs.com/package/@-xun/changelog
[x-badge-repo-link]: https://github.com/Xunnamius/xchangelog
[x-badge-semanticrelease-image]: https://xunn.at/badge-semantic-release "This repo practices continuous integration and deployment!"
[x-badge-semanticrelease-link]: https://github.com/semantic-release/semantic-release
[1]: https://github.com/conventional-changelog/conventional-changelog
[2]: https://github.com/Xunnamius/xscripts
[3]: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-core#api
[4]: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-core#tagprefix
