"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, ShoppingBag, ArrowRight, AlertCircle } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function CheckoutClient() {
  const { items, getTotalPrice, getTotalItems } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    if (items.length === 0) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ id: i.id, quantity: i.quantity })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Ocorreu um erro. Tente novamente.");
        setLoading(false);
        return;
      }

      // Redirecionar para a página de pagamento do Stripe
      window.location.href = data.url;
    } catch {
      setError("Erro de ligação. Verifique a internet e tente novamente.");
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-cream-300" strokeWidth={1} />
        <h1 className="font-display text-3xl font-bold text-charcoal-900">
          Carrinho vazio
        </h1>
        <p className="mt-3 text-charcoal-500">
          Adiciona produtos antes de finalizar a compra.
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
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <Lock className="h-6 w-6 text-sage-600" strokeWidth={1.5} />
        <h1 className="font-display text-3xl font-bold text-charcoal-900">
          Confirmar Pedido
        </h1>
      </div>

      {/* Order summary */}
      <div className="rounded-2xl bg-white shadow-sm ring-1 ring-cream-300">
        <div className="p-6">
          <h2 className="mb-5 font-display text-xl font-semibold text-charcoal-900">
            Resumo ({getTotalItems()} {getTotalItems() === 1 ? "item" : "itens"})
          </h2>

          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium text-charcoal-900">{item.name}</p>
                  <p className="text-sm text-charcoal-500">
                    {item.quantity} × {formatPrice(item.price)}
                  </p>
                </div>
                <span className="font-semibold text-charcoal-900">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="my-6 border-t border-cream-300" />

          <div className="flex justify-between text-sm text-charcoal-500">
            <span>Envio</span>
            <span className="font-medium text-sage-600">Gratuito</span>
          </div>

          <div className="mt-3 flex justify-between">
            <span className="font-display text-lg font-semibold text-charcoal-900">
              Total
            </span>
            <span className="font-display text-2xl font-bold text-charcoal-900">
              {formatPrice(getTotalPrice())}
            </span>
          </div>
        </div>

        {/* Info sobre o Stripe */}
        <div className="border-t border-cream-300 bg-cream-50 px-6 py-4 text-xs text-charcoal-500 rounded-b-2xl">
          Ao clicar em <strong>Pagar com Stripe</strong>, será redirecionado para a
          página segura do Stripe onde poderá pagar com cartão, MB Way ou Multibanco.
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
          {error}
        </div>
      )}

      {/* CTA */}
      <div className="mt-6 space-y-3">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleCheckout}
          disabled={loading}
        >
          <Lock className="h-4 w-4" strokeWidth={1.5} />
          {loading ? "A redirecionar para o Stripe..." : "Pagar com Stripe"}
        </Button>

        <Link
          href="/carrinho"
          className="flex justify-center text-sm text-charcoal-500 hover:text-sage-600 transition-colors"
        >
          ← Voltar ao carrinho
        </Link>
      </div>

      {/* Payment badges */}
      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-charcoal-400">
        <Lock className="h-3.5 w-3.5" strokeWidth={1.5} />
        Pagamento processado por Stripe · Cartão · MB Way · Multibanco
      </div>
    </div>
  );
}
