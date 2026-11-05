// =====================================================================
//  Textos de la interfaz per idioma (ca, es, en)
//  L'idioma el decideix l'atribut lang de la pàgina.
// =====================================================================
const IDIOMA = ['ca', 'es', 'en'].includes(document.documentElement.lang) ? document.documentElement.lang : 'ca';

const TEXTOS = {
  ca: {
    confirmaReinici: 'Segur que vols esborrar tot el progrés (estrelles i rècords)?',
    nivell: (i, titol) => `Nivell ${i}: ${titol}`,
    millorVelocitat: 'Millor velocitat',
    ppm: 'ppm',
    mantenMaj: (dit) => `Mantén <kbd>Majúscules</kbd> amb el ${dit} i prem `,
    prem: 'Prem ',
    ambEl: (tecla, dit) => `<kbd>${tecla}</kbd> amb el ${dit}`,
    despresVocal: ' <em>(després, la vocal)</em>',
    araVocal: ' <em>(ara la vocal)</em>',
    lletra: (l) => 'la ' + l,
    digit: (d) => 'el ' + d,
    dits: {
      lp: 'dit petit esquerre', la: 'dit anular esquerre', lm: 'dit del mig esquerre', li: 'dit índex esquerre',
      ri: 'dit índex dret', rm: 'dit del mig dret', ra: 'dit anular dret', rp: 'dit petit dret', th: 'polze',
    },
    tecles: {
      Space: "l'espai", Minus: "l'apòstrof (')", Comma: 'la coma (,)', Period: 'el punt (.)', Slash: 'el guionet (-)',
      BracketLeft: "l'accent obert (`)", Quote: "l'accent tancat (´)", Semicolon: 'la Ñ', Backslash: 'la Ç',
      ShiftLeft: 'Majúscules (esquerra)', ShiftRight: 'Majúscules (dreta)', Digit3: 'el 3', Equal: 'la tecla ¡ ¿',
    },
    fn: { Backspace: '⌫', Tab: 'Tab ⇥', Enter: 'Intro', CapsLock: 'Bloq Maj', ShiftLeft: '⇧ Maj', ShiftRight: '⇧ Majúscules', Space: 'espai' },
    missatges: [
      ['Gairebé!', 'Necessites com a mínim un 85% de precisió per passar de nivell. Ves amb calma: és millor anar a poc a poc i no equivocar-se.'],
      ['Nivell superat!', 'Molt bé! Pots passar al següent nivell o repetir-lo per aconseguir més estrelles.'],
      ['Molt bé!', 'Gairebé perfecte! Continua així.'],
      ['Fantàstic!', 'Excel·lent! Ets un crac del teclat! 🎉'],
    ],
  },
  es: {
    confirmaReinici: '¿Seguro que quieres borrar todo el progreso (estrellas y récords)?',
    nivell: (i, titol) => `Nivel ${i}: ${titol}`,
    millorVelocitat: 'Mejor velocidad',
    ppm: 'ppm',
    mantenMaj: (dit) => `Mantén <kbd>Mayúsculas</kbd> con el ${dit} y pulsa `,
    prem: 'Pulsa ',
    ambEl: (tecla, dit) => `<kbd>${tecla}</kbd> con el ${dit}`,
    despresVocal: ' <em>(después, la vocal)</em>',
    araVocal: ' <em>(ahora la vocal)</em>',
    lletra: (l) => 'la ' + l,
    digit: (d) => 'el ' + d,
    dits: {
      lp: 'meñique izquierdo', la: 'anular izquierdo', lm: 'dedo corazón izquierdo', li: 'índice izquierdo',
      ri: 'índice derecho', rm: 'dedo corazón derecho', ra: 'anular derecho', rp: 'meñique derecho', th: 'pulgar',
    },
    tecles: {
      Space: 'la barra espaciadora', Minus: "el apóstrofo (')", Comma: 'la coma (,)', Period: 'el punto (.)', Slash: 'el guion (-)',
      BracketLeft: 'el acento grave (`)', Quote: 'la tilde (´)', Semicolon: 'la Ñ', Backslash: 'la Ç',
      ShiftLeft: 'Mayúsculas (izquierda)', ShiftRight: 'Mayúsculas (derecha)', Digit3: 'el 3', Equal: 'la tecla ¡ ¿',
    },
    fn: { Backspace: '⌫', Tab: 'Tab ⇥', Enter: 'Intro', CapsLock: 'Bloq Mayús', ShiftLeft: '⇧ Mayús', ShiftRight: '⇧ Mayúsculas', Space: 'espacio' },
    missatges: [
      ['¡Casi!', 'Necesitas al menos un 85% de precisión para pasar de nivel. Ve con calma: es mejor ir despacio y no equivocarse.'],
      ['¡Nivel superado!', '¡Muy bien! Puedes pasar al siguiente nivel o repetirlo para conseguir más estrellas.'],
      ['¡Muy bien!', '¡Casi perfecto! Sigue así.'],
      ['¡Fantástico!', '¡Excelente! ¡Eres un crac del teclado! 🎉'],
    ],
  },
  en: {
    confirmaReinici: 'Are you sure you want to delete all your progress (stars and records)?',
    nivell: (i, titol) => `Level ${i}: ${titol}`,
    millorVelocitat: 'Best speed',
    ppm: 'wpm',
    mantenMaj: (dit) => `Hold <kbd>Shift</kbd> with your ${dit} and press `,
    prem: 'Press ',
    ambEl: (tecla, dit) => `<kbd>${tecla}</kbd> with your ${dit}`,
    despresVocal: ' <em>(then the vowel)</em>',
    araVocal: ' <em>(now the vowel)</em>',
    lletra: (l) => l,
    digit: (d) => d,
    dits: {
      lp: 'left little finger', la: 'left ring finger', lm: 'left middle finger', li: 'left index finger',
      ri: 'right index finger', rm: 'right middle finger', ra: 'right ring finger', rp: 'right little finger', th: 'thumb',
    },
    tecles: {
      Space: 'the space bar', Minus: "the apostrophe key (')", Comma: 'the comma (,)', Period: 'the full stop (.)', Slash: 'the hyphen (-)',
      BracketLeft: 'the grave accent (`)', Quote: 'the acute accent (´)', Semicolon: 'Ñ', Backslash: 'Ç',
      ShiftLeft: 'Shift (left)', ShiftRight: 'Shift (right)', Digit3: '3', Equal: 'the ¡ ¿ key',
    },
    fn: { Backspace: '⌫', Tab: 'Tab ⇥', Enter: 'Enter', CapsLock: 'Caps Lock', ShiftLeft: '⇧ Shift', ShiftRight: '⇧ Shift', Space: 'space' },
    missatges: [
      ['Almost!', 'You need at least 85% accuracy to pass the level. Take your time: it’s better to go slowly and not make mistakes.'],
      ['Level complete!', 'Well done! You can go on to the next level or try again to earn more stars.'],
      ['Great job!', 'Almost perfect! Keep it up.'],
      ['Fantastic!', 'Excellent! You’re a keyboard star! 🎉'],
    ],
  },
};
const T = TEXTOS[IDIOMA];
