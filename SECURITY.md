# Security Policy / Güvenlik politikası

MyVulna is security-sensitive software. The private source repository, operational runbooks, schema details, internal reports, customer data, production logs, credentials, and infrastructure configuration are not part of this public repository.

MyVulna güvenlik hassasiyeti yüksek bir üründür. Private kaynak repo, operasyon runbook'ları, schema detayları, internal raporlar, müşteri verisi, production log'ları, credential'lar ve altyapı konfigürasyonu bu public repo kapsamında değildir.

## Reporting a vulnerability / Zafiyet bildirimi

Do not publish security vulnerabilities, exploit details, bypass steps, secrets, tenant identifiers, customer data, screenshots with sensitive content, or production logs in public GitHub issues or pull requests.

Preferred reporting path:

1. Use GitHub private vulnerability reporting on this repository if the "Report a vulnerability" flow is available.
2. If private vulnerability reporting is not available, open a public issue that only asks for a private security contact. Do not include technical details in that public issue.
3. Share details privately only after a maintainer confirms the reporting path.

Türkçe:

Public GitHub issue veya pull request içinde zafiyet, exploit detayı, bypass adımı, secret, tenant identifier, müşteri verisi, hassas screenshot veya production log paylaşmayın.

Tercih edilen bildirim yolu:

1. "Report a vulnerability" akışı varsa GitHub private vulnerability reporting kullanın.
2. Bu akış yoksa yalnızca private güvenlik iletişim yolu isteyen public issue açın. Teknik detay paylaşmayın.
3. Detayları ancak maintainer private bildirim yolunu onayladıktan sonra paylaşın.

## What to include privately / Private bildirim içeriği

When a private reporting path is established, include:

- A short impact summary.
- The affected product area.
- Sanitized reproduction steps.
- Expected vs actual behavior.
- Whether the issue requires authentication.
- Any safe, redacted evidence that does not expose secrets or customer data.

Private kanal kurulduğunda şunları paylaşabilirsiniz:

- Kısa etki özeti.
- Etkilenen ürün alanı.
- Sanitize edilmiş reprodüksiyon adımları.
- Beklenen ve gerçekleşen davranış.
- Sorunun authentication gerektirip gerektirmediği.
- Secret veya müşteri verisi açığa çıkarmayan redacted kanıt.

## What not to include / Paylaşılmayacaklar

Never include:

- API keys, service-role keys, cookies, JWTs, database URLs, private keys, passwords, or tokens.
- Real tenant IDs, customer names, customer payloads, or production screenshots.
- Public exploit chains or weaponized proof-of-concept code.
- Internal source files, migrations, infrastructure diagrams, hardening records, or ownership maps.
- High-volume scanning output or denial-of-service test data from systems you do not own.

Şunları asla paylaşmayın:

- API key, service-role key, cookie, JWT, database URL, private key, password veya token.
- Gerçek tenant ID, müşteri adı, müşteri payload'u veya production screenshot.
- Public exploit zinciri veya weaponized PoC.
- Internal source file, migration, altyapı diagramı, hardening kaydı veya ownership map.
- Sahibi olmadığınız sistemlerden high-volume scan output veya DoS test verisi.

## Scope / Kapsam

In scope:

- MyVulna application behavior.
- Authentication, authorization, tenant isolation, and API access-control issues.
- Data exposure, unsafe redirects, injection, XSS, CSRF, SSRF, file handling, and alerting/reporting abuse paths.
- Public repository leak risks.

Out of scope:

- Social engineering.
- Physical attacks.
- Denial-of-service testing without written permission.
- Vulnerabilities in third-party services that should be reported upstream.
- Automated scanner noise without a reproducible impact statement.

## Disclosure expectation / Yayın beklentisi

Please allow time for triage and remediation before public disclosure. The maintainer will coordinate status, remediation notes, and public disclosure timing when the report is valid and actionable.

Public disclosure öncesi triage ve remediation için zaman tanıyın. Rapor geçerli ve aksiyon alınabilir olduğunda maintainer durum, remediation notları ve public disclosure zamanlamasını koordine eder.

## Public repository guarantee / Public repo garantisi

This repository is designed to remain public-safe. It must not contain:

- Private source code.
- Secrets or environment files.
- Supabase schema or migrations.
- Operational SQL.
- Internal security reports.
- Production evidence.
- Customer or tenant data.

Run `npm run validate` before every commit to enforce that boundary.

Bu repo public-safe kalacak şekilde tasarlanmıştır. Private source code, secret, environment file, Supabase schema/migration, operational SQL, internal security report, production evidence veya customer/tenant data içermemelidir.

Bu sınırı korumak için her commit öncesi `npm run validate` çalıştırın.
