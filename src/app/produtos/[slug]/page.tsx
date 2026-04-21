import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Package, Tag } from "lucide-react";
import type { Metadata } from "next";
import { getProductBySlug, PRODUCTS, CATEGORIES } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import AddToCartButton from "@/components/ui/AddToCartButton";
import ProductCard from "@/components/ui/ProductCard";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const categoryInfo = CATEGORIES.find((c) => c.id === product.category);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-charcoal-500">
        <Link href="/produtos" className="flex items-center gap-1 hover:text-sage-600 transition-colors">
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Produtos
        </Link>
        {categoryInfo && (
          <>
            <span>/</span>
            <Link href={`/produtos?categoria=${product.category}`} className="hover:text-sage-600 transition-colors">
              {categoryInfo.name}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-charcoal-900 font-medium">{product.name}</span>
      </nav>

      {/* Product main section */}
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl bg-cream-50 shadow-sm ring-1 ring-cream-300">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="h-full min-h-[400px] w-full object-cover"
            priority
          />
          {product.tags.includes("bestseller") && (
            <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-sm font-semibold text-charcoal-900">
              Bestseller
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <Link
            href={`/produtos?categoria=${product.category}`}
            className="text-sm font-semibold uppercase tracking-wider text-sage-600 hover:text-sage-700 transition-colors"
          >
            {categoryInfo?.name}
          </Link>

          <h1 className="mt-2 font-display text-4xl font-bold text-charcoal-900">
            {product.name}
          </h1>

          <p className="mt-3 text-lg text-charcoal-500">{product.shortDescription}</p>

          {/* Specs */}
          <div className="mt-6 flex flex-wrap gap-3">
            {product.concentration && (
              <span className="flex items-center gap-1.5 rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700">
                <Tag className="h-3.5 w-3.5" strokeWidth={1.5} />
                Concentração: {product.concentration}
              </span>
            )}
            {product.volume && (
              <span className="flex items-center gap-1.5 rounded-full bg-cream-200 px-3 py-1 text-sm font-medium text-charcoal-700">
                <Package className="h-3.5 w-3.5" strokeWidth={1.5} />
                Volume: {product.volume}
              </span>
            )}
            {product.weight && (
              <span className="flex items-center gap-1.5 rounded-full bg-cream-200 px-3 py-1 text-sm font-medium text-charcoal-700">
                <Package className="h-3.5 w-3.5" strokeWidth={1.5} />
                {product.weight}
              </span>
            )}
          </div>

          {/* Price + CTA */}
          <div className="mt-8 flex items-center gap-6">
            <span className="font-display text-4xl font-bold text-charcoal-900">
              {formatPrice(product.price)}
            </span>
            <AddToCartButton product={product} size="lg" />
          </div>

          <p className="mt-2 text-xs text-charcoal-500">
            {product.stock > 5
              ? `Em stock (${product.stock} unidades)`
              : product.stock > 0
              ? `Últimas ${product.stock} unidades`
              : "Esgotado"}
          </p>

          {/* Description */}
          <div className="mt-8 border-t border-cream-300 pt-8">
            <h2 className="mb-3 font-display text-xl font-semibold text-charcoal-900">
              Descrição
            </h2>
            <p className="leading-relaxed text-charcoal-500">{product.description}</p>
          </div>

          {/* Legal disclaimer */}
          <p className="mt-6 text-xs text-charcoal-400 leading-relaxed">
            ⚠️ Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
            Teor de THC inferior a 0,2%. Consulte o seu médico antes de utilizar.
          </p>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 font-display text-3xl font-bold text-charcoal-900">
            Produtos Relacionados
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
