# Public Scope / Public Kapsam

This document defines what may and may not be published in this public MyVuln repository.

Bu doküman public MyVuln reposu içinde neyin yayınlanabileceğini ve neyin kesin olarak private kalması gerektiğini tanımlar.

## Allowed / Yayınlanabilir

- High-level product descriptions.
- Public-safe feature summaries.
- Links to live public docs such as `https://myvuln.io/docs`.
- Public API endpoint names and high-level behavior for `/api/v1/*`.
- Support and security reporting policies.
- Non-sensitive release notes.
- Public roadmap language that does not expose internal architecture.
- Sanitized screenshots only when every sensitive value is removed.

Türkçe:

- Üst seviye ürün anlatımı.
- Public-safe özellik özetleri.
- `https://myvuln.io/docs` gibi canlı public dokümantasyon linkleri.
- `/api/v1/*` için public endpoint adları ve üst seviye davranış özetleri.
- Destek ve güvenlik bildirim politikaları.
- Hassas bilgi içermeyen yayın notları.
- İç mimariyi açığa çıkarmayan roadmap dili.
- Tüm hassas değerleri temizlenmiş ekran görüntüleri.

## Not allowed / Yayınlanmaz

- Application source code.
- `.env`, `.env.local`, production config, credentials, tokens, cookies, private keys, signing keys, or database URLs.
- Supabase migrations, schema files, SQL operations, database exports, and tenant data.
- Internal security reports, threat models, ownership maps, audit logs, hardening records, or incident notes.
- Stack traces, production logs, debug output, screenshots with customer data, and exported reports.
- Exploit chains, bypass details, weaponized proof-of-concept code, or vulnerability reproduction steps in public.

Türkçe:

- Uygulama kaynak kodu.
- `.env`, `.env.local`, production config, credential, token, cookie, private key, signing key veya database URL.
- Supabase migration, schema, SQL operasyonu, database export ve tenant verisi.
- İç güvenlik raporu, threat model, ownership map, audit log, hardening kaydı veya incident notu.
- Stack trace, production log, debug output, müşteri verili screenshot ve export edilmiş rapor.
- Exploit zinciri, bypass detayı, weaponized PoC veya public zafiyet reprodüksiyon adımları.

## Review checklist / Kontrol listesi

Before publishing:

- Run `npm run validate`.
- Run a secret scanner such as Gitleaks.
- Inspect `git status --short`.
- Stage explicit files only.
- Review `git diff --cached`.
- Confirm that every file is intentionally public.

Yayın öncesi:

- `npm run validate` çalıştır.
- Gitleaks gibi bir secret scanner çalıştır.
- `git status --short` çıktısını kontrol et.
- Sadece açıkça seçilen dosyaları stage et.
- `git diff --cached` çıktısını incele.
- Her dosyanın bilinçli şekilde public olduğundan emin ol.

## If a leak happens / Sızıntı olursa

If a secret or sensitive artifact is committed or pushed:

1. Treat the secret as compromised.
2. Rotate or revoke the credential first.
3. Remove the public artifact.
4. Review git history cleanup separately.
5. Document the incident privately, not in this public repository.

Bir secret veya hassas artefact commit/push olursa:

1. Secret'ı ele geçirilmiş kabul et.
2. Önce ilgili credential'ı rotate veya revoke et.
3. Public artefact'ı kaldır.
4. Git history cleanup konusunu ayrıca değerlendir.
5. Incident kaydını public repo içinde değil, private süreçte dokümante et.
