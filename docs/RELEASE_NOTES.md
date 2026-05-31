# Public Release Notes

Public release notes must be safe for customers, researchers, and prospects to read without exposing private implementation details.

## Template

```md
## Version X.Y.Z - YYYY-MM-DD

### Added
- Public-safe feature summary.

### Improved
- Public-safe user-facing improvement.

### Fixed
- Public-safe behavior fix without exploit detail.

### Security
- Use coordinated disclosure language. Do not include exploit steps, affected internal files, schema details, or bypass mechanics.

### Notes
- Mention upgrade or support guidance only when it is public-safe.
```

## Do not include

- Internal file paths.
- Pull request links from the private repo.
- Commit hashes from the private repo.
- Stack traces.
- Database migrations.
- Secrets or environment variable values.
- Vulnerability reproduction details.
- Customer or tenant evidence.
