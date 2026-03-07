import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'code-coffee-repeat',
    name: 'Code. Coffee. Repeat.',
    description: 'The daily mantra of every developer. Premium quality tee featuring minimalist typography with an integrated coffee cup icon.',
    price: 29.99,
    image: '/designs/design1_code_coffee.jpg',
    category: 'Developer Lifestyle',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    printfulProductId: '5d' // Unisex Jersey Short Sleeve Tee
  },
  {
    id: 'neural-network',
    name: 'Neural Network',
    description: 'Abstract geometric pattern representing interconnected AI nodes. Perfect for data scientists and AI enthusiasts.',
    price: 32.99,
    image: '/designs/design2_neural.jpg',
    category: 'AI & Data Science',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black'],
    printfulProductId: '5d'
  },
  {
    id: 'bug-feature',
    name: 'It\'s Not a Bug, It\'s a Feature',
    description: 'The classic developer excuse, now on a shirt. Features a cute bug icon with monospace typography.',
    price: 29.99,
    image: '/designs/design3_bug_feature.jpg',
    category: 'Developer Humor',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black', 'Gray'],
    printfulProductId: '5d'
  },
  {
    id: 'rocket-code',
    name: 'Launch. Create. Innovate.',
    description: 'Rocket launching with code brackets as exhaust. For the startup founders and innovators.',
    price: 31.99,
    image: '/designs/design4_rocket_code.jpg',
    category: 'Startup Culture',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black', 'Navy'],
    printfulProductId: '5d'
  },
  {
    id: 'binary-heart',
    name: 'Binary Heart',
    description: 'Ones and zeros forming a heart shape. For those who speak the language of love in binary.',
    price: 29.99,
    image: '/designs/design5_binary_heart.jpg',
    category: 'Developer Lifestyle',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black', 'Gray'],
    printfulProductId: '5d'
  },
  {
    id: 'hello-world',
    name: 'Hello World',
    description: 'The first program every developer writes. Retro CRT terminal style with glowing green text.',
    price: 29.99,
    image: '/designs/design6_hello_world.jpg',
    category: 'Classic Coding',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Black'],
    printfulProductId: '5d'
  },
  {
    id: 'java-script',
    name: 'Java Script',
    description: 'Coffee cup with curly braces steam. A playful take on every developer\'s favorite (or most used) language.',
    price: 28.99,
    image: '/designs/design7_coffee_braces.jpg',
    category: 'Developer Humor',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black', 'Gray'],
    printfulProductId: '5d'
  },
  {
    id: 'localhost',
    name: 'No Place Like 127.0.0.1',
    description: 'The localhost IP address - home for every developer. Features a subtle house icon.',
    price: 29.99,
    image: '/designs/design8_localhost.jpg',
    category: 'Developer Lifestyle',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black', 'Navy'],
    printfulProductId: '5d'
  },
  // Gamer Collection
  {
    id: 'eat-sleep-game',
    name: 'Eat. Sleep. Game. Repeat.',
    description: 'The gamer lifestyle in four words. Bold gradient design with controller icon for true gaming enthusiasts.',
    price: 29.99,
    image: '/designs/gamer1_eat_sleep_game.jpg',
    category: 'Gaming',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Black'],
    printfulProductId: '5d'
  },
  {
    id: 'gg-no-re',
    name: 'GG NO RE',
    description: 'Good Game, No Rematch. Classic gaming slang in retro pixel art style for competitive players.',
    price: 28.99,
    image: '/designs/gamer2_gg_no_re.jpg',
    category: 'Gaming',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Black'],
    printfulProductId: '5d'
  },
  // Pet Lovers Collection
  {
    id: 'dog-therapist',
    name: 'My Dog Is My Therapist',
    description: 'For dog parents who know the best therapy has four paws and a wagging tail.',
    price: 29.99,
    image: '/designs/pet1_dog_therapist.jpg',
    category: 'Pet Lovers',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black'],
    printfulProductId: '5d'
  },
  {
    id: 'cat-better-life',
    name: 'I Work Hard For My Cat',
    description: 'The truth every cat parent knows. Elegant design for those who prioritize their feline overlords.',
    price: 29.99,
    image: '/designs/pet2_cat_better_life.jpg',
    category: 'Pet Lovers',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black'],
    printfulProductId: '5d'
  },
  // Fitness Collection
  {
    id: 'no-pain-no-gain',
    name: 'No Pain No Gain',
    description: 'Classic motivational gym quote with bold gradient design. For those who embrace the grind.',
    price: 29.99,
    image: '/designs/fitness1_no_pain.jpg',
    category: 'Fitness',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Black', 'Gray'],
    printfulProductId: '5d'
  },
  {
    id: 'i-sparkle',
    name: 'I Don\'t Sweat, I Sparkle',
    description: 'Gym humor with a feminine twist. Because working out should make you shine!',
    price: 28.99,
    image: '/designs/fitness2_sparkle.jpg',
    category: 'Fitness',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Black', 'White'],
    printfulProductId: '5d'
  },
  // Minimalist Collection
  {
    id: 'less-is-more',
    name: 'Less Is More',
    description: 'Clean Scandinavian design for minimalists who appreciate simplicity and elegance.',
    price: 31.99,
    image: '/designs/minimalist1_less_is_more.jpg',
    category: 'Minimalist',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black'],
    printfulProductId: '5d'
  },
  {
    id: 'mountain-line',
    name: 'Mountain Line Art',
    description: 'Single continuous line drawing of mountains and sun. Modern art meets wearable design.',
    price: 32.99,
    image: '/designs/minimalist2_mountain.jpg',
    category: 'Minimalist',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black'],
    printfulProductId: '5d'
  },
  // Pop Culture Collection
  {
    id: 'coffee-wifi',
    name: 'I Need Coffee And WiFi',
    description: 'The millennial mantra. Perfect for coffee shop warriors and remote workers everywhere.',
    price: 29.99,
    image: '/designs/popculture1_coffee_wifi.jpg',
    category: 'Pop Culture',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black'],
    printfulProductId: '5d'
  },
  {
    id: 'adulting-is-hard',
    name: 'Adulting Is Hard',
    description: 'Relatable humor for anyone who\'s ever struggled with grown-up responsibilities. We feel you.',
    price: 28.99,
    image: '/designs/popculture2_adulting.jpg',
    category: 'Pop Culture',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black'],
    printfulProductId: '5d'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};
