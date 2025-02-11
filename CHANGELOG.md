# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/changelog[@1.0.0][3] (2024-11-25)

### 🪄 Fixes

- Ensure `outputUnreleased` resolved correctly given `lernaPackage`/`tagPrefix` ([708d95e][4])
- Ensure `tagPrefix` is escaped in regex; fix tag parsing bug preventing compare links in headers ([778c2a1][5])
- Fix broken upstream types ([d112a8b][6])
- **index:** add `packageName` to global template context ([d9592c5][7])
- Use type-fest to fix unexpected type invariance ([da47d78][8])

### ⚙️ Build System

- **package:** use proper release command flags ([2df3b02][9])

<br />

### 🏗️ Patch @-xun/changelog[@1.0.2][10] (2025-02-11)

#### 🪄 Fixes

- **package:** downgrade @types/conventional-changelog-core to 4.2.8 ([adbe16a][11])

<br />

### 🏗️ Patch @-xun/changelog[@1.0.1][12] (2025-02-08)

#### ⚙️ Build System

- **husky:** use basic lint script in husky hook ([a10734d][13])
- **package:** skip building documentation during release ([9d207bd][14])
- **package:** transition from xscripts to symbiote ([35068af][15])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/xchangelog/compare/708d95e94725b81b5e716ac7c25ed27b9128fec1...@-xun/changelog@1.0.0
[4]: https://github.com/Xunnamius/xchangelog/commit/708d95e94725b81b5e716ac7c25ed27b9128fec1
[5]: https://github.com/Xunnamius/xchangelog/commit/778c2a1bb6c088646a6aac327e22cf587e259186
[6]: https://github.com/Xunnamius/xchangelog/commit/d112a8b1864ea7bbfe638933dad3d205ec90e62a
[7]: https://github.com/Xunnamius/xchangelog/commit/d9592c5e7a8f9545d4ee140c57613d00075d4c00
[8]: https://github.com/Xunnamius/xchangelog/commit/da47d782004cc4145433cde72cb27b5501a2eb60
[9]: https://github.com/Xunnamius/xchangelog/commit/2df3b020624844639e4d6d674b371268a9eb47ac
[10]: https://github.com/Xunnamius/xchangelog/compare/@-xun/changelog@1.0.1...@-xun/changelog@1.0.2
[11]: https://github.com/Xunnamius/xchangelog/commit/adbe16a262eb740c599d8f5a70b411d18abaccf4
[12]: https://github.com/Xunnamius/xchangelog/compare/@-xun/changelog@1.0.0...@-xun/changelog@1.0.1
[13]: https://github.com/Xunnamius/xchangelog/commit/a10734d41dc6d217e35d63b38b5f9dbc9b2da513
[14]: https://github.com/Xunnamius/xchangelog/commit/9d207bdfad1648fe485cdfa06c14277a725918b4
[15]: https://github.com/Xunnamius/xchangelog/commit/35068af89cb88ddfc4ca77188fec3cab736b80ee
