# MyVuln

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Public-safe Produkt- und Support-Hub fuer eine Threat-Intelligence-Arbeitsflaeche mit CVE-Tracking, URL-Analyse, Intel Feed, API, Alerts und Reports.

## Warum dieses Repository existiert

Public-safe Produkt- und Support-Hub fuer eine Threat-Intelligence-Arbeitsflaeche mit CVE-Tracking, URL-Analyse, Intel Feed, API, Alerts und Reports.

Diese lokalisierte Startseite wird gepflegt, damit Leser das Repository nicht nur ueber ein kurzes Sprach-Badge verstehen muessen. Die tiefe kanonische Referenz bleibt in README.md; diese Seite enthaelt genug Kontext, um den richtigen Einstieg, die Sicherheitsgrenze und die Verifikation zu waehlen.

## Fuer wen es gedacht ist

Security-Teams, Analysten, Integratoren und Reviewer, die den oeffentlichen MyVuln-Umfang verstehen oder Support sicher vorbereiten wollen.

## Schnellstart

| Wenn du brauchst... | Oeffne |
| --- | --- |
| Live product | [https://myvuln.io/](https://myvuln.io/) |
| Live docs | [https://myvuln.io/docs](https://myvuln.io/docs) |
| Public scope | [docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md) |
| Capabilities | [docs/CAPABILITIES.md](docs/CAPABILITIES.md) |
| API v1 | [docs/API_V1.md](docs/API_V1.md) |
| Security policy | [SECURITY.md](SECURITY.md) |
| Support policy | [SUPPORT.md](SUPPORT.md) |

## Repository-Karte

- README.md - public product overview
- docs/README.md - public docs index
- docs/PUBLIC_SCOPE.md - source/public boundary
- docs/CAPABILITIES.md - product capabilities
- docs/API_V1.md - public API summary
- SECURITY.md / SUPPORT.md - disclosure and support rules

## Validierung und Release-Hygiene

Vor Commit oder Veroeffentlichung sollten Links, Markdown, vorhandene Repo-Validierung und Gitleaks geprueft werden.

Empfohlener Release-/Readiness-Pfad:

1. Relevante README und verlinkte Dokumente pruefen.
2. Die Validierung des Repositories ausfuehren, wenn ein Befehl vorhanden ist.
3. Markdown-Links und lokale Assets kontrollieren.
4. Gitleaks oder den konfigurierten Secret Scan ausfuehren.
5. Nach dem Push origin/main pruefen, bevor Veroeffentlichung als erledigt gemeldet wird.

## Sicherheits- und Public-Scope-Grenze

Dieses Repo ist keine Source-Code-Ablage. Private App-Quelle, Supabase-Migrationen, operative SQLs, Tenant-Daten, Logs und Secrets bleiben privat.

## Mitwirken und Pflege

Halten Sie lokalisierte Seiten synchron mit der kanonischen README, wenn sich Scope, Installationsschritte, Release-Regeln oder Sicherheitsgrenzen aendern. Fuegen Sie keine Aussagen hinzu, die nicht durch Repository, Live-Produktdokumentation oder oeffentliche Release-Nachweise gedeckt sind.

## Vollstaendigkeitsstandard

Diese lokalisierte README ist keine Kurznotiz. Sie erklaert Zweck, Einstieg, Repository-Flaechen, Validierung, Sicherheitsgrenze und kanonische Referenzen.

Kanonische Referenz: [README.md](README.md).
