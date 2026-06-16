# &#128737; MyVuln - README completa en español

[🇬🇧](README.md) | [🇩🇪](README.de.md) | [🇪🇸](README.es.md) | [🇧🇷](README.pt-BR.md) | [🇹🇷](README.tr.md) | [🇫🇷](README.fr.md)

> Este archivo es una portada completa en español, no un resumen corto. Cubre propósito, límites, uso, validación, seguridad y publicación.
>
> README canónico en inglés: [README.md](README.md)

Public-safe product hub for CVE intelligence, URL analysis, intel feed, API v1, alerting and reports.

Empieza por el README canónico si necesitas la descripción inglesa más actual. Usa esta página cuando quieras el mismo contrato operativo en español.

## Estado y señales de confianza

|Área | Detalle|
|--- | ---|
|Estado | Public repository: ucsahinn/myvuln|
|Fuente de verdad | [README canónico en inglés](README.md)|
|Usuarios | Security teams evaluating MyVuln publicly.; Developers checking API v1 documentation.|
|Validación | Public docs links resolve.; No private endpoints, customer data, tokens or raw findings are exposed.|
|Seguridad | States the public repository boundary clearly.; Keeps source code and operational security material private.|

## Qué es este repositorio

- A public product information hub for MyVuln.
- A documentation surface for vulnerability intelligence capabilities.
- A safe place to describe API v1, reports, alerts, intel feed and product posture.
- A release-independent repo for public docs and disclosure routes.

## Qué no es

- Not the private application source tree.
- Not a live threat-intelligence database.
- Not a place for customer findings, API keys, scan results or credentials.
- Not a substitute for authenticated product documentation where private access is required.

## Para quién es

- Security teams evaluating MyVuln publicly.
- Developers checking API v1 documentation.
- Report and alerting users needing capability context.
- Maintainers preparing public-safe product copy.

## Inicio rápido

1. Clona o actualiza el repositorio.
2. Lee README, seguridad y el mapa de documentación.
3. Ejecuta las validaciones adecuadas.
4. Prepara solo los archivos cambiados de forma explícita.
5. Antes de push o release, revisa remoto, secretos y enlaces otra vez.

## Guía de decisión

- Need public capability overview -> read docs/CAPABILITIES.md.
- Need API details -> read docs/API_V1.md.
- Need security and privacy posture -> read docs/SECURITY_AND_PRIVACY.md.
- Need what is intentionally excluded -> read docs/PUBLIC_SCOPE.md.

## Mapa del repositorio

|Ruta | Por qué importa|
|--- | ---|
|[docs/CAPABILITIES.md](docs/CAPABILITIES.md) | product capabilities|
|[docs/API_V1.md](docs/API_V1.md) | public API v1 documentation|
|[docs/SECURITY_AND_PRIVACY.md](docs/SECURITY_AND_PRIVACY.md) | security and privacy posture|
|[docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md) | public repo boundary|
|[scripts/validate-public-repo.mjs](scripts/validate-public-repo.mjs) | public docs validator|
|[SECURITY.md](SECURITY.md) | disclosure policy|
|[SUPPORT.md](SUPPORT.md) | support route|

## Flujo de trabajo

1. Update public product copy only from approved public facts.
2. Keep private source, customer data and operational signals out of the repo.
3. Validate docs before commit.
4. Run secret scan before push.
5. Verify GitHub rendering and remote HEAD after publication.

## Comandos y validación

Ejecuta estos comandos solo después de clonar el repositorio y entender qué escriben o verifican.

```powershell
npm run validate
node scripts/validate-public-repo.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Lista de verificación

- Public docs links resolve.
- No private endpoints, customer data, tokens or raw findings are exposed.
- API v1 wording stays aligned with docs/API_V1.md.
- Support and security routes are visible.
- Remote HEAD is verified after push.

## Límite de seguridad

- States the public repository boundary clearly.
- Keeps source code and operational security material private.
- Documents API v1, capabilities, security and privacy posture.
- Includes a public repository validator.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Higiene de release y publicación

- This repo publishes public documentation, not private product builds.
- Do not attach datasets, dumps or scanner outputs.
- Update changelog/release notes only when public docs contract changes.
- Push only after validation and secret scan.

## Mantenimiento

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Ruta de contribución

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Definición de terminado

Terminado significa: contenido completo, enlaces correctos, límites de seguridad claros, validación ejecutada, Git limpio y remote HEAD verificado después del push.

|Recomendación | Por qué importa|
|--- | ---|
|Content | Public-safe product hub for CVE intelligence, URL analysis, intel feed, API v1, alerting and reports.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | No private endpoints, customer data, tokens or raw findings are exposed.|
|Verification | Valida estructura, enlaces, Markdown, secretos, scripts relevantes y remote HEAD antes de afirmar que algo está publicado.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Enlaces importantes

|Ruta | Por qué importa|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Capabilities](docs/CAPABILITIES.md) | docs/CAPABILITIES.md|
|[API v1](docs/API_V1.md) | docs/API_V1.md|
|[Public scope](docs/PUBLIC_SCOPE.md) | docs/PUBLIC_SCOPE.md|
|[Security and privacy](docs/SECURITY_AND_PRIVACY.md) | docs/SECURITY_AND_PRIVACY.md|
|[Security policy](SECURITY.md) | SECURITY.md|
|[Support](SUPPORT.md) | SUPPORT.md|
