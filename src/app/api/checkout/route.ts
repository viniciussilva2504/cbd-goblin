import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { PRODUCTS } from "@/data/products";

interface CheckoutItem {
  id: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  let items: CheckoutItem[];

  try {
    const body = await req.json();
    items = body.items;
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Carrinho vazio." }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  // Validar IDs e quantidades — preços vêm sempre do servidor (nunca do cliente)
  const lineItems = [];

  for (const item of items) {
    const product = PRODUCTS.find((p) => p.id === item.id);

    if (!product) {
      return NextResponse.json(
        { error: `Produto não encontrado: ${item.id}` },
        { status: 400 }
      );
    }

    const qty = Math.floor(Number(item.quantity));
    if (qty < 1 || qty > 99) {
      return NextResponse.json(
        { error: `Quantidade inválida para ${product.name}.` },
        { status: 400 }
      );
    }

    if (product.stock < qty) {
      return NextResponse.json(
        { error: `Stock insuficiente para ${product.name}.` },
        { status: 400 }
      );
    }

    lineItems.push({
      price_data: {
        currency: "eur",
        product_data: {
          name: product.name,
          description: product.shortDescription,
          images: product.image.startsWith("https://")
            ? [product.image]
            : undefined,
        },
        // Stripe usa cêntimos — preço validado server-side
        unit_amount: Math.round(product.price * 100),
      },
      quantity: qty,
    });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    currency: "eur",
    shipping_address_collection: {
      allowed_countries: ["PT"],
    },
    phone_number_collection: { enabled: true },
    success_url: `${baseUrl}/checkout/sucesso?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/carrinho`,
    locale: "pt",
    payment_method_types: ["card", "multibanco", "mb_way"],
    metadata: {
      source: "cbd-goblin-web",
    },
  });

  return NextResponse.json({ url: session.url });
}
