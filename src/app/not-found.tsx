import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-8xl font-bold text-cream-300">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-charcoal-900">
        Página não encontrada
      </h1>
      <p className="mt-3 text-charcoal-500">
        A página que procura não existe ou foi movida.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button variant="primary" size="lg">
            <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
            Voltar ao início
          </Button>
        </Link>
      </div>
    </div>
  );
}
