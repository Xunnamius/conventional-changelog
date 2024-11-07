# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits](https://conventionalcommits.org);
this project adheres to [Semantic Versioning](https://semver.org).

<br />

## 2.0.0 (2018-05-29)

### 💥 BREAKING CHANGES 💥

* Anchor tags are removed from the changelog header templates. The rendered Markdown will no longer contain anchor tags proceeding the version number header that constitutes the changelog header. This means that consumers of rendered markdown will not be able to use a URL that has been constructed to contain a version number anchor tag reference, since the anchor tag won't exist in the rendered markdown.

It's stronly recomended consumers use the full URL path to the release page for a given version, as that URL is a permalink to that verison, contains all relavent release information, and does not, otherwise, rely on the anchor tag being excessible from the current page view.

As an example, for version `2.0.0` of a GitHub project, the following URL should be used: - https://github.com/conventional-changelog/releaser-tools/releases/tag/v2.0.0

* Set the package's minimum required Node version to be the oldest LTS currently supported by the Node Release working group. At this time, that is Node 6 (which is in its Maintenance LTS phase).

### 🧙🏿 Refactored

* Remove anchor from header templates ([#301](https://github.com/Xunnamius/xchangelog/issues/301)) ([346f24f](https://github.com/Xunnamius/xchangelog/commit/346f24f0f8d92b64ed62658796d1876a52ec3ab3)) <sup>see [#186](https://github.com/Xunnamius/xchangelog/issues/186)</sup>

### 🗄️ Miscellaneous

* **package:** set Node requirement to oldest supported LTS ([#329](https://github.com/Xunnamius/xchangelog/issues/329)) ([cae2fe0](https://github.com/Xunnamius/xchangelog/commit/cae2fe0491bc7d7eef77d790cc65b86fe5070f1b))

<br />

### 🏗️ Patch 2.0.27 (2020-11-05)

#### ✨ Features

* Allows notes pattern to be customized ([#586](https://github.com/Xunnamius/xchangelog/issues/586)) ([9c00f32](https://github.com/Xunnamius/xchangelog/commit/9c00f3242d916be1774a618d943f908f8d9699a6))
* **conventionalcommits:** allow matching scope ([#669](https://github.com/Xunnamius/xchangelog/issues/669)) ([e01e027](https://github.com/Xunnamius/xchangelog/commit/e01e027af60f5fa3e9146223b96797793930aeb4))

#### 🪄 Fixes

* Bug in unstableTagTest causing a mismatch on beta release higher then beta-9 ([#679](https://github.com/Xunnamius/xchangelog/issues/679)) ([cd4c726](https://github.com/Xunnamius/xchangelog/commit/cd4c726b1ca227a132ec2eadac5d0cfdd75d9e81))
* **deps:** update dependency normalize-package-data to v3 ([#687](https://github.com/Xunnamius/xchangelog/issues/687)) ([7b6ec0a](https://github.com/Xunnamius/xchangelog/commit/7b6ec0add30915bc1569f82a007bb4d1d6df8e3e))
* **deps:** update dependency through2 to v4 ([#657](https://github.com/Xunnamius/xchangelog/issues/657)) ([7ae618c](https://github.com/Xunnamius/xchangelog/commit/7ae618c81491841e5b1d796d3933aac0c54bc312))
* Ignore gpg lines ([#685](https://github.com/Xunnamius/xchangelog/issues/685)) ([f8fcbc2](https://github.com/Xunnamius/xchangelog/commit/f8fcbc2e8b0834c29178ace6382b438a020ad828))

<br />

### 🏗️ Patch 2.0.26 (2020-08-12)

#### ✨ Features

* Add support for '--skip-unstable' option ([#656](https://github.com/Xunnamius/xchangelog/issues/656)) ([#656](https://github.com/Xunnamius/xchangelog/issues/656)) ([0679d7a](https://github.com/Xunnamius/xchangelog/commit/0679d7a1d7a8715918326f31ec3f6168c2341fd6))
* **templates:** if hash is nullish, do not display in CHANGELOG ([#664](https://github.com/Xunnamius/xchangelog/issues/664)) ([f10256c](https://github.com/Xunnamius/xchangelog/commit/f10256c635687de0a85c4db2bf06292902924f77))

<br />

### 🏗️ Patch 2.0.25 (2020-06-20)

#### 🪄 Fixes

* **deps:** update dependency compare-func to v2 ([#647](https://github.com/Xunnamius/xchangelog/issues/647)) ([de4f630](https://github.com/Xunnamius/xchangelog/commit/de4f6309403ca0d46b7c6235052f4dca61ea15bc))
* Pass config to parserOpts and writerOpts ([73c7a1b](https://github.com/Xunnamius/xchangelog/commit/73c7a1b92c2a47c498f42972acbffa156172a341))

<br />

### 🏗️ Patch 2.0.24 (2020-05-08)

#### 🪄 Fixes

* **deps:** address CVE in meow ([#642](https://github.com/Xunnamius/xchangelog/issues/642)) ([46311d2](https://github.com/Xunnamius/xchangelog/commit/46311d2932b367f370d06c4e447b8dcf4bc4e83f))

#### ⚙️ Build system

* Keep optional appveyor for now ([#640](https://github.com/Xunnamius/xchangelog/issues/640)) ([6b0ffec](https://github.com/Xunnamius/xchangelog/commit/6b0ffec56849724ec4626b33ab1cb89438da0bbc))

<br />

### 🏗️ Patch 2.0.23 (2020-05-08)

#### 💥 BREAKING CHANGES 💥

* --tagPrefix flag was changed to --tag-prefix

* Drop support for Node 6 ([#558](https://github.com/Xunnamius/xchangelog/issues/558))

* Drop support for Node 8 ([#599](https://github.com/Xunnamius/xchangelog/issues/599))

#### ✨ Features

* Add support for 'feature' as alias for 'feat' ([#582](https://github.com/Xunnamius/xchangelog/issues/582)) ([94c40f7](https://github.com/Xunnamius/xchangelog/commit/94c40f755e6c329311d89a47c634b91cf0276da3))
* **conventional-commits-parser:** add issuePrefixesCaseSensitive parser option ([#580](https://github.com/Xunnamius/xchangelog/issues/580)) ([526b282](https://github.com/Xunnamius/xchangelog/commit/526b28214d12c55158eb2e4d44408378587ceb97))
* Support slash in headerPattern default options ([93a547d](https://github.com/Xunnamius/xchangelog/commit/93a547d742634d8676f499cfa2a274bc3792d020))

#### 🪄 Fixes

* **conventional-changelog-core:** check if HEAD ref exists before using it ([#578](https://github.com/Xunnamius/xchangelog/issues/578)) ([a49b19a](https://github.com/Xunnamius/xchangelog/commit/a49b19a8c4b1d13559ebb02020d4f623189fae6a))
* **conventional-changelog-core:** fix duplicated commits when `from` is specified ([#573](https://github.com/Xunnamius/xchangelog/issues/573)) ([287a801](https://github.com/Xunnamius/xchangelog/commit/287a801ecde0a3856b6531cef53474d3a8b808b3)) <sup>see [#567](https://github.com/Xunnamius/xchangelog/issues/567)</sup>
* **conventional-changelog-core:** read current version properly when tagPrefix is provided ([#563](https://github.com/Xunnamius/xchangelog/issues/563)) ([1deb63f](https://github.com/Xunnamius/xchangelog/commit/1deb63fff9a07848c3964264c5ef4d082d654223)) <sup>see [#562](https://github.com/Xunnamius/xchangelog/issues/562), [#337](https://github.com/Xunnamius/xchangelog/issues/337)</sup>
* **deps:** update yargs-parser to move off a flagged-vulnerable version. ([#635](https://github.com/Xunnamius/xchangelog/issues/635)) ([aafc0f0](https://github.com/Xunnamius/xchangelog/commit/aafc0f00412c3e4b23b8418300e5a570a48fe24d))
* **git-semver-tags:** change --tagPrefix flag to --tag-prefix ([#566](https://github.com/Xunnamius/xchangelog/issues/566)) ([490cda6](https://github.com/Xunnamius/xchangelog/commit/490cda6cff74abe63617f982765b63aebdf3b4b6)) <sup>see [#553](https://github.com/Xunnamius/xchangelog/issues/553)</sup>

#### ⚙️ Build system

* Switch to GitHub actions ([#638](https://github.com/Xunnamius/xchangelog/issues/638)) ([52e637a](https://github.com/Xunnamius/xchangelog/commit/52e637a56ea26fe64a7e7591fec15854ab20283c))

#### 🧙🏿 Refactored

* Drop support for Node 6 ([#558](https://github.com/Xunnamius/xchangelog/issues/558)) ([fd80738](https://github.com/Xunnamius/xchangelog/commit/fd80738a46760753a61cb6929bd899ada1ab1e04))

#### 🗄️ Miscellaneous

* Drop support for Node 8 ([#599](https://github.com/Xunnamius/xchangelog/issues/599)) ([b9f5057](https://github.com/Xunnamius/xchangelog/commit/b9f50573f292ea29ff51627646ca7825bf182d52))

#### 🔥 Reverted

* *"fix(deps): update dependency read-pkg-up to v7 and read-pkg to v5 ([#526](https://github.com/Xunnamius/xchangelog/issues/526))"* ([bab29e3](https://github.com/Xunnamius/xchangelog/commit/bab29e3daf55db629326598ec528e3500b557498))
* *Ci(github-actions): add nodejs workflow for windows* ([e9d29e3](https://github.com/Xunnamius/xchangelog/commit/e9d29e374d589043062f34fdffaaa35bb4636399))

<br />

### 🏗️ Patch 2.0.19 (2019-11-21)

#### 🪄 Fixes

* Call gitRawCommits with ranges [tag1..tag2, tag2..tag3, ..., tagX..HEAD] to make sure commits are returned in right order. ([2fba5c7](https://github.com/Xunnamius/xchangelog/commit/2fba5c7a02e0e34093a6bd9a01109457db9b84c5)) <sup>see [#408](https://github.com/Xunnamius/xchangelog/issues/408)</sup>

<br />

### 🏗️ Patch 2.0.18 (2019-11-14)

#### 🪄 Fixes

* Add types for cli flags ([#551](https://github.com/Xunnamius/xchangelog/issues/551)) ([bf1d64a](https://github.com/Xunnamius/xchangelog/commit/bf1d64aeaf8f262d4b2beec02d2aebb78df7343b))

<br />

### 🏗️ Patch 2.0.17 (2019-11-07)

#### ✨ Features

* **conventional-changelog-core:** provide facility to define gitExecOpts. ([#480](https://github.com/Xunnamius/xchangelog/issues/480)) ([814f878](https://github.com/Xunnamius/xchangelog/commit/814f878054ca3c9ec00c3147478eb1e6a2762e9a))

#### 🪄 Fixes

* **conventional-commits-parser:** add breaking change notes if header match `breakingHeaderPattern` ([#544](https://github.com/Xunnamius/xchangelog/issues/544)) ([efdf3cb](https://github.com/Xunnamius/xchangelog/commit/efdf3cbc9de3278b180a48beebb74e596e3c5f94))
* **conventional-commits-parser:** add missing separator pipe to non tty parser ([#546](https://github.com/Xunnamius/xchangelog/issues/546)) ([c522743](https://github.com/Xunnamius/xchangelog/commit/c5227437b0b300f30a57e8ba5df2a8ab8d163af0))
* RevertPattern match default git revert format ([#545](https://github.com/Xunnamius/xchangelog/issues/545)) ([fe449f8](https://github.com/Xunnamius/xchangelog/commit/fe449f899567574a36d1819b313e2caa899052ff))

<br />

### 🏗️ Patch 2.0.16 (2019-10-24)

#### ✨ Features

* **preset-loader:** allow use of absolute package path ([#530](https://github.com/Xunnamius/xchangelog/issues/530)) ([84d28b2](https://github.com/Xunnamius/xchangelog/commit/84d28b285f787e9b1252aadf55f07a358635a5a6))

#### 🪄 Fixes

* **conventional-commits-parser:** downgrade is-text-path due to node 6 incompatibility ([#536](https://github.com/Xunnamius/xchangelog/issues/536)) ([3aa2637](https://github.com/Xunnamius/xchangelog/commit/3aa2637a1c65bb4db3d8bf2c6ce17e6f5abe1ca1))
* **deps:** update dependency rimraf to v3 ([#514](https://github.com/Xunnamius/xchangelog/issues/514)) ([c7e1706](https://github.com/Xunnamius/xchangelog/commit/c7e17062a7a38a194164c47d0e88fcbe3fb6490c))
* **deps:** update lodash to fix security issues ([#535](https://github.com/Xunnamius/xchangelog/issues/535)) ([ac43f51](https://github.com/Xunnamius/xchangelog/commit/ac43f51de1f3b597c32f7f8442917a2d06199018))

<br />

### 🏗️ Patch 2.0.15 (2019-10-03)

<br />

### 🏗️ Patch 2.0.14 (2019-10-02)

#### ✨ Features

* Sort sections of CHANGELOG based on priority ([#513](https://github.com/Xunnamius/xchangelog/issues/513)) ([a3acc32](https://github.com/Xunnamius/xchangelog/commit/a3acc3222135b17af0ee9785605d21b104ed0aef))

#### 🪄 Fixes

* **deps:** update dependency tempfile to v3 ([#459](https://github.com/Xunnamius/xchangelog/issues/459)) ([c0bac28](https://github.com/Xunnamius/xchangelog/commit/c0bac28c45dd4d1516330b83d12f16f6ad88664b))
* **preset, conventionalcommits:** fix handling conventionalcommits preset without config object ([c0566ce](https://github.com/Xunnamius/xchangelog/commit/c0566ce05c03c6274d6efcb01a2eff42e660a9bc)) <sup>see [#512](https://github.com/Xunnamius/xchangelog/issues/512)</sup>
* **preset, conventionalcommits:** pass issuePrefixes to parser ([#510](https://github.com/Xunnamius/xchangelog/issues/510)) ([958d243](https://github.com/Xunnamius/xchangelog/commit/958d243c3f1702eea91ddca40c1550d12fd81aa0))
* **preset, eslint:** display short tag in release notes ([b63a5ff](https://github.com/Xunnamius/xchangelog/commit/b63a5ffdf540cdaff2013e4465f640ef5a8f5013)) <sup>see [#313](https://github.com/Xunnamius/xchangelog/issues/313)</sup>
* Use full commit hash in commit link ([7a60dec](https://github.com/Xunnamius/xchangelog/commit/7a60decb6979efb5026e399e962313e69b005b22)) <sup>see [#476](https://github.com/Xunnamius/xchangelog/issues/476)</sup>

#### 🔥 Reverted

* *"fix(preset-loader): fix handling conventionalcommits preset without config object" ([#520](https://github.com/Xunnamius/xchangelog/issues/520))* ([417139c](https://github.com/Xunnamius/xchangelog/commit/417139cbdae13d76ba325a8505534419325102a6))

<br />

### 🏗️ Patch 2.0.13 (2019-07-29)

#### 💥 BREAKING CHANGES 💥

* GitSemverTags now takes options followed by callback.

#### ✨ Features

* **preset-loader:** allow use of full package names ([#481](https://github.com/Xunnamius/xchangelog/issues/481)) ([03cb95c](https://github.com/Xunnamius/xchangelog/commit/03cb95cb92aed56b2cca995f1c7ead9fbe6a08d7))
* **preset, conventionalcommits:** add handling of issue prefixes ([#498](https://github.com/Xunnamius/xchangelog/issues/498)) ([85c17bb](https://github.com/Xunnamius/xchangelog/commit/85c17bb9b08329b1f7f4822429f43836e7d8f7c4))

#### 🪄 Fixes

* **deps, cli:** bumps (minor + patch) lodash in conventional-changelog-cli ([#501](https://github.com/Xunnamius/xchangelog/issues/501)) ([50212e6](https://github.com/Xunnamius/xchangelog/commit/50212e623af3e9326d0234f40fa090b9150b8636)) <sup>see [#486](https://github.com/Xunnamius/xchangelog/issues/486)</sup>
* **deps:** update dependency lodash to v4.17.13 [security] ([#497](https://github.com/Xunnamius/xchangelog/issues/497)) ([8cb57f0](https://github.com/Xunnamius/xchangelog/commit/8cb57f07675f9d8093f475e3cc7e178c38ee00ad))
* **preset, conventionalcommits:** Ensure proper substitutions for the conventionalcommit preset by using commit context for values where possible. ([#463](https://github.com/Xunnamius/xchangelog/issues/463)) ([0b7ed0b](https://github.com/Xunnamius/xchangelog/commit/0b7ed0b73b6728173c8df744abdfa4466a7f0cc5))

#### 🧙🏿 Refactored

* Modify gitSemverTags to take options first ([#390](https://github.com/Xunnamius/xchangelog/issues/390)) ([dc8aeda](https://github.com/Xunnamius/xchangelog/commit/dc8aedae0519045bfcb2e649167f0f6bfb2f4a30))

<br />

### 🏗️ Patch 2.0.12 (2019-05-18)

#### 💥 BREAKING CHANGES 💥

* Moved BREAKING CHANGES to top of template.

#### ✨ Features

* BREAKING CHANGES are important and should be prioritized ([#464](https://github.com/Xunnamius/xchangelog/issues/464)) ([f8adba2](https://github.com/Xunnamius/xchangelog/commit/f8adba2f7dc84fd73adafb695371e0624b922792))

#### 🪄 Fixes

* **cli.js:** fix issue where standard conventional-changelog options are not passed into options object ([#380](https://github.com/Xunnamius/xchangelog/issues/380)) ([86ae571](https://github.com/Xunnamius/xchangelog/commit/86ae571027a23de4325499b1eab0ad9d26429ea3))
* **deps:** update dependency figures to v3 ([#453](https://github.com/Xunnamius/xchangelog/issues/453)) ([099b5b5](https://github.com/Xunnamius/xchangelog/commit/099b5b58138139ca6d2a9ade58f0c6282aef9ad4))
* **deps:** update dependency is-text-path to v2 ([#455](https://github.com/Xunnamius/xchangelog/issues/455)) ([0f40ec3](https://github.com/Xunnamius/xchangelog/commit/0f40ec3de10c3b66f6ebd81721e9fdd763706cb2))
* **deps:** update dependency semver to v6 ([#458](https://github.com/Xunnamius/xchangelog/issues/458)) ([efaa7bb](https://github.com/Xunnamius/xchangelog/commit/efaa7bb651fe1b6de047163fc9db8e5d69f0a6e9))
* Recommend a patch bump for features when preMajor is enabled ([#452](https://github.com/Xunnamius/xchangelog/issues/452)) ([3d0a520](https://github.com/Xunnamius/xchangelog/commit/3d0a52036a82ee11415ca777c005d84fa4169d2f))

<br />

### 🏗️ Patch 2.0.11 (2019-05-05)

#### 🪄 Fixes

* Don't require 'host' and 'repository' when deciding whether to render URLs ([#447](https://github.com/Xunnamius/xchangelog/issues/447)) ([83dff7a](https://github.com/Xunnamius/xchangelog/commit/83dff7aff782a2a24685f1a0b9c42ffb98ec6a3e))
* If ! and BREAKING CHANGE were used, notes would populate twice ([#446](https://github.com/Xunnamius/xchangelog/issues/446)) ([63d8cbe](https://github.com/Xunnamius/xchangelog/commit/63d8cbedd24d957c759865211dd2341fd4a3e1f2))

<br />

### 🏗️ Patch 2.0.18 (2019-05-02)

#### 🪄 Fixes

* Add add-bang-notes to files list ([7e4e4d2](https://github.com/Xunnamius/xchangelog/commit/7e4e4d2ef38537f55926aa1d91eb482d574609c1))

<br />

### 🏗️ Patch 2.0.17 (2019-05-02)

#### 💥 BREAKING CHANGES 💥

* If ! is in the commit header, it now indicates a BREAKING CHANGE, and the description is used as the body.

#### ✨ Features

* ! without BREAKING CHANGE should be treated as major ([#443](https://github.com/Xunnamius/xchangelog/issues/443)) ([cf22d70](https://github.com/Xunnamius/xchangelog/commit/cf22d70fbccaea0ab0130c011d7d203593f19fcb))

<br />

### 🏗️ Patch 2.0.16 (2019-04-26)

#### 💥 BREAKING CHANGES 💥

* A ! character at the end of type will now be omitted

#### ✨ Features

* Add support for ! ([#441](https://github.com/Xunnamius/xchangelog/issues/441)) ([0887940](https://github.com/Xunnamius/xchangelog/commit/0887940e9103dca111e43337332913b37e1ee02a))

#### 🪄 Fixes

* Don't use multiple H1 tags ([#440](https://github.com/Xunnamius/xchangelog/issues/440)) ([3d79263](https://github.com/Xunnamius/xchangelog/commit/3d792639815e4c4ae7758e0e84ba72a9cb535f37))

<br />

### 🏗️ Patch 2.0.15 (2019-04-24)

#### 🪄 Fixes

* Downgrade node 10.x dependency to 6.9.0 dependency ([#437](https://github.com/Xunnamius/xchangelog/issues/437)) ([ded5a30](https://github.com/Xunnamius/xchangelog/commit/ded5a304cd0b53100f94fff6b225c7178f5eb449))

<br />

### 🏗️ Patch 2.0.10 (2019-04-11)

<br />

### 🏗️ Patch 2.0.9 (2019-04-11)

<br />

### 🏗️ Patch 2.0.12 (2019-04-11)

#### 🪄 Fixes

* Preset load error message should handle objects ([fb4a8d1](https://github.com/Xunnamius/xchangelog/commit/fb4a8d1bb7e2142381ea6c11fed8615fd089f018))

<br />

### 🏗️ Patch 2.0.8 (2019-04-10)

#### ✨ Features

* **conventional-recommended-bump:** send options to whatBump ([#409](https://github.com/Xunnamius/xchangelog/issues/409)) ([508d6d6](https://github.com/Xunnamius/xchangelog/commit/508d6d6184c1f175b637538b6a554c92bce7d30c)) <sup>see [#L13-L21<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/Xunnamius//github.com/lerna/lerna/blob/a6733a2b864cf9d082d080bbd3bfedb04e59b0ab/core/conventional-commits/lib/recommend-version.js/issues/L13-L21)</sup>
* Conventionalcommits preset, preMajor config option ([#434](https://github.com/Xunnamius/xchangelog/issues/434)) ([dde12fe](https://github.com/Xunnamius/xchangelog/commit/dde12fe347d8c008c6ba3361e2f6357274537a77))
* Creating highly configurable preset, based on conventionalcommits.org ([#421](https://github.com/Xunnamius/xchangelog/issues/421)) ([f2fb240](https://github.com/Xunnamius/xchangelog/commit/f2fb240391e10c79756a590eb6aea1e235ccb0a2))

#### 🪄 Fixes

* Address discrepancies between cc preset and spec ([#429](https://github.com/Xunnamius/xchangelog/issues/429)) ([18f71d2](https://github.com/Xunnamius/xchangelog/commit/18f71d228c9676af13b736cb46614f23b66e796e))
* Adhere to config spec ([#432](https://github.com/Xunnamius/xchangelog/issues/432)) ([4eb1f55](https://github.com/Xunnamius/xchangelog/commit/4eb1f558d6b855e0caf66cc294407e6ab2527d75))
* **deps:** update dependency concat-stream to v2 ([#401](https://github.com/Xunnamius/xchangelog/issues/401)) ([4c09bfc](https://github.com/Xunnamius/xchangelog/commit/4c09bfc2e3aef75c6e92d4704c74a5c64e2c00fe))
* **deps:** update dependency through2 to v3 ([#392](https://github.com/Xunnamius/xchangelog/issues/392)) ([26fe91f](https://github.com/Xunnamius/xchangelog/commit/26fe91f5da4e001b9ab0908b7d3415bbad9bb7d9))
* **filter:** replace `is-subset` with `lodash.ismatch` ([#377](https://github.com/Xunnamius/xchangelog/issues/377)) ([fbcc92e](https://github.com/Xunnamius/xchangelog/commit/fbcc92ec0f480c089f9ee45cc824ab6e628a01f0))

#### ⚙️ Build system

* Conventional-changelog-conventionalcommits was missing from top level package.json ([ad70637](https://github.com/Xunnamius/xchangelog/commit/ad706379bec6ff3e763aa9cde0c25bec2f1c6c5e))

<br />

### 🏗️ Patch 2.0.7 (2019-02-14)

#### 🪄 Fixes

* **preset:angular:** scoped npm packages should not be seen as GitHub username ([#394](https://github.com/Xunnamius/xchangelog/issues/394)) ([e332ef0](https://github.com/Xunnamius/xchangelog/commit/e332ef0d6dea8dd918ea274e5dae2a3f2b96a313))

<br />

### 🏗️ Patch 4.0.4 (2018-11-01)

#### 🪄 Fixes

* Fix broken release of conventional-recommended-bump ([d9267e8](https://github.com/Xunnamius/xchangelog/commit/d9267e86705bac4d7672497a9c9abe62212cb56d))

<br />

### 🏗️ Patch 2.0.6 (2018-11-01)

#### 🪄 Fixes

* Bad release of conventional-changelog-writer ([b5da9af](https://github.com/Xunnamius/xchangelog/commit/b5da9afe056ad4597c2503e28060cc6c2f28b19a))

<br />

### 🏗️ Patch 2.0.5 (2018-11-01)

#### 🪄 Fixes

* Bad release of git-semver-tags ([8827ae4](https://github.com/Xunnamius/xchangelog/commit/8827ae418adf8bd400ce879548c732812e5934ea))

<br />

### 🏗️ Patch 2.0.4 (2018-11-01)

#### 🪄 Fixes

* Pin git-raw-commits until I have publication rights ([e41777c](https://github.com/Xunnamius/xchangelog/commit/e41777c4ed56f911cef4305642899910b265e987))

<br />

### 🏗️ Patch 2.0.3 (2018-11-01)

<br />

### 🏗️ Patch 2.0.5 (2018-11-01)

<br />

### 🏗️ Patch 2.0.2 (2018-11-01)

#### 💥 BREAKING CHANGES 💥

* Forcing a breaking semver change based on https://github.com/conventional-changelog/conventional-changelog/pull/385

#### 🪄 Fixes

* Conventional commits not working ([28ea3af](https://github.com/Xunnamius/xchangelog/commit/28ea3afe6c46628281c3d317503c87fb9f1f7a5c))
* **preset:** ESLint recommended-bump is always "patch" ([#371](https://github.com/Xunnamius/xchangelog/issues/371)) ([35e279d](https://github.com/Xunnamius/xchangelog/commit/35e279d40603b0969c6d622514f5c0984c5bf309)) <sup>see [#L32-L35<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/Xunnamius//github.com/conventional-changelog/conventional-changelog/blob/ce1fd981f88ce201e996dfa833e4682de3aafcdd/packages/conventional-changelog-eslint/conventional-recommended-bump.js/issues/L32-L35)</sup>
* Upgrade to Lerna 3, fix Node.js v11 error ([#385](https://github.com/Xunnamius/xchangelog/issues/385)) ([cdef282](https://github.com/Xunnamius/xchangelog/commit/cdef2828e34132020845cc6db23077c2c9c8dc1c))

#### 🗄️ Miscellaneous

* Force breaking change ([f6d506d](https://github.com/Xunnamius/xchangelog/commit/f6d506de038a6a86a1915f85e7cef79a277af2b6))

<br />

### 🏗️ Patch 3.0.3 (2018-08-21)

<br />

### 🏗️ Patch 3.0.2 (2018-08-21)

#### 🪄 Fixes

* **cli:** pass `--tag-prefix` option to core ([#345](https://github.com/Xunnamius/xchangelog/issues/345)) ([2151fce](https://github.com/Xunnamius/xchangelog/commit/2151fcef808f32ec0536ae87edad3c000e1a5af5))

<br />

### 🏗️ Patch 2.0.1 (2018-08-21)

#### ✨ Features

* Ability to reset changelog from scratch ([#350](https://github.com/Xunnamius/xchangelog/issues/350)) ([0eea0af](https://github.com/Xunnamius/xchangelog/commit/0eea0af058b551dea8ed3dd2956777ee0676f9c2))

<br />

### 🏗️ Patch 2.0.2 (2018-08-21)

#### 🪄 Fixes

* Add missing context flag ([#361](https://github.com/Xunnamius/xchangelog/issues/361)) ([0cf43f4](https://github.com/Xunnamius/xchangelog/commit/0cf43f448ee191b91df23e9e84bf5ed951dcf2b5)) <sup>see [#355](https://github.com/Xunnamius/xchangelog/issues/355)</sup>

<br />

### 🏗️ Patch 2.0.1 (2018-06-06)

#### 💥 BREAKING CHANGES 💥

* Re-use parser options object between components of a preset. For some presets this may change the behavior of `conventional-recommended-bump` as the parser options object for the `conventional-recommended-bump` options within a preset were different than the parser options object for the `conventional-changelog` options within a preset.

If you are not using `conventional-recommended-bump`, then this is **not** a breaking change for you.

#### ✨ Features

* Re-use parser options within each preset ([#335](https://github.com/Xunnamius/xchangelog/issues/335)) ([d3eaacf](https://github.com/Xunnamius/xchangelog/commit/d3eaacfe642eb7e076e4879a3202cc60ca626b59)) <sup>see [#241](https://github.com/Xunnamius/xchangelog/issues/241)</sup>

<br />

### 🏗️ Patch 2.0.1 (2018-06-02)

#### 🪄 Fixes

* Fix plurality of "are" vs. "is" ([#331](https://github.com/Xunnamius/xchangelog/issues/331)) ([027e778](https://github.com/Xunnamius/xchangelog/commit/027e77812d11c595bf3593b78669b265f174e5f4))

<br />

## 3.0.0 (2018-03-22)

### 💥 BREAKING CHANGES 💥

* The Angular conventions specifically say that breaking changes must   start with "BREAKING CHANGE", not the plural form. Therefore the   previous plural form "CHANGES" has been corrected to singular "CHANGE".

  Former "chore" type has been replaced by a type "build" for commits on   the build system and "ci" for commits regarding CI
* [Angular Package] Adapt to new Angular Commit Conventions (#296) ([03f0210](https://github.com/Xunnamius/xchangelog/commit/03f0210e42dff58689ddf182694a8a6ca26e526b)) <sup>see [#296](https://github.com/Xunnamius/xchangelog/issues/296)</sup>

<br />

### 🏗️ Patch 1.0.19 (2018-04-16)

#### 🪄 Fixes

* `tagPrefix` was not passed properly in conventional-changelog-core ([#300](https://github.com/Xunnamius/xchangelog/issues/300)) ([be48f70](https://github.com/Xunnamius/xchangelog/commit/be48f700fc0907a9535f0cd45172525d5746697d))

<br />

### 🏗️ Patch 1.0.18 (2018-03-28)

#### 🪄 Fixes

* Revert previous change ([2f4530f](https://github.com/Xunnamius/xchangelog/commit/2f4530f06cb8f76e83c5f9c7af8126952b4dc8f3))

<br />

### 🏗️ Patch 1.0.17 (2018-03-27)

<br />

### 🏗️ Patch 1.0.16 (2018-03-27)

<br />

### 🏗️ Patch 1.0.15 (2018-03-27)

<br />

### 🏗️ Patch 3.0.2 (2018-03-22)

<br />

### 🏗️ Patch 1.0.14 (2018-03-22)

<br />

## 2.0.0 (2018-02-12)

### 💥 BREAKING CHANGES 💥

* CHANGES:

First:

Will only accept the name associated with a `conventional-changelog-*` preset package for the purpose of loading preset configuration.

Built-in presets previously available in `conventional-recommended-bump` are no longer available.

The preset package name can be any value supported by [`conventional-changelog-preset-loader`](https://www.npmjs.com/package/conventional-changelog-preset-loader).

### ✨ Features

* Support `conventional-changelog-*` presets in `conventional-recommended-bump` ([#270](https://github.com/Xunnamius/xchangelog/issues/270)) ([39240ad](https://github.com/Xunnamius/xchangelog/commit/39240add234e66fde3c19f0799d32fe7581bef82)) <sup>see [#241](https://github.com/Xunnamius/xchangelog/issues/241)</sup>

<br />

### 🏗️ Patch 1.1.18 (2018-03-03)

#### 🪄 Fixes

* **preset:** recommended-bump ESLint preset ([#295](https://github.com/Xunnamius/xchangelog/issues/295)) ([acf9c19](https://github.com/Xunnamius/xchangelog/commit/acf9c193d6930d0ed2c89fc1b0990a784633dfb3)) <sup>see [#270](https://github.com/Xunnamius/xchangelog/issues/270), [#241](https://github.com/Xunnamius/xchangelog/issues/241)</sup>

<br />

### 🏗️ Patch 1.0.13 (2018-02-24)

<br />

### 🏗️ Patch 1.0.12 (2018-02-20)

<br />

### 🏗️ Patch 1.1.15 (2018-02-13)

<br />

### 🏗️ Patch 1.0.11 (2018-02-13)

<br />

### 🏗️ Patch 1.0.10 (2018-02-13)

<br />

### 🏗️ Patch 1.1.12 (2018-02-12)

#### 🪄 Fixes

* **conventional-changelog:** support scoped presets ([0f08267](https://github.com/Xunnamius/xchangelog/commit/0f08267a09f3406d5c51d9a5e207535db6b72736))

<br />

### 🏗️ Patch 2.0.1 (2018-02-12)

#### 🪄 Fixes

* **conventional-recommended-bump:** include missing file in publishing ([1481c05](https://github.com/Xunnamius/xchangelog/commit/1481c053873606736c161c4dcdd66e0b811ef697))

<br />

## 1.1.0 (2018-02-08)

### ✨ Features

* **preset-loader:** new package for loading preset packages ([6f5cb10](https://github.com/Xunnamius/xchangelog/commit/6f5cb102834cf0d726b962ea2ccace8c96f864d7))

<br />

### 🏗️ Patch 1.1.2 (2018-02-12)

#### 🪄 Fixes

* **preset-loader:** don't namespace exported function ([#278](https://github.com/Xunnamius/xchangelog/issues/278)) ([89880cb](https://github.com/Xunnamius/xchangelog/commit/89880cb3a7aa15c8835e9198aad2b6a4bafc50a3))

<br />

### 🏗️ Patch 1.1.1 (2018-02-09)

<br />

## 1.0.0 (2017-03-11)

### ✨ Features

* Pulls in conventional-recommended-bump adding support for lerna ([#176](https://github.com/Xunnamius/xchangelog/issues/176)) ([840fe68](https://github.com/Xunnamius/xchangelog/commit/840fe6899c4c11de962282862f23369042724082))
* Update CLI tools to support lerna tags ([#175](https://github.com/Xunnamius/xchangelog/issues/175)) ([1fc5612](https://github.com/Xunnamius/xchangelog/commit/1fc561217d79978b9d0248612b75e87c4b4a2d0b))

<br />

### 🏗️ Patch 1.0.9 (2018-02-05)

#### 🪄 Fixes

* Truncate after scissors line ([#267](https://github.com/Xunnamius/xchangelog/issues/267)) ([e09df10](https://github.com/Xunnamius/xchangelog/commit/e09df10ec4736e53ff3343215e973fba4452fc4f))

<br />

### 🏗️ Patch 1.0.8 (2018-01-29)

#### 💥 BREAKING CHANGES 💥

* Logic for generating release headings has been changed to make all heading levels the same (`##`/`h2`) for better compatibility with screen readers and parsers, and to conform to HTML semantics. Patch release titles are now wrapped in a `<small>` tag to maintain the visual hierarchy of the previous style.

Fixes https://github.com/conventional-changelog/conventional-changelog/issues/214

* Trailing whitespaces at the beginning of commit messages will not be saved anymore

#### ✨ Features

* **eslint:** improve regex headerPattern ([#268](https://github.com/Xunnamius/xchangelog/issues/268)) ([ccc1365](https://github.com/Xunnamius/xchangelog/commit/ccc136505712fdf3e13e4c52a8d23f568ad8b3f0))

#### 🪄 Fixes

* **writer:** normalize release headings ([#237](https://github.com/Xunnamius/xchangelog/issues/237)) ([9e87dc3](https://github.com/Xunnamius/xchangelog/commit/9e87dc32b4ffc5202661e674f20e5901feb1ac6f)) <sup>see [#issuecomment-326681934<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/Xunnamius//github.com/conventional-changelog/conventional-changelog/issues/214/issues/issuecomment-326681934)</sup>

<br />

### 🏗️ Patch 1.0.7 (2017-12-18)

#### ✨ Features

* **preset:** add recommended-bump opts into presets ([60815b5](https://github.com/Xunnamius/xchangelog/commit/60815b50bc68b50a8430c21ec0499273a4a1c402)) <sup>see [#241](https://github.com/Xunnamius/xchangelog/issues/241)</sup>

<br />

### 🏗️ Patch 1.0.6 (2017-12-08)

#### ✨ Features

* Allow to specify a tagPrefix in conventional-recommended-bump ([f60f86f](https://github.com/Xunnamius/xchangelog/commit/f60f86fa388edb3b0731b2fb0cb5ddabafd36911))
* Make comment stripping optional ([db5b711](https://github.com/Xunnamius/xchangelog/commit/db5b7111022fadbd44717fa5a74580c542f80fcb)) <sup>see [#251](https://github.com/Xunnamius/xchangelog/issues/251)</sup>
* **recommended-bump:** add `eslint` preset ([#256](https://github.com/Xunnamius/xchangelog/issues/256)) ([64abf07](https://github.com/Xunnamius/xchangelog/commit/64abf0797bdbbb7b0153c2d3e5dcb5f28def7ce0))

#### 🪄 Fixes

* Always parse references ([e84a9ae](https://github.com/Xunnamius/xchangelog/commit/e84a9ae2cca5d7713653bff7edd4d7dc1a86c028)) <sup>see [#248](https://github.com/Xunnamius/xchangelog/issues/248)</sup>
* **cli:** set options.config to loaded custom config for processing ([3d8b243](https://github.com/Xunnamius/xchangelog/commit/3d8b2438e51f0aa7bf8d3c5eb975e3aa643b50cf)) <sup>see [#227](https://github.com/Xunnamius/xchangelog/issues/227)</sup>
* **filter:** only remove commits that reverted commits in the scope ([#226](https://github.com/Xunnamius/xchangelog/issues/226)) ([461dae6](https://github.com/Xunnamius/xchangelog/commit/461dae6fa3f8566cca6049bfb7237932d95773b2))

<br />

### 🏗️ Patch 1.0.5 (2017-11-13)

#### ✨ Features

* **git-raw-commits:** add execOpts.cwd ([2631213](https://github.com/Xunnamius/xchangelog/commit/263121376323babeb5bd0e8e48b852921ff81d81))

#### 🪄 Fixes

* **conventional-commits-parser:** ignore comments  ([#231](https://github.com/Xunnamius/xchangelog/issues/231)) ([9db53e3](https://github.com/Xunnamius/xchangelog/commit/9db53e351651a3e77dd7928cdcaafaeec3affcf3)) <sup>see [#224](https://github.com/Xunnamius/xchangelog/issues/224)</sup>

<br />

### 🏗️ Patch 1.0.4 (2017-10-01)

#### 🪄 Fixes

* **lerna tags:** support multi-digit version tags ([#223](https://github.com/Xunnamius/xchangelog/issues/223)) ([67012fb](https://github.com/Xunnamius/xchangelog/commit/67012fb655a7d968d82185685971ca246751ab0b))

<br />

### 🏗️ Patch 1.0.3 (2017-09-01)

#### ✨ Features

* **angular:** use the context for getting the repository and host urls ([#217](https://github.com/Xunnamius/xchangelog/issues/217)) ([c146f2a](https://github.com/Xunnamius/xchangelog/commit/c146f2a67ac8127423fe24cc0cbe304cfa637fe3))

#### 🪄 Fixes

* **angular:** smarter username detection ([#219](https://github.com/Xunnamius/xchangelog/issues/219)) ([f1b4847](https://github.com/Xunnamius/xchangelog/commit/f1b48476dbf3623a7c139777c388de7a898cc916)) <sup>see [#218](https://github.com/Xunnamius/xchangelog/issues/218)</sup>

<br />

### 🏗️ Patch 1.0.2 (2017-07-17)

#### ✨ Features

* **angular:** find package.json from cwd upwards ([#206](https://github.com/Xunnamius/xchangelog/issues/206)) ([867c142](https://github.com/Xunnamius/xchangelog/commit/867c142795d34f15673eee3b3e398d8b28a32041))
* **context:** default currentTag may not prefix with v ([#179](https://github.com/Xunnamius/xchangelog/issues/179)) ([431598a](https://github.com/Xunnamius/xchangelog/commit/431598a3b12a404aee63f8ab3e51263121cde485))

<br />

### 🏗️ Patch 1.0.1 (2017-03-11)

#### ✨ Features

* Context.currentTag should take into account lerna tag format ([#178](https://github.com/Xunnamius/xchangelog/issues/178)) ([f0e5875](https://github.com/Xunnamius/xchangelog/commit/f0e58757cc6ba0f80df9b9459c68fe9ce2d38540))

<br />

## 1.5.0 (2017-03-09)

### 💥 BREAKING CHANGES 💥

* Use conventional-changelog^0.5.0

* Using conventional-changelog v1.

### ✨ Features

* Add support for listing lerna style tags (project@version) ([#161](https://github.com/Xunnamius/xchangelog/issues/161)) ([b245f9d](https://github.com/Xunnamius/xchangelog/commit/b245f9d46a064a6daa2b46a48eab354c512f46c0))
* Allow raw commits to be filtered by path ([#172](https://github.com/Xunnamius/xchangelog/issues/172)) ([ec0a25d](https://github.com/Xunnamius/xchangelog/commit/ec0a25d0664ae74da1201c011814f62bd8e1b031))
* **debug:** use conventional-changelog 1.1.0 and debug when verbose ([bf0f1ad](https://github.com/Xunnamius/xchangelog/commit/bf0f1ad8f519ad665dccda258a503e1e92910cbc))
* **deps:** bump ([4e49b36](https://github.com/Xunnamius/xchangelog/commit/4e49b360d4c0ccb9dc65fabfcb87e1dd5d362a23))
* **deps:** bump conventional-changelog to ^0.2.1 and use new api ([0130835](https://github.com/Xunnamius/xchangelog/commit/0130835081c573c099df9959c187336f27b4444c))
* **deps:** bump conventional-changelog to ^0.3.0 ([e8e40f3](https://github.com/Xunnamius/xchangelog/commit/e8e40f39a9ccdaebfef7b8eb893fa3035e6f80d6))
* Extracting code from https://github.com/ajoslin/conventional-changelog ([c9c116a](https://github.com/Xunnamius/xchangelog/commit/c9c116af35a0bd45738b60147533bce5b44da425))
* Migrate repo to lerna mono-repo ([793e823](https://github.com/Xunnamius/xchangelog/commit/793e8235c961dd509cc63dccadaeb7cb956da6f9))
* **verbose:** only log if verbose ([0d2921d](https://github.com/Xunnamius/xchangelog/commit/0d2921d10471a109296fc9df5a7e1becba077fcf))

### 🪄 Fixes

* **error:** error should be emitted ([d766685](https://github.com/Xunnamius/xchangelog/commit/d7666850b6729a45f4eb1f15e3326b87e86fe66c))
* **warn:** is `gutil.log` ([4578d80](https://github.com/Xunnamius/xchangelog/commit/4578d8087233652cdad3ee64a287cee4e6bfda15))

### 🗄️ Miscellaneous

* **deps:** bump ([1b8c4dc](https://github.com/Xunnamius/xchangelog/commit/1b8c4dc24249516baf977514d0d5e73515e1137f))

<br />

### 🏗️ Patch 0.0.2 (2017-03-10)

#### ✨ Features

* Add lerna repository support ([#173](https://github.com/Xunnamius/xchangelog/issues/173)) ([70df504](https://github.com/Xunnamius/xchangelog/commit/70df504c51f9cd926c2e1bf6a554c047eba786af))

<br />

## [1.1.0](https://github.com/Xunnamius/xchangelog/compare/v1.0.2...v1.1.0) (2016-02-13)

<br />

### 🏗️ Patch 1.1.2 (2017-03-05)

#### 💥 BREAKING CHANGES 💥

* `--git-raw-commits-opts`, `--parser-opts` and `--writer-opts` are removed as they are considered uncommon, use `--config` is easier as people can write all options within one file and they can learn from existing presets.

Fixes https://github.com/ajoslin/conventional-changelog/issues/100

* `closes` now becomes `references` and it is loosely based the links above.

* `context.host` cannot change the default of `context.linkReferences` because if the host is unknown, `context.host` is `undefined` and all links will just use `context.repository`.

* `headerParts` does not limit to `type`, `scope` and `subject`. They can now be defined in `options.headerCorrespondence` and the order is the order of capturing group in `options.headerPattern`. If part is missing in `options.headerCorrespondence` it is `undefined`. If part is not captured but is not missing in `options.headerCorrespondence` it is `null`.

* `includeDetails` will only include `log` and `keyCommit`.

* `maxSubjectLength` is not available any more.

* `notes` in `noteGroups` is not an array of simple string any more but object. You must use `note.text` to access the equivalent of previous `note`.

* `options.hashLength`, `options.maxSubjectLength` and `options.map` are deprecated in favour of `options.transform`.

* `options.noteGroups` is no longer available. Filter the notes from upstream or in `options.transform` instead.

* `options.preset` is removed in favour of `options.config`

* `options.referenceKeywords` is now `options.referenceActions`

* `options.replacements` is now `options.map` and it can also take functions

* `overwrite` is now called `same-file`.

Fixes https://github.com/ajoslin/conventional-changelog/issues/100

* `pull request` should be `merge`. Also make the parsed result to be consistent with other parts.

* `version` is not a required field and it is moved to the `context` object. If version is found in the last commit, it will be overwritten.

* Body and footer will be null if they are not found. type and subject are nullable too.

* Callback is removed. I think only stream interface should exists. From does not have any default value.

* CHANGES:

The upstream must use the new api of `references` and `notes`.

`closes` now becomes `references` The `notes` object is no longer a key-value object but an array of note object, such as ```js {   title: 'BREAKING AMEND',   text: 'some breaking change' } ```

* CommitGroupsCompareFn -> commitGroupsSort, commitsCompareFn -> commitsSort, noteGroupsCompareFn -> noteGroupsSort and notesCompareFn -> notesSort

* Default compare functions no longer sort by lexicographical order. They use `localeCompare` instead

* Hash is no longer supported. This parser should just parse raw commit messages. Also text fields are appended with a newline "\n".

* If `context.version` is the same as the version of the last release, by default the unreleased chagnelog will not output.

* If `partials` is not empty, it should not ignore header, commit and footer partials.

* It no longer skips the chunk if commit cannot be parsed. An empty string is passed to down stream

* It returns a nomatch regex if it's keywords are missing.

* Previously version number has to be passed as a flag. As a version number is compulsory, it does not make sense for a flag to be compulsory. So if a version number is passed as an input it is still valid.

* The regex for matching notes are loosen. The semicolon and space are optional. The `notes` object is no longer a key-value object but an array of note object, such as ```js {   title: 'BREAKING AMEND',   text: 'some breaking change' } ``` The detection of notes, closes, continueNote and isBody are mutually exclusive.

* This module is imported from https://github.com/ajoslin/conventional-changelog, and is originally written by [@vojtajina](https://github.com/vojtajina), [@btford](https://github.com/btford) and [@ajoslin](https://github.com/ajoslin).

* This module is imported from https://github.com/ajoslin/conventional-changelog, and is originally written by [@vojtajina](https://github.com/vojtajina), [@btford](https://github.com/btford) and [@ajoslin](https://github.com/ajoslin).

* Variable name related to `breaks` changes to `notes`, because "Important Notes" a more generic term. There is no functional changes.

* When there is no commits left for the last block of logs it will still try to generate one. (Assume commits might be rebased or lost but still need a new version).

#### ✨ Features

* Add --output-unreleased ([d9cd01a](https://github.com/Xunnamius/xchangelog/commit/d9cd01a9f17792ef22922a010feeb1d4293f8733))
* **cli:** able to have two files, separator works for interactive ([db1e3b5](https://github.com/Xunnamius/xchangelog/commit/db1e3b54ab0574ddad48f34fdafcc3b78e9e4864))
* **cli:** add aliases, more help details and tests ([eb654a2](https://github.com/Xunnamius/xchangelog/commit/eb654a2aab20c0a6d7f2b51a6ac6515e7a2cb562))
* **cli:** add missing options ([8ac1cf7](https://github.com/Xunnamius/xchangelog/commit/8ac1cf7e7a7a9f6e2eafb19248741c5153c3fec1))
* **cli:** add warn function for interactive shell ([84fe31f](https://github.com/Xunnamius/xchangelog/commit/84fe31f561239beb85a7447796fb34d67bf1aa24))
* **cli:** version can be passed directly as an input ([cadf7af](https://github.com/Xunnamius/xchangelog/commit/cadf7afed75f37799c9be5db5fed552af9edd210))
* **commit.hbs:** scope can be missing ([82e0ffa](https://github.com/Xunnamius/xchangelog/commit/82e0ffa859356909e37cb11a08fa51125c2f6005))
* **commit.hbs:** use `header` if `subject` is missing ([5e475a0](https://github.com/Xunnamius/xchangelog/commit/5e475a097f01d13be116f2dea2b63a725afd2950))
* **commit:** `raw` object is attached to `commit` ([2ea9f04](https://github.com/Xunnamius/xchangelog/commit/2ea9f0497c044ab1f196c99d51846c1b7a98331e))
* **comparefunc:** these values can be string or array ([464988c](https://github.com/Xunnamius/xchangelog/commit/464988c9d9ec6ba9d028f396e5e93702f7a50639))
* **comparefunc:** use module "compare-func" ([520014e](https://github.com/Xunnamius/xchangelog/commit/520014e2a1d6b73a5fc356e5452f2854dc940991))
* **config:** change preset to config ([c470628](https://github.com/Xunnamius/xchangelog/commit/c470628d31048752c0a3ca4a36a7267f5c327bdf))
* **config:** should work with preset ([7b6a1e3](https://github.com/Xunnamius/xchangelog/commit/7b6a1e3b4c8b006f6c506cfec3c7eb17b8cdc8b6)) <sup>see [#4](https://github.com/Xunnamius/xchangelog/issues/4)</sup>
* **context:** expose `finalizeContext` to modify context at last ([d5545c0](https://github.com/Xunnamius/xchangelog/commit/d5545c0d9fc7468a26d0ed67c788ed4faae1b80d))
* **context:** fallback to repoUrl ([dc9c626](https://github.com/Xunnamius/xchangelog/commit/dc9c626a0fa977b71c75faf147e3dc6c901ca101))
* **context:** fallback to repoUrl ([20a5ccc](https://github.com/Xunnamius/xchangelog/commit/20a5ccc5a33040dd68c6fd308188619f578c7dd7)) <sup>see [#7](https://github.com/Xunnamius/xchangelog/issues/7)</sup>
* **context:** linkReferences has nothing to do with context.host ([1656df8](https://github.com/Xunnamius/xchangelog/commit/1656df8e488356ebd4bf4aaa6c88d01dedcb74a7))
* **correspondence:** add `headerCorrespondence` and improve commit parts ([aca9e95](https://github.com/Xunnamius/xchangelog/commit/aca9e9597a4ea2da172840f629684aa66f67786a)) <sup>see [#6](https://github.com/Xunnamius/xchangelog/issues/6)</sup>
* **debug:** add options.debug function ([a315a4b](https://github.com/Xunnamius/xchangelog/commit/a315a4b471dba4a46ac12671fdcb12e029dfbd88))
* **debug:** convient function for debugging ([c041e35](https://github.com/Xunnamius/xchangelog/commit/c041e35ddd4b1249e9055a63399fc506bfac75a9))
* **debug:** make options.debug as default writeOpts.debug ([71dcd72](https://github.com/Xunnamius/xchangelog/commit/71dcd72ad893bc9f2654d89813286bbc8946c4ba))
* **debug:** options.debug can print git-log cmd ([cae0ca0](https://github.com/Xunnamius/xchangelog/commit/cae0ca0a4bd741197857c5c051f33badba3b27e3))
* **debug:** use conventional-changelog 1.1.0 and debug when verbose ([b72c74f](https://github.com/Xunnamius/xchangelog/commit/b72c74f7a10a92b3af6490dcef1bf43192052fc6))
* Default to overwriting and/or generating CHANGELOG.md. ([8678b62](https://github.com/Xunnamius/xchangelog/commit/8678b62271a1396518d7124c379897e4d7260c78))
* **defaults:** merge default options and make it less angular ([8e29f96](https://github.com/Xunnamius/xchangelog/commit/8e29f9603f892d126ee5aea17820f7a73178e393)) <sup>see [#3](https://github.com/Xunnamius/xchangelog/issues/3), [#4](https://github.com/Xunnamius/xchangelog/issues/4)</sup>
* **err:** print the cmd when error ([7469ce1](https://github.com/Xunnamius/xchangelog/commit/7469ce16b98aa730ad7963dc16129d409a647d12))
* **exports:** export the promise ([0432646](https://github.com/Xunnamius/xchangelog/commit/0432646bb0376812607744bf225293601f992f53))
* **fieldpattern:** should support string format ([b6b6b52](https://github.com/Xunnamius/xchangelog/commit/b6b6b52f50bd5b06c467a7b1c5fa4a742a10009c))
* **flags:** add config and remove uncommon ones ([c2029e6](https://github.com/Xunnamius/xchangelog/commit/c2029e612dc9d87a038768b3bf2f38d287e884a0))
* **flush:** add `options.doFlush` to make it possible not to flush ([2fdf142](https://github.com/Xunnamius/xchangelog/commit/2fdf142475a60c804edfcb703ccd2425dfcfa149))
* **generateon:** also pass commits, context and options to the function ([a59c73c](https://github.com/Xunnamius/xchangelog/commit/a59c73c709e6d7c75ae7a0157bfe5360014817b2)) <sup>see [#135<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/ajoslin/conventional-changelog/issues/135)</sup>
* **generateon:** by default if `commit.version` is a valid semver ([19ad3b1](https://github.com/Xunnamius/xchangelog/commit/19ad3b163d3708abb9cc7d7d43c8a3ab88e1e23c))
* **generateon:** if the commit is ignored fall back on the original ([be5723a](https://github.com/Xunnamius/xchangelog/commit/be5723a51ed12f54485d96b35f651a45ec85a58a))
* **generateon:** log doesn't have to be generated once ([ff88a62](https://github.com/Xunnamius/xchangelog/commit/ff88a626107332dcedb47025af97b4722b19571d))
* **generateon:** other type to disable ([9c50b90](https://github.com/Xunnamius/xchangelog/commit/9c50b90c96ea99eba3c9b45ab46016f064bdc788))
* **generate:** originalCommits as last argument ([797fa8c](https://github.com/Xunnamius/xchangelog/commit/797fa8c22d801450626ad9730cbec83906360c9c))
* **github:** adds github-specific replacements for issues and users ([05dbb08](https://github.com/Xunnamius/xchangelog/commit/05dbb08b7d57883746f328927f7d9a24cfdc7279)) <sup>see [#12](https://github.com/Xunnamius/xchangelog/issues/12)</sup>
* **hash:** drop support ([1ccc751](https://github.com/Xunnamius/xchangelog/commit/1ccc7510980632fb8bd3fa2c79fd439da63ff738))
* **headerparts:** headerParts can be anything ([31e1c11](https://github.com/Xunnamius/xchangelog/commit/31e1c1168e46086c2e051ba082f014a1b1b54cd3)) <sup>see [#10](https://github.com/Xunnamius/xchangelog/issues/10)</sup>
* **help:** improve the flag names and add more descriptions ([4355522](https://github.com/Xunnamius/xchangelog/commit/43555227dc57d40dd51dc0214939464e40634e0b))
* Improvements and bug fixes ([1cde104](https://github.com/Xunnamius/xchangelog/commit/1cde104b4fbdddf3ac471a862d28d779005a5706)) <sup>see [#5](https://github.com/Xunnamius/xchangelog/issues/5)</sup>
* **includedetails:** return an object that contains more details ([81e79f7](https://github.com/Xunnamius/xchangelog/commit/81e79f795fe730a5f7fe29fac91363ab8f143189))
* **infile:** warn if infile does not exist ([1a196bb](https://github.com/Xunnamius/xchangelog/commit/1a196bbbe0fe636038dbec0680531769b16de8cd))
* Init ([a331bd0](https://github.com/Xunnamius/xchangelog/commit/a331bd02ae5145024bb42f894367145d22b49e3d)) <sup>see [#84<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/ajoslin/conventional-changelog/issues/84)</sup>
* **init:** extract cli from conventional-changelog ([9cb3a46](https://github.com/Xunnamius/xchangelog/commit/9cb3a460366502c8223e36fe9b2beda19e7942d7))
* **init:** extract core from conventional-changelog ([cb58157](https://github.com/Xunnamius/xchangelog/commit/cb58157558646b374652c274fbd20a87bfce01c1))
* **init:** extracting code from https://github.com/ajoslin/conventional-changelog ([c647bdf](https://github.com/Xunnamius/xchangelog/commit/c647bdfb0d5f331e349ad4a58585d67f69f626e0))
* **issueprefixes:** init and referenceKeywords -> referenceActions ([86bf798](https://github.com/Xunnamius/xchangelog/commit/86bf798cea0f78e0c22a0ebe5a094a87cee6f7dd)) <sup>see [#11](https://github.com/Xunnamius/xchangelog/issues/11)</sup>
* **map:** change `options.replacements` to `options.map` ([d0a04ef](https://github.com/Xunnamius/xchangelog/commit/d0a04efa8319a906ca86a6d358c51e94aa51b675))
* **maxbuffer:** expose this option incase of long git history ([77f8e21](https://github.com/Xunnamius/xchangelog/commit/77f8e218484896c3168c6fa0ca5a1a8e5fa50105)) <sup>see [#5](https://github.com/Xunnamius/xchangelog/issues/5)</sup>
* **maxsubjectlength:** added ([83c98b9](https://github.com/Xunnamius/xchangelog/commit/83c98b9fbe6e228e9d94071de7a5514b4f7a6e1e))
* **maxsubjectlength:** removed ([3448582](https://github.com/Xunnamius/xchangelog/commit/3448582be14116489769569341ddab60e5f8b624))
* **mentions:** [@someone](https://github.com/someone) in commit ([d60fe76](https://github.com/Xunnamius/xchangelog/commit/d60fe766fd6caca026b22f5d8af40337315cfa34)) <sup>see [#24](https://github.com/Xunnamius/xchangelog/issues/24)</sup>
* **merge:** ignore merge commits ([15c8dc3](https://github.com/Xunnamius/xchangelog/commit/15c8dc3912c2f0336ceb63c04117c164ca860501))
* **newline:** fields does not contain leading or trailing newlines ([6db453b](https://github.com/Xunnamius/xchangelog/commit/6db453bb768d6d98a48fca39414ff54a7ea096f6)) <sup>see [#14](https://github.com/Xunnamius/xchangelog/issues/14)</sup>
* **notegroups:** remove and add note title transform ([abedbfd](https://github.com/Xunnamius/xchangelog/commit/abedbfd3c1c747ef3ed684dec878a36b2d784de4))
* **notekeywords:** make BREAKING CHANGE more forgiving ([b74e061](https://github.com/Xunnamius/xchangelog/commit/b74e061a33730712b3fdac88997ddef418073d0f))
* **note:** noteKeywords is case insensitive ([f779a29](https://github.com/Xunnamius/xchangelog/commit/f779a296e61ba9290c0361c35538dff505f8e92a)) <sup>see [#21](https://github.com/Xunnamius/xchangelog/issues/21)</sup>
* **notes:** attach the commit to the note ([af89d4a](https://github.com/Xunnamius/xchangelog/commit/af89d4a6fe0f39906ddc7cbfb6bc48c1049fbd07)) <sup>see [#12](https://github.com/Xunnamius/xchangelog/issues/12)</sup>
* **options:** all options can be a string ([0fa17b4](https://github.com/Xunnamius/xchangelog/commit/0fa17b40f801037e204961c64179dd7eca3719e1))
* **otherfields:** other fields are possible to be included ([9e06278](https://github.com/Xunnamius/xchangelog/commit/9e06278174004c708f74038dafd396a47e31dba2))
* **owner:** add owner context ([8d7b5d9](https://github.com/Xunnamius/xchangelog/commit/8d7b5d9dac994373835e34efe7a3517b63faa21c)) <sup>see [#7](https://github.com/Xunnamius/xchangelog/issues/7)</sup>
* **owner:** yield owner field ([d8d0334](https://github.com/Xunnamius/xchangelog/commit/d8d0334801d3df78b83ffc6865408995f35b3a78)) <sup>see [#1<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/stevemao/conventional-commits-parser/issues/1), [#1<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/Xunnamius/conventional-commits-parser/issues/1), [#12](https://github.com/Xunnamius/xchangelog/issues/12)</sup>
* **parser:** notes can have more than one paragraph ([733bfa9](https://github.com/Xunnamius/xchangelog/commit/733bfa95628e6fd5810836b227a181492e566e52)) <sup>see [#3](https://github.com/Xunnamius/xchangelog/issues/3)</sup>
* **pkg:** fallback to git remote origin url ([ff22fe6](https://github.com/Xunnamius/xchangelog/commit/ff22fe652bac6cc2fd4889669f2159e2df59eae9))
* **pullrequest:** Allow to skip and parse pull request header ([a2e929f](https://github.com/Xunnamius/xchangelog/commit/a2e929fed07836f7ac3234b61c2490f318db60b6)) <sup>see [#20](https://github.com/Xunnamius/xchangelog/issues/20)</sup>
* **reference:** able to reference an issue without an action ([6474123](https://github.com/Xunnamius/xchangelog/commit/6474123c0062826575570a8c706574664e797714)) <sup>see [#22](https://github.com/Xunnamius/xchangelog/issues/22)</sup>
* **reference:** expose prefix ([47df766](https://github.com/Xunnamius/xchangelog/commit/47df76661f0000ceede5720246ae6f80131129a7)) <sup>see [#17](https://github.com/Xunnamius/xchangelog/issues/17)</sup>
* **references:** allow header to reference an issue ([df18a24](https://github.com/Xunnamius/xchangelog/commit/df18a247d4f37924bd1ab4ec6bc907085b3296e8))
* **references:** remove references that already appear in the subject ([a01e0ba](https://github.com/Xunnamius/xchangelog/commit/a01e0ba400ac62cb2025894c15156f4f523dabbf))
* **references:** support other formats of references ([7c70213](https://github.com/Xunnamius/xchangelog/commit/7c7021324c3d67f8426c03fee02e6080c460a1ec)) <sup>see [#4](https://github.com/Xunnamius/xchangelog/issues/4), [#8](https://github.com/Xunnamius/xchangelog/issues/8)</sup>
* **regex:** leading and trailing space for closes and breaks keywords are trimmed ([9639860](https://github.com/Xunnamius/xchangelog/commit/96398603dd11b6f89e2a59bfc3ceb24a08b79b2f))
* **regex:** matching JIRA-123 like references ([20f1f7a](https://github.com/Xunnamius/xchangelog/commit/20f1f7ad323299eeb799850bb82557d522f74e34)) <sup>see [#19](https://github.com/Xunnamius/xchangelog/issues/19)</sup>
* Remove commit length restriction ([10a07f9](https://github.com/Xunnamius/xchangelog/commit/10a07f9f5915ce5fe6c61cfc742b0d66a64a4abb)) <sup>see [#12](https://github.com/Xunnamius/xchangelog/issues/12)</sup>
* **reverse:** new options for commits that are poured reversely ([613651e](https://github.com/Xunnamius/xchangelog/commit/613651e93929047e1d414854984a28d7acbbd518))
* **revert:** ignore reverted commits ([0f279ad](https://github.com/Xunnamius/xchangelog/commit/0f279ad4629d2ba2ab175ef6219f941b2e8ffcdb)) <sup>see [#66<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/ajoslin/conventional-changelog/issues/66)</sup>
* **revert:** parse a commit that reverts ([2af7233](https://github.com/Xunnamius/xchangelog/commit/2af723378f32956baf6b09ec4128b2b381bef0b7)) <sup>see [#66<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/ajoslin/conventional-changelog/issues/66)</sup>
* Rewrite this module ([8968f1b](https://github.com/Xunnamius/xchangelog/commit/8968f1b6e88ecf4131d6223ccde1e3faef7d192d))
* **stream:** emmit an empty string to down stream if commit cannot be parsed ([76bf84e](https://github.com/Xunnamius/xchangelog/commit/76bf84e453d8ab07640a5d07412f8da65e0f2596))
* **stream:** make the function return a through stream ([24032e7](https://github.com/Xunnamius/xchangelog/commit/24032e79bfb5ad51d1e417b82d5e147878d863ca)) <sup>see [#1](https://github.com/Xunnamius/xchangelog/issues/1)</sup>
* Support squash commits ([#31](https://github.com/Xunnamius/xchangelog/issues/31)) ([fff60c0](https://github.com/Xunnamius/xchangelog/commit/fff60c0dfd5dead68571965f8633b85c87400750))
* **sync:** add the sync function ([82071c6](https://github.com/Xunnamius/xchangelog/commit/82071c69acc7bc4ab41a7bc9b26832129cad2e4c)) <sup>see [#13](https://github.com/Xunnamius/xchangelog/issues/13)</sup>
* **template:** bold scope in breaking change ([3b0bb11](https://github.com/Xunnamius/xchangelog/commit/3b0bb119e3d555401d56c290c3e9d962456fd544))
* **template:** use context.repoUrl ([9276ab9](https://github.com/Xunnamius/xchangelog/commit/9276ab963985c8fe178b8bda430f41ad7a4748fe))
* **to:** `options.to` is honoured even if `options.from` is falsy ([cf414df](https://github.com/Xunnamius/xchangelog/commit/cf414df89fd91ab84bc82202ab7817fc1785bd92)) <sup>see [#2](https://github.com/Xunnamius/xchangelog/issues/2)</sup>
* **transform:** add a transform option ([b05dc2e](https://github.com/Xunnamius/xchangelog/commit/b05dc2e5908549af2832f17354cdeb7091fdd8a3)) <sup>see [#2](https://github.com/Xunnamius/xchangelog/issues/2)</sup>
* **transform:** also pass context as an arg ([76b869d](https://github.com/Xunnamius/xchangelog/commit/76b869d88947325fea4b9878052cf63fc79ebdf7))
* **transform:** if returns a falsy value this commit is ignored ([9508ed6](https://github.com/Xunnamius/xchangelog/commit/9508ed6f9d2aea0ff27b29c1414a67796a9037e2))
* **unreleased:** option to output or not unreleased changelog ([b448553](https://github.com/Xunnamius/xchangelog/commit/b448553f964c15303aa3d6e7f087a7ffd4355e19)) <sup>see [#120<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/ajoslin/conventional-changelog/issues/120)</sup>
* Use new api of `references` and `notes` ([4d27326](https://github.com/Xunnamius/xchangelog/commit/4d27326299d1f7307d98d9021bf8b30540823715))
* **version:** is not a required field any more ([3790d8f](https://github.com/Xunnamius/xchangelog/commit/3790d8fb5d991fd6b1f6347f244faf727b9e146c))
* **version:** strip leading v by default ([43c2c7e](https://github.com/Xunnamius/xchangelog/commit/43c2c7ed008a3913709b9645152688f22d0c5687))
* **warn:** optionally warn user what is wrong when commit cannot be parsed ([32b3cda](https://github.com/Xunnamius/xchangelog/commit/32b3cdaa161f71f5fb21d2d2f01f9785b6a7d0a7))
* **writeropts.transform:** do not discard commit if there is BREAKING CHANGE ([e6fded5](https://github.com/Xunnamius/xchangelog/commit/e6fded5ce4c3e00581399c93c5aacd3f25ccb325)) <sup>see [#127<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/ajoslin/conventional-changelog/issues/127), [#5672<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/angular/angular/issues/5672), [#5762<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/angular/angular/issues/5762)</sup>

#### 🪄 Fixes

* **cli:** commit can be split when testing a commit file ([f3b3a3f](https://github.com/Xunnamius/xchangelog/commit/f3b3a3f44e6dbf768511621204fa9065c08c2d2e))
* **cli:** error handling for ENOENT is fixed ([3c92233](https://github.com/Xunnamius/xchangelog/commit/3c92233e717ea7dd35de6555ee798217719953ca))
* **cli:** fix "undefined" in json string ([0680e42](https://github.com/Xunnamius/xchangelog/commit/0680e420b59f3b111bd7a8ed2f73597837f157a2))
* **cli:** options format ([41c813b](https://github.com/Xunnamius/xchangelog/commit/41c813b8ddeac0b721daa70d43327dc8f2758d54))
* **cli:** options format ([491357e](https://github.com/Xunnamius/xchangelog/commit/491357e7ebce93cb9a316f83ee5d2546c9441e8c))
* **cli:** require file with absolute path ([fe2b5fe](https://github.com/Xunnamius/xchangelog/commit/fe2b5feb5a57935b7eff36667586bb297c1f92dc)) <sup>see [#13](https://github.com/Xunnamius/xchangelog/issues/13)</sup>
* **cli:** should not contain a `\n` at the end ([4044958](https://github.com/Xunnamius/xchangelog/commit/40449588e039665d76a33e44084ad9730f306696))
* **cli:** show optional options properly ([28c0f01](https://github.com/Xunnamius/xchangelog/commit/28c0f010bc506a3f8b837e6e6025f7b8e086eb09))
* **cli:** use absolute path to require context and options ([08808fe](https://github.com/Xunnamius/xchangelog/commit/08808fe05f0e26acd080d7e5defbe75721e1c6cd))
* **cli:** when it is not tty, it should exit if errors ([aa8708c](https://github.com/Xunnamius/xchangelog/commit/aa8708cc253a16231fc0e7d01443526d0420441e))
* **close:** should close stream if there is no data and no error ([63c753e](https://github.com/Xunnamius/xchangelog/commit/63c753ea0ba43cbf23f898e0799f427b85e793e2))
* **cmd:** add a space before other args ([49c4739](https://github.com/Xunnamius/xchangelog/commit/49c4739708fe1936d5b1e7e34d7cf49800741dfb))
* **context.version:** only valid a semver can decide `context.isPatch` ([8dbc53a](https://github.com/Xunnamius/xchangelog/commit/8dbc53a5f3e724daca074dad150bccb35f1b0088))
* **context:** auto link references if repoUrl ([d5d66f3](https://github.com/Xunnamius/xchangelog/commit/d5d66f3da7e82cb45993f27c190f9fffae3b51cd))
* **currenttag:** if unreleased, currentTag should be last commit hash ([fb9358c](https://github.com/Xunnamius/xchangelog/commit/fb9358cfbac33fc1f96dae9c32117795fc2a82a3))
* **date:** should use committerDate not authorDate ([fbdf73d](https://github.com/Xunnamius/xchangelog/commit/fbdf73d784b6391ccbab93a40e7fe2af0b060ed2))
* **default:** firstCommit and lastCommit should based on original unfiltered commits ([3aed9ca](https://github.com/Xunnamius/xchangelog/commit/3aed9ca836aaf703a1ec994fe898bb23e0b10529)) <sup>see [#2](https://github.com/Xunnamius/xchangelog/issues/2)</sup>
* **defaults:** context tags ([e1b938b](https://github.com/Xunnamius/xchangelog/commit/e1b938b0e9af3bfb5f8f3bfe63e24b264ebc72fd))
* **deps:** add missing better-than-before ([5903b58](https://github.com/Xunnamius/xchangelog/commit/5903b5875085122ec3602c8b9393de8e40da118f))
* **deps:** concat-stream should be in devdeps ([e90881c](https://github.com/Xunnamius/xchangelog/commit/e90881ce673eb892ca21102a1bb8c5489770abfb))
* **deps:** require split2 ([59db605](https://github.com/Xunnamius/xchangelog/commit/59db605a988a852b5fb7e2fa591f75b67a16e006))
* **deps:** require split2 ([1941c37](https://github.com/Xunnamius/xchangelog/commit/1941c374381688aff57ad2f4c20e6bd8e971bf01))
* **doflush:** correct logic ([38e3c03](https://github.com/Xunnamius/xchangelog/commit/38e3c0382c62511bd776db4d93ecbc36d2864198)) <sup>see [#19](https://github.com/Xunnamius/xchangelog/issues/19)</sup>
* **doflush:** one it is the only potential release ([3d600cf](https://github.com/Xunnamius/xchangelog/commit/3d600cfb5ca9ca15b78d8a84a032cf4c938ba4d0))
* **err:** catch any possible error ([c934f50](https://github.com/Xunnamius/xchangelog/commit/c934f50cfab1c1928934d4311d5bbbec07036124))
* **err:** emitted error should not be read only ([58a3a24](https://github.com/Xunnamius/xchangelog/commit/58a3a246fa99366ba675dcf9fc644c7bd894c4f3))
* **error:** better error handling ([38cc78e](https://github.com/Xunnamius/xchangelog/commit/38cc78e71cc6375471847333d363b77c6f842797)) <sup>see [#130<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/ajoslin/conventional-changelog/issues/130)</sup>
* **error:** change error type and wordings ([d8be5e5](https://github.com/Xunnamius/xchangelog/commit/d8be5e548922e3cf45c4715c620b191a1a16d8d4))
* **error:** handle errors properly ([587e1d0](https://github.com/Xunnamius/xchangelog/commit/587e1d01a82dd15d6958e7a017813e29c82555f3))
* **error:** handle errors properly ([bde1200](https://github.com/Xunnamius/xchangelog/commit/bde1200027e3f26da14c6dcce09fb0c7c2add908))
* **events:** emit proper events ([2911647](https://github.com/Xunnamius/xchangelog/commit/291164714c1c2b616793710d760063df6ce78421))
* **firstrelease:** correct logic ([ccc02e1](https://github.com/Xunnamius/xchangelog/commit/ccc02e1e162ce0d4dbe276427a5edc6b716b8abc))
* **footer:** notes contains more than one paragraphs after references ([d744ec7](https://github.com/Xunnamius/xchangelog/commit/d744ec771dcc333c54978d035be5097e02a10579))
* **functionify:** should not change falsy values ([1aed002](https://github.com/Xunnamius/xchangelog/commit/1aed002dda1e200c8eaeaf6a521d4cfd56423992))
* **generateon:** should pass the transformed commit ([2b6cc6c](https://github.com/Xunnamius/xchangelog/commit/2b6cc6cac5b33bee951eb1ee2a26344286131769))
* **git:** allow the command to pass on windows ([ee2f4d3](https://github.com/Xunnamius/xchangelog/commit/ee2f4d3b9c6760b2dc3790f830ce1bf3410b55a5)) <sup>see [#4](https://github.com/Xunnamius/xchangelog/issues/4), [#64<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/ajoslin/conventional-changelog/issues/64)</sup>
* **git:** wrap params `from..to` in double-quotes for windows ([02b7c19](https://github.com/Xunnamius/xchangelog/commit/02b7c190ffeebb9e22b3ae6c337903aa17e79ba6))
* **headercorrespondence:** string value for cli ([fb774fc](https://github.com/Xunnamius/xchangelog/commit/fb774fc4dc1ddc37c2fec287f63afdbbef0b40c7))
* **headerpattern:** change how capturing groups works ([fe1fe0c](https://github.com/Xunnamius/xchangelog/commit/fe1fe0c3cfe785e0f0cc44bcc6c63b42035c4001))
* **host:** auto removes "/" at the end of `options.host` ([2bdadf0](https://github.com/Xunnamius/xchangelog/commit/2bdadf09cd29e6e56080d05ab0d474c5f4a547ac))
* **infile:** do not print the latest release twice if infile ENOENT ([cfe4c64](https://github.com/Xunnamius/xchangelog/commit/cfe4c6427880f0d25944262cdbade4c15c9aa0e7))
* **issueprefixes:** should return noMatch if falsy ([72db2bf](https://github.com/Xunnamius/xchangelog/commit/72db2bf3d72f74f864971a7103dbe9b64e855570))
* **keycommit:** all fields of `keyCommit` overwrites `context` ([63296b5](https://github.com/Xunnamius/xchangelog/commit/63296b52accd8c5aad4723a7da1028593e27a799)) <sup>see [#5](https://github.com/Xunnamius/xchangelog/issues/5)</sup>
* **linkreferences:** can be changed to `false` ([a56f9fd](https://github.com/Xunnamius/xchangelog/commit/a56f9fd363df2b63bc0d3efd70d3410ec333cd5d))
* Linting ([33ac525](https://github.com/Xunnamius/xchangelog/commit/33ac525e294aca4a3b736a67d5b0ae17129027a1))
* **maxbuffer:** Infinity ([03fb581](https://github.com/Xunnamius/xchangelog/commit/03fb58172cd1af99ed291ade7f8d95b1a8425101)) <sup>see [#5](https://github.com/Xunnamius/xchangelog/issues/5)</sup>
* **mention:** fix mention matching ([965986b](https://github.com/Xunnamius/xchangelog/commit/965986b2c8d9dcc94d5dd0d5b14f6b5957479aa2)) <sup>see [#26](https://github.com/Xunnamius/xchangelog/issues/26)</sup>
* **mergeconfig:** respect issuePrefixes option ([9cc54a1](https://github.com/Xunnamius/xchangelog/commit/9cc54a1e99a9be26043be46ecd68f6102a4989bf)) <sup>see [#6](https://github.com/Xunnamius/xchangelog/issues/6), [#8](https://github.com/Xunnamius/xchangelog/issues/8)</sup>
* **newlines:** preserve newlines in a part ([06b8c7c](https://github.com/Xunnamius/xchangelog/commit/06b8c7c2b20dc9947186c1b56605bcdd9e272d52)) <sup>see [#15](https://github.com/Xunnamius/xchangelog/issues/15)</sup>
* **notes:** do not include reverted notes ([4e60fe2](https://github.com/Xunnamius/xchangelog/commit/4e60fe2026b290f5ac5986de44da223ee18da99e))
* **notes:** note keywords must appear at the beginning of a sentence ([5a2059e](https://github.com/Xunnamius/xchangelog/commit/5a2059ee79aa7fe1f764060be8cd03c4be6e159f)) <sup>see [#23](https://github.com/Xunnamius/xchangelog/issues/23)</sup>
* **notessort:** defaults to sort on `text` ([3511ffb](https://github.com/Xunnamius/xchangelog/commit/3511ffb7bb684d783c64b17a246073304fe864d5))
* **oldnode:** git remote origin url feature is only available under node>=4 ([db1fe72](https://github.com/Xunnamius/xchangelog/commit/db1fe725aabe1ce5824cf9fd7ade11b856e656ff))
* **options:** only apply default transform in certain conditions ([6080181](https://github.com/Xunnamius/xchangelog/commit/60801815eb5900d8a774ecc1e14033a8c1e056e3))
* **options:** should fallback to default if supplied value is falsy ([4cfa812](https://github.com/Xunnamius/xchangelog/commit/4cfa81257ecac46563d3541a10f376040e43ab35))
* **parser:** do not trim spaces but newlines ([1e8c4c5](https://github.com/Xunnamius/xchangelog/commit/1e8c4c52b659dc50d12511f0c089b7e4d877c93f))
* **parser:** it returns null if there is no header ([8571c9e](https://github.com/Xunnamius/xchangelog/commit/8571c9eb6446c150333f6633c0965f4009c80d92))
* **partials:** only register if its a string ([915cbeb](https://github.com/Xunnamius/xchangelog/commit/915cbebe83fde86a8390b5bbaae5ec069f426ee2))
* **regex:** do not treat it as note if there are texts after keywords ([571b03e](https://github.com/Xunnamius/xchangelog/commit/571b03e0b3d564abdc7ac6530127b92c26a8ec10))
* **regex:** make getReferencePartsRegex stricter ([62adf54](https://github.com/Xunnamius/xchangelog/commit/62adf5414612bee5dad5e4c242e657ea083cc91e)) <sup>see [#27](https://github.com/Xunnamius/xchangelog/issues/27), [#30](https://github.com/Xunnamius/xchangelog/issues/30), [#27](https://github.com/Xunnamius/xchangelog/issues/27), [#28](https://github.com/Xunnamius/xchangelog/issues/28)</sup>
* **reverse:** should be the other way ([b4156e3](https://github.com/Xunnamius/xchangelog/commit/b4156e32ccba20a6a372158ccb32974808384581))
* **revertpattern:** correct regex ([8628983](https://github.com/Xunnamius/xchangelog/commit/862898305cc827fa0b929e4dc6dcbf0c64ce04e0))
* **template:** commit template markdown ([0949b5a](https://github.com/Xunnamius/xchangelog/commit/0949b5acdb3de9bc1d94ca256535281691b4f2ea))
* **template:** default commit template should handle unkown host ([d1ed4fc](https://github.com/Xunnamius/xchangelog/commit/d1ed4fcfefa0f338e45ed3d141c689a98612f8ea))
* **template:** remove an extra newline in footer ([f6180c5](https://github.com/Xunnamius/xchangelog/commit/f6180c5462a6d4acadcccf5ce0d8b8cd75cfac21))
* **templates:** generate correct url if only host exists ([35f1799](https://github.com/Xunnamius/xchangelog/commit/35f1799c1a9004aa5282aaefd859a702bf5b2556))
* **template:** should not html escape ([e4e33ae](https://github.com/Xunnamius/xchangelog/commit/e4e33ae3b1a81a4503946cf45ab65d7fde0913a9)) <sup>see [#65<img alt="external reference" title="(this issue is from a different repository)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==" />](https://github.com/ajoslin/conventional-changelog/issues/65)</sup>
* **templates:** incase partial is empty also don't ignore default partials ([d90fb65](https://github.com/Xunnamius/xchangelog/commit/d90fb65f94bd35ed07994b6812b3de3d6f9ce09e))
* **template:** tweak ([ef6996a](https://github.com/Xunnamius/xchangelog/commit/ef6996a8b435724db295efcf0bdea5019497dad6))
* **template:** whitespace ([4b09854](https://github.com/Xunnamius/xchangelog/commit/4b098540c51ea47eec38b71b79165bf0e32a2ce3))
* **template:** wrong version link if no host ([b28b9a1](https://github.com/Xunnamius/xchangelog/commit/b28b9a1ee6042fcfdb1a7d0b9fde35f5e793dc57)) <sup>see [#8](https://github.com/Xunnamius/xchangelog/issues/8)</sup>
* **transform:** do not strip leading v ([8e2da57](https://github.com/Xunnamius/xchangelog/commit/8e2da576cd57fc730f4e4d770a3e5432b0caab51))
* **transform:** should work if any field is missing ([fd413ed](https://github.com/Xunnamius/xchangelog/commit/fd413edea7720c2f62c7646d6f81d4e8b8be9356))
* **unknownhost:** default context.repository ([c41ddd9](https://github.com/Xunnamius/xchangelog/commit/c41ddd98eb0a5eb0bd0ae47d2b02fdc48ab42705))
* **unreleased:** now it can output unreleased commits ([03cb05e](https://github.com/Xunnamius/xchangelog/commit/03cb05ec7869df136ae8242bb5c1f7461069b777))
* Update to reference conventional-changelog org ([310bbef](https://github.com/Xunnamius/xchangelog/commit/310bbef53bef7d36b137a4b4ed1eb8bd1b03519d))
* **util:** remove an accidentally commited file ([3710a8c](https://github.com/Xunnamius/xchangelog/commit/3710a8c080f4490ae1599578e58263a72d24a33a))
* **warn:** should tell which commit cannot be parsed ([04b0a9b](https://github.com/Xunnamius/xchangelog/commit/04b0a9b0e3956fea0cd7d9ac1f25fe68dcb55535))
* **windows:** escape command percent signs ([7774c7b](https://github.com/Xunnamius/xchangelog/commit/7774c7b0e1b1129b7369057fb7c9cd2bdfb4c9cd)) <sup>see [#10](https://github.com/Xunnamius/xchangelog/issues/10)</sup>
* **windows:** use execFile for executing git ([5d0c2c7](https://github.com/Xunnamius/xchangelog/commit/5d0c2c7752bb937d526cdaf9f5e6a770a8e1bf5f)) <sup>see [#11](https://github.com/Xunnamius/xchangelog/issues/11)</sup>

#### ⚡️ Optimizations

* **chunk:** do not convert to string ([b50d7ef](https://github.com/Xunnamius/xchangelog/commit/b50d7efffb0e72e69f0ff56f1e6abb0bdc897918))
* **get/set:** drop dot-prop and just use lodash ([601e580](https://github.com/Xunnamius/xchangelog/commit/601e58036f57c1777d9dfcf4422de07529b6072f))
* **regex:** regex should be constructed in index.html ([15afd26](https://github.com/Xunnamius/xchangelog/commit/15afd2661ee05fb8311656ce21bd9b9413b623e4))

#### 🧙🏿 Refactored

* **breaks:** change `breaks` to `notes` ([5189a61](https://github.com/Xunnamius/xchangelog/commit/5189a616c5ce1f1440649fcb1a61274bdaf7a24f)) <sup>see [#2](https://github.com/Xunnamius/xchangelog/issues/2)</sup>
* **merge:** pull-request should be merge ([4e7c61c](https://github.com/Xunnamius/xchangelog/commit/4e7c61cb3388644e94e405deacae42cb59165ce9))
* **regex:** regex now takes `options` ([eea319a](https://github.com/Xunnamius/xchangelog/commit/eea319a2b9e4b2a0a1245519de1dba2e6f8735ea))

#### 🗄️ Miscellaneous

* Init ([ae118df](https://github.com/Xunnamius/xchangelog/commit/ae118df3fbc037664cf4212ce07efd4265dd62c4))
* Init ([a529841](https://github.com/Xunnamius/xchangelog/commit/a529841e1b936d265d789367828e9b2be8daf0c5))

#### 🔥 Reverted

* *Feat(maxBuffer): expose this option incase of long git history* ([2572611](https://github.com/Xunnamius/xchangelog/commit/2572611f032c74135695b946f8eb844570039dc8))
* *Fix(deps): require split2* ([c93a12a](https://github.com/Xunnamius/xchangelog/commit/c93a12a589e7c1527ac5af106e4fa04a5610caca))

<br />

### 🏗️ Patch 1.1.2 (2017-03-05)

#### ✨ Features

* Introducing support for lerna style tagging ([7be07c7](https://github.com/Xunnamius/xchangelog/commit/7be07c7c0f49572b1c0e9c98f004b599d8b5bb1a))

<br />

## [1.0.0](https://github.com/Xunnamius/xchangelog/compare/v0.5.3...v1.0.0) (2016-02-05)

### 💥 BREAKING CHANGES 💥

* Presets have their own repos. cli and core have their own repos. This one is a pure wrapper. In the core, a new api `options.config` is added.

### ✨ Features

* **module:** broken down into smaller modules ([48580b0](https://github.com/Xunnamius/xchangelog/commit/48580b039197f45574f309b1c2ade18c17c2933b))

### 🪄 Fixes

* **bin:** no cli anymore ([65a9f4b](https://github.com/Xunnamius/xchangelog/commit/65a9f4bfcfb2621fbcc9eed8876dd22e96a55ed0))
* **cli:** print the stack if verbose ([81860ab](https://github.com/Xunnamius/xchangelog/commit/81860ab6529d45422a78251951b458289df9405c))

<br />

### 🏗️ Patch [1.0.2](https://github.com/Xunnamius/xchangelog/compare/v1.0.1...v1.0.2) (2016-02-13)

<br />

### 🏗️ Patch [1.0.1](https://github.com/Xunnamius/xchangelog/compare/v1.0.0...v1.0.1) (2016-02-05)

<br />

## [0.5.0](https://github.com/Xunnamius/xchangelog/compare/v0.4.3...v0.5.0) (2015-09-30)

### ✨ Features

* **dep:** bump conventional-changelog-writer to ^0.4.1 ([cbfb222](https://github.com/Xunnamius/xchangelog/commit/cbfb22275fbde19013e54fdd33f3155fa36cdd86))
* **pkg:** load closest package.json by default ([5942809](https://github.com/Xunnamius/xchangelog/commit/594280900ff2180775d1c9c4c481cfbefaa69839)) <sup>see [#91](https://github.com/Xunnamius/xchangelog/issues/91)</sup>
* **template:** add `scope` to breaking changes ([d2fdd44](https://github.com/Xunnamius/xchangelog/commit/d2fdd44533e88f51a793135a248dbf6e63cfa888)) <sup>see [#93](https://github.com/Xunnamius/xchangelog/issues/93)</sup>

### 🪄 Fixes

* **unknown-host:** fallback to use the whole repo url ([514c4e2](https://github.com/Xunnamius/xchangelog/commit/514c4e2a5d9abe3e3a728170444f880f2f5984c9)) <sup>see [#98](https://github.com/Xunnamius/xchangelog/issues/98)</sup>

<br />

### 🏗️ Patch [0.5.3](https://github.com/Xunnamius/xchangelog/compare/v0.5.2...v0.5.3) (2015-12-25)

#### 🪄 Fixes

* **defaults:** do not throw if no package.json found ([906a904](https://github.com/Xunnamius/xchangelog/commit/906a90456557f47e996abb417b2450260cf7c7d4)) <sup>see [#123](https://github.com/Xunnamius/xchangelog/issues/123)</sup>

<br />

### 🏗️ Patch [0.5.2](https://github.com/Xunnamius/xchangelog/compare/v0.5.1...v0.5.2) (2015-12-23)

#### ✨ Features

* **preset:** relax JSHint message requirements ([5aa5e32](https://github.com/Xunnamius/xchangelog/commit/5aa5e32fd0a29192b1c92dcfcc91a3a62f72aec8)) <sup>see [#129](https://github.com/Xunnamius/xchangelog/issues/129)</sup>

<br />

### 🏗️ Patch [0.5.1](https://github.com/Xunnamius/xchangelog/compare/v0.5.0...v0.5.1) (2015-10-20)

#### 🪄 Fixes

* **options:** fix losing parserOpts without preset ([e6a9cf3](https://github.com/Xunnamius/xchangelog/commit/e6a9cf3dd59ec5337279c03cc785450e911f46a8)) <sup>see [#116](https://github.com/Xunnamius/xchangelog/issues/116)</sup>

<br />

## [0.4.0](https://github.com/Xunnamius/xchangelog/compare/v0.3.2...v0.4.0) (2015-08-15)

### ✨ Features

* **preset:** add codemirror ([bc480f8](https://github.com/Xunnamius/xchangelog/commit/bc480f849611b93944df08e9c8378c9c2a9d7f36))

<br />

### 🏗️ Patch [0.4.3](https://github.com/Xunnamius/xchangelog/compare/v0.4.2...v0.4.3) (2015-09-04)

#### 🪄 Fixes

* **cli:** require at the correct directory ([feceb8b](https://github.com/Xunnamius/xchangelog/commit/feceb8b2c86f3a2935d9f52143a8a838a51abe48))
* **cli:** require file with absolute path ([7f68b3e](https://github.com/Xunnamius/xchangelog/commit/7f68b3edea9d72715831a251fb70d5c303116502)) <sup>see [#96](https://github.com/Xunnamius/xchangelog/issues/96)</sup>
* **error:** emit error if there is any async ([831c960](https://github.com/Xunnamius/xchangelog/commit/831c960936e3d9d5d08eae46dd332c77dc8664dc))
* **preset:** if scope is * for angular it should be ignored ([91094c9](https://github.com/Xunnamius/xchangelog/commit/91094c96f1eebd3e9108f2e6a33afeab400d72df))
* **templates:** add a missing newline after notes ([e1ae4b2](https://github.com/Xunnamius/xchangelog/commit/e1ae4b25e44f1110bffa395bc8f30840770491fa))

<br />

### 🏗️ Patch [0.4.2](https://github.com/Xunnamius/xchangelog/compare/v0.4.1...v0.4.2) (2015-08-17)

#### 🪄 Fixes

* **preset:** jshint may contain BREAKING CHANGE footer ([2683cee](https://github.com/Xunnamius/xchangelog/commit/2683ceea59cf6f8ac6b66a28bde35e522d03ab75))

<br />

### 🏗️ Patch [0.4.1](https://github.com/Xunnamius/xchangelog/compare/v0.4.0...v0.4.1) (2015-08-15)

#### ✨ Features

* **hosts:** add support for gitlab.com repositories ([bc1746b](https://github.com/Xunnamius/xchangelog/commit/bc1746b2b71756239cc1d640b869ca354272f3d4)) <sup>see [#86](https://github.com/Xunnamius/xchangelog/issues/86), [#88](https://github.com/Xunnamius/xchangelog/issues/88)</sup>

<br />

## [0.3.0](https://github.com/Xunnamius/xchangelog/compare/v0.2.1...v0.3.0) (2015-08-09)

### 💥 BREAKING CHANGES 💥

* `options.transform` is a function instead of a stream. This is more elegant and easier to handle any error.

### ✨ Features

* **comparelink:** link version numbers to compare ([f0dbadb](https://github.com/Xunnamius/xchangelog/commit/f0dbadb19759234d8dbe2f72407b306571fc2b7f))
* **context:** attach gitSemverTags ([ac098a3](https://github.com/Xunnamius/xchangelog/commit/ac098a3f5151f5fb0f2c86a061861ea4c8f7cc94)) <sup>see [#79](https://github.com/Xunnamius/xchangelog/issues/79)</sup>
* **finalizecontext:** `context.previousVersion` defaults to a previous version of generated log ([a2df9ca](https://github.com/Xunnamius/xchangelog/commit/a2df9caf2d476a1553a453bf2907732d21166817))
* **preset:** add ember ([0ccb8da](https://github.com/Xunnamius/xchangelog/commit/0ccb8da8e3b0f07e7832c4a51ae7e7b6d9735861))
* **preset:** add express ([c4b20b1](https://github.com/Xunnamius/xchangelog/commit/c4b20b1d8fe8f23cf69f740cdfc23aa0bbb16d23))
* **preset:** add jscs ([1313d55](https://github.com/Xunnamius/xchangelog/commit/1313d55177bff1523487d2b96a131b2a206d4bbd))

### 🪄 Fixes

* **ember:** when cannot find header in pr ([9d833fd](https://github.com/Xunnamius/xchangelog/commit/9d833fddacc3a1d2f5e2056d73c8fdd5f7f1f98a))
* **err:** better error handling ([7f0e3f5](https://github.com/Xunnamius/xchangelog/commit/7f0e3f52598a6a1229a087c1808e4fb7cec69195))
* **preset:** gitRawCommitsOpts should be counted ([2bb4b47](https://github.com/Xunnamius/xchangelog/commit/2bb4b47977612e9f2aeb6cb8ed5e4fa9e4de4992))
* **previoustag:** incase there is no commits in the first release ([8d9f363](https://github.com/Xunnamius/xchangelog/commit/8d9f363ed973ae23d331bed98b5b42e88de03088))

<br />

### 🏗️ Patch [0.3.2](https://github.com/Xunnamius/xchangelog/compare/v0.3.1...v0.3.2) (2015-08-13)

#### ✨ Features

* **context:** attach your packageData ([7138206](https://github.com/Xunnamius/xchangelog/commit/7138206b9b64f5d50678ad19f1717caee515cee8))

#### 🪄 Fixes

* **pkg:** should always read package.json ([fcaac48](https://github.com/Xunnamius/xchangelog/commit/fcaac48bd7df1bdaabdf95745e573f806c11ab3d))
* **preset:** should still work if preset is wrong ([bc8240e](https://github.com/Xunnamius/xchangelog/commit/bc8240e59b174f7e973d8de071950cbb56d58f07))

<br />

### 🏗️ Patch [0.3.1](https://github.com/Xunnamius/xchangelog/compare/v0.3.0...v0.3.1) (2015-08-11)

#### 🪄 Fixes

* **cli:** gracefully handle it if infile is ENOENT ([12f2889](https://github.com/Xunnamius/xchangelog/commit/12f2889455376ce09c1a85456bc238ff70a6efbd))

<br />

## [0.2.0](https://github.com/Xunnamius/xchangelog/compare/v0.1.3...v0.2.0) (2015-07-24)

### 💥 BREAKING CHANGES 💥

* `allBlocks` is removed. Use `releaseCount` instead.

### ✨ Features

* **releasecount:** replace allBlocks ([fd1ce9d](https://github.com/Xunnamius/xchangelog/commit/fd1ce9d693983a1bb518459896a43b43fb6327dc))

### ⚡️ Optimizations

* **context:** use the parsed host type if possible ([305b3d5](https://github.com/Xunnamius/xchangelog/commit/305b3d50748619d62a035ba55e1011b1ad06b8f5))

### 🔥 Reverted

* *Feat(versionRange): replace allBlocks* ([64d3b8d](https://github.com/Xunnamius/xchangelog/commit/64d3b8d2d09e7af001d07b83a656a485d887d178))

<br />

### 🏗️ Patch [0.2.1](https://github.com/Xunnamius/xchangelog/compare/v0.2.0...v0.2.1) (2015-07-24)

#### ✨ Features

* **transform:** put the default from presets to core ([946c1da](https://github.com/Xunnamius/xchangelog/commit/946c1da3c17c8196538c87d69a2a16e68ff38bed))

<br />

## [0.1.0](https://github.com/Xunnamius/xchangelog/compare/v0.0.17...v0.1.0) (2015-07-20)

### 💥 BREAKING CHANGES 💥

* `options.pkg` is now an object. `options.pkg.path` is the path of the package.json and `options.pkg.transform` is the function to transform the package.json.

* This module is rewritten so API is changed and it is not backward compatible. Please check docs and all the submodules including git-raw-commits, conventional-commits-parser and conventional-commits-writer for more information.

### ✨ Features

* **angular:** add new revert opts for the parser ([9e15f01](https://github.com/Xunnamius/xchangelog/commit/9e15f0159762a537e67a44a6368d256818e1b3ba))
* **cli:** first commit of cli ([d74b96b](https://github.com/Xunnamius/xchangelog/commit/d74b96b0b1378e2361b2b9f29faa712cf7f1b561)) <sup>see [#31](https://github.com/Xunnamius/xchangelog/issues/31)</sup>
* **issueprefixes:** default for the hosts ([b1c3ee9](https://github.com/Xunnamius/xchangelog/commit/b1c3ee9e0e4698018b9316d6fef6df4fd07727ee)) <sup>see [#59](https://github.com/Xunnamius/xchangelog/issues/59), [#60](https://github.com/Xunnamius/xchangelog/issues/60)</sup>
* **owner:** add context.owner support ([87d60b4](https://github.com/Xunnamius/xchangelog/commit/87d60b47566f332f81f880edab6d1774b1d4c629))
* **pkg:** add a transform function ([e576563](https://github.com/Xunnamius/xchangelog/commit/e57656300f7ee69efadd35f1a3386acae5bd322a))
* **preset:** add atom ([714b694](https://github.com/Xunnamius/xchangelog/commit/714b694a855c87ad646e3d1c64b1ae099b35563e))
* **preset:** add eslint ([af37323](https://github.com/Xunnamius/xchangelog/commit/af37323373ff8c5cf14a2985d45e1da2435b00b6))
* **preset:** add jshint ([384e6ce](https://github.com/Xunnamius/xchangelog/commit/384e6ce9a8311af0b9a065f748a2fc154f79a014))
* **rewrite:** rewrite this module ([7c48e0d](https://github.com/Xunnamius/xchangelog/commit/7c48e0df1fbf08c3076ae058b6007cf71e9b74c0)) <sup>see [#50](https://github.com/Xunnamius/xchangelog/issues/50), [#45](https://github.com/Xunnamius/xchangelog/issues/45), [#40](https://github.com/Xunnamius/xchangelog/issues/40), [#22](https://github.com/Xunnamius/xchangelog/issues/22), [#13](https://github.com/Xunnamius/xchangelog/issues/13), [#12](https://github.com/Xunnamius/xchangelog/issues/12), [#54](https://github.com/Xunnamius/xchangelog/issues/54), [#51](https://github.com/Xunnamius/xchangelog/issues/51)</sup>

### 🪄 Fixes

* **cli:** map pkg.path correctly ([c9a59a7](https://github.com/Xunnamius/xchangelog/commit/c9a59a7b2e1f7ec87340bb4384972e4be1e16386))
* Conventional-commits-writer -> conventional-changelog-writer ([aa6cbd6](https://github.com/Xunnamius/xchangelog/commit/aa6cbd6d562e5aa8e3737ea5ae35e91352c1207c))
* **err:** emit error if there is any in gitRawCommits and conventionalCommitsParser ([00ac3c1](https://github.com/Xunnamius/xchangelog/commit/00ac3c1e1d4d5e4e354145f26f7790957eef1c01))
* **hosts:** spelling mistake of host bitbucket ([1e30d54](https://github.com/Xunnamius/xchangelog/commit/1e30d5491470237059c86dc5771206caffb12983)) <sup>see [#68](https://github.com/Xunnamius/xchangelog/issues/68), [#69](https://github.com/Xunnamius/xchangelog/issues/69)</sup>
* **parseropts:** options.warn should overwrite preset.parserOpts.warn ([94f40cf](https://github.com/Xunnamius/xchangelog/commit/94f40cff62a1da7122240783784b3ce3bc2edce2))
* **parseropts:** preset.parserOpts should overwrite hostOpts ([8bb7451](https://github.com/Xunnamius/xchangelog/commit/8bb74519ca0e4bf9fe085cd0ad7d191e542cbeec))
* **preset:** no length limit for eslint ([70b1a76](https://github.com/Xunnamius/xchangelog/commit/70b1a768b1e1211e19a64f070a73a6ae0c236515))
* **stream:** is object mode if writerOpts.includeDetails is true ([38e3faa](https://github.com/Xunnamius/xchangelog/commit/38e3faa7dcff12bb057b781745b7253cf1bd8be2))

<br />

### 🏗️ Patch [0.1.3](https://github.com/Xunnamius/xchangelog/compare/v0.1.2...v0.1.3) (2015-07-22)

#### 🪄 Fixes

* **preset:** work if more than two semver tags ([b8ad049](https://github.com/Xunnamius/xchangelog/commit/b8ad0495f523a21e6978b9ecdf112c5b60228109))

<br />

### 🏗️ Patch [0.1.2](https://github.com/Xunnamius/xchangelog/compare/v0.1.1...v0.1.2) (2015-07-22)

#### 🪄 Fixes

* **pkg.transform:** transform should be performed before normalizing pkgData ([7c59bfd](https://github.com/Xunnamius/xchangelog/commit/7c59bfd939e8fe4de124e23d86261f8ca3204003))
* **pkgrepo:** get version even if no `repo.type` ([1016e08](https://github.com/Xunnamius/xchangelog/commit/1016e0875e8e77b8f1e258c1adf680f157f0ab02)) <sup>see [#74](https://github.com/Xunnamius/xchangelog/issues/74), [#75](https://github.com/Xunnamius/xchangelog/issues/75)</sup>

<br />

### 🏗️ Patch [0.1.1](https://github.com/Xunnamius/xchangelog/compare/v0.1.0...v0.1.1) (2015-07-20)

## [0.0.17](https://github.com/Xunnamius/xchangelog/compare/v0.0.16...v0.0.17) (2015-04-03)

## [0.0.16](https://github.com/Xunnamius/xchangelog/compare/v0.0.15...v0.0.16) (2015-03-19)

#### 🪄 Fixes

* **git:** generate the correct cmd of git log when there is no tags ([dcd7551](https://github.com/Xunnamius/xchangelog/commit/dcd7551f7ea325cd8e3e26a12a13845596ec2d5e)) <sup>see [#47](https://github.com/Xunnamius/xchangelog/issues/47), [#48](https://github.com/Xunnamius/xchangelog/issues/48)</sup>

## [0.0.15](https://github.com/Xunnamius/xchangelog/compare/v0.0.14...v0.0.15) (2015-03-18)

#### 🪄 Fixes

* **log:** correct out put for `options.from` and `options.to` ([31ddb11](https://github.com/Xunnamius/xchangelog/commit/31ddb1128c8c1df321794ef0b5431c289628f0d8)) <sup>see [#47](https://github.com/Xunnamius/xchangelog/issues/47)</sup>

## [0.0.14](https://github.com/Xunnamius/xchangelog/compare/v0.0.13...v0.0.14) (2015-03-13)

#### 🪄 Fixes

* **writelog:** fix require statement for Writer ([a478f80](https://github.com/Xunnamius/xchangelog/commit/a478f806633d1efbdd3008248480dbb4b4399452))

## [0.0.13](https://github.com/Xunnamius/xchangelog/compare/v0.0.11...v0.0.13) (2015-03-12)

#### ✨ Features

* **defaults:** version and repository are read from package.json ([cb1feb7](https://github.com/Xunnamius/xchangelog/commit/cb1feb7dd8f14cc55472fd0fbc229f23782c7582)) <sup>see [#38](https://github.com/Xunnamius/xchangelog/issues/38)</sup>

#### 🪄 Fixes

* **first commit:** add first commit to changelog ([386cd40](https://github.com/Xunnamius/xchangelog/commit/386cd4048b0555cf94c2d00bf746cededfa8aeb6))
* **git:** use --abbrev=0 to only get tag from same branch ([69cfb5c](https://github.com/Xunnamius/xchangelog/commit/69cfb5c61bd3c7a6157a980cf8445e8a0b7a902f))
* **header:** fix no `<a>` if options.repository provided ([7cb5cb5](https://github.com/Xunnamius/xchangelog/commit/7cb5cb5635cb221ac779bc63eb1737a38a45d8bb)) <sup>see [#26](https://github.com/Xunnamius/xchangelog/issues/26)</sup>
* **pkg:** handle the situation where package.json cannot be found ([518bc56](https://github.com/Xunnamius/xchangelog/commit/518bc56e12947c14e7644c10c455464e74d0e8b7))
* **version:** default version is read from package.json properly ([f684b9b](https://github.com/Xunnamius/xchangelog/commit/f684b9be95e4a5275f194aeb7261ffb1c6d60e0f))

#### 🔥 Reverted

* *"fix(err): remove an extra error sentence"* ([21c7440](https://github.com/Xunnamius/xchangelog/commit/21c74406157251e59b54a7168eb265dac753b8ac))

## [0.0.11](https://github.com/Xunnamius/xchangelog/compare/v0.0.10...v0.0.11) (2014-05-28)

#### 💥 BREAKING CHANGES 💥

* Removed versionLink and patchVersionLink options, and went back to the default title output from 0.0.9.

If you wish to have a link to your version, simply customize the versionText and patchVersionText options.

#### ✨ Features

* **changelog:** add versionText, patchVersionText options ([37f5561](https://github.com/Xunnamius/xchangelog/commit/37f5561553c30d8f0f2c949502ea278da64949cd))

#### 🪄 Fixes

* **changelog:** make version links work correctly ([4b2de79](https://github.com/Xunnamius/xchangelog/commit/4b2de79996edf12386e5f2c603340a4b0320e92c))

## [0.0.10](https://github.com/Xunnamius/xchangelog/compare/v0.0.9...v0.0.10) (2014-05-28)

#### ✨ Features

* **changelog:** add support for scope with spaces ([b5e43b7](https://github.com/Xunnamius/xchangelog/commit/b5e43b75c6caabc357e4bce0eb64316fbe153ecf)) <sup>see [#9](https://github.com/Xunnamius/xchangelog/issues/9)</sup>
* **git:** allow period-separated closing and lowercase closing ([6835af5](https://github.com/Xunnamius/xchangelog/commit/6835af55d57b62ff6dcebf624f3c6108cbc36b8e))
* **writer:** add tag hyperlink support ([9640cc2](https://github.com/Xunnamius/xchangelog/commit/9640cc279ca9c513b1378eb55b5a7d576fd78bf5))

#### 🪄 Fixes

* **changelog:** put commit range into quotes so it can fetch commits with special characters ([76e2f18](https://github.com/Xunnamius/xchangelog/commit/76e2f185b6542e7fe731c4666323fac68b9e2202)) <sup>see [#10](https://github.com/Xunnamius/xchangelog/issues/10)</sup>

## [0.0.9](https://github.com/Xunnamius/xchangelog/compare/v0.0.8...v0.0.9) (2014-05-06)

#### ✨ Features

* **changelog:** also add `Resolves #xx` to closes section ([06ff3ea](https://github.com/Xunnamius/xchangelog/commit/06ff3ea9b0c8baf2fae6167a99b6826a44a0c768))

#### 🪄 Fixes

* **changelog:** make sure breaking changes are separated by two newlines ([8515216](https://github.com/Xunnamius/xchangelog/commit/8515216093eaa7f997dc506675d729a0e41578d6))

## [0.0.8](https://github.com/Xunnamius/xchangelog/compare/v0.0.7...v0.0.8) (2014-04-10)

#### ✨ Features

* **changelog:** change options.codename to options.subittle ([a00fea5](https://github.com/Xunnamius/xchangelog/commit/a00fea521667533809419af6a66b20ae4ce96e3b))

## [0.0.7](https://github.com/Xunnamius/xchangelog/compare/v0.0.6...v0.0.7) (2014-04-10)

#### ✨ Features

* **changelog:** add options.codename ([e3573c8](https://github.com/Xunnamius/xchangelog/commit/e3573c8774a5ded0a22ad5ab707795159c4bf002))

## [0.0.6](https://github.com/Xunnamius/xchangelog/compare/v0.0.4...v0.0.6) (2014-01-23)

#### 🪄 Fixes

* **git:** sort tags by date ([7318bb0](https://github.com/Xunnamius/xchangelog/commit/7318bb05d335bfa6886e816bec4fc57cd395c2c6))
* **git:** sort tags correctly ([e998c64](https://github.com/Xunnamius/xchangelog/commit/e998c646748f8beb6af7adcf6cd7ac3f80feaf25))

## [0.0.4](https://github.com/Xunnamius/xchangelog/compare/d99694151d8dd8fe65ce390aea6112b60df17820...v0.0.4) (2014-01-04)

#### ✨ Features

* Create conventional-changelog module ([d996941](https://github.com/Xunnamius/xchangelog/commit/d99694151d8dd8fe65ce390aea6112b60df17820))

#### 🪄 Fixes

* **version:** do not try to figure out version ([5c99b72](https://github.com/Xunnamius/xchangelog/commit/5c99b7279b97352a93eca0ee37f198783d64f423))

