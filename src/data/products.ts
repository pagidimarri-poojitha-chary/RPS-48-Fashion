export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export const womenProducts: Product[] = [
  {
    id: 1,
    name: 'Elegant Evening Gown',
    category: 'Formal Wear',
    price: '$899',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isNew: true,
    isTrending: true,
  },
  {
    id: 2,
    name: 'Business Blazer Set',
    category: 'Professional',
    price: '$649',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isTrending: true,
  },
  {
    id: 3,
    name: 'Silk Cocktail Dress',
    category: 'Party Wear',
    price: '$749',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: 4,
    name: 'Custom Wedding Dress',
    category: 'Bridal',
    price: '$1,299',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    id: 5,
    name: 'Casual Summer Dress',
    category: 'Casual',
    price: '$399',
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isTrending: true,
  },
  {
    id: 6,
    name: 'Designer Blazer',
    category: 'Contemporary',
    price: '$549',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: 7,
    name: 'Vintage Sweatshirt',
    category: 'Outerwear',
    price: '$799',
    image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    id: 8,
    name: 'Bohemian Maxi Dress',
    category: 'Casual',
    price: '$459',
    image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
];

export const menProducts: Product[] = [
  {
    id: 9,
    name: 'Classic Three-Piece Suit',
    category: 'Formal',
    price: '$1,199',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isTrending: true,
  },
  {
    id: 10,
    name: 'Business Casual Blazer',
    category: 'Professional',
    price: '$699',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: 11,
    name: 'Tuxedo with Bow Tie',
    category: 'Black Tie',
    price: '$1,399',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    id: 12,
    name: 'Casual Linen Shirt',
    category: 'Casual',
    price: '$299',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isTrending: true,
  },
  {
    id: 13,
    name: 'Designer Polo Set',
    category: 'Smart Casual',
    price: '$449',
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: 14,
    name: 'Winter Overcoat',
    category: 'Outerwear',
    price: '$899',
    image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    id: 15,
    name: 'Custom Dress Shirt',
    category: 'Formal',
    price: '$199',
    image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isTrending: true,
  },
  {
    id: 16,
    name: 'Casual Chinos Set',
    category: 'Casual',
    price: '$349',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
];

export const kidsProducts: Product[] = [
  {
    id: 17,
    name: 'Princess Party Dress',
    category: 'Girls Formal',
    price: '$299',
    image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isNew: true,
    isTrending: true,
  },
  {
    id: 18,
    name: 'Little Gentleman Suit',
    category: 'Boys Formal',
    price: '$399',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isTrending: true,
  },
  {
    id: 19,
    name: 'School Uniform Set',
    category: 'School Wear',
    price: '$149',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    id: 20,
    name: 'Birthday Outfit',
    category: 'Party Wear',
    price: '$199',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isNew: true,
  },
  {
    id: 21,
    name: 'Casual Play Set',
    category: 'Casual',
    price: '$99',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    id: 22,
    name: 'Winter Jacket',
    category: 'Outerwear',
    price: '$249',
    image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isTrending: true,
  },
  {
    id: 23,
    name: 'Summer Shorts Set',
    category: 'Summer Wear',
    price: '$79',
    image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
  },
  {
    id: 24,
    name: 'Traditional Outfit',
    category: 'Cultural',
    price: '$199',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isNew: true,
  },
];