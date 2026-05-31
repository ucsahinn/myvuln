# Public API v1 / Public API v1

This document is a public-safe summary of the external MyVuln API surface. The live product documentation remains the active reference:

- Live docs: [https://myvuln.io/docs](https://myvuln.io/docs)
- Base production API surface: `https://myvuln.io/api/v1`
- Public contract boundary: `/api/v1/*`

Bu doküman MyVuln external API yüzeyinin public-safe özetidir. Aktif referans canlı ürün dokümantasyonudur:

- Canlı dokümantasyon: [https://myvuln.io/docs](https://myvuln.io/docs)
- Production API yüzeyi: `https://myvuln.io/api/v1`
- Public sözleşme sınırı: `/api/v1/*`

## Endpoints / Endpointler

| Method | Endpoint | English | Türkçe |
| --- | --- | --- | --- |
| GET | `/api/v1/feed/cves` | Normalized CVE feed for incremental ingestion, filtering, and pagination. | Filtreleme, sayfalama ve incremental ingestion için normalize CVE feed. |
| GET | `/api/v1/search/cves` | Analyst-oriented CVE search with relevance-aware results. | Relevance odaklı analist CVE araması. |
| GET | `/api/v1/feed/urls` | URL/domain feed with indicator kind and deduplication controls. | Indicator türü ve deduplication kontrolleri olan URL/domain feed. |
| GET | `/api/v1/search/urls` | URL/domain investigation search for analyst workflows. | Analist akışları için URL/domain araştırma araması. |
| POST | `/api/v1/integrations/siem/dispatch` | Splunk, Sentinel, or generic webhook dispatch flow. | Splunk, Sentinel veya generic webhook aktarım akışı. |

## Integration posture / Entegrasyon duruşu

- Authentication uses MyVuln client credentials managed inside the product.
- Feed and search endpoints support filtering, pagination, and freshness-oriented polling.
- SIEM dispatch supports dry-run preview behavior before outbound delivery.
- The dispatch flow rejects unsafe target behavior at the public contract level.
- Rate limits and response schema details are maintained in the live docs.

Türkçe:

- Authentication, ürün içinden yönetilen MyVuln client credential'ları ile yapılır.
- Feed ve search endpointleri filtreleme, sayfalama ve güncellik odaklı polling destekler.
- SIEM dispatch, outbound delivery öncesi dry-run preview davranışı destekler.
- Dispatch akışı unsafe target davranışlarını public sözleşme seviyesinde reddeder.
- Rate limit ve response schema detayları canlı dokümantasyonda tutulur.

## Public repo boundary / Public repo sınırı

This repository does not publish implementation code, database schema, Supabase migrations, operational SQL, secret material, live payloads, tenant identifiers, logs, or internal security evidence.

Bu repo uygulama kodu, database schema, Supabase migration, operasyon SQL'i, secret materyali, canlı payload, tenant identifier, log veya internal güvenlik kanıtı yayınlamaz.
