<div align="center">

# MyVulna

### Multi-tenant threat intelligence platform for analysts and security teams

[![Public safe](https://img.shields.io/badge/public%20surface-docs%20only-0f766e?style=for-the-badge)](#public-repository-boundary)
[![Source private](https://img.shields.io/badge/source-private-111827?style=for-the-badge)](#public-repository-boundary)
[![Security policy](https://img.shields.io/badge/security-policy-f59e0b?style=for-the-badge)](SECURITY.md)
[![Support](https://img.shields.io/badge/support-guided-2563eb?style=for-the-badge)](SUPPORT.md)

</div>

---

## Overview

MyVulna is a private-source threat intelligence platform built for vulnerability tracking, CVE monitoring, URL intelligence, analyst workflows, and integration-ready security operations.

This repository is the public-safe home for MyVulna. It exists to explain the product, route support requests, publish non-sensitive updates, and provide a responsible security reporting path without exposing source code, infrastructure details, secrets, internal security records, or production data.

## Product areas

<table>
  <tr>
    <td width="50%">
      <h3>Threat intelligence workspace</h3>
      <p>CVE and URL intelligence workflows designed for analyst review, triage, tracking, and reporting.</p>
    </td>
    <td width="50%">
      <h3>Intel Feed</h3>
      <p>Operational feed views for current signals, enrichment, deduplication, and investigation handoff.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>Integration surface</h3>
      <p>API-key protected public API v1 boundary for approved integrations and automation workflows.</p>
    </td>
    <td width="50%">
      <h3>Alerting and reporting</h3>
      <p>SMTP, webhook, in-app alerting, exports, and report generation for security operations teams.</p>
    </td>
  </tr>
</table>

## Public repository boundary

This public repository is intentionally limited.

| Included here | Kept private |
| --- | --- |
| Product overview | Application source code |
| Public support policy | Environment files and credentials |
| Security disclosure policy | Supabase schema, migrations, and SQL operations |
| Non-sensitive release notes | Internal threat models and hardening records |
| Safe issue templates | Production logs, screenshots, tenants, customer data |
| Public-safety validation script | API keys, signing keys, tokens, cookies |

The private MyVulna development repository remains private. Do not open pull requests that add source code, operational SQL, infrastructure configuration, internal audit records, screenshots containing tenant data, or any secret-like value.

## Repository map

```text
myvulna-public/
  README.md                         Public product surface
  SECURITY.md                       Coordinated vulnerability reporting policy
  SUPPORT.md                        Safe support and issue guidance
  CHANGELOG.md                      Non-sensitive public changes
  docs/
    PUBLIC_SCOPE.md                 Public/private boundary rules
    SECURITY_AND_PRIVACY.md         High-level security posture
    RELEASE_NOTES.md                Public release notes template
  scripts/
    validate-public-repo.mjs        Local guard against accidental leaks
```

## Safe contribution rules

- Use sanitized, high-level descriptions.
- Do not include secrets, tokens, database URLs, tenant IDs, customer names, logs, screenshots, exploit chains, or production traces.
- Do not include private repository file paths when they reveal internal implementation details.
- Do not publish vulnerability details in public issues; follow [SECURITY.md](SECURITY.md).
- Keep this repository documentation-only unless a maintainer explicitly approves a public asset.

## Validate before publishing

Run the public-safety guard before every commit:

```bash
npm run validate
```

The validator blocks known sensitive paths, environment files, private source directories, operational security records, large/binary artifacts, and common secret patterns.

## Links

- Security policy: [SECURITY.md](SECURITY.md)
- Support policy: [SUPPORT.md](SUPPORT.md)
- Public scope: [docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md)
- Security and privacy posture: [docs/SECURITY_AND_PRIVACY.md](docs/SECURITY_AND_PRIVACY.md)
- Public release notes: [docs/RELEASE_NOTES.md](docs/RELEASE_NOTES.md)
