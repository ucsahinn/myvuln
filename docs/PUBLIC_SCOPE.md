# Public Scope

This document defines what may and may not be published in `myvulna-public`.

## Allowed

- High-level product descriptions.
- Public-safe feature summaries.
- Support and security reporting policies.
- Non-sensitive release notes.
- Public roadmap language that does not expose internal architecture.
- Sanitized screenshots only when every sensitive value is removed.

## Not allowed

- Application source code.
- `.env`, `.env.local`, production config, credentials, tokens, cookies, private keys, signing keys, or database URLs.
- Supabase migrations, schema files, SQL operations, database exports, and tenant data.
- Internal security reports, threat models, ownership maps, audit logs, hardening records, or incident notes.
- Stack traces, production logs, debug output, screenshots with customer data, and exported reports.
- Exploit chains, bypass details, weaponized proof-of-concept code, or vulnerability reproduction steps in public.

## Review checklist

Before publishing:

- Run `npm run validate`.
- Run a secret scanner such as Gitleaks.
- Inspect `git status --short`.
- Stage explicit files only.
- Review `git diff --cached`.
- Confirm that every file is intentionally public.

## If a leak happens

If a secret or sensitive artifact is committed or pushed:

1. Treat the secret as compromised.
2. Rotate or revoke the credential first.
3. Remove the public artifact.
4. Review git history cleanup separately.
5. Document the incident privately, not in this public repository.
