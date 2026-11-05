// =====================================================================
//  Dits Màgics — levels and texts (English)
//  Generat a partir de les dades d'aquest idioma; la lògica és a js/nivells.js
// =====================================================================

const PARAULES = ["as", "ask", "all", "add", "fall", "hall", "glad", "flag", "flask", "lad", "sad", "dad", "had", "has", "half", "shall", "salad", "alas", "lass", "gas", "flash", "dash", "hash", "lash", "a", "ad", "all", "jag", "hag", "gag", "cat", "dog", "sun", "moon", "sea", "star", "tree", "leaf", "rain", "snow", "wind", "cloud", "sky", "hill", "lake", "river", "park", "road", "town", "city", "farm", "house", "home", "mum", "dad", "baby", "sister", "brother", "friend", "school", "book", "pen", "desk", "chair", "door", "window", "table", "bed", "cup", "milk", "bread", "apple", "pear", "red", "blue", "green", "yellow", "black", "white", "pink", "grey", "big", "small", "tall", "short", "new", "old", "good", "kind", "happy", "funny", "fast", "slow", "run", "jump", "walk", "play", "read", "write", "draw", "sing", "dance", "sleep", "laugh", "talk", "look", "listen", "eat", "drink", "swim", "ride", "climb", "hand", "foot", "head", "eye", "nose", "mouth", "ear", "hair", "tooth", "word", "letter", "key", "screen", "mouse", "fish", "bird", "frog", "duck", "horse", "cow", "pig", "sheep", "goat", "rabbit", "lion", "tiger", "bear", "bee", "ant", "owl", "fox", "day", "night", "week", "year", "time", "today", "game", "ball", "kite", "bike", "train", "boat", "bus", "car", "toy", "box", "hat", "coat", "sock", "shoe", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "yes", "no", "up", "down", "in", "out", "on", "off", "it", "is", "the", "and", "of", "to", "for", "you", "we", "he", "she", "they", "this", "that", "here", "there", "what", "who", "when", "where", "why", "how", "hello", "quiet", "quick", "queen", "jam", "jar", "jelly", "juice", "kid", "kitten", "keep", "kitchen", "wet", "wall", "west", "wish", "yard", "yoyo", "zoo", "zebra", "zip", "box", "fox", "six", "red", "rose", "ruler", "rug", "ship", "shop", "jet", "pet", "pot", "top", "tip", "pip", "pop"];

const LLISTES = {
  "apostrof": [
    "don't",
    "it's",
    "I'm",
    "can't",
    "we're",
    "you're",
    "let's",
    "isn't",
    "they're",
    "won't",
    "I'll",
    "she's",
    "he's",
    "that's",
    "what's",
    "doesn't",
    "Tom's",
    "Mia's",
    "we'll",
    "didn't"
  ],
  "signes": [
    "what?",
    "why?",
    "who?",
    "where?",
    "how?",
    "when?",
    "really?",
    "ready?",
    "yes!",
    "no!",
    "wow!",
    "hello!",
    "great!",
    "help!",
    "stop!",
    "hooray!"
  ],
  "cometes": [
    "\"yes\"",
    "\"no\"",
    "\"hello\"",
    "\"thanks\"",
    "\"stop\"",
    "\"wait\"",
    "time:",
    "name:",
    "date:",
    "note:",
    "list:",
    "answer:",
    "\"wow\"",
    "\"look\""
  ],
  "guio": [
    "ice-cream",
    "well-known",
    "e-mail",
    "t-shirt",
    "x-ray",
    "old-fashioned",
    "self-help",
    "up-to-date",
    "follow-up",
    "check-in",
    "long-term",
    "part-time",
    "mother-in-law",
    "twenty-one",
    "forty-two",
    "brand-new"
  ]
};

const NOMS = ["Emma", "Leo", "Mia", "Noah", "Lily", "Jack", "Sophie", "Max", "Ella", "Sam", "Ruby", "Tom"];

const FRASES = [
  "The cat is asleep on the sofa.",
  "I like playing with my friends.",
  "It's sunny today, so we're going to the beach.",
  "My sister is reading a book about pirates.",
  "I type with all my fingers.",
  "The dog runs around the park.",
  "Tomorrow we'll ride our bikes to school.",
  "The moon comes out at night.",
  "I'm learning to type on the computer.",
  "The birds are singing in the tree.",
  "I have a red ball.",
  "In autumn the leaves fall from the trees.",
  "The train arrives at five o'clock.",
  "Grandma is baking an apple pie.",
  "When it rains, we jump in the puddles."
];

const NIVELLS = [
  { titol: "F and J", noves: "fj", mode: "exercici", desc: "Put your index fingers on F and J. They have a little bump, so you can find them without looking!" },
  { titol: "D and K", noves: "dk", mode: "exercici", desc: "Your middle fingers go on D and K." },
  { titol: "S and L", noves: "sl", mode: "exercici", desc: "Your ring fingers go on S and L." },
  { titol: "A and Ñ", noves: "añ", mode: "exercici", desc: "Your little fingers go on A and Ñ. You won't type Ñ much in English, but it's where your right little finger lives." },
  { titol: "G and H", noves: "gh", mode: "exercici", desc: "Stretch your index fingers to the middle: G with the left one and H with the right one. That's the whole home row!" },
  { titol: "Home row review", noves: "", mode: "repas", desc: "Let's practise every key on the home row. Remember: your fingers always go back home." },
  { titol: "E and I", noves: "ei", mode: "exercici", desc: "Move your middle fingers up: E with your left hand and I with your right. Then go back home!" },
  { titol: "R and U", noves: "ru", mode: "exercici", desc: "Your index fingers go up: R with the left one and U with the right one." },
  { titol: "T and Y", noves: "ty", mode: "exercici", desc: "Your index fingers go up and stretch to the middle: T and Y." },
  { titol: "W and O", noves: "wo", mode: "exercici", desc: "Your ring fingers go up: W with your left hand and O with your right." },
  { titol: "Q and P", noves: "qp", mode: "exercici", desc: "Your little fingers go up: Q and P." },
  { titol: "Top row review", noves: "", mode: "repas", desc: "Now you know two rows! Type words with all these letters." },
  { titol: "C and comma", noves: "c,", mode: "exercici", desc: "Your middle fingers go down: C with your left hand and the comma with your right." },
  { titol: "V and M", noves: "vm", mode: "exercici", desc: "Your index fingers go down: V with the left one and M with the right one." },
  { titol: "B and N", noves: "bn", mode: "exercici", desc: "Your index fingers go down and stretch to the middle: B and N." },
  { titol: "X, Z and full stop", noves: "xz.", mode: "exercici", desc: "X with your left ring finger, Z with your left little finger and the full stop with your right ring finger." },
  { titol: "Hyphen", noves: "-", mode: 'llista', llista: () => LLISTES.guio, desc: "The hyphen ( - ) is at the bottom right. Press it with your right little finger." },
  { titol: "Words", noves: "", mode: "paraules", desc: "You know all the letters now! Time to type whole words." },
  { titol: "Capital letters", noves: "", mode: "majuscules", desc: "To type a capital letter, hold Shift with the little finger of your other hand and press the letter." },
  { titol: "Apostrophes", noves: "", mode: 'llista', llista: () => LLISTES.apostrof, desc: "The apostrophe ( ' ) is at the top right, next to 0. Press it with your right little finger." },
  { titol: "? and !", noves: "", mode: 'llista', llista: () => LLISTES.signes, desc: "The question mark ( ? ) is Shift + apostrophe, and the exclamation mark ( ! ) is Shift + 1." },
  { titol: "Quotes and colons", noves: "", mode: 'llista', llista: () => LLISTES.cometes, desc: "Quotation marks ( \" ) are Shift + 2, and the colon ( : ) is Shift + full stop." },
  { titol: "Numbers", noves: "", mode: "numeros", desc: "The numbers are on the very top row. Each finger reaches up from its home key." },
  { titol: "Sentences", noves: "", mode: "frases", desc: "Now you can do it all! Type full sentences with capitals, apostrophes and full stops." },
];

const SECCIONS = {
  inicial: { titol: "Beginner", desc: "Learn where every key is and which finger presses it." },
  mitja: { titol: "Intermediate", desc: "Short texts with capitals, punctuation and numbers." },
  avancat: { titol: "Advanced", desc: "Long texts: stories, science, traditions... Focus and type without looking at the keyboard!" },
};

const NIVELLS_MITJANS = [
  {
    titol: "Animals",
    desc: "Short texts about animals. Take your time and don't look at the keyboard.",
    textos: [
      "Lily's cat is called Smudge. He has black fur and green eyes. He loves sleeping in the sun and, when he's hungry, he meows loudly at the kitchen door.",
      "Bees live in hives and make honey from the nectar of flowers. They work very hard and help plants grow fruit.",
      "A penguin is a bird that can't fly, but it swims very fast. It lives in cold places and eats small fish.",
      "Squirrels, foxes and wild boars live in the forest. If you walk quietly, you might see a squirrel climbing a pine tree."
    ],
  },
  {
    titol: "School",
    desc: "Tell us what a day at school is like.",
    textos: [
      "Every morning I pick up my school bag and walk to school. There are twenty-five children in my class, and our teacher is called Mrs Brown.",
      "At break time we play football and hide-and-seek. When the bell rings, we line up and go back to class.",
      "Today in maths we learned how to multiply. Then we read a story and drew a picture of our favourite character."
    ],
  },
  {
    titol: "The seasons",
    desc: "Spring, summer, autumn and winter. Watch out for the commas!",
    textos: [
      "In spring the trees are full of flowers and the days get longer. It's the perfect time to go on a trip.",
      "In summer it's hot and there's no school. We go to the beach, eat ice cream and swim in the pool.",
      "In autumn the leaves fall from the trees and we go looking for mushrooms. We also roast chestnuts.",
      "In winter it's cold and sometimes it snows in the mountains. We put on our scarves, gloves and hats to go outside."
    ],
  },
  {
    titol: "Food",
    desc: "Breakfast, lunch, snack and dinner.",
    textos: [
      "For breakfast I have a glass of milk and some toast with olive oil. At lunchtime I love noodle soup.",
      "Fruit is very good for you. Every day I eat an apple, a banana or an orange as a snack.",
      "On Sundays Grandpa makes a big paella for the whole family. We all help to set the table and then we wash the dishes."
    ],
  },
  {
    titol: "Questions and exclamations",
    desc: "The question mark ( ? ) is Shift + apostrophe and the exclamation mark ( ! ) is Shift + 1.",
    textos: [
      "What's your name? How old are you? Where do you live? What's your favourite colour? My name is Leo and I like blue!",
      "What a lovely day! Shall we go to the park? Yes, and let's take the ball! How lucky that it isn't raining!",
      "Have you seen my pencil? I can't find it anywhere! Maybe it's in my bag. Oh, here it is! Thanks!"
    ],
  },
  {
    titol: "Dialogues",
    desc: "The colon ( : ) is Shift + full stop, and quotation marks ( \" ) are Shift + 2.",
    textos: [
      "Mum said: \"Tidy your room.\" And I answered: \"OK, right now!\"",
      "The teacher asked: \"Who knows the capital of the United Kingdom?\" And Julia said: \"London!\"",
      "Max shouted: \"Look, a rainbow!\" And we all ran to the window to see it."
    ],
  },
  {
    titol: "Numbers and dates",
    desc: "Letters and numbers mixed together. Your fingers reach up to the top row and go back home.",
    textos: [
      "I was born on 15 March 2017. I live at number 24, High Street, and my phone number has 9 digits.",
      "There are 25 pupils in my class: 13 girls and 12 boys. Every day we have 5 hours of lessons and 30 minutes of break.",
      "If I have 10 sweets and give 3 to my sister and 2 to my cousin, I have 5 left."
    ],
  },
  {
    titol: "Sports and games",
    desc: "What do you like doing in your free time?",
    textos: [
      "I love playing basketball with my friends. We train twice a week and we have a match on Saturdays.",
      "When it rains we stay at home and play cards or chess, or we do a thousand-piece jigsaw puzzle.",
      "My cousin goes swimming. She can swim fifty metres of front crawl really fast and she wants to enter a competition."
    ],
  },
  {
    titol: "Town and village",
    desc: "Describing places. Watch the capital letters!",
    textos: [
      "In the city there are lots of cars, buses and tall buildings. There are also parks, museums and libraries.",
      "My grandparents' village is small and quiet. It has a square with a fountain, a church and a bakery that makes delicious buns.",
      "To get to the city we take the train. The journey takes half an hour and from the window we can see fields and mountains."
    ],
  },
  {
    titol: "Riddles",
    desc: "Type the riddles... and the answer!", uneix: 2,
    textos: [
      "What has teeth but never bites? A comb!",
      "What gets bigger the more you take away? A hole!",
      "What has pages and a spine but isn't an animal? A book!",
      "What gets wetter the more it dries? A towel!",
      "What has hands but can't clap? A clock!",
      "What has to be broken before you can use it? An egg!"
    ],
  },
  {
    titol: "Sayings and proverbs",
    desc: "Old sayings everybody knows. Do you know what they mean?", uneix: 3,
    textos: [
      "The early bird catches the worm.",
      "Slow and steady wins the race.",
      "A bird in the hand is worth two in the bush.",
      "Better late than never.",
      "Practice makes perfect.",
      "Every cloud has a silver lining.",
      "Don't count your chickens before they hatch.",
      "Actions speak louder than words.",
      "Two heads are better than one.",
      "Where there's a will, there's a way.",
      "An apple a day keeps the doctor away.",
      "Look before you leap.",
      "It's raining cats and dogs.",
      "A piece of cake.",
      "Break a leg!",
      "Under the weather.",
      "Once in a blue moon.",
      "Home sweet home."
    ],
  },
];

const NIVELLS_AVANCATS = [
  {
    titol: "Stories",
    desc: "A long story. Breathe, put your fingers on the home row and off you go.",
    textos: [
      "Once upon a time there was a dragon who lived in a cave at the top of a very high mountain. Everyone in the village was afraid of him, but nobody knew that the dragon was very easily scared: he was frightened of thunder, of shadows and even of butterflies. One day, a brave girl called Clara climbed up to the cave with a basket of apples. \"Don't be scared,\" she said. \"I just want to be your friend.\" From that day on, the dragon and Clara were inseparable.",
      "Sara and Leo found an old map in the attic of their grandmother's house. It showed a path that left the garden, went under the old bridge and ended next to a huge oak tree. They took a spade, a torch and some sandwiches, and followed the directions very carefully. After walking for a long time, they found a tin box buried in the ground. Inside there was no gold and no jewels, but there were photos of their grandmother as a little girl and a note that said: \"The greatest treasure is your memories.\""
    ],
  },
  {
    titol: "Nature",
    desc: "Science texts about the natural world.",
    textos: [
      "The water on our planet never runs out: it travels around and around in a cycle. When the sun warms the seas, rivers and lakes, some of the water evaporates and rises into the sky as water vapour. Higher up it is colder, and the vapour condenses into tiny drops that form clouds. When the drops grow big and heavy, they fall as rain, snow or hail. That water flows back into the rivers and seas, or soaks into the ground, and the cycle starts all over again.",
      "Trees are very important for life on Earth. Their leaves catch sunlight and use it to make their own food; this process is called photosynthesis. While they do this, they take in carbon dioxide from the air and give out oxygen, which is what people and animals breathe. Their roots also hold the soil together, so the rain doesn't wash it away. That's why it is so important to look after forests and to plant new trees."
    ],
  },
  {
    titol: "Space",
    desc: "Planets, the Moon and astronauts. Lots of capital letters!",
    textos: [
      "The solar system is made up of the Sun and everything that travels around it. There are eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune. The first four are small and rocky, while the other four are giants made mostly of gas. Jupiter is the biggest planet: more than a thousand Earths could fit inside it! The Earth takes 365 days to go all the way around the Sun, and we call that time a year.",
      "The Moon is the Earth's satellite. It doesn't make its own light: we can see it because it reflects light from the Sun. As it travels around the Earth, a different part of it is lit up each night, which is why we talk about phases: new moon, first quarter, full moon and last quarter. A full cycle takes about twenty-nine days. In 1969, the astronauts Neil Armstrong and Buzz Aldrin became the first people to walk on the Moon."
    ],
  },
  {
    titol: "Traditions",
    desc: "Festivals and traditions.",
    textos: [
      "Human towers, called castells, are a very old tradition in Catalonia. A team of people climb on top of each other to build a tower. At the bottom is the pinya, where lots of people push together to hold up the weight. A child climbs all the way to the top and raises one hand in the air when they get there. In 2010, UNESCO added castells to its list of the Intangible Cultural Heritage of Humanity.",
      "On 23 April, Catalonia celebrates Sant Jordi, also known as Saint George's Day. According to the legend, the knight George defeated a dragon that was frightening a village and saved the princess. A rose bush full of red roses grew from the dragon's blood. Today the streets fill with stalls selling books and flowers, and people give a rose and a book to the ones they love. It is also World Book Day."
    ],
  },
  {
    titol: "Geography",
    desc: "Mountains, rivers and oceans. Watch out for the numbers!",
    textos: [
      "Spain has many different landscapes. In the north are the Pyrenees, high mountains where it snows a lot in winter, and in the south is the Sierra Nevada, home to Mulhacen, the highest peak on the mainland at 3479 metres. The highest mountain in the whole country is Teide, a volcano on the island of Tenerife that is 3715 metres high. Some of the most important rivers are the Tagus, the Ebro, the Douro and the Guadalquivir.",
      "The Earth has five oceans: the Pacific, the Atlantic, the Indian, the Arctic and the Southern Ocean. The biggest is the Pacific, which covers almost a third of the planet's surface. The oceans are full of life: whales, dolphins, sharks, turtles and millions of colourful fish live there. There are also coral reefs, which are like underwater cities. Sadly, the plastic we throw away can end up in the sea and hurt the animals; that's why recycling is so important."
    ],
  },
  {
    titol: "Technology",
    desc: "How a computer works and how to stay safe online.",
    textos: [
      "A computer is a machine that follows instructions to do lots of different jobs: writing, doing sums, drawing or playing games. It has parts we can touch, called hardware, like the keyboard, the mouse, the screen or the processor. It also has parts we can't touch, called software, which are the programs. The processor is the computer's brain: it can do millions of operations every second. The instructions we give it are written in a programming language.",
      "The internet is a network that connects millions of computers all over the world. Thanks to the internet we can look things up, watch videos or talk to people who live far away. But we also need to be careful: we should never share our passwords, our home address or photos with strangers. If we see something that makes us feel bad, we should tell an adult we trust. Staying safe online is very important!"
    ],
  },
  {
    titol: "Letters and invitations",
    desc: "Writing to a friend is easier when you know the keyboard!",
    textos: [
      "Dear Lily, How are you? I'm writing from my grandparents' village, where I'm spending the summer holidays. Every morning we collect eggs from the hen house, and in the afternoon we swim in the river, which is really cold. Yesterday we walked to the top of the mountain and saw a deer! At night you can see loads of stars from the garden. I can't wait to come back and tell you everything. Lots of love, Martina.",
      "Hi everyone! This Saturday at five o'clock I'm having my birthday party at home. We'll have a treasure hunt in the garden, eat chocolate cake and then watch a film. If you can come, wear comfy clothes because we'll be running around a lot! Please let me know if you're coming before Thursday. I can't wait to see you. See you on Saturday! Leo."
    ],
  },
  {
    titol: "Recipes",
    desc: "Step-by-step instructions. Read each step carefully.",
    textos: [
      "Bread with tomato. Ingredients: crusty bread, ripe tomatoes, olive oil and salt. First, cut the bread into slices and, if you like, toast them a little. Then cut the tomatoes in half and rub them over the bread until it's nice and red. Next, add a drizzle of olive oil and a pinch of salt. And that's it! Bread with tomato is delicious on its own, but you can also have it with cheese or ham.",
      "Strawberry milkshake. You will need: ten strawberries, a banana, a glass of milk and a spoonful of honey. Wash the strawberries well and remove the leaves. Peel the banana and cut it into slices. Put all the fruit in the blender jug, add the milk and the honey, and ask an adult to help you blend everything for one minute. Pour the milkshake into cold glasses and, if you like, decorate them with a strawberry. Enjoy!"
    ],
  },
  {
    titol: "Final challenge",
    desc: "The longest text of all! Show everything you've learned. You can do it!",
    uneix: 2,
    textos: () => NIVELLS_AVANCATS.slice(0, -1).flatMap((n) => n.textos),
  },
];
