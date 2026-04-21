import { Filter } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import type { Metadata } from "next";
import type { Category } from "@/types";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Explore o nosso catálogo completo de produtos CBD — óleos, cosméticos, pomadas e suplementos.",
};

interface ProdutosPageProps {
  searchParams: Promise<{ categoria?: string }>;
}

export default async function ProdutosPage({ searchParams }: ProdutosPageProps) {
  const { categoria } = await searchParams;

  const filteredProducts = categoria
    ? PRODUCTS.filter((p) => p.category === categoria)
    : PRODUCTS;

  const activeCategory = categoria ?? "todos";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-charcoal-900">
          {categoria
            ? CATEGORIES.find((c) => c.id === categoria)?.name ?? "Produtos"
            : "Todos os Produtos"}
        </h1>
        <p className="mt-2 text-charcoal-500">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar filters */}
        <aside className="w-full lg:w-56 shrink-0">
          <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-cream-300">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-charcoal-700">
              <Filter className="h-4 w-4" strokeWidth={1.5} />
              Categorias
            </div>
            <ul className="space-y-1">
              <li>
                <a
                  href="/produtos"
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    activeCategory === "todos"
                      ? "bg-sage-600 font-medium text-white"
                      : "text-charcoal-700 hover:bg-cream-100"
                  }`}
                >
                  Todos os Produtos
                </a>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`/produtos?categoria=${cat.id}`}
                    className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                      activeCategory === cat.id
                        ? "bg-sage-600 font-medium text-white"
                        : "text-charcoal-700 hover:bg-cream-100"
                    }`}
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Products grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-lg font-medium text-charcoal-700">
                Nenhum produto encontrado
              </p>
              <p className="mt-2 text-charcoal-500">
                Tente selecionar outra categoria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
