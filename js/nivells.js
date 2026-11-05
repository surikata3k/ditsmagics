// =====================================================================
//  Construcció dels nivells i generació de textos (comú a tots els idiomes)
//  Cada fitxer js/nivells-<idioma>.js defineix PARAULES, NOMS, FRASES,
//  NIVELLS (inicials), SECCIONS, NIVELLS_MITJANS i NIVELLS_AVANCATS.
// =====================================================================

NIVELLS.forEach((n) => (n.seccio = 'inicial'));
NIVELLS_MITJANS.forEach((n) => NIVELLS.push({ ...n, noves: '', mode: 'text', seccio: 'mitja' }));
NIVELLS_AVANCATS.forEach((n) => NIVELLS.push({ ...n, noves: '', mode: 'text', seccio: 'avancat' }));

// Lletres acumulades fins a cada nivell
(function calculaLletres() {
  let acumulades = '';
  NIVELLS.forEach((n) => {
    acumulades += n.noves;
    n.lletres = acumulades;
  });
})();

// ---------------------------------------------------------------------
//  Generació de textos
// ---------------------------------------------------------------------
const aleatori = (llista) => llista[Math.floor(Math.random() * llista.length)];
const entre = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const barreja = (llista) => {
  const c = [...llista];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
};

function paraulesAmb(lletres) {
  return PARAULES.filter((p) => [...p].every((c) => lletres.includes(c)));
}

function grupAleatori(noves, totes) {
  let g = '';
  const n = entre(2, 4);
  for (let i = 0; i < n; i++) g += Math.random() < 0.6 && noves ? aleatori([...noves]) : aleatori([...totes]);
  return g;
}

function omple(generador, longitud) {
  const peces = [];
  let total = 0;
  let anterior = '';
  while (total < longitud) {
    let p = generador();
    if (p === anterior) p = generador();
    peces.push(p);
    anterior = p;
    total += p.length + 1;
  }
  return peces.join(' ');
}

/** Genera el text d'un exercici per al nivell indicat. */
function generaText(nivell) {
  const n = NIVELLS[nivell];
  const totes = n.lletres;
  switch (n.mode) {
    case 'exercici': {
      const paraules = paraulesAmb(totes);
      const usaParaules = paraules.length >= 6;
      return omple(() => (usaParaules && Math.random() < 0.45 ? aleatori(paraules) : grupAleatori(n.noves, totes)), 48);
    }
    case 'repas': {
      const paraules = paraulesAmb(totes);
      return omple(() => (Math.random() < 0.75 ? aleatori(paraules) : grupAleatori('', totes)), 60);
    }
    case 'paraules':
      return omple(() => aleatori(PARAULES), 70);
    case 'majuscules':
      return omple(() => {
        if (Math.random() < 0.4) return aleatori(NOMS);
        const p = aleatori(PARAULES);
        return Math.random() < 0.5 ? p[0].toUpperCase() + p.slice(1) : p;
      }, 60);
    case 'llista': {
      const llista = n.llista();
      return omple(() => (Math.random() < 0.75 ? aleatori(llista) : aleatori(PARAULES)), 60);
    }
    case 'numeros':
      return omple(() => (Math.random() < 0.3 ? aleatori(PARAULES) : String(entre(0, 10 ** entre(1, 3) - 1))), 50);
    case 'frases':
      return barreja(FRASES).slice(0, 2).join(' ');
    case 'text': {
      const textos = typeof n.textos === 'function' ? n.textos() : n.textos;
      return barreja(textos).slice(0, n.uneix || 1).join(' ');
    }
    default:
      return 'fj fj';
  }
}
