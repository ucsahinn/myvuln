# &#128737; MyVuln - eksiksiz Türkçe README

[🇬🇧](README.md) | [🇩🇪](README.de.md) | [🇪🇸](README.es.md) | [🇧🇷](README.pt-BR.md) | [🇹🇷](README.tr.md) | [🇫🇷](README.fr.md)

> Bu dosya kısa bir özet değil, tam Türkçe giriş sayfasıdır. Amaç, sınır, kullanım, doğrulama, güvenlik ve yayın akışını tek yerde anlatır.
>
> Kanonik İngilizce README: [README.md](README.md)

Public-safe product hub for CVE intelligence, URL analysis, intel feed, API v1, alerting and reports.

En güncel İngilizce anlatım için kanonik README ile başlayın. Aynı operasyonel sözleşmeyi Türkçe okumak için bu sayfayı kullanın.

## Durum ve güven sinyalleri

|Alan | Detay|
|--- | ---|
|Durum | Public repository: ucsahinn/myvuln|
|Doğru kaynak | [Kanonik İngilizce README](README.md)|
|Kullanıcılar | Security teams evaluating MyVuln publicly.; Developers checking API v1 documentation.|
|Doğrulama | Public docs links resolve.; No private endpoints, customer data, tokens or raw findings are exposed.|
|Güvenlik | States the public repository boundary clearly.; Keeps source code and operational security material private.|

## Bu repo nedir

- A public product information hub for MyVuln.
- A documentation surface for vulnerability intelligence capabilities.
- A safe place to describe API v1, reports, alerts, intel feed and product posture.
- A release-independent repo for public docs and disclosure routes.

## Ne değildir

- Not the private application source tree.
- Not a live threat-intelligence database.
- Not a place for customer findings, API keys, scan results or credentials.
- Not a substitute for authenticated product documentation where private access is required.

## Kimler için

- Security teams evaluating MyVuln publicly.
- Developers checking API v1 documentation.
- Report and alerting users needing capability context.
- Maintainers preparing public-safe product copy.

## Hızlı başlangıç

1. Repoyu klonla veya güncelle.
2. README, güvenlik ve doküman haritasını oku.
3. Uygun doğrulamaları çalıştır.
4. Sadece bilinçli değişen dosyaları stage et.
5. Push veya release öncesi remote, secret ve link kontrollerini tekrar yap.

## Karar rehberi

- Need public capability overview -> read docs/CAPABILITIES.md.
- Need API details -> read docs/API_V1.md.
- Need security and privacy posture -> read docs/SECURITY_AND_PRIVACY.md.
- Need what is intentionally excluded -> read docs/PUBLIC_SCOPE.md.

## Repo haritası

|Yol | Neden önemli|
|--- | ---|
|[docs/CAPABILITIES.md](docs/CAPABILITIES.md) | product capabilities|
|[docs/API_V1.md](docs/API_V1.md) | public API v1 documentation|
|[docs/SECURITY_AND_PRIVACY.md](docs/SECURITY_AND_PRIVACY.md) | security and privacy posture|
|[docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md) | public repo boundary|
|[scripts/validate-public-repo.mjs](scripts/validate-public-repo.mjs) | public docs validator|
|[SECURITY.md](SECURITY.md) | disclosure policy|
|[SUPPORT.md](SUPPORT.md) | support route|

## Çalışma akışı

1. Update public product copy only from approved public facts.
2. Keep private source, customer data and operational signals out of the repo.
3. Validate docs before commit.
4. Run secret scan before push.
5. Verify GitHub rendering and remote HEAD after publication.

## Komutlar ve doğrulama

Bu komutları sadece repoyu yerelde klonladıktan ve neyi kontrol ettiklerini anladıktan sonra çalıştırın.

```powershell
npm run validate
node scripts/validate-public-repo.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Doğrulama listesi

- Public docs links resolve.
- No private endpoints, customer data, tokens or raw findings are exposed.
- API v1 wording stays aligned with docs/API_V1.md.
- Support and security routes are visible.
- Remote HEAD is verified after push.

## Güvenlik sınırı

- States the public repository boundary clearly.
- Keeps source code and operational security material private.
- Documents API v1, capabilities, security and privacy posture.
- Includes a public repository validator.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Release ve yayın hijyeni

- This repo publishes public documentation, not private product builds.
- Do not attach datasets, dumps or scanner outputs.
- Update changelog/release notes only when public docs contract changes.
- Push only after validation and secret scan.

## Bakım

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Katkı yolu

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Bitti tanımı

Bitti demek: içerik tam, linkler doğru, güvenlik sınırı net, doğrulama çalışmış, Git temiz ve push sonrası remote HEAD kontrol edilmiş demektir.

|Öneri | Neden önemli|
|--- | ---|
|Content | Public-safe product hub for CVE intelligence, URL analysis, intel feed, API v1, alerting and reports.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | No private endpoints, customer data, tokens or raw findings are exposed.|
|Verification | Public bir iddia vermeden önce yapıyı, linkleri, Markdown’u, secret taramasını, ilgili scriptleri ve remote HEAD’i doğrula.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Önemli bağlantılar

|Yol | Neden önemli|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Capabilities](docs/CAPABILITIES.md) | docs/CAPABILITIES.md|
|[API v1](docs/API_V1.md) | docs/API_V1.md|
|[Public scope](docs/PUBLIC_SCOPE.md) | docs/PUBLIC_SCOPE.md|
|[Security and privacy](docs/SECURITY_AND_PRIVACY.md) | docs/SECURITY_AND_PRIVACY.md|
|[Security policy](SECURITY.md) | SECURITY.md|
|[Support](SUPPORT.md) | SUPPORT.md|
