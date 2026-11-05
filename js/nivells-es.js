// =====================================================================
//  Dits Màgics — niveles y textos (castellano)
//  Generat a partir de les dades d'aquest idioma; la lògica és a js/nivells.js
// =====================================================================

const PARAULES = ["ya", "la", "sala", "salsa", "hada", "falda", "gasa", "alga", "saga", "gala", "faja", "daga", "jaja", "ala", "las", "da", "ha", "casa", "gato", "perro", "pan", "mar", "sol", "luna", "agua", "fuego", "tierra", "madre", "padre", "abuelo", "abuela", "nene", "nena", "escuela", "libro", "mesa", "silla", "puerta", "ventana", "flor", "fruta", "manzana", "pera", "naranja", "leche", "sopa", "noche", "mes", "juego", "pelota", "bici", "coche", "tren", "barco", "monte", "bosque", "campo", "ciudad", "pueblo", "calle", "amigo", "amiga", "grande", "chico", "alto", "bajo", "nuevo", "viejo", "bueno", "buena", "azul", "verde", "rojo", "amarillo", "negro", "blanco", "rosa", "gris", "comer", "beber", "jugar", "saltar", "leer", "escribir", "dibujar", "cantar", "bailar", "dormir", "hablar", "mirar", "teclado", "pantalla", "letra", "palabra", "frase", "manos", "dedos", "pie", "cabeza", "ojo", "nariz", "boca", "oreja", "hoja", "hielo", "lluvia", "nieve", "viento", "estrella", "tigre", "oveja", "vaca", "cerdo", "caballo", "conejo", "pez", "hormiga", "abeja", "mariposa", "dedo", "hecho", "decir", "tres", "seis", "siete", "diez", "tu", "yo", "el", "ella", "si", "sin", "bajo", "sobre", "arriba", "fuera", "dentro", "gel", "sal", "tela", "hilo", "fila", "feria", "jirafa", "hora", "hola", "idea", "isla", "ritmo", "regla", "tarea", "taza", "piedra", "seda", "fideos", "tia", "todo", "todas", "ruta", "rata", "tesoro", "cuatro", "quince", "queda", "peso", "poder", "pipa", "kilo", "kiwi", "koala"];

const LLISTES = {
  "tilde": [
    "papá",
    "mamá",
    "sofá",
    "café",
    "también",
    "aquí",
    "allí",
    "jardín",
    "camión",
    "avión",
    "canción",
    "lápiz",
    "árbol",
    "fácil",
    "difícil",
    "música",
    "número",
    "pájaro",
    "teléfono",
    "plátano",
    "ratón",
    "limón",
    "sábado",
    "miércoles"
  ],
  "enye": [
    "niño",
    "niña",
    "año",
    "sueño",
    "España",
    "mañana",
    "montaña",
    "araña",
    "piña",
    "uña",
    "pequeño",
    "cumpleaños",
    "pingüino",
    "cigüeña",
    "vergüenza",
    "paragüero",
    "agüita",
    "bilingüe"
  ],
  "signes": [
    "¿qué?",
    "¿quién?",
    "¿dónde?",
    "¿cómo?",
    "¿cuándo?",
    "¿cuánto?",
    "¿por qué?",
    "¡hola!",
    "¡bravo!",
    "¡genial!",
    "¡cuidado!",
    "¡gracias!",
    "¡ya está!",
    "¡vamos!",
    "¿sí?",
    "¡no!"
  ],
  "guio": [
    "norte-sur",
    "ida-vuelta",
    "sol-luna",
    "blanco-negro",
    "arriba-abajo",
    "dulce-salado",
    "gato-perro",
    "mar-tierra",
    "lunes-martes",
    "rojo-verde"
  ]
};

const NOMS = ["Hugo", "Sara", "Pablo", "Elena", "Daniel", "Carmen", "Mario", "Paula", "Alba", "Diego", "Nora", "Marcos"];

const FRASES = [
  "El gato duerme en el sofá.",
  "Me gusta jugar con mis amigos.",
  "Hoy hace sol y vamos a la playa.",
  "Mi hermana lee un libro de aventuras.",
  "Escribo con todos los dedos.",
  "El perro corre por el parque.",
  "Mañana iremos al colegio en bicicleta.",
  "La luna sale por la noche.",
  "Aprendo a escribir con el ordenador.",
  "Los pájaros cantan en el árbol.",
  "Tengo una pelota roja.",
  "En otoño caen las hojas.",
  "El tren llega a las cinco.",
  "La abuela hace un pastel de manzana.",
  "Cuando llueve, saltamos en los charcos."
];

const NIVELLS = [
  { titol: "F y J", noves: "fj", mode: "exercici", desc: "Pon los dedos índices sobre la F y la J. Tienen un pequeño relieve: ¡así las encontrarás sin mirar!" },
  { titol: "D y K", noves: "dk", mode: "exercici", desc: "Los dedos corazón van a la D y a la K." },
  { titol: "S y L", noves: "sl", mode: "exercici", desc: "Los dedos anulares van a la S y a la L." },
  { titol: "A y Ñ", noves: "añ", mode: "exercici", desc: "Los meñiques van a la A y a la Ñ." },
  { titol: "G y H", noves: "gh", mode: "exercici", desc: "Los índices se estiran hacia el centro: la G con el izquierdo y la H con el derecho. ¡Ya tienes toda la fila central!" },
  { titol: "Repaso fila central", noves: "", mode: "repas", desc: "Practicamos todas las teclas de la fila central. Recuerda: los dedos siempre vuelven a casa." },
  { titol: "E e I", noves: "ei", mode: "exercici", desc: "Sube el dedo corazón: la E con la mano izquierda y la I con la derecha. ¡Y luego vuelve a casa!" },
  { titol: "R y U", noves: "ru", mode: "exercici", desc: "Los índices suben: la R con el izquierdo y la U con el derecho." },
  { titol: "T e Y", noves: "ty", mode: "exercici", desc: "Los índices suben y se estiran hacia el centro: la T y la Y." },
  { titol: "W y O", noves: "wo", mode: "exercici", desc: "Los anulares suben: la W con la mano izquierda y la O con la derecha." },
  { titol: "Q y P", noves: "qp", mode: "exercici", desc: "Los meñiques suben: la Q y la P." },
  { titol: "Repaso fila superior", noves: "", mode: "repas", desc: "¡Ya conoces dos filas! Escribe palabras con todas estas letras." },
  { titol: "C y coma", noves: "c,", mode: "exercici", desc: "Los dedos corazón bajan: la C con la mano izquierda y la coma con la derecha." },
  { titol: "V y M", noves: "vm", mode: "exercici", desc: "Los índices bajan: la V con el izquierdo y la M con el derecho." },
  { titol: "B y N", noves: "bn", mode: "exercici", desc: "Los índices bajan y se estiran hacia el centro: la B y la N." },
  { titol: "X, Z y punto", noves: "xz.", mode: "exercici", desc: "La X con el anular izquierdo, la Z con el meñique izquierdo y el punto con el anular derecho." },
  { titol: "Guion", noves: "-", mode: 'llista', llista: () => LLISTES.guio, desc: "El guion ( - ) está abajo a la derecha y se pulsa con el meñique derecho." },
  { titol: "Palabras", noves: "", mode: "paraules", desc: "¡Ya conoces todas las letras! Ahora escribe palabras enteras." },
  { titol: "Mayúsculas", noves: "", mode: "majuscules", desc: "Para hacer una mayúscula, mantén pulsada la tecla Mayúsculas con el meñique de la otra mano y pulsa la letra." },
  { titol: "Tildes: á é í ó ú", noves: "", mode: 'llista', llista: () => LLISTES.tilde, desc: "Pulsa primero la tecla de la tilde ( ´ ) con el meñique derecho, suéltala y después pulsa la vocal." },
  { titol: "Ñ y diéresis", noves: "", mode: 'llista', llista: () => LLISTES.enye, desc: "La Ñ está en la fila central, a la derecha de la L. Para la diéresis (ü), Mayúsculas + ´ y después la u." },
  { titol: "¿? y ¡!", noves: "", mode: 'llista', llista: () => LLISTES.signes, desc: "La tecla ¡ está arriba a la derecha. Con Mayúsculas sale ¿. El cierre ? es Mayúsculas + apóstrofo y ! es Mayúsculas + 1." },
  { titol: "Números", noves: "", mode: "numeros", desc: "Los números están en la fila de arriba del todo. Cada dedo sube desde su tecla de casa." },
  { titol: "Frases", noves: "", mode: "frases", desc: "¡Ya lo sabes hacer todo! Escribe frases completas con mayúsculas, tildes y puntos." },
];

const SECCIONS = {
  inicial: { titol: "Nivel inicial", desc: "Aprende dónde está cada tecla y con qué dedo se pulsa." },
  mitja: { titol: "Nivel intermedio", desc: "Textos cortos con mayúsculas, tildes, signos de puntuación y números." },
  avancat: { titol: "Nivel avanzado", desc: "Textos largos: cuentos, ciencia, tradiciones... ¡Concéntrate y escribe sin mirar el teclado!" },
};

const NIVELLS_MITJANS = [
  {
    titol: "Los animales",
    desc: "Textos cortos sobre animales. Escribe con calma y sin mirar el teclado.",
    textos: [
      "El gato de Lucía se llama Miso. Tiene el pelo negro y los ojos verdes. Le gusta dormir al sol y, cuando tiene hambre, maúlla fuerte en la puerta de la cocina.",
      "Las abejas viven en colmenas y hacen miel con el néctar de las flores. Son muy trabajadoras y ayudan a las plantas a dar frutos.",
      "El pingüino es un ave que no puede volar, pero nada muy deprisa. Vive en lugares fríos y come peces pequeños.",
      "En el bosque viven ardillas, zorros y jabalíes. Si caminas en silencio, quizá veas una ardilla subiendo por un pino."
    ],
  },
  {
    titol: "El colegio",
    desc: "Cuenta cómo es un día en el colegio.",
    textos: [
      "Cada mañana cojo la mochila y voy al colegio andando. En mi clase hay veinticinco niños y niñas, y la maestra se llama Rosa.",
      "A la hora del recreo jugamos a la pelota y al escondite. Cuando suena el timbre, hacemos una fila y volvemos a clase.",
      "Hoy en matemáticas hemos aprendido a multiplicar. Después hemos leído un cuento y hemos hecho un dibujo del personaje que más nos ha gustado."
    ],
  },
  {
    titol: "Las estaciones",
    desc: "Primavera, verano, otoño e invierno. ¡Fíjate en las comas!",
    textos: [
      "En primavera los árboles se llenan de flores y los días son más largos. Es la época perfecta para ir de excursión.",
      "En verano hace calor y no hay colegio. Vamos a la playa, comemos helados y nos bañamos en la piscina.",
      "En otoño caen las hojas de los árboles y vamos a buscar setas. También comemos castañas asadas.",
      "En invierno hace frío y a veces nieva en la montaña. Nos ponemos la bufanda, los guantes y el gorro para salir a la calle."
    ],
  },
  {
    titol: "La comida",
    desc: "Desayuno, comida, merienda y cena.",
    textos: [
      "Para desayunar tomo un vaso de leche y una tostada con aceite. A la hora de comer me encanta la sopa de fideos.",
      "La fruta es muy buena para la salud. Cada día como una manzana, un plátano o una naranja para merendar.",
      "El domingo el abuelo hace una paella para toda la familia. Todos ayudamos a poner la mesa y después fregamos los platos."
    ],
  },
  {
    titol: "Preguntas y exclamaciones",
    desc: "En castellano se abren y se cierran: ¿ y ¡ al principio, ? y ! al final.",
    textos: [
      "¿Cómo te llamas? ¿Cuántos años tienes? ¿Dónde vives? ¿Cuál es tu color favorito? Yo me llamo Pablo y me gusta el azul.",
      "¡Qué día tan bonito! ¿Vamos al parque? ¡Sí, y llevaremos la pelota! ¡Qué suerte que hoy no llueva!",
      "¿Has visto mi lápiz? ¡No lo encuentro por ninguna parte! Quizá esté en la mochila. ¡Ah, aquí está! ¡Gracias!"
    ],
  },
  {
    titol: "Diálogos",
    desc: "Los dos puntos ( : ) son Mayúsculas + punto, y las comillas ( \" ) son Mayúsculas + 2.",
    textos: [
      "Mi madre dijo: \"Recoge tu habitación.\" Y yo respondí: \"¡Vale, ahora mismo!\"",
      "El maestro preguntó: \"¿Quién sabe cuál es la capital de España?\" Y Julia contestó: \"¡Madrid!\"",
      "Marcos gritó: \"¡Mirad, un arcoíris!\" Y todos salimos a la ventana para verlo."
    ],
  },
  {
    titol: "Números y fechas",
    desc: "Letras y números mezclados. Los dedos suben a la fila de arriba y vuelven a casa.",
    textos: [
      "Nací el 15 de marzo de 2017. Vivo en el número 24 de la calle Mayor y mi teléfono tiene 9 cifras.",
      "En mi clase somos 25 alumnos: 13 niñas y 12 niños. Cada día tenemos 5 horas de clase y 30 minutos de recreo.",
      "Si tengo 10 caramelos y le doy 3 a mi hermana y 2 a mi primo, me quedan 5."
    ],
  },
  {
    titol: "Deportes y juegos",
    desc: "¿Qué te gusta hacer en tu tiempo libre?",
    textos: [
      "Me encanta jugar al baloncesto con mis amigos. Entrenamos dos días a la semana y el sábado tenemos partido.",
      "Cuando llueve nos quedamos en casa y jugamos a las cartas, al ajedrez o hacemos un puzle de mil piezas.",
      "Mi prima hace natación. Puede nadar cincuenta metros de crol muy deprisa y quiere participar en una competición."
    ],
  },
  {
    titol: "La ciudad y el pueblo",
    desc: "Descripciones de lugares. Atención a las mayúsculas y a las tildes.",
    textos: [
      "En la ciudad hay muchos coches, autobuses y edificios altos. También hay parques, museos y bibliotecas.",
      "El pueblo de mis abuelos es pequeño y tranquilo. Tiene una plaza con una fuente, una iglesia y una panadería donde hacen unas magdalenas buenísimas.",
      "Para ir a la ciudad cogemos el tren. El viaje dura media hora y desde la ventana vemos campos y montañas."
    ],
  },
  {
    titol: "Adivinanzas",
    desc: "Escribe las adivinanzas... ¡y la solución!", uneix: 2,
    textos: [
      "Adivina, adivinanza: tiene dientes y no come, tiene cabeza y no es hombre. ¿Qué es? ¡El ajo!",
      "Adivina, adivinanza: blanca por dentro, verde por fuera; si quieres que te lo diga, espera. ¿Qué es? ¡La pera!",
      "Adivina, adivinanza: tiene hojas y no es árbol, tiene lomo y no es caballo. ¿Qué es? ¡Un libro!",
      "Adivina, adivinanza: cuanto más se seca, más se moja. ¿Qué es? ¡La toalla!"
    ],
  },
  {
    titol: "Refranes y dichos",
    desc: "Refranes y frases hechas de toda la vida. ¿Sabes qué significan?", uneix: 3,
    textos: [
      "A quien madruga, Dios le ayuda.",
      "Poco a poco se va lejos.",
      "Más vale pájaro en mano que ciento volando.",
      "No por mucho madrugar amanece más temprano.",
      "En boca cerrada no entran moscas.",
      "Quien tiene un amigo, tiene un tesoro.",
      "Más vale tarde que nunca.",
      "A buen hambre no hay pan duro.",
      "Dime con quién andas y te diré quién eres.",
      "Ojos que no ven, corazón que no siente.",
      "Hablando se entiende la gente.",
      "Cada maestrillo tiene su librillo.",
      "En abril, aguas mil.",
      "Una golondrina no hace verano.",
      "Del dicho al hecho hay mucho trecho.",
      "Perro ladrador, poco mordedor.",
      "Estar en las nubes.",
      "Ser pan comido.",
      "Tener la cabeza en otra parte.",
      "Buen provecho y buena salud."
    ],
  },
];

const NIVELLS_AVANCATS = [
  {
    titol: "Cuentos",
    desc: "Un cuento largo. Respira, pon los dedos en casa y adelante.",
    textos: [
      "Había una vez un dragón que vivía en una cueva, en lo alto de una montaña muy alta. Todo el pueblo le tenía miedo, pero nadie sabía que el dragón era muy miedoso: se asustaba de los truenos, de las sombras y hasta de las mariposas. Un día, una niña valiente que se llamaba Clara subió hasta la cueva con una cesta de manzanas. \"No tengas miedo\", le dijo, \"solo quiero ser tu amiga.\" Desde aquel día, el dragón y Clara fueron inseparables.",
      "Sara y Leo encontraron un mapa antiguo en el desván de la casa de su abuela. Tenía dibujado un camino que salía del jardín, pasaba por debajo del puente viejo y terminaba junto a un roble enorme. Cogieron una pala, una linterna y unos bocadillos, y siguieron las indicaciones con mucha atención. Después de caminar un buen rato, encontraron una caja de lata enterrada. Dentro no había oro ni joyas, sino fotografías de cuando la abuela era pequeña y una nota que decía: \"El mayor tesoro son los recuerdos.\""
    ],
  },
  {
    titol: "La naturaleza",
    desc: "Textos de ciencias naturales.",
    textos: [
      "El agua del planeta nunca se acaba: viaja continuamente en un ciclo. Cuando el sol calienta los mares, los ríos y los lagos, una parte del agua se evapora y sube al cielo en forma de vapor. Arriba hace más frío, y el vapor se condensa en gotas pequeñísimas que forman las nubes. Cuando las gotas se hacen grandes y pesan demasiado, caen en forma de lluvia, nieve o granizo. Esa agua vuelve a los ríos y a los mares, o se filtra bajo tierra, y el ciclo empieza de nuevo.",
      "Los árboles son muy importantes para la vida en la Tierra. Con las hojas captan la luz del sol y fabrican su propio alimento; este proceso se llama fotosíntesis. Mientras lo hacen, absorben dióxido de carbono del aire y liberan oxígeno, que es lo que respiramos las personas y los animales. Además, las raíces sujetan el suelo y evitan que la lluvia se lo lleve. Por eso es tan importante cuidar los bosques y plantar árboles nuevos."
    ],
  },
  {
    titol: "El espacio",
    desc: "Planetas, la Luna y los astronautas. ¡Hay muchas mayúsculas!",
    textos: [
      "El sistema solar está formado por el Sol y todos los cuerpos que giran a su alrededor. Hay ocho planetas: Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. Los cuatro primeros son pequeños y rocosos, mientras que los otros cuatro son gigantes hechos sobre todo de gases. Júpiter es el planeta más grande: ¡cabrían más de mil planetas como el nuestro! La Tierra tarda 365 días en dar una vuelta completa al Sol, y a ese tiempo lo llamamos un año.",
      "La Luna es el satélite de la Tierra. No tiene luz propia: la vemos porque refleja la luz del Sol. Como gira alrededor de la Tierra, cada noche vemos iluminada una parte distinta, y por eso hablamos de fases: luna nueva, cuarto creciente, luna llena y cuarto menguante. Un ciclo completo dura unos veintinueve días. En 1969, los astronautas Neil Armstrong y Buzz Aldrin fueron las primeras personas que caminaron sobre la Luna."
    ],
  },
  {
    titol: "Tradiciones",
    desc: "Fiestas y tradiciones.",
    textos: [
      "La noche del 5 de enero es una de las más esperadas del año. Los Reyes Magos, Melchor, Gaspar y Baltasar, recorren las calles en una cabalgata llena de luces, música y caramelos. Antes de ir a dormir, los niños y las niñas dejan sus zapatos junto a la ventana, con un poco de agua para los camellos. A la mañana siguiente, el 6 de enero, encuentran los regalos y desayunan roscón, un dulce redondo que esconde una sorpresa en su interior.",
      "El 23 de abril se celebra Sant Jordi, una de las fiestas más queridas de Cataluña. Según la leyenda, el caballero Jorge venció a un dragón que asustaba a un pueblo y salvó a la princesa. De la sangre del dragón nació un rosal lleno de rosas rojas. Hoy, las calles se llenan de puestos de libros y de flores, y es tradición regalar una rosa y un libro a las personas que queremos. También es el Día Internacional del Libro."
    ],
  },
  {
    titol: "Geografía",
    desc: "Montañas, ríos y océanos. ¡Cuidado con los números!",
    textos: [
      "España tiene paisajes muy variados. Al norte están los Pirineos y la cordillera Cantábrica, y en el sur, Sierra Nevada, donde está el Mulhacén, el pico más alto de la península, con 3479 metros. El pico más alto de todo el país es el Teide, un volcán de la isla de Tenerife que mide 3715 metros. Entre los ríos más importantes están el Tajo, el Ebro, el Duero y el Guadalquivir. Y las costas del Mediterráneo, el Atlántico y el Cantábrico tienen playas, acantilados y puertos pesqueros.",
      "La Tierra tiene cinco océanos: el Pacífico, el Atlántico, el Índico, el Ártico y el Antártico. El más grande es el Pacífico, que ocupa casi un tercio de la superficie del planeta. Los océanos están llenos de vida: allí viven ballenas, delfines, tiburones, tortugas y millones de peces de todos los colores. También hay arrecifes de coral, que son como ciudades bajo el mar. Por desgracia, el plástico que tiramos puede llegar al mar y hacer daño a los animales; por eso es tan importante reciclar."
    ],
  },
  {
    titol: "Tecnología",
    desc: "Cómo funciona un ordenador y cómo navegar con seguridad.",
    textos: [
      "Un ordenador es una máquina que sigue instrucciones para hacer tareas muy distintas: escribir textos, hacer cálculos, dibujar o jugar. Tiene una parte que podemos tocar, el hardware, como el teclado, el ratón, la pantalla o el procesador. Y tiene una parte que no podemos tocar, el software, que son los programas. El procesador es el cerebro del ordenador: puede hacer millones de operaciones cada segundo. Las instrucciones que le damos se escriben en un lenguaje de programación.",
      "Internet es una red que conecta millones de ordenadores de todo el mundo. Gracias a internet podemos buscar información, ver vídeos o hablar con personas que viven muy lejos. Pero también hay que tener cuidado: nunca debemos compartir nuestras contraseñas, ni la dirección de casa, ni fotografías con desconocidos. Si vemos algo que nos hace sentir mal, debemos contárselo a un adulto de confianza. ¡Navegar con seguridad es muy importante!"
    ],
  },
  {
    titol: "Cartas e invitaciones",
    desc: "¡Escribir a un amigo es más fácil cuando dominas el teclado!",
    textos: [
      "Querida Lucía: ¿Cómo estás? Te escribo desde el pueblo de mis abuelos, donde paso las vacaciones de verano. Cada mañana vamos a buscar huevos al gallinero y por la tarde nos bañamos en el río, que tiene el agua muy fría. Ayer hicimos una excursión hasta lo alto de la montaña y ¡vimos un corzo! Por la noche, desde el jardín, se ven muchísimas estrellas. Tengo ganas de volver para contártelo todo. Un abrazo muy fuerte, Martina.",
      "¡Hola a todos! Este sábado, a las cinco de la tarde, celebro mi cumpleaños en casa. Haremos una gincana en el jardín, comeremos pastel de chocolate y después veremos una película. Si podéis venir, traed ropa cómoda porque ¡nos vamos a mover mucho! Por favor, decidme si vendréis antes del jueves. Os espero con muchas ganas. ¡Hasta el sábado! Pablo."
    ],
  },
  {
    titol: "Recetas",
    desc: "Instrucciones paso a paso. Fíjate en los verbos: córtalo, añádele...",
    textos: [
      "Pan con tomate. Ingredientes: pan de payés, tomates maduros, aceite de oliva y sal. Primero, corta el pan en rebanadas y, si quieres, tuéstalas un poco. Después, corta los tomates por la mitad y frótalos sobre el pan hasta que quede bien rojo. A continuación, échale un chorro de aceite de oliva y un poco de sal. ¡Y ya está! El pan con tomate está buenísimo solo, pero también puedes acompañarlo con queso o con embutido.",
      "Batido de fresa. Necesitarás: diez fresas, un plátano, un vaso de leche y una cucharada de miel. Lava bien las fresas y quítales las hojas. Pela el plátano y córtalo en rodajas. Pon todas las frutas en el vaso de la batidora, añade la leche y la miel, y pide a un adulto que te ayude a batirlo todo durante un minuto. Sirve el batido en vasos bien fríos y, si quieres, decóralos con una fresa. ¡Buen provecho!"
    ],
  },
  {
    titol: "Reto final",
    desc: "¡El texto más largo de todos! Demuestra todo lo que has aprendido. ¡Tú puedes!",
    uneix: 2,
    textos: () => NIVELLS_AVANCATS.slice(0, -1).flatMap((n) => n.textos),
  },
];
