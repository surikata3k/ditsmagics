# 🪄 Dits Màgics

**▶ Juga-hi: https://surikata3k.com/ditsmagics/**

Aplicació web per aprendre i practicar mecanografia en **català**, pensada per a nens i nenes.
Tota la lògica funciona al navegador (HTML + CSS + JavaScript, sense servidor ni dependències).

## Què fa

- **Teclat en pantalla** (distribució espanyola/catalana): la tecla que toca prémer es marca en **verd** i, si t'equivoques, la tecla que has premut es marca en **vermell**.
- **Pista del dit**: indica quina tecla i amb quin dit s'ha de prémer (també Majúscules i accents).
- **44 nivells en tres seccions**:
  - **Inicial (1-24)**: primer la fila base (F J, D K, S L, A Ñ, G H), després la fila superior, la inferior, paraules, majúscules, accents (à è ò / é í ó ú ï ü), apòstrof i ela geminada, números i frases.
  - **Mitjà (25-35)**: textos curts temàtics (animals, escola, estacions...), preguntes i exclamacions, diàlegs amb cometes, números i dates, endevinalles, dites i refranys catalans.
  - **Avançat (36-44)**: textos llargs de 400-450 caràcters (contes, natura, l'espai, tradicions, geografia, tecnologia, cartes, receptes) i un repte final de més de 800 caràcters.
- **Estrelles** segons la precisió (≥85 % ⭐, ≥92 % ⭐⭐, ≥97 % ⭐⭐⭐). Amb una estrella s'obre el nivell següent.
- **Sense registre**: només cal obrir la pàgina i començar. El progrés es desa al navegador amb `localStorage` i es pot reiniciar.
- Estadístiques en directe: precisió, paraules per minut i errors.
- Opcions a la barra superior: sons, colors del teclat i desbloquejar tots els nivells.

## Com fer-la servir

Obre `index.html` amb el navegador (doble clic). No cal instal·lar res.

La versió publicada és a **https://surikata3k.com/ditsmagics/** (GitHub Pages, branca `main`, carpeta arrel).

## Estructura

```
index.html        Pàgina i pantalles
css/estil.css     Estils (teclat, colors, animacions)
js/teclat.js      Distribució del teclat, dits i mapa de caràcters
js/nivells.js     Definició dels nivells, paraules i frases, generació de textos
js/app.js         Lògica: exercici, puntuació, opcions, desament
```

## Publicar canvis

El domini passa per Cloudflare, que guarda el CSS i el JavaScript a la memòria cau unes hores. Cada vegada que canviïs un fitxer de `css/` o `js/`, puja el número `?v=` dels enllaços d'`index.html` (per exemple de `?v=2` a `?v=3`) perquè tothom rebi la versió nova.

## Afegir o canviar nivells

Edita `NIVELLS` a `js/nivells.js`. Cada nivell té:

- `titol`: nom que es veu a la graella
- `noves`: lletres noves que s'hi afegeixen (s'acumulen amb les dels nivells anteriors)
- `mode`: `exercici`, `repas`, `paraules`, `majuscules`, `llista`, `numeros`, `frases` o `text`
- `desc`: explicació que es mostra a dalt de l'exercici

Les paraules de pràctica són a `PARAULES` i les frases a `FRASES`.

Els nivells mitjans i avançats són a `NIVELLS_MITJANS` i `NIVELLS_AVANCATS`. Cada un té una llista de `textos` i, en cada intent, se n'escull un a l'atzar (o se n'uneixen diversos amb `uneix: 2`). Per afegir un nivell nou, només cal afegir-hi un objecte amb `titol`, `desc` i `textos`. Si l'afegeixes al mig (no al final de tot), puja `VERSIO_NIVELLS` a `js/app.js` i afegeix-hi una migració perquè les estrelles desades no es desquadrin.

## Autoria i llicència

Creat per [surikata3k.com](https://surikata3k.com).

GNU Affero General Public License v3.0 (vegeu [LICENSE](LICENSE)).
