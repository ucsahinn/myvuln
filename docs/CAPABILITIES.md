# Capabilities / Kabiliyetler

This page summarizes the public MyVuln product surface using only information that is already public through [myvuln.io/docs](https://myvuln.io/docs).

Bu sayfa yalnızca [myvuln.io/docs](https://myvuln.io/docs) üzerinde public olan bilgilerden yararlanarak MyVuln ürün yüzeyini özetler.

## Intelligence workflows / İstihbarat akışları

| Area | English | Türkçe |
| --- | --- | --- |
| Intelligence Dashboard | Live threat activity, exposure trends, source health, and analyst orientation. | Canlı tehdit aktivitesi, exposure trendleri, kaynak sağlığı ve analist yönlendirmesi. |
| CVE Database | Searchable vulnerability workspace with severity, vendor, product, and report workflows. | Severity, vendor, product ve raporlama akışları olan aranabilir zafiyet çalışma alanı. |
| USOM Intelligence Center | Coordinated Turkish advisory and malicious-link review surface. | TR advisory ve malicious-link incelemesini birleştiren çalışma yüzeyi. |
| IoC Database | Provider-backed IP, domain, URL, and hash indicator review. | Provider-backed IP, domain, URL ve hash indicator incelemesi. |
| Intelligence Terminal | Lightweight security news and intelligence feed with source attribution. | Source attribution içeren hafif güvenlik haberleri ve istihbarat feed'i. |

## Operations / Operasyon

| Area | English | Türkçe |
| --- | --- | --- |
| Public API v1 | CVE feed/search, URL feed/search, and SIEM dispatch. | CVE feed/search, URL feed/search ve SIEM dispatch. |
| Reports | AI analysis, intel exports, USOM/firewall outputs, and delivery records. | AI analysis, intel export, USOM/firewall output ve delivery kayıtları. |
| Analytics | 30-day analytics, MITRE ATT&CK views, severity movement, and export-oriented insight. | 30 günlük analitik, MITRE ATT&CK görünümü, severity hareketi ve export odaklı içgörü. |
| World Threat Map | Interactive global threat activity and severity view. | Etkileşimli global tehdit aktivitesi ve severity görünümü. |
| System Logs | Structured operational visibility for synchronization, API, auth, and background jobs. | Sync, API, auth ve background job akışları için structured operasyon görünürlüğü. |

## Administration / Yönetim

| Area | English | Türkçe |
| --- | --- | --- |
| API access | Generate, rotate, revoke, and review API contract boundaries inside the product. | API contract sınırlarını ürün içinde üretme, rotate etme, revoke etme ve inceleme. |
| SMTP and webhook settings | Alert routing, test delivery, category toggles, and tenant-aware configuration. | Alert routing, test delivery, kategori kontrolleri ve tenant-aware konfigürasyon. |
| Team management | Member visibility, invites, seat usage, and tenant-scoped role isolation. | Member visibility, davetler, seat kullanımı ve tenant-scoped rol izolasyonu. |
| Roles and permissions | SOC Admin, Analyst, and Enterprise role boundaries. | SOC Admin, Analyst ve Enterprise rol sınırları. |

## Public-safe wording rules / Public-safe anlatım kuralları

- Describe capabilities without publishing internal architecture.
- Link to live docs for active product behavior.
- Use synthetic examples only.
- Keep tenant data, logs, payloads, keys, schema, migrations, and operational SQL private.

Türkçe:

- Kabiliyetleri iç mimariyi yayınlamadan anlat.
- Aktif ürün davranışı için canlı dokümantasyona link ver.
- Yalnızca sentetik örnek kullan.
- Tenant verisi, log, payload, key, schema, migration ve operasyon SQL'i private kalır.
