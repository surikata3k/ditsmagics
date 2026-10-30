// =====================================================================
//  Nivells i textos de pràctica
// =====================================================================

// Paraules catalanes senzilles (sense accents) per a la pràctica
const PARAULES = (
  'ja la sal sala salsa gall falla fada gala dalla llaga alga saga gas ' +
  'casa gat gos pa mar sol lluna aigua foc terra mare pare avi iaia nen nena escola llibre llapis ' +
  'taula cadira porta finestra arbre flor fruita poma pera taronja llet sopa dia nit any mes joc ' +
  'pilota bici cotxe tren vaixell riu muntanya bosc camp ciutat poble carrer amic amiga gran petit ' +
  'alt baix nou vell bo bona blau verd vermell groc negre blanc rosa gris menjar beure jugar saltar ' +
  'llegir escriure dibuixar cantar ballar dormir riure parlar mirar teclat pantalla ordinador lletra ' +
  'paraula frase mans dits peu cap ull nas boca orella cor sala fulla gel pluja neu vent estel ' +
  'tigre ovella vaca porc cavall conill peix ocell formiga abella papallona ' +
  'dit fet dir tres sis set deu tu jo ell ella si sense sota sobre dalt fora dins ' +
  'gela sega guix suc fil fila fira girafa hora hola idea illa ritme regla full tasca tassa ' +
  'pedra seda tela delit desig fideus guerra tia tot totes ruta rata res tresor ' +
  'quatre quinze queda pes pots poder porta puja peix pipa'
).split(' ');

const PARAULES_ACCENT_OBERT = ['àvia', 'mà', 'sofà', 'germà', 'cafè', 'què', 'perquè', 'això', 'allò', 'història', 'fàcil', 'pèsol', 'demà', 'pròxim', 'màgia', 'òliba', 'cèntim', 'sèrie'];
const PARAULES_ACCENT_TANCAT = ['també', 'només', 'avió', 'camió', 'cançó', 'música', 'pastís', 'aquí', 'així', 'difícil', 'ratolí', 'cosí', 'ós', 'balcó', 'pingüí', 'raïm', 'veïna', 'línia'];
const PARAULES_APOSTROF = ["l'avi", "l'escola", "d'aigua", "l'arbre", "m'agrada", "s'ha", "d'or", "l'ocell", 'col·legi', 'il·lusió', 'cel·la', 'intel·ligent', 'col·lecció', 'pel·lícula'];
const NOMS = ['Anna', 'Pau', 'Marc', 'Laia', 'Joan', 'Martina', 'Oriol', 'Nil', 'Carla', 'Arnau', 'Ona', 'Biel'];

const FRASES = [
  'El gat dorm al sofà.',
  "M'agrada jugar amb els amics.",
  'Avui fa sol i anem a la platja.',
  'La meva germana llegeix un llibre.',
  'Escric amb tots els dits.',
  'El gos corre pel parc.',
  "Demà anirem a l'escola en bicicleta.",
  'La lluna surt de nit.',
  "Aprenc a escriure amb l'ordinador.",
  "Els ocells canten a l'arbre.",
  'Tinc una pilota vermella.',
  'A la tardor cauen les fulles.',
  'El tren arriba a les cinc.',
  "L'àvia fa un pastís de poma.",
  'Quan plou, saltem als bassals.',
];

// Cada nivell: títol, tecles noves, mode i explicació
const NIVELLS = [
  { titol: 'F i J', noves: 'fj', mode: 'exercici', desc: 'Posa els dits índexs sobre la F i la J. Tenen un petit relleu: així les trobaràs sense mirar!' },
  { titol: 'D i K', noves: 'dk', mode: 'exercici', desc: 'Els dits del mig van a la D i a la K.' },
  { titol: 'S i L', noves: 'sl', mode: 'exercici', desc: 'Els dits anulars van a la S i a la L.' },
  { titol: 'A i Ñ', noves: 'añ', mode: 'exercici', desc: 'Els dits petits van a la A i a la Ñ.' },
  { titol: 'G i H', noves: 'gh', mode: 'exercici', desc: "Els índexs s'estiren cap al centre: la G amb l'esquerre i la H amb el dret. Ja tens tota la fila base!" },
  { titol: 'Repàs fila base', noves: '', mode: 'repas', desc: 'Practiquem totes les tecles de la fila base. Recorda: els dits sempre tornen a casa.' },
  { titol: 'E i I', noves: 'ei', mode: 'exercici', desc: 'Puja el dit del mig: la E amb la mà esquerra i la I amb la dreta. Després torna a casa!' },
  { titol: 'R i U', noves: 'ru', mode: 'exercici', desc: "Els índexs pugen: la R amb l'esquerre i la U amb el dret." },
  { titol: 'T i Y', noves: 'ty', mode: 'exercici', desc: "Els índexs pugen i s'estiren cap al centre: la T i la Y." },
  { titol: 'W i O', noves: 'wo', mode: 'exercici', desc: 'Els anulars pugen: la W amb la mà esquerra i la O amb la dreta.' },
  { titol: 'Q i P', noves: 'qp', mode: 'exercici', desc: 'Els dits petits pugen: la Q i la P.' },
  { titol: 'Repàs fila superior', noves: '', mode: 'repas', desc: 'Ja coneixes dues files! Escriu paraules amb totes aquestes lletres.' },
  { titol: 'C i coma', noves: 'c,', mode: 'exercici', desc: 'Els dits del mig baixen: la C amb la mà esquerra i la coma amb la dreta.' },
  { titol: 'V i M', noves: 'vm', mode: 'exercici', desc: "Els índexs baixen: la V amb l'esquerre i la M amb el dret." },
  { titol: 'B i N', noves: 'bn', mode: 'exercici', desc: "Els índexs baixen i s'estiren cap al centre: la B i la N." },
  { titol: 'X, Z i punt', noves: 'xz.', mode: 'exercici', desc: "La X amb l'anular esquerre, la Z amb el dit petit esquerre i el punt amb l'anular dret." },
  { titol: 'Ç i guionet', noves: 'ç-', mode: 'exercici', desc: 'El dit petit dret fa la Ç (a la fila base) i el guionet (a baix).' },
  { titol: 'Paraules', noves: '', mode: 'paraules', desc: 'Ja coneixes totes les lletres! Ara escriu paraules senceres.' },
  { titol: 'Majúscules', noves: '', mode: 'majuscules', desc: "Per fer una majúscula, mantén premuda la tecla Majúscules amb el dit petit de l'altra mà i prem la lletra." },
  { titol: 'Accents oberts: à è ò', noves: '', mode: 'llista', llista: () => PARAULES_ACCENT_OBERT, desc: "Prem primer la tecla de l'accent obert ( ` ) amb el dit petit dret, deixa-la anar, i després prem la vocal." },
  { titol: 'Accents tancats i dièresi', noves: '', mode: 'llista', llista: () => PARAULES_ACCENT_TANCAT, desc: "Per a é í ó ú prem primer l'accent tancat ( ´ ) i després la vocal. Per a la dièresi (ï ü), Majúscules + ´ i després la vocal." },
  { titol: "Apòstrof i ela geminada", noves: '', mode: 'llista', llista: () => PARAULES_APOSTROF, desc: "L'apòstrof ( ' ) és a dalt a la dreta, al costat del 0. El punt volat ( · ) és Majúscules + 3." },
  { titol: 'Números', noves: '', mode: 'numeros', desc: 'Els números són a la fila de dalt de tot. Cada dit puja des de la seva tecla de casa.' },
  { titol: 'Frases', noves: '', mode: 'frases', desc: 'Ara ja ho saps fer tot! Escriu frases completes amb majúscules, accents i punts.' },
];

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
    default:
      return 'fj fj';
  }
}
