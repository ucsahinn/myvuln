# Security And Privacy Posture / Güvenlik ve gizlilik duruşu

MyVuln is designed as a security operations product. This public repository intentionally describes the posture at a high level without publishing implementation details that would weaken the private product.

MyVuln bir güvenlik operasyon ürünü olarak tasarlanır. Bu public repo, private ürünü zayıflatabilecek uygulama detaylarını yayınlamadan yalnızca yüksek seviyeli güvenlik ve gizlilik duruşunu anlatır.

## Public principles / Public ilkeler

- Private source remains private.
- Secrets remain in environment variables or secret-management systems, never in source control.
- Service-role and privileged credentials stay server-side.
- Public API access is API-key protected.
- External integrations are scoped to the public `/api/v1/*` contract.
- Authentication and authorization are enforced server-side.
- Role boundaries and tenant-aware access are described publicly without publishing policy internals.
- Tenant and customer data must not appear in public issues, docs, screenshots, or logs.
- Security reports use a private disclosure path.

Türkçe:

- Private kaynak private kalır.
- Secret'lar source control içinde değil, environment veya secret-management sistemlerinde tutulur.
- Service-role ve ayrıcalıklı credential'lar server-side kalır.
- Public API erişimi API-key korumalıdır.
- External entegrasyonlar public `/api/v1/*` sözleşmesiyle sınırlıdır.
- Authentication ve authorization server-side enforce edilir.
- Rol sınırları ve tenant-aware erişim policy iç detayları yayınlanmadan anlatılır.
- Tenant ve müşteri verisi public issue, doküman, screenshot veya log içinde yer almaz.
- Güvenlik bildirimleri private disclosure path üzerinden ilerler.

## Data handling expectations / Veri paylaşım beklentisi

Public discussions must use synthetic examples only. Do not post:

- Customer names.
- Tenant identifiers.
- Internal URLs.
- Exported reports.
- Production logs.
- Screenshots containing real data.
- Alert payloads copied from production.

Public tartışmalarda yalnızca sentetik örnek kullanılmalıdır. Şunlar paylaşılmaz:

- Müşteri isimleri.
- Tenant identifier'ları.
- İç URL'ler.
- Export edilmiş raporlar.
- Production log'ları.
- Gerçek veri içeren screenshot'lar.
- Production ortamından kopyalanmış alert payload'ları.

## Repository safety model / Repo güvenlik modeli

This repository contains only public-safe documentation and policy files. It excludes source code, operational SQL, schema details, internal audit records, ownership maps, and security verification evidence.

Use [PUBLIC_SCOPE.md](PUBLIC_SCOPE.md) as the allowlist before adding any new public file.

Bu repo yalnızca public-safe doküman ve policy dosyaları içerir. Kaynak kod, operasyon SQL'i, schema detayı, internal audit kaydı, ownership map ve güvenlik doğrulama kanıtı içermez.

Yeni public dosya eklemeden önce [PUBLIC_SCOPE.md](PUBLIC_SCOPE.md) allowlist olarak kullanılmalıdır.
