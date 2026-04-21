import type { Metadata } from "next";
import { CreditCard, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Finaliza a tua compra de forma segura.",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center gap-3">
        <Lock className="h-6 w-6 text-sage-600" strokeWidth={1.5} />
        <h1 className="font-display text-3xl font-bold text-charcoal-900">
          Pagamento Seguro
        </h1>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-cream-300 text-center">
        <CreditCard className="mx-auto mb-4 h-16 w-16 text-cream-300" strokeWidth={1} />
        <h2 className="font-display text-2xl font-semibold text-charcoal-700">
          Stripe Checkout — Em breve
        </h2>
        <p className="mt-3 text-charcoal-500">
          A integração com Stripe está planeada para a Semana 4 do roadmap.
          <br />
          Pagamentos seguros por cartão de crédito, MB Way e transferência bancária.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-charcoal-400">
          <Lock className="h-3.5 w-3.5" strokeWidth={1.5} />
          Transação protegida por encriptação SSL
        </div>
      </div>
    </div>
  );
}
