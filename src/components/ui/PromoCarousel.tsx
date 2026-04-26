"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export interface PromoItem {
  slug: string;
  name: string;
  image: string;
  salePrice: number;
  originalPrice: number;
  discount: number;
}

interface Props {
  items: PromoItem[];
}

export default function PromoCarousel({ items }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % items.length),
    [items.length],
  );
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused, next]);

  const p = items[current];

  return (
    <div
      className="w-full overflow-hidden border-b border-goblin-500/20 bg-forest-800/80 backdrop-blur-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex min-h-[260px] items-stretch sm:min-h-[300px]">
        {/* ── Image panel ── */}
        <div className="relative w-44 flex-shrink-0 overflow-hidden sm:w-60 lg:w-80">
          <div className="absolute inset-0 pl-4 pb-4">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                key={p.slug}
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 240px, 320px"
                unoptimized
              />
              {/* Fade to bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-forest-800/90" />
            </div>
          </div>
          {/* Discount badge */}
          <span className="absolute left-7 top-3 rounded-full bg-red-600 px-2.5 py-1 text-xs font-bold text-white shadow-lg">
            -{p.discount}%
          </span>
        </div>

        {/* ── Info panel ── */}
        <div className="flex flex-1 flex-col justify-between px-5 py-5 sm:px-8 sm:py-6">
          {/* Top: label + name + price */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-goblin-400">
              🔥 Promoção &middot; {current + 1}/{items.length}
            </span>
            <h2 className="mt-2 text-xl font-bold text-cream-100 sm:text-2xl lg:text-3xl">
              {p.name}
            </h2>
            <div className="mt-3 flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-extrabold text-goblin-400 sm:text-3xl">
                €{p.salePrice.toFixed(2)}
              </span>
              <span className="text-sm text-sage-500 line-through">
                €{p.originalPrice.toFixed(2)}
              </span>
              <span className="rounded-full bg-goblin-500/20 px-2 py-0.5 text-xs font-semibold text-goblin-300">
                Poupa €{(p.originalPrice - p.salePrice).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Bottom: nav + CTA */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-sage-700 text-lg text-sage-400 transition hover:border-goblin-500 hover:text-goblin-400"
            >
              ‹
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Produto ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-5 bg-goblin-400" : "w-1.5 bg-sage-700 hover:bg-sage-500"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Próximo"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-sage-700 text-lg text-sage-400 transition hover:border-goblin-500 hover:text-goblin-400"
            >
              ›
            </button>

            {/* CTA */}
            <Link
              href={`/produtos/${p.slug}`}
              className="ml-auto rounded-xl bg-goblin-500 px-5 py-2.5 text-sm font-semibold text-charcoal-900 transition hover:bg-goblin-400"
            >
              Ver produto →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
