# ⌨️ Teclat Màgic

Aplicació web per aprendre i practicar mecanografia en **català**, pensada per a nens i nenes.
Tota la lògica funciona al navegador (HTML + CSS + JavaScript, sense servidor ni dependències).

## Què fa

- **Teclat en pantalla** (distribució espanyola/catalana): la tecla que toca prémer es marca en **verd** i, si t'equivoques, la tecla que has premut es marca en **vermell**.
- **Pista del dit**: indica quina tecla i amb quin dit s'ha de prémer (també Majúscules i accents).
- **24 nivells progressius**: primer la fila base (F J, D K, S L, A Ñ, G H), després la fila superior, la inferior, paraules, majúscules, accents (à è ò / é í ó ú ï ü), apòstrof i ela geminada, números i frases.
- **Estrelles** segons la precisió (≥85 % ⭐, ≥92 % ⭐⭐, ≥97 % ⭐⭐⭐). Amb una estrella s'obre el nivell següent.
- **Perfils**: cada fill/a té el seu nom i el seu progrés (es desa al navegador amb `localStorage`).
- Estadístiques en directe: precisió, paraules per minut i errors.
- Opcions: sons, colors dels dits al teclat, desbloquejar tots els nivells.

## Com fer-la servir

Obre `index.html` amb el navegador (doble clic). No cal instal·lar res.

També es pot publicar amb **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).

## Estructura

```
index.html        Pàgina i pantalles
css/estil.css     Estils (teclat, colors, animacions)
js/teclat.js      Distribució del teclat, dits i mapa de caràcters
js/nivells.js     Definició dels nivells, paraules i frases, generació de textos
js/app.js         Lògica: perfils, exercici, puntuació, desament
```

## Afegir o canviar nivells

Edita `NIVELLS` a `js/nivells.js`. Cada nivell té:

- `titol`: nom que es veu a la graella
- `noves`: lletres noves que s'hi afegeixen (s'acumulen amb les dels nivells anteriors)
- `mode`: `exercici`, `repas`, `paraules`, `majuscules`, `llista`, `numeros` o `frases`
- `desc`: explicació que es mostra a dalt de l'exercici

Les paraules de pràctica són a `PARAULES` i les frases a `FRASES`.
