export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  rating: number;
  category: string;
  likes: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Kettle',
    price: 799,
    description: 'A great electronic teapot',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
    rating: 4,
    category: 'Electronics',
    likes: 100,
  },

  {
    id: 2,
    name: 'Plates',
    price: 200,
    description: 'A great set of plates',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h00/h66/64176040902686.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/emal-nabor-posudy-klubnika-sadovaja-ais-110t-emal-4-sht-103442013/?c=750000000',
    rating: 5,
    category: 'Dishes',
    likes: 132,
  },
  {
    id: 3,
    name: 'Wardrobe',
    price: 1000,
    description: 'Great wardrobe',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h71/h15/64429190742046.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/sanfor-kapri-160-2x46-6x190-5-belyi-bezhevyi-106768828/?c=750000000',
    rating: 4,
    category: 'Furniture',
    likes: 89,
  },
  {
    id: 4,
    name: 'Iphone',
    price: 900,
    description: 'A great phone',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    rating: 5,
    category: 'Electronics',
    likes: 99,
  },
  {
    id: 5,
    name: 'Adapter',
    price: 100,
    description: 'USB adapter',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
    rating: 4,
    category: 'Electronics',
    likes: 100,
  },
  {
    id: 6,
    name: 'Lens',
    price: 100,
    description: 'Lens for a phone',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hff/hff/64174388215838.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apexel-apl-0-45wm-103450033/?c=750000000',
    rating: 5,
    category: 'Electronics',
    likes: 96,
  },
  {
    id: 7,
    name: 'Chocolate',
    price: 80,
    description: 'A great chocolate',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/rahat-shokoladnaja-plitka-molochnyi-100-g-100221859/?c=750000000',
    rating: 5,
    category: 'Food',
    likes: 102,
  },
  {
    id: 8,
    name: 'Coca Cola',
    price: 60,
    description: 'A great drink',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h1c/hf1/85128198684702.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-2-l-100208094/?c=750000000',
    rating: 4,
    category: 'Food',
    likes: 150,
  },
  {
    id: 9,
    name: 'Cups',
    price: 190,
    description: 'A great set of cups',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h72/h2e/84929932066846.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/kruzhka-zarema-home-727-250-ml-6-sht-keramika-115931348/?c=750000000',
    rating: 5,
    category: 'Dishes',
    likes: 79,
  },
  {
    id: 10,
    name: 'Cable',
    price: 500,
    description: 'USB Type-C cable',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hbd/h2f/63829403140126.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/?c=750000000',
    rating: 4,
    category: 'Electronics',
    likes: 98,
  },
  {
    id: 11,
    name: 'Dish kit',
    price: 600,
    description: 'White dish kit',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h36/h77/82228042825758.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/serviz-chaino-stolovyi-887080-32-v-1-112066821/?c=750000000',
    rating: 5,
    category: 'Dishes',
    likes: 100,
  },
  {
    id: 12,
    name: 'Alluminum dish kit',
    price: 600,
    description: 'Alluinum pots dish kit',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h7a/hdc/84404172390430.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/hoarbar-nabor-posudy-223340-aljuminii-5-v-1-110246747/?c=750000000',
    rating: 4,
    category: 'Dishes',
    likes: 130,
  },
  {
    id: 13,
    name: 'Glass cup',
    price: 200,
    description: 'Simple cup',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hfa/h1d/85039054651422.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/kruzhka-937636-350-ml-steklo-116287000/?c=750000000',
    rating: 5,
    category: 'Dishes',
    likes: 100,
  },
  {
    id: 14,
    name: 'Chair',
    price: 560,
    description: 'A white chair',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/63900105277470.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000',
    rating: 5,
    category: 'Furniture',
    likes: 130,
  },
  {
    id: 15,
    name: 'Simple chair',
    price: 400,
    description: 'A backless chair',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/ha4/haf/63948533432350.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/taburet-zmi-penek-47x46x46-sm-seryi-102981664/?c=750000000',
    rating: 4,
    category: 'Furniture',
    likes: 110,
  },
  {
    id: 16,
    name: 'Sofa',
    price: 2000,
    description: 'A great sofa',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/he7/h17/64383593971742.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/mizam-8902061-divan-obivka-tkan-70x210x75-sm-seryi-104172973/?c=750000000',
    rating: 5,
    category: 'Furniture',
    likes: 97,
  },
  {
    id: 17,
    name: 'Table',
    price: 1700,
    description: 'Table for work',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hdb/h6f/64379432665118.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/arapbek-114x40x140-sm-stolpis002-106541589/?c=750000000',
    rating: 4,
    category: 'Furniture',
    likes: 107,
  },

  {
    id: 18,
    name: 'Bliny',
    price: 60,
    description: 'Delicious bliny',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h9d/h51/64367074050078.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/magnum-blinchiki-klassicheskie-400-g-103274746/?c=750000000',
    rating: 4,
    category: 'Food',
    likes: 100,
  },
  {
    id: 19,
    name: 'Baursaki',
    price: 70,
    description: 'Delicious baursaki 300g',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h5a/h5c/64125061300254.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/magnum-bauyrsaki-300-g-103331881/?c=750000000',
    rating: 5,
    category: 'Food',
    likes: 150,
  },
  {
    id: 20,
    name: 'Salad',
    price: 120,
    description: 'Salad glukhar`s nest',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/ha2/h5c/64262099075102.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/magnum-gnezdo-gluharja-200-g-106431317/?c=750000000',
    rating: 4,
    category: 'Food',
    likes: 120,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
