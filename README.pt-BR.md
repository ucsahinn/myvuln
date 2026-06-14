# &#128737; MyVuln - README completa em português do Brasil

[&#127468;&#127463; English](README.md) | [&#127465;&#127466; Deutsch](README.de.md) | [&#127466;&#127480; Español](README.es.md) | [&#127463;&#127479; Português (Brasil)](README.pt-BR.md) | [&#127481;&#127479; Türkçe](README.tr.md) | [&#127467;&#127479; Français](README.fr.md)

> Este arquivo é uma porta de entrada completa em português do Brasil, não um resumo curto. Ele cobre objetivo, limites, uso, validação, segurança e publicação.
>
> README canônico em inglês: [README.md](README.md)

Public-safe product hub for CVE intelligence, URL analysis, intel feed, API v1, alerting and reports.

Comece pelo README canônico quando precisar da descrição em inglês mais atual. Use esta página para ler o mesmo contrato operacional em português do Brasil.

## Estado e sinais de confiança

|Área | Detalhe|
|--- | ---|
|Status | Public repository: ucsahinn/myvuln|
|Fonte da verdade | [README canônico em inglês](README.md)|
|Usuários | Security teams evaluating MyVuln publicly.; Developers checking API v1 documentation.|
|Validação | Public docs links resolve.; No private endpoints, customer data, tokens or raw findings are exposed.|
|Segurança | States the public repository boundary clearly.; Keeps source code and operational security material private.|

## O que este repositório é

- A public product information hub for MyVuln.
- A documentation surface for vulnerability intelligence capabilities.
- A safe place to describe API v1, reports, alerts, intel feed and product posture.
- A release-independent repo for public docs and disclosure routes.

## O que ele não é

- Not the private application source tree.
- Not a live threat-intelligence database.
- Not a place for customer findings, API keys, scan results or credentials.
- Not a substitute for authenticated product documentation where private access is required.

## Para quem é

- Security teams evaluating MyVuln publicly.
- Developers checking API v1 documentation.
- Report and alerting users needing capability context.
- Maintainers preparing public-safe product copy.

## Início rápido

1. Clone ou atualize o repositório.
2. Leia README, segurança e mapa de documentação.
3. Execute as validações adequadas.
4. Stage somente os arquivos alterados de forma explícita.
5. Antes de push ou release, revise remoto, segredos e links novamente.

## Guia de decisão

- Need public capability overview -> read docs/CAPABILITIES.md.
- Need API details -> read docs/API_V1.md.
- Need security and privacy posture -> read docs/SECURITY_AND_PRIVACY.md.
- Need what is intentionally excluded -> read docs/PUBLIC_SCOPE.md.

## Mapa do repositório

|Caminho | Por que importa|
|--- | ---|
|[docs/CAPABILITIES.md](docs/CAPABILITIES.md) | product capabilities|
|[docs/API_V1.md](docs/API_V1.md) | public API v1 documentation|
|[docs/SECURITY_AND_PRIVACY.md](docs/SECURITY_AND_PRIVACY.md) | security and privacy posture|
|[docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md) | public repo boundary|
|[scripts/validate-public-repo.mjs](scripts/validate-public-repo.mjs) | public docs validator|
|[SECURITY.md](SECURITY.md) | disclosure policy|
|[SUPPORT.md](SUPPORT.md) | support route|

## Fluxo de trabalho

1. Update public product copy only from approved public facts.
2. Keep private source, customer data and operational signals out of the repo.
3. Validate docs before commit.
4. Run secret scan before push.
5. Verify GitHub rendering and remote HEAD after publication.

## Comandos e validação

Execute estes comandos somente depois de clonar o repositório e entender o que eles verificam ou escrevem.

```powershell
npm run validate
node scripts/validate-public-repo.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Lista de verificação

- Public docs links resolve.
- No private endpoints, customer data, tokens or raw findings are exposed.
- API v1 wording stays aligned with docs/API_V1.md.
- Support and security routes are visible.
- Remote HEAD is verified after push.

## Limite de segurança

- States the public repository boundary clearly.
- Keeps source code and operational security material private.
- Documents API v1, capabilities, security and privacy posture.
- Includes a public repository validator.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Higiene de release e publicação

- This repo publishes public documentation, not private product builds.
- Do not attach datasets, dumps or scanner outputs.
- Update changelog/release notes only when public docs contract changes.
- Push only after validation and secret scan.

## Manutenção

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Caminho de contribuição

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Definição de concluído

Concluído significa: conteúdo completo, links corretos, limites de segurança claros, validação executada, Git limpo e remote HEAD verificado depois do push.

|Recomendação | Por que importa|
|--- | ---|
|Content | Public-safe product hub for CVE intelligence, URL analysis, intel feed, API v1, alerting and reports.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | No private endpoints, customer data, tokens or raw findings are exposed.|
|Verification | Valide estrutura, links, Markdown, segredos, scripts relevantes e remote HEAD antes de afirmar que algo foi publicado.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Links importantes

|Caminho | Por que importa|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Capabilities](docs/CAPABILITIES.md) | docs/CAPABILITIES.md|
|[API v1](docs/API_V1.md) | docs/API_V1.md|
|[Public scope](docs/PUBLIC_SCOPE.md) | docs/PUBLIC_SCOPE.md|
|[Security and privacy](docs/SECURITY_AND_PRIVACY.md) | docs/SECURITY_AND_PRIVACY.md|
|[Security policy](SECURITY.md) | SECURITY.md|
|[Support](SUPPORT.md) | SUPPORT.md|
