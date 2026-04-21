"use client";

import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types";
import { useCartStore } from "@/store/cart";
import Button from "./Button";

interface AddToCartButtonProps {
  product: Product;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function AddToCartButton({
  product,
  size = "sm",
  fullWidth = false,
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <Button
      variant={added ? "secondary" : "primary"}
      size={size}
      fullWidth={fullWidth}
      onClick={handleAdd}
      aria-label={`Adicionar ${product.name} ao carrinho`}
    >
      {added ? (
        <Check className="h-4 w-4" strokeWidth={2} />
      ) : (
        <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
      )}
      <span>{added ? "Adicionado!" : "Adicionar"}</span>
    </Button>
  );
}
