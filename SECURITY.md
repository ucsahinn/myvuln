# Security Policy

MyVulna is security-sensitive software. The private source repository, operational runbooks, schema details, internal reports, customer data, production logs, credentials, and infrastructure configuration are not part of this public repository.

## Reporting a vulnerability

Do not publish security vulnerabilities, exploit details, bypass steps, secrets, tenant identifiers, customer data, screenshots with sensitive content, or production logs in public GitHub issues or pull requests.

Preferred reporting path:

1. Use GitHub private vulnerability reporting on this repository if the "Report a vulnerability" flow is available.
2. If private vulnerability reporting is not available, open a public issue that only asks for a private security contact. Do not include technical details in that public issue.
3. Share details privately only after a maintainer confirms the reporting path.

## What to include privately

When a private reporting path is established, include:

- A short impact summary.
- The affected product area.
- Sanitized reproduction steps.
- Expected vs actual behavior.
- Whether the issue requires authentication.
- Any safe, redacted evidence that does not expose secrets or customer data.

## What not to include

Never include:

- API keys, service-role keys, cookies, JWTs, database URLs, private keys, passwords, or tokens.
- Real tenant IDs, customer names, customer payloads, or production screenshots.
- Public exploit chains or weaponized proof-of-concept code.
- Internal source files, migrations, infrastructure diagrams, hardening records, or ownership maps.
- High-volume scanning output or denial-of-service test data from systems you do not own.

## Scope

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

## Disclosure expectation

Please allow time for triage and remediation before public disclosure. The maintainer will coordinate status, remediation notes, and public disclosure timing when the report is valid and actionable.

## Public repository guarantee

This repository is designed to remain public-safe. It must not contain:

- Private source code.
- Secrets or environment files.
- Supabase schema or migrations.
- Operational SQL.
- Internal security reports.
- Production evidence.
- Customer or tenant data.

Run `npm run validate` before every commit to enforce that boundary.
