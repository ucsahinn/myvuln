# Support / Destek

Use this repository for public-safe MyVulna support and documentation issues only.

Bu repo yalnızca public-safe MyVulna destek ve dokümantasyon konuları için kullanılmalıdır.

## Good public issue content / Uygun public issue içeriği

Safe to include:

- Product area, such as dashboard, Intel Feed, API v1, alerting, exports, or reports.
- Sanitized steps to reproduce a documentation or public-facing issue.
- Browser and operating system versions.
- Expected vs actual behavior.
- Redacted screenshots with no tenant, customer, token, or production data.

Public olarak paylaşılabilir:

- Dashboard, Intel Feed, API v1, alerting, export, report veya docs gibi ürün alanı.
- Dokümantasyon veya public davranış sorunu için sanitize edilmiş adımlar.
- Browser ve işletim sistemi sürümü.
- Beklenen ve gerçekleşen davranış.
- Tenant, müşteri, token veya production verisi içermeyen redacted screenshot.

## Do not post publicly / Public paylaşma

Do not include:

- Vulnerability details or exploit steps.
- API keys, tokens, cookies, secrets, database URLs, private keys, passwords, or service-role values.
- Customer names, tenant IDs, internal URLs, production logs, stack traces, screenshots with sensitive data, or exported reports.
- Private source code, Supabase migrations, operational SQL, internal threat models, or hardening reports.

Public issue içinde şunlar yer almamalıdır:

- Zafiyet detayı veya exploit adımı.
- API key, token, cookie, secret, database URL, private key, password veya service-role değeri.
- Müşteri adı, tenant ID, iç URL, production log, stack trace, hassas screenshot veya export edilmiş rapor.
- Private kaynak kod, Supabase migration, operasyon SQL'i, internal threat model veya hardening raporu.

## Security reports / Güvenlik bildirimleri

Security reports must follow [SECURITY.md](SECURITY.md). Public issues that contain sensitive details may be removed or edited to reduce exposure.

Güvenlik bildirimleri [SECURITY.md](SECURITY.md) üzerinden ilerlemelidir. Hassas detay içeren public issue'lar exposure azaltmak için kaldırılabilir veya düzenlenebilir.

## Private source policy / Private kaynak politikası

The MyVulna source repository remains private. This public repository does not accept source-code pull requests unless a maintainer explicitly asks for a specific public-safe documentation change.

MyVulna kaynak reposu private kalır. Maintainer açıkça public-safe dokümantasyon değişikliği istemedikçe bu repo source-code pull request kabul etmez.
