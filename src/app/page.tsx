import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Leaf, Zap, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ui/ProductCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { FEATURED_PRODUCTS, CATEGORIES } from "@/data/products";

const USP_ITEMS = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Extraído de cânhamo orgânico certificado, sem pesticidas",
  },
  {
    icon: Shield,
    title: "Legal em Portugal",
    description: "Todos os produtos cumprem a legislação portuguesa e europeia",
  },
  {
    icon: Zap,
    title: "Alta Biodisponibilidade",
    description: "Fórmulas otimizadas para máxima absorção pelo organismo",
  },
  {
    icon: Star,
    title: "Qualidade Premium",
    description: "Testado em laboratório independente. Certificado de análise incluído",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-sage-900">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-700 via-sage-900 to-charcoal-900 opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1 text-sm font-medium text-gold-300">
              Loja especializada — Vila Nova de Gaia
            </span>
            <h1 className="font-display text-5xl font-bold leading-tight text-cream-50 sm:text-6xl lg:text-7xl">
              Bem-estar <span className="text-gold-400">Natural</span> ao teu alcance
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream-300">
              Descubra o poder terapêutico do CBD. Óleos, cosméticos e suplementos de
              qualidade premium, formulados para melhorar a tua qualidade de vida.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/produtos">
                <Button size="lg" variant="secondary">
                  Ver Produtos
                  <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                </Button>
              </Link>
              <Link href="/sobre">
                <Button size="lg" variant="outline" className="border-cream-300/40 text-cream-200 hover:bg-white/10">
                  Sobre Nós
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="border-b border-cream-300 bg-cream-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {USP_ITEMS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100">
                  <Icon className="h-6 w-6 text-sage-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl font-bold text-charcoal-900">Categorias</h2>
            <p className="mt-3 text-charcoal-500">Encontre o produto certo para as suas necessidades</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/produtos?categoria=${cat.id}`}
                className="group relative overflow-hidden rounded-2xl bg-sage-900 shadow-sm ring-1 ring-cream-300"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="font-display text-xl font-bold text-cream-50">{cat.name}</h3>
                  <p className="mt-1 text-sm text-cream-300">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-display text-4xl font-bold text-charcoal-900">Produtos em Destaque</h2>
              <p className="mt-2 text-charcoal-500">Os nossos mais vendidos</p>
            </div>
            <Link href="/produtos" className="hidden items-center gap-1 text-sm font-medium text-sage-600 hover:text-sage-700 sm:flex">
              Ver todos <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-sage-100" />
              <Image
                src="https://picsum.photos/seed/about-cbd/700/500"
                alt="CBD Goblin — Loja física em Vila Nova de Gaia"
                width={700}
                height={500}
                className="relative rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-sage-600">A Nossa História</span>
              <h2 className="mt-2 font-display text-4xl font-bold text-charcoal-900">
                Nascidos para levar o bem-estar até ti
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal-500">
                A CBD Goblin nasceu em Vila Nova de Gaia com uma missão clara: tornar os benefícios do
                CBD acessíveis a todos. Trabalhamos com produtores cuidadosamente selecionados para
                garantir a mais alta qualidade em cada produto.
              </p>
              <div className="mt-8">
                <Link href="/sobre">
                  <Button variant="primary" size="lg">
                    Conhece a nossa história
                    <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="contacto" className="bg-sage-700 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Leaf className="mx-auto mb-4 h-10 w-10 text-gold-400" strokeWidth={1.5} />
          <h2 className="font-display text-3xl font-bold text-cream-50 sm:text-4xl">Fique a par das novidades</h2>
          <p className="mt-3 text-cream-300">
            Registe o seu email e receba as últimas novidades e promoções exclusivas.
          </p>
          <NewsletterForm />
          <p className="mt-3 text-xs text-sage-400">Sem spam. Pode cancelar a qualquer momento.</p>
        </div>
      </section>
    </>
  );
}
