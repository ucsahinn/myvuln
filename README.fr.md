# MyVuln

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Hub public et sur de produit/support pour une surface de threat intelligence avec suivi CVE, analyse URL, Intel Feed, API, alertes et rapports.

## Pourquoi ce depot existe

Hub public et sur de produit/support pour une surface de threat intelligence avec suivi CVE, analyse URL, Intel Feed, API, alertes et rapports.

Cette page localisee est maintenue pour que le lecteur comprenne le depot sans dependre d un simple badge de langue. La reference canonique complete reste dans README.md; cette page donne assez de contexte pour choisir le bon point d entree, la limite de securite et la verification correcte.

## Pour qui

Equipes securite, analystes, integrateurs et reviewers qui veulent comprendre le perimetre public MyVuln ou preparer le support sans fuite.

## Demarrage rapide

| Si vous avez besoin de... | Ouvrez |
| --- | --- |
| Live product | [https://myvuln.io/](https://myvuln.io/) |
| Live docs | [https://myvuln.io/docs](https://myvuln.io/docs) |
| Public scope | [docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md) |
| Capabilities | [docs/CAPABILITIES.md](docs/CAPABILITIES.md) |
| API v1 | [docs/API_V1.md](docs/API_V1.md) |
| Security policy | [SECURITY.md](SECURITY.md) |
| Support policy | [SUPPORT.md](SUPPORT.md) |

## Carte du depot

- README.md - public product overview
- docs/README.md - public docs index
- docs/PUBLIC_SCOPE.md - source/public boundary
- docs/CAPABILITIES.md - product capabilities
- docs/API_V1.md - public API summary
- SECURITY.md / SUPPORT.md - disclosure and support rules

## Validation et hygiene de release

Avant commit ou publication, verifiez les liens, le Markdown, la validation existante du depot et Gitleaks.

Parcours release/readiness recommande:

1. Relire le README pertinent et les documents lies.
2. Executer la validation du depot lorsqu une commande existe.
3. Verifier les liens Markdown et les assets locaux.
4. Executer Gitleaks ou le secret scan configure.
5. Verifier origin/main apres le push avant d annoncer que la publication est terminee.

## Limite securite et perimetre public

Ce depot n est pas le code source. App privee, migrations Supabase, SQL operationnel, donnees tenant, logs et secrets restent prives.

## Contribution et maintenance

Gardez les pages localisees alignees avec le README canonique lorsque le perimetre, les etapes d installation, les regles de release ou les limites de securite changent. N ajoutez pas d affirmations sans preuve dans le depot, les docs live du produit ou les elements publics de release.

## Standard de completude

Ce README localise n est pas une note courte. Il explique le but, l entree rapide, les surfaces du depot, la validation, la limite de securite et les references canoniques.

Reference canonique: [README.md](README.md).
