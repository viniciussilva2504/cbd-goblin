import Link from "next/link";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ui/ProductCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import PromoCarousel from "@/components/ui/PromoCarousel";
import ParticleWeb from "@/components/ui/ParticleWeb";
import { FEATURED_PRODUCTS } from "@/data/products";
import type { Testimonial } from "@/types";

/* ─── Data ─────────────────────────────────────────────────── */

const TICKER_ITEMS = [
  "CBD",
  "Terapêutico",
  "Legal em Portugal",
  "Sem Dependência",
  "100% Natural",
  "Certificado em Lab",
  "Anti-inflamatório",
  "Para o Teu Bem-estar",
  "Vila Nova de Gaia",
];

const THERAPIES = [
  {
    stat: "30%",
    label: "Dor Crónica",
    description:
      "Estudos clínicos apontam o CBD como adjuvante eficaz em fibromialgia, artrite e neuropatia, reduzindo a perceção da dor sem digestão de opiáceos.",
    color: "bg-sage-900",
    accent: "text-goblin-400",
  },
  {
    stat: "↓",
    label: "Ansiedade & Stress",
    description:
      "O CBD modula receptores de serotonina e GABA, promovendo calma mensurável sem causar sedação nem criar dependência física.",
    color: "bg-forest-900",
    accent: "text-cobalt-400",
  },
  {
    stat: "2×",
    label: "Qualidade do Sono",
    description:
      "Regulação do ciclo circadiano e redução da insónia crónica — especialmente quando associada a ansiedade ou dor persistente.",
    color: "bg-sage-950",
    accent: "text-gold-400",
  },
  {
    stat: "Anti",
    label: "Inflamação",
    description:
      "Antagonista natural das citocinas pró-inflamatórias. Eficaz por via tópica (pomadas, cremes) e sistémica (óleos, cápsulas).",
    color: "bg-charcoal-900",
    accent: "text-goblin-300",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Maria João F.",
    location: "Porto",
    product: "Óleo CBD 10%",
    rating: 5,
    condition: "Insónia crónica",
    text: "Há quase dois anos que dormia menos de 5 horas por noite. O meu médico sugeriu experimentar CBD como complemento à terapia. Ao fim de 3 semanas com o óleo 10%, adormeço sem esforço e acordo com energia. Não é milagre — é ciência e paciência.",
    avatar: "https://picsum.photos/seed/testimonial-mj/80/80",
  },
  {
    id: 2,
    name: "António R.",
    location: "Vila Nova de Gaia",
    product: "Óleo CBD 20%",
    rating: 5,
    condition: "Ansiedade generalizada",
    text: "Fui encaminhado pelo meu psicólogo para experimentar CBD como adjuvante ao meu plano de tratamento. A diferença foi gradual mas real. Hoje lido com situações de stress que antes me paralisavam. O óleo 20% tornou-se parte da minha rotina matinal.",
    avatar: "https://picsum.photos/seed/testimonial-ar/80/80",
  },
  {
    id: 3,
    name: "Susana M.",
    location: "Matosinhos",
    product: "Pomada Articular CBD",
    rating: 5,
    condition: "Artrite reumatoide",
    text: "Tenho artrite há 8 anos. O meu reumatologista acompanhou a experiência com a pomada articular e ficou surpreendido com a redução da inflamação nas articulações das mãos. Uso diariamente como complemento — não substitui a medicação, mas potencia o resultado.",
    avatar: "https://picsum.photos/seed/testimonial-sm/80/80",
  },
  {
    id: 4,
    name: "Carlos D.",
    location: "Aveiro",
    product: "Cápsulas CBD 25mg",
    rating: 4,
    condition: "Dor crónica lombar",
    text: "Trabalho sentado 10 horas por dia e a dor lombar era constante. Com as cápsulas CBD 25mg (indicação médica) notei uma diminuição da tensão muscular nas primeiras semanas. Complemento com fisioterapia — o CBD sozinho não resolve, mas em conjunto faz diferença.",
    avatar: "https://picsum.photos/seed/testimonial-cd/80/80",
  },
];

const PROMO_PRODUCTS = [
  {
    slug: "oleo-cbd-5",
    name: "Óleo CBD 5%",
    image: "https://picsum.photos/seed/oleo-5/80/80",
    salePrice: 24.9,
    originalPrice: 29.9,
    discount: 17,
  },
  {
    slug: "oleo-cbd-10",
    name: "Óleo CBD 10%",
    image: "https://picsum.photos/seed/oleo-10/80/80",
    salePrice: 39.9,
    originalPrice: 49.9,
    discount: 20,
  },
  {
    slug: "pomada-articular-cbd",
    name: "Pomada Articular CBD",
    image: "https://picsum.photos/seed/pomada-articular/80/80",
    salePrice: 29.9,
    originalPrice: 39.9,
    discount: 25,
  },
  {
    slug: "creme-hidratante-cbd",
    name: "Creme Hidratante CBD",
    image: "https://picsum.photos/seed/creme-cbd/80/80",
    salePrice: 27.9,
    originalPrice: 34.9,
    discount: 20,
  },
];

const BOOKS = [
  {
    id: 1,
    title: "Cannabis Pharmacy",
    author: "Michael Backes",
    year: 2014,
    bg: "#14532d",
    description:
      "O guia definitivo sobre cannabis medicinal. Cobre strains, terpenos, canabinóides e mais de 40 condições tratáveis.",
  },
  {
    id: 2,
    title: "The CBD Bible",
    author: "Dr. Dani Gordon",
    year: 2020,
    bg: "#1e3a8a",
    description:
      "Evidence-based: o sistema endocanabinóide explicado, com protocolos para ansiedade, dor crónica, sono e inflamação.",
  },
  {
    id: 3,
    title: "CBD: A Patient's Guide",
    author: "L. Leinow & J. Birnbaum",
    year: 2017,
    bg: "#44403c",
    description:
      "Guia prático para uso de CBD em mais de 50 condições. Inclui dosagens, formatos e interações farmacológicas.",
  },
  {
    id: 4,
    title: "Smoke Signals",
    author: "Martin A. Lee",
    year: 2012,
    bg: "#7f1d1d",
    description:
      "A história política, cultural e médica da cannabis — da proibição até ao renascimento terapêutico global.",
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function HomePage() {
  const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-forest-900">
        {/* Background radial glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-cobalt-900/40 blur-3xl" />
          <div className="absolute left-1/3 bottom-1/4 h-64 w-64 rounded-full bg-sage-900/60 blur-3xl" />
        </div>

        {/* Promo ticker strip */}
        <div className="relative overflow-hidden border-b border-goblin-500/20 bg-black/40 py-2.5">
          <div className="ticker-track" style={{ animationDuration: "20s" }}>
            {[...PROMO_PRODUCTS, ...PROMO_PRODUCTS].map((p, i) => (
              <span key={i} className="mx-5 whitespace-nowrap text-xs font-semibold text-goblin-300">
                <span className="mr-5 text-goblin-500">*</span>
                {p.name} — {p.discount}% OFF
              </span>
            ))}
          </div>
        </div>

        {/* Hero text + geometry */}
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: copy */}
            <div>
              <span className="mb-6 inline-block rounded-full border border-goblin-400/30 bg-goblin-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-goblin-400">
                Vila d'Este · Gaia · Portugal
              </span>

              <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-cream-50 sm:text-6xl lg:text-7xl">
                A Magia<br />
                <span className="text-goblin-400">da Planta.</span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-relaxed text-sage-300">
                CBD é bem-estar, não hábito. Óleos, pomadas e cosméticos formulados
                para quem cuida do corpo com intenção — não para quem foge da realidade.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/produtos">
                  <Button size="lg" className="bg-goblin-500 text-charcoal-900 hover:bg-goblin-400 font-semibold">
                    Explorar produtos
                    <ArrowRight className="h-5 w-5" strokeWidth={2} />
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-sage-700 text-sage-300 hover:border-goblin-400/60 hover:text-goblin-300"
                  >
                    A nossa história
                  </Button>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-sage-500">
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-goblin-500" />Legal em Portugal</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-goblin-500" />Certificado em laboratório</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-goblin-500" />Entrega PT continental</span>
              </div>
            </div>

            {/* Right: geometric particle animation */}
            <div className="hidden h-80 lg:block lg:h-96">
              <ParticleWeb />
            </div>
          </div>
        </div>

        {/* Full-width promo carousel */}
        <PromoCarousel items={PROMO_PRODUCTS} />
      </section>

      {/* ══ TICKER ════════════════════════════════════════════ */}
      <div className="overflow-hidden border-y border-goblin-500/30 bg-sage-950 py-4">
        <div className="ticker-track">
          {tickerContent.map((item, i) => (
            <span key={i} className="mx-6 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-goblin-400">
              {item}
              <span className="ml-6 text-goblin-500/50">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ TERAPÊUTICO — NÃO SÓ RECREACIONAL ═══════════════ */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage-500">Ciência + Natureza</span>
            <h2 className="mt-3 text-4xl font-bold text-charcoal-900 sm:text-5xl">
              CBD não é<br />
              <span className="text-sage-600">só fumar.</span>
            </h2>
            <p className="mt-4 text-charcoal-500">
              A planta tem mais de 100 canabinóides identificados. O CBD é um deles —
              e o mais estudado para uso terapêutico sem efeitos psicoativos.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {THERAPIES.map(({ stat, label, description, color, accent }) => (
              <div
                key={label}
                className={`${color} rounded-2xl p-6 flex flex-col justify-between min-h-[240px]`}
              >
                <div>
                  <span className={`block text-4xl font-bold tracking-tight ${accent}`}>{stat}</span>
                  <h3 className="mt-2 text-lg font-semibold text-cream-100">{label}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-sage-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LIVROS & CONHECIMENTO ════════════════════════════ */}
      <section className="bg-charcoal-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-cobalt-400">Biblioteca</span>
              <h2 className="mt-2 text-4xl font-bold text-cream-50">
                Lê antes de comprar.
              </h2>
              <p className="mt-2 max-w-lg text-charcoal-500">
                A informação liberta. Antes de qualquer produto, o conhecimento é o melhor investimento.
              </p>
            </div>
            <BookOpen className="hidden h-10 w-10 text-cobalt-400/50 md:block" strokeWidth={1} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BOOKS.map(({ id, title, author, year, bg, description }) => (
              <article key={id} className="group flex flex-col overflow-hidden rounded-2xl ring-1 ring-white/10 transition-transform hover:-translate-y-1">
                {/* Book cover simulation */}
                <div
                  className="relative flex h-44 items-end p-5"
                  style={{ backgroundColor: bg }}
                >
                  <div className="absolute inset-y-0 left-0 w-3 bg-black/30 rounded-l-2xl" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50">{year}</p>
                    <p className="text-lg font-bold leading-tight text-white">{title}</p>
                  </div>
                </div>
                {/* Card body */}
                <div className="flex flex-1 flex-col justify-between bg-charcoal-700 p-5">
                  <div>
                    <p className="text-xs font-medium text-cobalt-400">{author}</p>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-100">{description}</p>
                  </div>
                  <p className="mt-4 text-xs text-charcoal-500">
                    Disponível em livrarias e plataformas digitais
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUTOS EM DESTAQUE ═══════════════════════════════ */}
      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-sage-500">Loja</span>
              <h2 className="mt-2 text-4xl font-bold text-charcoal-900">Mais Vendidos</h2>
            </div>
            <Link href="/produtos" className="hidden items-center gap-1 text-sm font-semibold text-sage-600 hover:text-sage-700 sm:flex">
              Ver todos <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/produtos">
              <Button variant="outline" size="md">
                Ver todos os produtos <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TESTEMUNHOS ═══════════════════════════════════════ */}
      <section className="bg-sage-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-goblin-400">Experiências reais</span>
              <h2 className="mt-2 text-4xl font-bold text-cream-50">
                O que os clientes dizem.
              </h2>
              <p className="mt-2 max-w-lg text-sage-400">
                Todos os testemunhos referem uso de CBD com acompanhamento médico, como complemento terapêutico.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.id}
                className="flex flex-col justify-between rounded-2xl bg-sage-900/70 p-6 ring-1 ring-white/10"
              >
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < t.rating ? "fill-gold-400 text-gold-400" : "text-sage-700"}`}
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-sage-300">&ldquo;{t.text}&rdquo;</p>
                </div>

                <footer className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-goblin-500/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-cream-100">{t.name}</p>
                    <p className="text-xs text-sage-500">{t.location} · {t.product}</p>
                    <p className="mt-0.5 text-xs font-medium text-goblin-400">{t.condition}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-sage-600">
            Resultados individuais. O CBD não substitui tratamento médico. Consulta sempre um profissional de saúde.
          </p>
        </div>
      </section>

      {/* ══ NEWSLETTER ════════════════════════════════════════ */}
      <section id="contacto" className="bg-forest-900 py-24 text-center">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <span className="mb-4 inline-block text-3xl">🌿</span>
          <h2 className="text-3xl font-bold text-cream-50 sm:text-4xl">
            Novidades sem spam.
          </h2>
          <p className="mt-3 text-sage-400">
            Promoções, novos produtos e conteúdo sobre CBD — direto para o teu email.
          </p>
          <NewsletterForm />
          <p className="mt-3 text-xs text-sage-600">Sem spam. Cancela quando quiseres.</p>
        </div>
      </section>
    </>
  );
}

