"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store/cart";

// Componente client-side silencioso: limpa o carrinho após pagamento confirmado
export default function ClearCartTrigger() {
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return null;
}
