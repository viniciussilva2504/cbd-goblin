import type { Product, CategoryInfo } from "@/types";

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "oleos",
    name: "Óleos CBD",
    description: "Extractos sublinguais de alta biodisponibilidade",
    image: "https://picsum.photos/seed/oleos-cbd/600/400",
  },
  {
    id: "cosmeticos",
    name: "Cosméticos",
    description: "Cuidado da pele com o poder do CBD",
    image: "https://picsum.photos/seed/cosmeticos-cbd/600/400",
  },
  {
    id: "pomadas",
    name: "Pomadas",
    description: "Alívio localizado para músculos e articulações",
    image: "https://picsum.photos/seed/pomadas-cbd/600/400",
  },
  {
    id: "suplementos",
    name: "Suplementos",
    description: "Apoio ao bem-estar diário em cápsulas e gomas",
    image: "https://picsum.photos/seed/suplementos-cbd/600/400",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "oleo-cbd-5",
    name: "Óleo CBD 5%",
    shortDescription: "Equilíbrio suave para o dia a dia",
    description:
      "Óleo de CBD de espectro completo com 5% de concentração. Ideal para iniciantes que procuram os benefícios do canabidiol de forma gradual. Extraído de cânhamo orgânico certificado, com óleo de semente de cânhamo como base.",
    price: 29.9,
    image: "https://picsum.photos/seed/oleo-5/400/400",
    category: "oleos",
    concentration: "5%",
    volume: "10ml",
    featured: true,
    stock: 50,
    tags: ["bestseller", "iniciante"],
  },
  {
    id: "2",
    slug: "oleo-cbd-10",
    name: "Óleo CBD 10%",
    shortDescription: "Concentração média para suporte diário",
    description:
      "Fórmula de espectro completo com 10% de CBD. A escolha mais popular para quem já conhece os benefícios do CBD e procura um suporte mais robusto ao bem-estar quotidiano.",
    price: 49.9,
    image: "https://picsum.photos/seed/oleo-10/400/400",
    category: "oleos",
    concentration: "10%",
    volume: "10ml",
    featured: true,
    stock: 35,
    tags: ["popular", "espectro-completo"],
  },
  {
    id: "3",
    slug: "oleo-cbd-20",
    name: "Óleo CBD 20%",
    shortDescription: "Alta concentração para utilizadores experientes",
    description:
      "Óleo de alta potência com 20% de CBD de espectro completo. Formulado para quem necessita de uma dose mais elevada de canabidiol para apoio ao bem-estar.",
    price: 89.9,
    image: "https://picsum.photos/seed/oleo-20/400/400",
    category: "oleos",
    concentration: "20%",
    volume: "10ml",
    featured: false,
    stock: 20,
    tags: ["alta-potencia", "experiente"],
  },
  {
    id: "4",
    slug: "creme-hidratante-cbd",
    name: "Creme Hidratante CBD",
    shortDescription: "Hidratação profunda e apaziguadora",
    description:
      "Creme facial com 200mg de CBD isolado, ácido hialurónico e aloe vera. Reduz o vermelhão, hidrata em profundidade e deixa a pele radiante. Adequado para todos os tipos de pele.",
    price: 34.9,
    image: "https://picsum.photos/seed/creme-cbd/400/400",
    category: "cosmeticos",
    weight: "50ml",
    featured: true,
    stock: 30,
    tags: ["facial", "hidratante"],
  },
  {
    id: "5",
    slug: "serum-facial-cbd",
    name: "Sérum Facial CBD",
    shortDescription: "Anti-idade com canabidiol de alta pureza",
    description:
      "Sérum concentrado com 500mg de CBD isolado, vitamina C e péptidos. Combate os sinais de envelhecimento, ilumina o tom de pele e protege contra stress oxidativo.",
    price: 54.9,
    image: "https://picsum.photos/seed/serum-cbd/400/400",
    category: "cosmeticos",
    weight: "30ml",
    featured: false,
    stock: 15,
    tags: ["anti-idade", "premium"],
  },
  {
    id: "6",
    slug: "pomada-articular-cbd",
    name: "Pomada Articular CBD",
    shortDescription: "Alívio localizado para articulações",
    description:
      "Pomada com 1000mg de CBD, arnica e mentol. Formulada para alívio de desconforto articular. Absorção rápida, sem gordura residual. Ideal para uso diário em joelhos, ombros e mãos.",
    price: 39.9,
    image: "https://picsum.photos/seed/pomada-articular/400/400",
    category: "pomadas",
    weight: "100ml",
    featured: true,
    stock: 40,
    tags: ["articular", "alívio"],
  },
  {
    id: "7",
    slug: "pomada-muscular-cbd",
    name: "Pomada Muscular CBD",
    shortDescription: "Recuperação pós-treino com efeito frio/quente",
    description:
      "Pomada especialmente desenvolvida para atletas e praticantes de desporto. Com CBD 1500mg, cânfora e extrato de pimenta. Promove a recuperação muscular após exercício intenso.",
    price: 44.9,
    image: "https://picsum.photos/seed/pomada-muscular/400/400",
    category: "pomadas",
    weight: "100ml",
    featured: false,
    stock: 25,
    tags: ["desporto", "recuperação"],
  },
  {
    id: "8",
    slug: "capsulas-cbd-25mg",
    name: "Cápsulas CBD 25mg",
    shortDescription: "Dose precisa e conveniente",
    description:
      "Cápsulas de gelatina com 25mg de CBD isolado por cápsula. Fáceis de integrar na rotina diária. Embalagem com 30 cápsulas, sem sabor, veganas.",
    price: 39.9,
    image: "https://picsum.photos/seed/capsulas-cbd/400/400",
    category: "suplementos",
    weight: "30 cápsulas",
    featured: false,
    stock: 45,
    tags: ["vegano", "conveniente"],
  },
  {
    id: "9",
    slug: "gominhas-cbd",
    name: "Gominhas CBD",
    shortDescription: "Bem-estar com sabor a frutos silvestres",
    description:
      "Gominhas mastigáveis com 10mg de CBD por unidade. Sabor a frutos silvestres. Embalagem com 20 unidades. Fáceis de levar para qualquer lado. Veganas e sem glúten.",
    price: 24.9,
    image: "https://picsum.photos/seed/gominhas-cbd/400/400",
    category: "suplementos",
    weight: "20 unidades",
    featured: true,
    stock: 60,
    tags: ["vegano", "sem-glúten", "sabor"],
  },
  {
    id: "10",
    slug: "oleo-cbd-animais",
    name: "Óleo CBD para Animais",
    shortDescription: "Bem-estar natural para o teu pet",
    description:
      "Óleo de CBD 3% especialmente formulado para cães e gatos. Sem THC, com sabor neutro. Ajuda a reduzir a ansiedade e a melhorar a mobilidade em animais mais velhos.",
    price: 27.9,
    image: "https://picsum.photos/seed/oleo-animais/400/400",
    category: "oleos",
    concentration: "3%",
    volume: "10ml",
    featured: false,
    stock: 20,
    tags: ["animais", "pet-friendly"],
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
