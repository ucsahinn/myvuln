# MyVuln

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

CVE takibi, URL analizi, Intel Feed, API, uyarilar ve raporlar iceren threat intelligence yuzeyi icin public-safe urun ve destek hub i.

## Bu repo neden var

CVE takibi, URL analizi, Intel Feed, API, uyarilar ve raporlar iceren threat intelligence yuzeyi icin public-safe urun ve destek hub i.

Bu lokalize giris sayfasi, okuyucunun repoyu kisa bir dil etiketine bakarak tahmin etmemesi icin tutulur. Derin kanonik referans README.md dosyasinda kalir; bu sayfa dogru baslangic noktasini, guvenlik sinirini ve dogrulama yolunu secmek icin yeterli baglam verir.

## Kimler icin

MyVuln in public kapsam?n? anlamak veya destek surecini veri sizdirmadan hazirlamak isteyen guvenlik ekipleri, analistler, entegratorler ve reviewer lar.

## Hizli baslangic

| Ihtiyacin varsa... | Ac |
| --- | --- |
| Live product | [https://myvuln.io/](https://myvuln.io/) |
| Live docs | [https://myvuln.io/docs](https://myvuln.io/docs) |
| Public scope | [docs/PUBLIC_SCOPE.md](docs/PUBLIC_SCOPE.md) |
| Capabilities | [docs/CAPABILITIES.md](docs/CAPABILITIES.md) |
| API v1 | [docs/API_V1.md](docs/API_V1.md) |
| Security policy | [SECURITY.md](SECURITY.md) |
| Support policy | [SUPPORT.md](SUPPORT.md) |

## Repo haritasi

- README.md - public product overview
- docs/README.md - public docs index
- docs/PUBLIC_SCOPE.md - source/public boundary
- docs/CAPABILITIES.md - product capabilities
- docs/API_V1.md - public API summary
- SECURITY.md / SUPPORT.md - disclosure and support rules

## Validasyon ve release hijyeni

Commit veya yayin oncesinde linkler, Markdown, mevcut repo validasyonu ve Gitleaks kontrol edilmelidir.

Onerilen release/readiness yolu:

1. Ilgili README ve bagli dokumanlari incele.
2. Repo validasyon komutu varsa calistir.
3. Markdown linklerini ve lokal assetleri kontrol et.
4. Gitleaks veya yapilandirilmis secret scan i calistir.
5. Push sonrasi yayinin bittigini soylemeden once origin/main dogrulamasi yap.

## Guvenlik ve public scope siniri

Bu repo kaynak kod deposu degildir. Private uygulama kodu, Supabase migration lari, operasyon SQL leri, tenant verileri, loglar ve secret lar private kalir.

## Katki ve bakim

Scope, kurulum adimlari, release kurallari veya guvenlik sinirlari degistiginde lokalize sayfalari kanonik README ile ayni cizgide tut. Repo, canli urun dokumani veya public release kanitiyla desteklenmeyen iddia ekleme.

## Eksiksizlik standardi

Bu lokalize README kisa not degildir. Amac, baslangic, repo yuzeyleri, validasyon, guvenlik siniri ve kanonik referanslari aciklar.

Kanonik referans: [README.md](README.md).
