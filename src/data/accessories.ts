import type { Accessory } from "@/types";

export const ACCESSORIES: Accessory[] = [
  /* ── BONGS ── */
  {
    id: "a1",
    slug: "bong-vidro-borosilicato-30cm",
    name: "Bong Vidro Borosilicato 30cm",
    shortDescription: "Filtração por água — smoke mais suave e frio",
    description:
      "Bong de vidro borosilicato de alta resistência com 30cm de altura. Tubo de 5mm de espessura, base arredondada e downstem removível com difusor. A filtração por água retém partículas sólidas e arrefece o fumo significativamente, reduzindo a irritação das vias respiratórias comparativamente ao consumo direto.",
    price: 34.9,
    image: "https://picsum.photos/seed/bong-vidro/400/400",
    type: "bong",
    material: "Vidro borosilicato",
    featured: true,
    tags: ["borosilicato", "filtração", "água"],
  },
  {
    id: "a2",
    slug: "bong-vidro-duplo-percolador",
    name: "Bong Duplo Percolador",
    shortDescription: "Dupla filtração — fumo ultra suave",
    description:
      "Bong premium com câmara dupla e dois percoladores tree-arm. A dupla filtragem em água fragmenta e arrefece o fumo em múltiplas correntes, resultando numa inalação muito mais suave e menos prejudicial. Vidro borosilicato 7mm, base larga anti-queda.",
    price: 59.9,
    image: "https://picsum.photos/seed/bong-percolador/400/400",
    type: "bong",
    material: "Vidro borosilicato 7mm",
    featured: false,
    tags: ["percolador", "premium", "duplo"],
  },

  /* ── VAPORIZADORES ── */
  {
    id: "a3",
    slug: "vaporizador-ervas-portatil",
    name: "Vaporizador de Ervas Portátil",
    shortDescription: "Sem combustão — o método mais seguro",
    description:
      "Vaporizador portátil de ervas secas com controlo de temperatura digital. Aquece as flores entre 160°C–220°C sem combustão, libertando canabinóides e terpenos sem produzir fumo, alcatrão ou monóxido de carbono. Bateria de 2000mAh, câmara de aço inoxidável, boquilha de vidro intercambiável. A vaporizacão é reconhecida pela maioria dos estudos como a forma inalatória menos prejudicial.",
    price: 79.9,
    image: "https://picsum.photos/seed/vaporizador/400/400",
    type: "vaporizer",
    material: "Alumínio + câmara inox",
    featured: true,
    tags: ["sem-combustão", "portátil", "digital"],
  },
  {
    id: "a4",
    slug: "vaporizador-ervas-desktop",
    name: "Vaporizador Desktop Volcano-Style",
    shortDescription: "Uso doméstico — convecção de ar forçado",
    description:
      "Vaporizador de bancada com sistema de convecção de ar forçado. Enche o balão com vapor puro a temperatura precisa, permitindo inalação cómoda e sem esforço. Ideal para uso medicinal doméstico. Compatible com todas as ervas secas, incluindo flores de CBD.",
    price: 149.9,
    image: "https://picsum.photos/seed/vaporizador-desktop/400/400",
    type: "vaporizer",
    material: "Plástico médico + aço inox",
    featured: false,
    tags: ["desktop", "convecção", "balão"],
  },

  /* ── PITEIRAS DE VIDRO ── */
  {
    id: "a5",
    slug: "piteira-vidro-longa-12cm",
    name: "Piteira de Vidro Longa 12cm",
    shortDescription: "12cm de distância entre a chama e a boca",
    description:
      "Piteira de vidro borosilicato com 12cm de comprimento. A distância extra entre o ponto de combustão e a boca permite que o fumo arrefeça naturalmente, reduzindo a temperatura de inalação e a irritação. Filtra algumas partículas sólidas. Muito superior às piteiras de cartão ou papelão. Lavável e reutilizável.",
    price: 3.9,
    image: "https://picsum.photos/seed/piteira-longa/400/400",
    type: "tip",
    material: "Vidro borosilicato",
    featured: true,
    tags: ["12cm", "arrefecimento", "reutilizável"],
  },
  {
    id: "a6",
    slug: "piteira-vidro-com-filtro-activated-carbon",
    name: "Piteira de Vidro com Filtro de Carvão",
    shortDescription: "Filtração de alcatrão e toxinas",
    description:
      "Piteira de vidro com câmara de carvão ativado integrada. O carvão filtra compostos indesejados do fumo incluindo alcatrão, resíduos de combustão e parte das partículas sólidas. Estudos indicam redução de 50-70% de algumas toxinas. Cada piteira inclui 2 filtros de carvão substituíveis.",
    price: 7.9,
    image: "https://picsum.photos/seed/piteira-carbono/400/400",
    type: "tip",
    material: "Vidro + carvão ativado",
    featured: false,
    tags: ["carvão-ativado", "filtração", "toxinas"],
  },
  {
    id: "a7",
    slug: "piteira-vidro-6mm-pack5",
    name: "Pack 5× Piteiras de Vidro 6mm",
    shortDescription: "Clássica e económica — o básico que faz diferença",
    description:
      "Pack com 5 piteiras de vidro borosilicato de 6mm de diâmetro. Simples mas muito mais seguras que piteiras de papel ou cartão — que podem libertar colas e corantes ao aquecer. Laváveis com álcool isopropílico.",
    price: 5.9,
    image: "https://picsum.photos/seed/piteira-pack/400/400",
    type: "tip",
    material: "Vidro borosilicato",
    featured: false,
    tags: ["pack", "económico", "básico"],
  },

  /* ── CACHIMBO / PIPE ── */
  {
    id: "a8",
    slug: "cachimbo-vidro-spoon-pipe",
    name: "Cachimbo de Vidro Spoon Pipe",
    shortDescription: "Sem papel — inalação pura sem papelão",
    description:
      "Cachimbo de vidro artesanal tipo spoon pipe. Elimina a necessidade de papel de fumo (que ao queimar produz compostos indesejados) e de cartão. Fácil de limpar, portátil e durável. Bowl de capacidade média. Disponível em padrões variados.",
    price: 9.9,
    image: "https://picsum.photos/seed/spoon-pipe/400/400",
    type: "pipe",
    material: "Vidro soprado",
    featured: true,
    tags: ["sem-papel", "portátil", "artesanal"],
  },

  /* ── GRINDER ── */
  {
    id: "a9",
    slug: "grinder-aluminio-4-partes",
    name: "Grinder Alumínio 4 Partes",
    shortDescription: "Moagem uniforme — melhor queima e menos desperdício",
    description:
      "Grinder de alumínio anodizado com 4 compartimentos: tampa/triturador, câmara de recolha, câmara de polinização e gaveta de kief. Moagem uniforme resulta numa queima mais homogénea e eficiente, reduzindo a necessidade de temperatura excessivamente alta.",
    price: 14.9,
    image: "https://picsum.photos/seed/grinder-aluminio/400/400",
    type: "grinder",
    material: "Alumínio anodizado",
    featured: false,
    tags: ["4-partes", "kief", "alumínio"],
  },
];

export const FEATURED_ACCESSORIES = ACCESSORIES.filter((a) => a.featured);
