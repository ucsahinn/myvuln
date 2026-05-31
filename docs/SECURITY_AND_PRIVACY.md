# Security And Privacy Posture

MyVulna is designed as a security operations product. This public repository intentionally describes the posture at a high level without publishing implementation details that would weaken the private product.

## Public principles

- Private source remains private.
- Secrets remain in environment variables or secret-management systems, never in source control.
- Service-role and privileged credentials stay server-side.
- Public API access is API-key protected.
- Authentication and authorization are enforced server-side.
- Tenant and customer data must not appear in public issues, docs, screenshots, or logs.
- Security reports use a private disclosure path.

## Data handling expectations

Public discussions must use synthetic examples only. Do not post:

- Customer names.
- Tenant identifiers.
- Internal URLs.
- Exported reports.
- Production logs.
- Screenshots containing real data.
- Alert payloads copied from production.

## Repository safety model

This repository contains only public-safe documentation and policy files. It excludes source code, operational SQL, schema details, internal audit records, ownership maps, and security verification evidence.

Use [PUBLIC_SCOPE.md](PUBLIC_SCOPE.md) as the allowlist before adding any new public file.
