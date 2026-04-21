import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Heart, Shield, Award } from "lucide-react";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a CBD Goblin — a nossa missão, valores e compromisso com o bem-estar natural em Vila Nova de Gaia.",
};

const VALUES = [
  {
    icon: Leaf,
    title: "Natural & Sustentável",
    description:
      "Trabalhamos apenas com produtores que respeitam o ambiente e praticam agricultura sustentável. Orgulhamo-nos de oferecer produtos 100% naturais.",
  },
  {
    icon: Shield,
    title: "Transparência Total",
    description:
      "Todos os nossos produtos têm certificado de análise laboratorial disponível. Sabemos o que vendemos e partilhamos essa informação contigo.",
  },
  {
    icon: Heart,
    title: "Centrados no Cliente",
    description:
      "Cada cliente é único. Estamos aqui para ajudar a encontrar o produto certo para as tuas necessidades específicas de bem-estar.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description:
      "Não fazemos compromissos na qualidade. Cada produto é rigorosamente selecionado e testado antes de chegar até ti.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-900 py-24 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Leaf className="mx-auto mb-4 h-12 w-12 text-gold-400" strokeWidth={1} />
          <h1 className="font-display text-5xl font-bold text-cream-50">
            Sobre a CBD Goblin
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-cream-300">
            Somos uma loja especializada em produtos CBD, sediada em Vila d&apos;Este,
            Vila Nova de Gaia. A nossa missão é simples: levar o bem-estar natural até
            cada pessoa que nos visita.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-sage-600">
                A nossa história
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold text-charcoal-900">
                De uma ideia ao bem-estar de muitos
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-charcoal-500">
                <p>
                  A CBD Goblin começou como uma ideia simples: tornar acessível a quem
                  vive em Gaia os benefícios comprovados do canabidiol, uma substância
                  natural com propriedades terapêuticas reconhecidas pela ciência.
                </p>
                <p>
                  Abrimos as portas em Vila d&apos;Este porque acreditamos que o
                  bem-estar não deve ser um privilégio. O nosso espaço físico é um lugar
                  de conversa, de esclarecimento e de confiança — onde cada cliente recebe
                  atenção personalizada.
                </p>
                <p>
                  Com a loja online, queremos chegar mais longe, mantendo a mesma
                  qualidade e confiança que os nossos clientes presencialmente já conhecem.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-gold-300/20" />
              <Image
                src="https://picsum.photos/seed/store-about/700/500"
                alt="Loja CBD Goblin em Vila Nova de Gaia"
                width={700}
                height={500}
                className="relative rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="missao" className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-display text-4xl font-bold text-charcoal-900">
              Os nossos valores
            </h2>
            <p className="mt-3 text-charcoal-500">
              O que nos guia em cada decisão
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cream-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-100">
                  <Icon className="h-6 w-6 text-sage-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-4xl font-bold text-charcoal-900">
            Pronto para começar?
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal-500">
            Explore o nosso catálogo e encontre o produto certo para si.
            Envio gratuito para toda a península ibérica.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/produtos">
              <Button variant="primary" size="lg">
                Ver Produtos
                <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
              </Button>
            </Link>
            <a href="/#contacto">
              <Button variant="outline" size="lg">
                Fale Connosco
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
