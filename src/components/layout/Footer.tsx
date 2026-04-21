import Link from "next/link";
import { Leaf, MapPin, Phone, Mail } from "lucide-react";

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
    <footer className="border-t border-cream-300 bg-sage-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-xl font-bold text-cream-50 transition-opacity hover:opacity-80"
            >
              <Leaf className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
              <span>CBD Goblin</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-cream-300">
              Bem-estar natural com qualidade premium. Loja especializada em produtos CBD
              em Vila Nova de Gaia, Portugal.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Loja
            </h3>
            <ul className="space-y-2">
              {SHOP_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream-300 transition-colors hover:text-cream-50"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Informação
            </h3>
            <ul className="space-y-2">
              {INFO_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream-300 transition-colors hover:text-cream-50"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-cream-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                <span>Vila d&apos;Este, Vila Nova de Gaia, Portugal</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-cream-300">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                <a href="tel:+351000000000" className="hover:text-cream-50 transition-colors">
                  +351 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-cream-300">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                <a
                  href="mailto:info@cbdgoblin.pt"
                  className="hover:text-cream-50 transition-colors"
                >
                  info@cbdgoblin.pt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-10 border-t border-sage-700 pt-8 space-y-3">
          <p className="text-xs text-sage-400 leading-relaxed">
            ⚠️ Os nossos produtos contêm CBD (canabidiol) com teor de THC inferior a 0,2%, estando em conformidade com a legislação portuguesa e europeia em vigor. Estes produtos não se destinam a diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte o seu médico antes de utilizar.
          </p>
          <p className="text-xs text-sage-500">
            © {currentYear} CBD Goblin. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
