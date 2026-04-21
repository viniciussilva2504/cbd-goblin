import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-cream-300 transition-shadow hover:shadow-md">
      <Link href={`/produtos/${product.slug}`} className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.tags.includes("bestseller") && (
          <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-2.5 py-0.5 text-xs font-semibold text-charcoal-900">
            Bestseller
          </span>
        )}
        {product.tags.includes("popular") && (
          <span className="absolute left-3 top-3 rounded-full bg-sage-600 px-2.5 py-0.5 text-xs font-semibold text-white">
            Popular
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-sage-600">
          {product.concentration ?? product.weight ?? product.volume}
        </p>
        <Link href={`/produtos/${product.slug}`}>
          <h3 className="font-display text-lg font-semibold text-charcoal-900 transition-colors hover:text-sage-700">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-charcoal-500">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-charcoal-900">
            {formatPrice(product.price)}
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
