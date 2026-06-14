# MyVuln

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Hub publico e seguro de produto e suporte para uma superficie de threat intelligence com CVE tracking, analise de URL, Intel Feed, API, alertas e relatorios.

## Por que este repositorio existe

Hub publico e seguro de produto e suporte para uma superficie de threat intelligence com CVE tracking, analise de URL, Intel Feed, API, alertas e relatorios.

Esta pagina localizada e mantida para que leitores entendam o repositorio sem depender apenas de uma etiqueta curta de idioma. A referencia canonica profunda continua em README.md; esta pagina traz contexto suficiente para escolher a entrada, o limite de seguranca e a verificacao correta.

## Para quem e

Equipes de seguranca, analistas, integradores e reviewers que querem entender o escopo publico do MyVuln ou preparar suporte sem vazar dados.

## Comeco rapido

| Se voce precisa... | Abra |
| --- | --- |
| Live product | [https://myvuln.io/](https://myvuln.io/) |
| Live docs | [https://myvuln.io/docs](https://myvuln.io/docs) |
| Public scope | [docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md) |
| Capabilities | [docs/CAPABILITIES.md](docs/CAPABILITIES.md) |
| API v1 | [docs/API_V1.md](docs/API_V1.md) |
| Security policy | [SECURITY.md](SECURITY.md) |
| Support policy | [SUPPORT.md](SUPPORT.md) |

## Mapa do repositorio

- README.md - public product overview
- docs/README.md - public docs index
- docs/PUBLIC_SCOPE.md - source/public boundary
- docs/CAPABILITIES.md - product capabilities
- docs/API_V1.md - public API summary
- SECURITY.md / SUPPORT.md - disclosure and support rules

## Validacao e higiene de release

Antes de commit ou publicacao, revise links, Markdown, validacao existente do repo e Gitleaks.

Caminho recomendado de release/readiness:

1. Revise o README relevante e os documentos linkados.
2. Execute a validacao do repositorio quando existir um comando.
3. Verifique links Markdown e assets locais.
4. Execute Gitleaks ou o secret scan configurado.
5. Verifique origin/main depois do push antes de afirmar que a publicacao terminou.

## Limite de seguranca e escopo publico

Este repo nao e o codigo-fonte. App privada, migracoes Supabase, SQL operacional, dados tenant, logs e segredos permanecem privados.

## Contribuicao e manutencao

Mantenha as paginas localizadas alinhadas com o README canonico quando escopo, passos de instalacao, regras de release ou limites de seguranca mudarem. Nao adicione afirmacoes sem respaldo no repositorio, docs live do produto ou evidencia publica de release.

## Padrao de completude

Este README localizado nao e uma nota curta. Ele explica proposito, entrada, superficies do repositorio, validacao, limite de seguranca e referencias canonicas.

Referencia canonica: [README.md](README.md).
