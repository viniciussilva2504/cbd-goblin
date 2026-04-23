import { getStripe } from "@/lib/stripe";
import Link from "next/link";
import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import ClearCartTrigger from "./ClearCartTrigger";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pagamento Confirmado | CBD Goblin",
  description: "O teu pedido foi recebido com sucesso.",
};

interface Props {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function SucessoPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  // Se não houver session_id, mostrar página genérica de sucesso
  if (!session_id) {
    return <GenericSuccess />;
  }

  let session;
  try {
    session = await getStripe().checkout.sessions.retrieve(session_id, {
      expand: ["line_items"],
    });
  } catch {
    return <GenericSuccess />;
  }

  // Verificar que o pagamento foi completo
  if (session.payment_status !== "paid") {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center px-4">
        <p className="text-charcoal-500">Pagamento ainda não confirmado.</p>
        <Link href="/carrinho" className="mt-4 text-sm text-sage-600 hover:underline">
          Voltar ao carrinho
        </Link>
      </div>
    );
  }

  const customerEmail =
    session.customer_details?.email ?? session.customer_email ?? null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8 text-center">
      {/* Limpar o carrinho agora que o pagamento foi confirmado */}
      <ClearCartTrigger />

      <div className="flex justify-center mb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-100">
          <CheckCircle className="h-10 w-10 text-sage-600" strokeWidth={1.5} />
        </div>
      </div>

      <h1 className="font-display text-4xl font-bold text-charcoal-900">
        Obrigado pelo teu pedido!
      </h1>
      <p className="mt-4 text-lg text-charcoal-500">
        Recebemos o teu pagamento com sucesso.
        {customerEmail && (
          <>
            {" "}
            Enviámos uma confirmação para{" "}
            <span className="font-medium text-charcoal-700">{customerEmail}</span>.
          </>
        )}
      </p>

      {/* Resumo do pedido */}
      {session.line_items?.data && session.line_items.data.length > 0 && (
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cream-300 text-left">
          <h2 className="mb-4 font-display text-xl font-semibold text-charcoal-900">
            Resumo do pedido
          </h2>
          <div className="space-y-3">
            {session.line_items.data.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-charcoal-600">
                <span>
                  {item.description ?? item.price?.product?.toString() ?? "Produto"}{" "}
                  {item.quantity && item.quantity > 1 && (
                    <span className="text-charcoal-400">× {item.quantity}</span>
                  )}
                </span>
                <span className="font-medium">
                  {item.amount_total != null
                    ? new Intl.NumberFormat("pt-PT", {
                        style: "currency",
                        currency: "EUR",
                      }).format(item.amount_total / 100)
                    : "—"}
                </span>
              </div>
            ))}
          </div>
          {session.amount_total != null && (
            <>
              <div className="my-4 border-t border-cream-300" />
              <div className="flex justify-between font-display font-semibold text-charcoal-900">
                <span>Total pago</span>
                <span>
                  {new Intl.NumberFormat("pt-PT", {
                    style: "currency",
                    currency: "EUR",
                  }).format(session.amount_total / 100)}
                </span>
              </div>
            </>
          )}
        </div>
      )}

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link href="/produtos">
          <Button variant="primary" size="lg">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            Continuar a comprar
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline" size="lg">
            Página inicial
            <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function GenericSuccess() {
  return (
    <div className="mx-auto max-w-lg px-4 py-32 text-center">
      <CheckCircle className="mx-auto mb-4 h-16 w-16 text-sage-500" strokeWidth={1} />
      <h1 className="font-display text-3xl font-bold text-charcoal-900">
        Pedido recebido!
      </h1>
      <p className="mt-3 text-charcoal-500">
        Obrigado pela tua compra. Receberás um email de confirmação em breve.
      </p>
      <div className="mt-8">
        <Link href="/produtos">
          <Button variant="primary" size="lg">
            Continuar a comprar
          </Button>
        </Link>
      </div>
    </div>
  );
}
