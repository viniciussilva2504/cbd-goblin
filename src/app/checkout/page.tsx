import type { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout | CBD Goblin",
  description: "Finaliza a tua compra de forma segura.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
