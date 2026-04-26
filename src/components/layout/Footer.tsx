import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const SHOP_LINKS = [
  { href: "/produtos", label: "Todos os Produtos" },
  { href: "/produtos?categoria=oleos", label: "Óleos CBD" },
  { href: "/produtos?categoria=cosmeticos", label: "Cosméticos" },
  { href: "/produtos?categoria=pomadas", label: "Pomadas" },
  { href: "/produtos?categoria=suplementos", label: "Suplementos" },
];

const INFO_LINKS = [
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/sobre#missao", label: "A Nossa Missão" },
  { href: "/#faq", label: "FAQ" },
  { href: "/politica-privacidade", label: "Privacidade" },
  { href: "/termos-condicoes", label: "Termos e Condições" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-300 bg-white text-charcoal-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-xl font-bold text-charcoal-900 transition-opacity hover:opacity-80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://img.freepik.com/premium-vector/marijuana-leaf-clipart-cartoon-style-vector-illustration_761413-4114.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
                aria-hidden
                className="h-8 w-8 object-contain"
              />
              <span>CBD Goblin</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-500">
              Bem-estar natural com qualidade premium. Loja especializada em produtos CBD
              em Vila Nova de Gaia, Portugal.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sage-600">
              Loja
            </h3>
            <ul className="space-y-2">
              {SHOP_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-charcoal-500 transition-colors hover:text-sage-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sage-600">
              Informação
            </h3>
            <ul className="space-y-2">
              {INFO_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-charcoal-500 transition-colors hover:text-sage-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sage-600">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-charcoal-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" strokeWidth={1.5} />
                <span>Vila d&apos;Este, Vila Nova de Gaia, Portugal</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-charcoal-500">
                <Phone className="h-4 w-4 shrink-0 text-sage-600" strokeWidth={1.5} />
                <a href="tel:+351000000000" className="hover:text-sage-700 transition-colors">
                  +351 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-charcoal-500">
                <Mail className="h-4 w-4 shrink-0 text-sage-600" strokeWidth={1.5} />
                <a
                  href="mailto:info@cbdgoblin.pt"
                  className="hover:text-sage-700 transition-colors"
                >
                  info@cbdgoblin.pt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-10 border-t border-cream-300 pt-8 space-y-3 text-center">
          <p className="text-xs text-charcoal-400 leading-relaxed">
            ⚠️ Os nossos produtos contêm CBD (canabidiol) com teor de THC inferior a 0,2%, estando em conformidade com a legislação portuguesa e europeia em vigor. Estes produtos não se destinam a diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte o seu médico antes de utilizar.
          </p>
          <p className="text-xs text-charcoal-400">
            © {currentYear} CBD Goblin. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
