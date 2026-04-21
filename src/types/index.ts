export type Category = "oleos" | "cosmeticos" | "pomadas" | "suplementos";

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
