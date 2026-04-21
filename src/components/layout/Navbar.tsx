"use client";

import Link from "next/link";
import { ShoppingBag, Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.getTotalItems());

  return (
    <header className="sticky top-0 z-50 border-b border-cream-300 bg-cream-50/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-bold text-sage-700 transition-opacity hover:opacity-80"
        >
          <Leaf className="h-6 w-6 text-sage-600" strokeWidth={1.5} />
          <span>CBD Goblin</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-charcoal-700 transition-colors hover:text-sage-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/carrinho"
            aria-label={`Carrinho (${totalItems} itens)`}
            className="relative text-charcoal-700 transition-colors hover:text-sage-600"
          >
            <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-sage-600 text-xs font-bold text-white">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-charcoal-700 hover:text-sage-600"
            aria-label="Menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-64 border-t border-cream-300" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-cream-200 hover:text-sage-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
