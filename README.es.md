# MyVuln

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Hub publico y seguro de producto y soporte para una superficie de threat intelligence con CVE tracking, analisis URL, Intel Feed, API, alertas y reportes.

## Por que existe este repositorio

Hub publico y seguro de producto y soporte para una superficie de threat intelligence con CVE tracking, analisis URL, Intel Feed, API, alertas y reportes.

Esta portada localizada se mantiene para que el lector entienda el repositorio sin depender de una etiqueta de idioma corta. La referencia canonica profunda sigue en README.md; esta pagina contiene suficiente contexto para elegir el punto de entrada, el limite de seguridad y la verificacion correcta.

## Para quien es

Equipos de seguridad, analistas, integradores y reviewers que quieren entender el alcance publico de MyVuln o preparar soporte sin filtrar datos.

## Inicio rapido

| Si necesitas... | Abre |
| --- | --- |
| Live product | [https://myvuln.io/](https://myvuln.io/) |
| Live docs | [https://myvuln.io/docs](https://myvuln.io/docs) |
| Public scope | [docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md) |
| Capabilities | [docs/CAPABILITIES.md](docs/CAPABILITIES.md) |
| API v1 | [docs/API_V1.md](docs/API_V1.md) |
| Security policy | [SECURITY.md](SECURITY.md) |
| Support policy | [SUPPORT.md](SUPPORT.md) |

## Mapa del repositorio

- README.md - public product overview
- docs/README.md - public docs index
- docs/PUBLIC_SCOPE.md - source/public boundary
- docs/CAPABILITIES.md - product capabilities
- docs/API_V1.md - public API summary
- SECURITY.md / SUPPORT.md - disclosure and support rules

## Validacion e higiene de release

Antes de commit o publicacion, revisa links, Markdown, validacion existente del repo y Gitleaks.

Ruta recomendada de release/readiness:

1. Revisar el README relevante y los documentos enlazados.
2. Ejecutar la validacion del repositorio cuando exista un comando.
3. Comprobar links Markdown y assets locales.
4. Ejecutar Gitleaks o el secret scan configurado.
5. Verificar origin/main despues del push antes de afirmar que la publicacion termino.

## Limite de seguridad y alcance publico

Este repo no es el codigo fuente. La app privada, migraciones Supabase, SQL operativo, datos tenant, logs y secretos permanecen privados.

## Contribucion y mantenimiento

Mant?n las paginas localizadas alineadas con el README canonico cuando cambien el alcance, los pasos de instalacion, las reglas de release o los limites de seguridad. No agregues afirmaciones que no esten respaldadas por el repositorio, docs live del producto o evidencia publica de release.

## Estandar de completitud

Este README localizado no es una nota corta. Explica proposito, entrada, superficies del repositorio, validacion, limite de seguridad y referencias canonicas.

Referencia canonica: [README.md](README.md).
