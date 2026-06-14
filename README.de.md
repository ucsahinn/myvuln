# &#128737; MyVuln - vollständige deutsche README

[&#127468;&#127463; English](README.md) | [&#127465;&#127466; Deutsch](README.de.md) | [&#127466;&#127480; Español](README.es.md) | [&#127463;&#127479; Português (Brasil)](README.pt-BR.md) | [&#127481;&#127479; Türkçe](README.tr.md) | [&#127467;&#127479; Français](README.fr.md)

> Diese Datei ist eine vollständige deutsche Einstiegseite, kein kurzer Platzhalter. Sie fasst Zweck, Grenzen, Bedienung, Prüfung, Sicherheit und Veröffentlichung in einer Datei zusammen.
>
> Kanonische englische README: [README.md](README.md)

Public-safe product hub for CVE intelligence, URL analysis, intel feed, API v1, alerting and reports.

Beginnen Sie mit der kanonischen README, wenn Sie die aktuellste englische Beschreibung brauchen. Verwenden Sie diese Seite, wenn Sie den gleichen Vertrag auf Deutsch lesen wollen.

## Status und Vertrauensrahmen

|Bereich | Details|
|--- | ---|
|Status | Public repository: ucsahinn/myvuln|
|Wahrheit | [Kanonische englische README](README.md)|
|Benutzer | Security teams evaluating MyVuln publicly.; Developers checking API v1 documentation.|
|Prüfung | Public docs links resolve.; No private endpoints, customer data, tokens or raw findings are exposed.|
|Sicherheit | States the public repository boundary clearly.; Keeps source code and operational security material private.|

## Was dieses Repository ist

- A public product information hub for MyVuln.
- A documentation surface for vulnerability intelligence capabilities.
- A safe place to describe API v1, reports, alerts, intel feed and product posture.
- A release-independent repo for public docs and disclosure routes.

## Was es nicht ist

- Not the private application source tree.
- Not a live threat-intelligence database.
- Not a place for customer findings, API keys, scan results or credentials.
- Not a substitute for authenticated product documentation where private access is required.

## Für wen es gedacht ist

- Security teams evaluating MyVuln publicly.
- Developers checking API v1 documentation.
- Report and alerting users needing capability context.
- Maintainers preparing public-safe product copy.

## Schnellstart

1. Repository klonen oder aktualisieren.
2. README, Sicherheitsdateien und Dokumentationskarte lesen.
3. Die passenden Prüfungen ausführen.
4. Nur explizit geänderte Dateien stagen.
5. Vor Push oder Release Remote-Status, Secrets und Links erneut prüfen.

## Entscheidungshilfe

- Need public capability overview -> read docs/CAPABILITIES.md.
- Need API details -> read docs/API_V1.md.
- Need security and privacy posture -> read docs/SECURITY_AND_PRIVACY.md.
- Need what is intentionally excluded -> read docs/PUBLIC_SCOPE.md.

## Repository-Karte

|Pfad | Warum es wichtig ist|
|--- | ---|
|[docs/CAPABILITIES.md](docs/CAPABILITIES.md) | product capabilities|
|[docs/API_V1.md](docs/API_V1.md) | public API v1 documentation|
|[docs/SECURITY_AND_PRIVACY.md](docs/SECURITY_AND_PRIVACY.md) | security and privacy posture|
|[docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md) | public repo boundary|
|[scripts/validate-public-repo.mjs](scripts/validate-public-repo.mjs) | public docs validator|
|[SECURITY.md](SECURITY.md) | disclosure policy|
|[SUPPORT.md](SUPPORT.md) | support route|

## Arbeitsablauf

1. Update public product copy only from approved public facts.
2. Keep private source, customer data and operational signals out of the repo.
3. Validate docs before commit.
4. Run secret scan before push.
5. Verify GitHub rendering and remote HEAD after publication.

## Befehle und Prüfung

Führen Sie diese Befehle nur aus, wenn Sie das Repository lokal geclont haben und die Wirkung verstehen.

```powershell
npm run validate
node scripts/validate-public-repo.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Validierungs-Checkliste

- Public docs links resolve.
- No private endpoints, customer data, tokens or raw findings are exposed.
- API v1 wording stays aligned with docs/API_V1.md.
- Support and security routes are visible.
- Remote HEAD is verified after push.

## Sicherheitsgrenze

- States the public repository boundary clearly.
- Keeps source code and operational security material private.
- Documents API v1, capabilities, security and privacy posture.
- Includes a public repository validator.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Release- und Publikationshygiene

- This repo publishes public documentation, not private product builds.
- Do not attach datasets, dumps or scanner outputs.
- Update changelog/release notes only when public docs contract changes.
- Push only after validation and secret scan.

## Wartung

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Beitragspfad

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Definition von fertig

Fertig bedeutet: Inhalt ist lokal vollständig, Links funktionieren, Sicherheitsgrenzen sind klar, Validierung ist gelaufen, Git ist sauber und der Remote-Stand ist nach dem Push geprüft.

|Empfehlung | Warum es wichtig ist|
|--- | ---|
|Content | Public-safe product hub for CVE intelligence, URL analysis, intel feed, API v1, alerting and reports.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | No private endpoints, customer data, tokens or raw findings are exposed.|
|Verification | Prüfen Sie Struktur, Links, Markdown, Secrets, relevante Skripte und Remote-HEAD, bevor Sie eine öffentliche Aussage machen.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Wichtige Links

|Pfad | Warum es wichtig ist|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Capabilities](docs/CAPABILITIES.md) | docs/CAPABILITIES.md|
|[API v1](docs/API_V1.md) | docs/API_V1.md|
|[Public scope](docs/PUBLIC_SCOPE.md) | docs/PUBLIC_SCOPE.md|
|[Security and privacy](docs/SECURITY_AND_PRIVACY.md) | docs/SECURITY_AND_PRIVACY.md|
|[Security policy](SECURITY.md) | SECURITY.md|
|[Support](SUPPORT.md) | SUPPORT.md|
