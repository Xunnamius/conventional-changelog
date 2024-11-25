# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/changelog\@1.0.0 (2024-11-25)

### 🪄 Fixes

- Ensure `outputUnreleased` resolved correctly given `lernaPackage`/`tagPrefix` ([708d95e][3])
- Ensure `tagPrefix` is escaped in regex; fix tag parsing bug preventing compare links in headers ([778c2a1][4])
- Fix broken upstream types ([d112a8b][5])
- **index:** add `packageName` to global template context ([d9592c5][6])
- Use type-fest to fix unexpected type invariance ([da47d78][7])

### ⚙️ Build System

- **package:** use proper release command flags ([2df3b02][8])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/xchangelog/commit/708d95e94725b81b5e716ac7c25ed27b9128fec1
[4]: https://github.com/Xunnamius/xchangelog/commit/778c2a1bb6c088646a6aac327e22cf587e259186
[5]: https://github.com/Xunnamius/xchangelog/commit/d112a8b1864ea7bbfe638933dad3d205ec90e62a
[6]: https://github.com/Xunnamius/xchangelog/commit/d9592c5e7a8f9545d4ee140c57613d00075d4c00
[7]: https://github.com/Xunnamius/xchangelog/commit/da47d782004cc4145433cde72cb27b5501a2eb60
[8]: https://github.com/Xunnamius/xchangelog/commit/2df3b020624844639e4d6d674b371268a9eb47ac
