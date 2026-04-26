import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Wind, Flame, AlertTriangle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { ACCESSORIES } from "@/data/accessories";
import type { Accessory } from "@/types";

export const metadata: Metadata = {
  title: "Redução de Danos",
  description:
    "Se vais consumir CBD ou HHC, fá-lo com os acessórios certos. Bongs, vaporizadores, piteiras de vidro e cachimbos — reduz riscos, maximiza os benefícios.",
};

const HARM_REDUCTION_TIPS = [
  {
    icon: Wind,
    title: "Vaporizador — o método mais seguro",
    body: "A vaporização aquece as ervas sem combustão (160°C–220°C), libertando canabinóides e terpenos sem produzir fumo, alcatrão ou monóxido de carbono. Estudos da Universidade de São Francisco (2007) demonstram que utilizadores de vaporizadores apresentam significativamente menos sintomas respiratórios do que fumadores.",
    highlight: true,
  },
  {
    icon: ShieldCheck,
    title: "Bong com água — filtração e arrefecimento",
    body: "A filtração por água retém partículas sólidas e arrefece o fumo de ~900°C para temperaturas consideravelmente mais baixas. Não elimina todas as toxinas, mas reduz significativamente a irritação das vias respiratórias e brônquios face ao consumo direto sem filtro.",
    highlight: false,
  },
  {
    icon: Flame,
    title: "Piteira de vidro longa — simples e eficaz",
    body: "12cm de distância entre a chama e a boca fazem diferença real. O fumo arrefece em trânsito, reduzindo queimaduras nas mucosas. Vidro borosilicato não liberta compostos ao aquecer — ao contrário do cartão ou papel enrolado, que podem conter colas e corantes.",
    highlight: false,
  },
  {
    icon: AlertTriangle,
    title: "O que evitar absolutamente",
    body: "Evita piteiras de cartão, papel alumínio caseiro e garrafas plásticas improvisadas ('pipes'). Ao aquecer, estes materiais libertam toxinas e carcinogénios que são mais prejudiciais do que o fumo em si. Se vais consumir, fá-lo com os materiais certos.",
    highlight: false,
  },
];

const TYPE_LABELS: Record<Accessory["type"], string> = {
  bong: "Bong",
  vaporizer: "Vaporizador",
  pipe: "Cachimbo",
  tip: "Piteira",
  grinder: "Grinder",
  rolling: "Rolling",
};

const TYPE_ORDER: Accessory["type"][] = [
  "vaporizer",
  "bong",
  "tip",
  "pipe",
  "grinder",
  "rolling",
];

export default function ReducaoDeDanosPage() {
  const grouped = TYPE_ORDER.reduce<Record<string, Accessory[]>>((acc, type) => {
    const items = ACCESSORIES.filter((a) => a.type === type);
    if (items.length > 0) acc[type] = items;
    return acc;
  }, {});

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal-900 py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-cobalt-400/30 bg-cobalt-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cobalt-400">
            Consumo Consciente
          </span>
          <h1 className="text-5xl font-bold text-cream-50 sm:text-6xl">
            Redução de Danos
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-charcoal-100">
            Se vais consumir flores ou hash de CBD/HHC, fá-lo da forma mais segura possível.
            Os acessórios certos fazem toda a diferença para a tua saúde respiratória.
          </p>
          <p className="mt-4 text-sm text-charcoal-500">
            Todos os produtos desta página são legais para venda em Portugal.
            O consumo de CBD e HHC (≤ 0.2% THC) é legal conforme a legislação vigente.
          </p>
        </div>
      </section>

      {/* ── Disclaimer legal ── */}
      <div className="border-y border-amber-500/30 bg-amber-500/10 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-amber-700">
            <strong>Aviso:</strong> Esta página destina-se apenas a consumidores adultos (+18).
            O CBD e HHC vendidos nesta loja contêm ≤ 0.2% de THC, cumprindo a lei portuguesa.
            Consulta sempre um profissional de saúde antes de iniciar qualquer suplementação.
          </p>
        </div>
      </div>

      {/* ── Harm reduction tips ── */}
      <section className="bg-cream-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-charcoal-900 sm:text-4xl">
              Porque os acessórios <span className="text-cobalt-600">importam</span>
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal-500">
              A diferença entre fumar sem filtro e usar um vaporizador ou bong é enorme do ponto
              de vista da saúde respiratória. Eis o que a ciência e o bom senso dizem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {HARM_REDUCTION_TIPS.map(({ icon: Icon, title, body, highlight }) => (
              <div
                key={title}
                className={`rounded-2xl p-7 ${
                  highlight
                    ? "bg-cobalt-900 ring-2 ring-cobalt-400/40"
                    : "bg-white ring-1 ring-cream-300"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      highlight ? "bg-cobalt-400/20" : "bg-sage-100"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${highlight ? "text-cobalt-300" : "text-sage-600"}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      highlight ? "text-cream-50" : "text-charcoal-900"
                    }`}
                  >
                    {title}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    highlight ? "text-cobalt-200" : "text-charcoal-500"
                  }`}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparativo visual ── */}
      <section className="bg-charcoal-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-cream-50">
            Comparativo de risco relativo
          </h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-charcoal-700">
                  <th className="px-5 py-4 text-left font-semibold text-cream-200">Método</th>
                  <th className="px-5 py-4 text-center font-semibold text-cream-200">Combustão</th>
                  <th className="px-5 py-4 text-center font-semibold text-cream-200">Temperatura</th>
                  <th className="px-5 py-4 text-center font-semibold text-cream-200">Risco relativo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { method: "Sem filtro (direto)", combustion: "Sim", temp: "~900°C", risk: "Alto", riskColor: "text-red-400" },
                  { method: "Com piteira de papel/cartão", combustion: "Sim", temp: "~860°C", risk: "Alto", riskColor: "text-red-400" },
                  { method: "Cachimbo de vidro", combustion: "Sim", temp: "~800°C", risk: "Médio", riskColor: "text-amber-400" },
                  { method: "Piteira de vidro longa", combustion: "Sim", temp: "~650°C", risk: "Médio-baixo", riskColor: "text-amber-400" },
                  { method: "Bong com água", combustion: "Sim", temp: "~400°C", risk: "Reduzido", riskColor: "text-yellow-400" },
                  { method: "Vaporizador de ervas", combustion: "Não", temp: "160–220°C", risk: "Mínimo", riskColor: "text-goblin-400" },
                ].map(({ method, combustion, temp, risk, riskColor }) => (
                  <tr key={method} className="bg-charcoal-900/60">
                    <td className="px-5 py-3.5 text-cream-300">{method}</td>
                    <td className="px-5 py-3.5 text-center text-charcoal-100">{combustion}</td>
                    <td className="px-5 py-3.5 text-center text-charcoal-100">{temp}</td>
                    <td className={`px-5 py-3.5 text-center font-semibold ${riskColor}`}>{risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-charcoal-500">
            Valores indicativos com base em estudos de harm reduction. Nenhum método de inalação é isento de risco.
          </p>
        </div>
      </section>

      {/* ── Produtos por tipo ── */}
      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-bold text-charcoal-900 sm:text-4xl">
            Acessórios disponíveis
          </h2>
          <p className="mb-12 text-charcoal-500">
            Todos os acessórios são vendidos para uso legal com CBD/HHC e ervas aromáticas.
          </p>

          {Object.entries(grouped).map(([type, items]) => (
            <div key={type} className="mb-12">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-charcoal-900">
                <span className="h-px flex-1 bg-cream-300" />
                <span>{TYPE_LABELS[type as Accessory["type"]]}</span>
                <span className="h-px flex-1 bg-cream-300" />
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((acc) => (
                  <article
                    key={acc.id}
                    className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-cream-300 transition-shadow hover:shadow-md"
                  >
                    <div className="h-44 w-full bg-cream-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={acc.image}
                        alt={acc.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wide text-sage-500">
                          {TYPE_LABELS[acc.type]}
                          {acc.material && <span className="text-charcoal-400"> · {acc.material}</span>}
                        </p>
                        <h4 className="mt-1 text-base font-semibold text-charcoal-900">{acc.name}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{acc.description}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-bold text-charcoal-900">
                          {acc.price.toFixed(2)} €
                        </span>
                        <Button size="sm" variant="primary">
                          Adicionar
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA para flores ── */}
      <section className="bg-sage-900 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-cream-50">
            Tenho o acessório — agora preciso da flor.
          </h2>
          <p className="mt-3 text-sage-300">
            Flores e hash de CBD/HHC com certificado de análise, cultivados com respeito pela planta.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/produtos?categoria=flores">
              <Button size="lg" className="bg-goblin-500 text-charcoal-900 hover:bg-goblin-400 font-semibold">
                Ver Flores CBD
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </Button>
            </Link>
            <Link href="/produtos?categoria=hash">
              <Button size="lg" variant="outline" className="border-sage-600 text-sage-300 hover:text-cream-100">
                Ver Hash CBD & HHC
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
