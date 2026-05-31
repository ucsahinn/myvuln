<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&amp;height=185&amp;color=0:020617,45:0f766e,100:f59e0b&amp;section=header&amp;text=MyVuln&amp;fontColor=fff7ed&amp;fontSize=58&amp;fontAlignY=34&amp;desc=Threat%20intelligence%20workspace%20for%20security%20teams&amp;descAlignY=58&amp;descSize=17" alt="MyVuln public repository banner" />

### CVE intelligence · URL analysis · Intel Feed · API v1 · Alerting · Reports

[![Live product](https://img.shields.io/badge/live-myvuln.io-0f766e?style=for-the-badge&logo=firefox-browser&logoColor=white)](https://myvuln.io/)
[![Docs](https://img.shields.io/badge/docs-myvuln.io%2Fdocs-0891b2?style=for-the-badge&logo=readthedocs&logoColor=white)](https://myvuln.io/docs)
[![Public boundary](https://img.shields.io/badge/public%20repo-docs%20only-111827?style=for-the-badge&logo=github&logoColor=white)](#public-repository-boundary--public-repo-siniri)
[![Private source](https://img.shields.io/badge/source-private-f59e0b?style=for-the-badge&logo=github&logoColor=111827)](#public-repository-boundary--public-repo-siniri)
[![Security policy](https://img.shields.io/badge/security-policy-ef4444?style=for-the-badge&logo=securityscorecard&logoColor=white)](SECURITY.md)
[![Support](https://img.shields.io/badge/support-guided-2563eb?style=for-the-badge&logo=gitbook&logoColor=white)](SUPPORT.md)

<br />

[![Next.js](https://img.shields.io/badge/Next.js%2016-020617?style=flat-square&logo=nextdotjs&logoColor=white)](#technical-posture--teknik-konum)
[![React](https://img.shields.io/badge/React%2019-020617?style=flat-square&logo=react&logoColor=61dafb)](#technical-posture--teknik-konum)
[![Supabase](https://img.shields.io/badge/Supabase-private%20backend-020617?style=flat-square&logo=supabase&logoColor=3ecf8e)](#public-repository-boundary--public-repo-siniri)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-020617?style=flat-square&logo=typescript&logoColor=60a5fa)](#technical-posture--teknik-konum)

</div>

---

## Türkçe

MyVuln; güvenlik ekipleri, analistler ve operasyon tarafı için tasarlanmış çok kiracılı bir tehdit istihbaratı platformudur. CVE takibi, URL istihbaratı, Intel Feed, API entegrasyonları, uyarı akışları ve raporlama süreçlerini tek bir çalışma yüzeyinde toplar.

Canlı ürün: [https://myvuln.io/](https://myvuln.io/)

Canlı dokümantasyon: [https://myvuln.io/docs](https://myvuln.io/docs)

Bu repo kaynak kod deposu değildir. MyVuln'in public vitrin, destek, güvenlik politikası ve yayın notları yüzeyidir. Private kaynak kod, Supabase migration'ları, operasyon SQL'leri, iç güvenlik kayıtları, müşteri/tenant verileri ve secret içeren hiçbir dosya burada tutulmaz.

## English

MyVuln is a multi-tenant threat intelligence platform for security teams, analysts, and operational workflows. It brings CVE tracking, URL intelligence, Intel Feed review, API integrations, alerting, exports, and reporting into a single product surface.

Live product: [https://myvuln.io/](https://myvuln.io/)

Live documentation: [https://myvuln.io/docs](https://myvuln.io/docs)

This is not the source-code repository. This public repository is the safe product hub for MyVuln: overview, support, security policy, and public release notes. Source code, Supabase migrations, operational SQL, internal security records, customer/tenant data, and secrets stay private.

---

## Product snapshot · Ürün özeti

<table>
  <tr>
    <td width="50%">
      <h3>Threat intelligence workspace</h3>
      <p>CVE, URL, and signal review workflows for analyst triage and investigation tracking.</p>
      <p><strong>TR:</strong> CVE, URL ve sinyal inceleme süreçleri için analist odaklı çalışma alanı.</p>
    </td>
    <td width="50%">
      <h3>Intel Feed</h3>
      <p>Operational feed surface for signal review, enrichment, deduplication, and handoff.</p>
      <p><strong>TR:</strong> Sinyal inceleme, zenginleştirme, tekrar azaltma ve aksiyon aktarımı için operasyonel feed.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>API v1 boundary</h3>
      <p>API-key protected integration surface for approved security automation and reporting flows.</p>
      <p><strong>TR:</strong> Onaylı otomasyon ve raporlama akışları için API-key korumalı entegrasyon yüzeyi.</p>
    </td>
    <td width="50%">
      <h3>Alerts and reports</h3>
      <p>SMTP, webhook, in-app alerts, exports, and report generation for security operations.</p>
      <p><strong>TR:</strong> SMTP, webhook, uygulama içi uyarı, export ve rapor üretimi.</p>
    </td>
  </tr>
</table>

## Live docs reference · Canlı doküman referansı

The public product docs at [myvuln.io/docs](https://myvuln.io/docs) describe the current public surface for operators and integrators. This repository mirrors only safe, high-level summaries and links back to the live docs for the active product contract.

[myvuln.io/docs](https://myvuln.io/docs) üzerindeki canlı ürün dokümantasyonu operatör ve entegrasyon ekipleri için güncel public yüzeyi anlatır. Bu repo yalnızca güvenli, üst seviye özetleri tutar ve aktif ürün sözleşmesi için canlı dokümantasyona yönlendirir.

| Public surface | What it covers | Türkçe |
| --- | --- | --- |
| Intelligence workspace | CVE dashboard, CVE database, IoC database, USOM intelligence, Intel Feed, Intelligence Terminal. | CVE paneli, CVE veritabanı, IoC veritabanı, USOM istihbaratı, Intel Feed ve Intelligence Terminal. |
| Public API v1 | CVE feed/search, URL feed/search, SIEM/webhook dispatch. | CVE feed/search, URL feed/search ve SIEM/webhook aktarımı. |
| Operations | World Threat Map, reports, analytics, system logs, SMTP and webhook alert routing. | World Threat Map, raporlar, analitik, sistem logları, SMTP ve webhook uyarı akışı. |
| Administration | Team management, role boundaries, API key lifecycle, account controls. | Ekip yönetimi, rol sınırları, API key yaşam döngüsü ve hesap kontrolleri. |

See also:

- [Public API v1 summary](docs/API_V1.md)
- [Capabilities](docs/CAPABILITIES.md)

## Operating model · Çalışma modeli

| Area | English | Türkçe |
| --- | --- | --- |
| Intelligence | CVE and URL intelligence workflows for analyst teams. | Analist ekipleri için CVE ve URL istihbaratı akışları. |
| Triage | Review queues, status tracking, enrichment, and reporting handoff. | İnceleme kuyrukları, durum takibi, zenginleştirme ve raporlama aktarımı. |
| Integrations | API v1, alerting, webhook, SMTP, and export workflows. | API v1, uyarı, webhook, SMTP ve export iş akışları. |
| Governance | Private source, public-safe docs, coordinated vulnerability reporting. | Private kaynak, public-safe dokümantasyon, koordineli zafiyet bildirimi. |

## Public API v1 · Public API v1

The external integration contract is limited to `/api/v1/*`. Public docs currently cover:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/v1/feed/cves` | Normalized CVE feed with filtering and pagination. |
| GET | `/api/v1/search/cves` | Analyst-oriented CVE search with relevance ordering. |
| GET | `/api/v1/feed/urls` | URL/domain indicator feed with deduplication controls. |
| GET | `/api/v1/search/urls` | URL/domain search for investigation workflows. |
| POST | `/api/v1/integrations/siem/dispatch` | Splunk, Sentinel, or generic webhook dispatch flow. |

Authentication, limits, response headers, and response examples are documented in the live docs: [myvuln.io/docs](https://myvuln.io/docs).

## Technical posture · Teknik konum

<table>
  <tr>
    <td width="33%">
      <h3>Frontend</h3>
      <p>Next.js 16, React 19, TypeScript, dashboard-first interface design.</p>
    </td>
    <td width="33%">
      <h3>Backend</h3>
      <p>Supabase-backed private implementation with server-side boundaries.</p>
    </td>
    <td width="33%">
      <h3>Security</h3>
      <p>Tenant-aware design, API-key integration boundary, RBAC, private disclosure path.</p>
    </td>
  </tr>
</table>

<p>
  <img src="https://skillicons.dev/icons?i=nextjs,react,ts,supabase,postgres,nodejs" alt="MyVuln core technology icons" />
</p>

## Public repository boundary · Public repo sınırı

| Published here | Private by design |
| --- | --- |
| Product overview and public positioning | Application source code |
| TR/EN public documentation | Environment files and credentials |
| Security disclosure policy | Supabase schema, migrations, and operational SQL |
| Support and issue templates | Internal threat models and hardening records |
| Non-sensitive release notes | Production logs, screenshots, tenant data, customer data |
| Public-safety validation script | API keys, signing keys, tokens, cookies |

The private MyVuln development repository remains private. Public issues and pull requests must not contain source code, schema details, exploit steps, secrets, tenant/customer data, or production evidence.

MyVuln private kaynak reposu private kalır. Public issue veya pull request içinde kaynak kod, schema detayı, exploit adımı, secret, tenant/müşteri verisi veya production kanıtı paylaşılmaz.

## Security and disclosure · Güvenlik bildirimi

Security reports must follow [SECURITY.md](SECURITY.md). Do not publish vulnerability details in public issues.

Güvenlik bildirimleri [SECURITY.md](SECURITY.md) üzerinden ilerlemelidir. Zafiyet detayları public issue içinde paylaşılmamalıdır.

## Repository map · Repo haritası

```text
myvuln/
  README.md                         Public TR/EN product showcase
  SECURITY.md                       Coordinated vulnerability reporting policy
  SUPPORT.md                        Public-safe support guidance
  CHANGELOG.md                      Public-safe change log
  docs/
    API_V1.md                      Public API v1 summary linked to live docs
    CAPABILITIES.md                Public product capability map
    PUBLIC_SCOPE.md                 Public/private boundary rules
    SECURITY_AND_PRIVACY.md         High-level security and privacy posture
    RELEASE_NOTES.md                Public release-note template
  scripts/
    validate-public-repo.mjs        Leak-prevention guard for this public repo
```

## Validation · Yayın öncesi kontrol

Run before every commit:

```bash
npm run validate
```

Recommended public release gate:

```bash
npm run validate
gitleaks detect --source . --redact --exit-code 1
git diff --cached --check
```

The validator blocks sensitive paths, environment files, private source directories, operational security records, binary-like files, and common secret patterns.

## Public links · Bağlantılar

| Destination | Link |
| --- | --- |
| Live product | [myvuln.io](https://myvuln.io/) |
| Live docs | [myvuln.io/docs](https://myvuln.io/docs) |
| Public API v1 summary | [docs/API_V1.md](docs/API_V1.md) |
| Capabilities | [docs/CAPABILITIES.md](docs/CAPABILITIES.md) |
| Security policy | [SECURITY.md](SECURITY.md) |
| Support policy | [SUPPORT.md](SUPPORT.md) |
| Public scope | [docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md) |
| Security and privacy | [docs/SECURITY_AND_PRIVACY.md](docs/SECURITY_AND_PRIVACY.md) |
| Public release notes | [docs/RELEASE_NOTES.md](docs/RELEASE_NOTES.md) |

---

<div align="center">

<strong>Private source. Public trust surface. Clear security boundaries.</strong>

<br />
<br />

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&amp;height=95&amp;color=0:f59e0b,45:0f766e,100:020617&amp;section=footer" alt="MyVuln footer wave" />

</div>
