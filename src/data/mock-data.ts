export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  hoverImage: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
}

export const collections: Collection[] = [
  {
    id: 'rings',
    name: 'Rings',
    description: 'Solitaires, bands & statement rings',
    image: 'https://images.pexels.com/photos/19703087/pexels-photo-19703087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    itemCount: 48,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains & layered pieces',
    image: 'https://images.pexels.com/photos/28985983/pexels-photo-28985983.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    itemCount: 36,
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & hoops',
    image: 'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    itemCount: 52,
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    description: 'Tennis, cuffs & charm bracelets',
    image: 'https://images.pexels.com/photos/18285682/pexels-photo-18285682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    itemCount: 29,
  },
];

export const newArrivals: Product[] = [
  {
    id: 'na-1',
    name: 'Aurora Solitaire Ring',
    category: 'Rings',
    price: 89500,
    isNew: true,
    image: 'https://images.pexels.com/photos/8306529/pexels-photo-8306529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    hoverImage: 'https://images.pexels.com/photos/19703087/pexels-photo-19703087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'na-2',
    name: 'Étoile Pendant Necklace',
    category: 'Necklaces',
    price: 64200,
    isNew: true,
    image: 'https://images.pexels.com/photos/17059617/pexels-photo-17059617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    hoverImage: 'https://images.pexels.com/photos/28985983/pexels-photo-28985983.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'na-3',
    name: 'Lumière Diamond Earrings',
    category: 'Earrings',
    price: 47800,
    isNew: true,
    image: 'https://images.pexels.com/photos/28389453/pexels-photo-28389453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    hoverImage: 'https://images.pexels.com/photos/20943478/pexels-photo-20943478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'na-4',
    name: 'Céleste Gold Bracelet',
    category: 'Bracelets',
    price: 56300,
    isNew: true,
    image: 'https://images.pexels.com/photos/18285651/pexels-photo-18285651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    hoverImage: 'https://images.pexels.com/photos/37573129/pexels-photo-37573129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const bestSellers: Product[] = [
  {
    id: 'bs-1',
    name: 'Halo Diamond Ring',
    category: 'Rings',
    price: 125000,
    isBestseller: true,
    image: 'https://images.pexels.com/photos/10976653/pexels-photo-10976653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    hoverImage: 'https://images.pexels.com/photos/8891957/pexels-photo-8891957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'bs-2',
    name: 'Soleil Layered Necklace',
    category: 'Necklaces',
    price: 78500,
    isBestseller: true,
    image: 'https://images.pexels.com/photos/29371787/pexels-photo-29371787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    hoverImage: 'https://images.pexels.com/photos/18285675/pexels-photo-18285675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'bs-3',
    name: 'Aria Diamond Drops',
    category: 'Earrings',
    price: 52400,
    isBestseller: true,
    image: 'https://images.pexels.com/photos/20943477/pexels-photo-20943477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    hoverImage: 'https://images.pexels.com/photos/10475792/pexels-photo-10475792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'bs-4',
    name: 'Mira Tennis Bracelet',
    category: 'Bracelets',
    price: 68900,
    isBestseller: true,
    image: 'https://images.pexels.com/photos/10828767/pexels-photo-10828767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    hoverImage: 'https://images.pexels.com/photos/27206257/pexels-photo-27206257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Ananya Kapoor',
    location: 'Mumbai',
    rating: 5,
    text: 'The craftsmanship is extraordinary. My engagement ring from Lustre & Co. still takes my breath away every time I look at it. It feels like a piece of art made just for me.',
  },
  {
    id: 't-2',
    name: 'Rohan Mehta',
    location: 'Bengaluru',
    rating: 5,
    text: 'I purchased a necklace for our anniversary, and the attention to detail was impeccable. The packaging, the certificate of authenticity — everything felt considered and luxurious.',
  },
  {
    id: 't-3',
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'I have collected jewellery for years, and Lustre & Co. stands apart. The designs are timeless yet modern. Their pieces are the ones I reach for every single day.',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g-1',
    image: 'https://images.pexels.com/photos/14999288/pexels-photo-14999288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Gold necklace with diamonds draped elegantly',
  },
  {
    id: 'g-2',
    image: 'https://images.pexels.com/photos/8398913/pexels-photo-8398913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Diamond ring with gold accents',
  },
  {
    id: 'g-3',
    image: 'https://images.pexels.com/photos/7411261/pexels-photo-7411261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Woman wearing statement gold necklace',
  },
  {
    id: 'g-4',
    image: 'https://images.pexels.com/photos/4595723/pexels-photo-4595723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Diamond pendant necklace on reflective surface',
  },
  {
    id: 'g-5',
    image: 'https://images.pexels.com/photos/7618570/pexels-photo-7618570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Diamond earrings held delicately',
  },
  {
    id: 'g-6',
    image: 'https://images.pexels.com/photos/12427696/pexels-photo-12427696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Diamond engagement rings on textured surface',
  },
];

export const heroImage = 'https://images.pexels.com/photos/7411261/pexels-photo-7411261.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';
export const brandStoryImage = 'https://images.pexels.com/photos/6263113/pexels-photo-6263113.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';
export const promoBannerImage = 'https://images.pexels.com/photos/3871582/pexels-photo-3871582.jpeg?auto=compress&cs=tinysrgb&h=900&w=1920';

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
