export type Category =
  | "oleos"
  | "cosmeticos"
  | "pomadas"
  | "suplementos"
  | "flores"
  | "hash";

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  concentration?: string;
  volume?: string;
  weight?: string;
  /** For flores/hash: CBD% and THC% */
  cbdContent?: string;
  thcContent?: string;
  /** Country/region of origin */
  origin?: string;
  hhc?: boolean;
  featured: boolean;
  stock: number;
  tags: string[];
}

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  image: string;
}

export interface Accessory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  image: string;
  type: "bong" | "vaporizer" | "pipe" | "tip" | "grinder" | "rolling";
  material?: string;
  featured: boolean;
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  product: string;
  rating: number;
  text: string;
  condition: string;
  avatar: string;
}
