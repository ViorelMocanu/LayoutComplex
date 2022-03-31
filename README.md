# Layout Complex de website în HTML și CSS

Un proiect în care construim un layout complex în HTML și CSS. Deployat live prin GitHub Pages aici:

## https://viorelmocanu.github.io/LayoutComplex/

Proiect pornit de pe [canalul meu de YouTube](https://www.youtube.com/ViorelMocanu) într-o serie de LIVE-uri în care am vrut să demonstrez cum facem un layout relativ complex, 100% mobile-first și responsive, în HTML și CSS și puțin JavaScript vanilla.

Episoadele în care am construit acest layout de la zero ([playlist-ul complet e aici](https://www.youtube.com/playlist?list=PLfTqvIG4roBrP63BDGSXEKvf7iThHSKgM)):

1. [🔴LIVE - Workshop 4 - Secrete de layout în CSS - mobile first responsive web design](https://www.youtube.com/watch?v=QyQjWqIOAc4&list=PLfTqvIG4roBrP63BDGSXEKvf7iThHSKgM&index=1)
2. [🔴LIVE - Workshop 5 - Layout complex în CSS - mobile first responsive web design](https://www.youtube.com/watch?v=Pv7h2pCHkqM&list=PLfTqvIG4roBrP63BDGSXEKvf7iThHSKgM&index=2)
3. [🔴LIVE - Workshop 6 - Module de front end în HTML și CSS - mobile first responsive web design](https://www.youtube.com/watch?v=2rLT5AjTtrg&list=PLfTqvIG4roBrP63BDGSXEKvf7iThHSKgM&index=3)
4. [🔴LIVE - Workshop 7 - Finalizăm layout-ul Cărturești - mobile first responsive web design](https://www.youtube.com/watch?v=trvVimq_hpU&list=PLfTqvIG4roBrP63BDGSXEKvf7iThHSKgM&index=4)

Rezultatul e un boilerplate project cu scor 100 în Google PageSpeed Insights:

![Layout Complex - Google Page Speed Insights](https://user-images.githubusercontent.com/166049/124643133-5d344000-de99-11eb-849c-852e077a62fa.jpg)

## Structura de foldere și fișiere root

```bash
.
├── .github                    # folder cu detalii despre sponsorizarea acestui proiect
├── images                     # folder cu imagini statice pentru design-ul site-ului
├── resources                  # folder cu fișiere statice (SVG, CSS, JS, typeface-uri, etc.)
├── android-chrome-192x192.png # fișier folosit ca favicon static de 192px x 192px în Chrome și Android
├── android-chrome-512x512.png # fișier folosit ca favicon static de 512px x 512px în Android
├── apple-touch-icon.png       # fișier folosit ca favicon static în iOS și Safari
├── browserconfig.xml          # fișier cu configurări pentru browsere de la Microsoft (IE, Edge)
├── favicon-16x16.png          # fișier folosit ca favicon static de 16px x 16px
├── favicon-32x32.png          # fișier folosit ca favicon static de 32px x 32px
├── favicon-192-maskable.png   # fișier folosit ca favicon maskable pentru PWA-uri (în iOS și Android)
├── favicon-192.png            # fișier folosit ca favicon static de 192px x 192px
├── favicon-512.png            # fișier folosit ca favicon static de 512px x 512px
├── favicon.ico                # fișier legacy folosit ca favicon static
├── favicon.svg                # fișier modern folosit ca favicon static (care include media queries)
├── index.html                 # fișierul principal al proiectului - pagina HTML statică
├── LICENSE                    # fișier cu licența folosită de proiect
├── mstile-150x150.png         # fișier folosit ca favicon static de 150px x 150px pentru Windows
├── my.webmanifest             # fișier cu configurări pentru PWA și favicons
├── og-inage.jpg               # fișier folosit ca Open Graph Image când se dă share acestui proiect
├── README.md                  # fișier cu detalii despre proiect
├── safari-pinned-tab.svg      # fișier folosit ca favicon static pentru pinned tabs în Safari
├── service-worker.js          # fișier JavaScript care descrie acțiunile de service worker ale PWA-ului
└── smaller-favicon.png        # fișier folosit ca favicon static de dimensiuni mici
```

## Concluzii

Dacă v-a ajutat proiectul, dați-mi [un subscribe pe YouTube](https://www.youtube.com/ViorelMocanu?sub_confirmation=1) și gândiți-vă la [o donație pe GitHub](https://github.com/sponsors/ViorelMocanu/) sau [pe BuyMeACoffee](https://www.buymeacoffee.com/viorel).

Mulțumesc!
