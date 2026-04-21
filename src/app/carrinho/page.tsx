"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function CarrinhoPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } =
    useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-cream-300" strokeWidth={1} />
        <h1 className="font-display text-3xl font-bold text-charcoal-900">
          Carrinho vazio
        </h1>
        <p className="mt-3 text-charcoal-500">
          Ainda não adicionaste nenhum produto ao carrinho.
        </p>
        <div className="mt-8">
          <Link href="/produtos">
            <Button variant="primary" size="lg">
              Ver Produtos
              <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-10 font-display text-4xl font-bold text-charcoal-900">
        Carrinho ({getTotalItems()} {getTotalItems() === 1 ? "item" : "itens"})
      </h1>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Items list */}
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-cream-300 sm:gap-6"
            >
              <Link href={`/produtos/${item.slug}`} className="shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-xl object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <Link
                    href={`/produtos/${item.slug}`}
                    className="font-display text-lg font-semibold text-charcoal-900 hover:text-sage-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                  <button
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remover ${item.name}`}
                    className="text-charcoal-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" strokeWidth={1.5} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  {/* Quantity controls */}
                  <div className="flex items-center gap-3 rounded-lg border border-cream-300 bg-cream-50 px-3 py-1.5">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Diminuir quantidade"
                      className="text-charcoal-500 hover:text-charcoal-900 transition-colors"
                    >
                      <Minus className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <span className="min-w-[1.5rem] text-center text-sm font-semibold text-charcoal-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Aumentar quantidade"
                      className="text-charcoal-500 hover:text-charcoal-900 transition-colors"
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>

                  <span className="font-display text-xl font-bold text-charcoal-900">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cream-300">
          <h2 className="mb-6 font-display text-2xl font-semibold text-charcoal-900">
            Resumo
          </h2>

          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-charcoal-500">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="my-4 border-t border-cream-300" />

          <div className="flex justify-between text-sm text-charcoal-500">
            <span>Envio</span>
            <span className="font-medium text-sage-600">Gratuito</span>
          </div>

          <div className="my-4 border-t border-cream-300" />

          <div className="flex justify-between">
            <span className="font-display text-lg font-semibold text-charcoal-900">Total</span>
            <span className="font-display text-2xl font-bold text-charcoal-900">
              {formatPrice(getTotalPrice())}
            </span>
          </div>

          <div className="mt-6">
            <Link href="/checkout">
              <Button variant="primary" size="lg" fullWidth>
                Finalizar Compra
                <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
              </Button>
            </Link>
          </div>

          <Link href="/produtos" className="mt-3 flex justify-center text-sm text-charcoal-500 hover:text-sage-600 transition-colors">
            Continuar a comprar
          </Link>
        </div>
      </div>
    </div>
  );
}
