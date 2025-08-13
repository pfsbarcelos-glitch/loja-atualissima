export type Product = {
  id: string;
  name: string;
  brand: string;
  gender: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  tag?: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'khamrah',
    name: 'Lattafa Khamrah Eau de Parfum 100ml',
    brand: 'Lattafa',
    gender: 'Unissex',
    category: 'Oriental',
    price: 229.9,
    originalPrice: 299.9,
    rating: 4.8,
    tag: 'Mais vendido',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'oudmood',
    name: 'Lattafa Oud Mood 100ml',
    brand: 'Lattafa',
    gender: 'Unissex',
    category: 'Amadeirado',
    price: 189.9,
    rating: 4.6,
    tag: 'Oferta',
    image: 'https://images.unsplash.com/photo-1608571424022-9ea4e8b4a47d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'raghba',
    name: 'Lattafa Raghba 100ml',
    brand: 'Lattafa',
    gender: 'Unissex',
    category: 'Doce',
    price: 199.9,
    originalPrice: 249.9,
    rating: 4.7,
    tag: 'Clássico',
    image: 'https://images.unsplash.com/photo-1618498082410-b4b2b1a08364?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'emeer',
    name: 'Lattafa Emeer 100ml',
    brand: 'Lattafa',
    gender: 'Masculino',
    category: 'Especiado',
    price: 219.9,
    rating: 4.5,
    tag: 'Novo',
    image: 'https://images.unsplash.com/photo-1615198554036-4702e98b1a4f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'anaabiyedh',
    name: 'Lattafa Ana Abiyedh Rouge 60ml',
    brand: 'Lattafa',
    gender: 'Feminino',
    category: 'Floral',
    price: 209.9,
    rating: 4.9,
    tag: 'Luxo',
    image: 'https://images.unsplash.com/photo-1594032185063-d15271b0f0b4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'oudglory',
    name: 'Lattafa Oud For Glory 100ml',
    brand: 'Lattafa',
    gender: 'Masculino',
    category: 'Amadeirado',
    price: 239.9,
    rating: 4.7,
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1602872029708-84f5bbf6a173?q=80&w=1200&auto=format&fit=crop',
  },
];
