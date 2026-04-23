"use client";

import { useActionState } from "react";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  subscribeNewsletter,
  type NewsletterState,
} from "@/app/actions/newsletter";

export default function NewsletterForm() {
  const [state, action, isPending] = useActionState<NewsletterState, FormData>(
    subscribeNewsletter,
    null
  );

  if (state?.success) {
    return (
      <div className="mt-8 flex items-center justify-center gap-2 text-cream-100">
        <CheckCircle className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
        <span>Obrigado! Vai receber as nossas novidades em breve.</span>
      </div>
    );
  }

  return (
    <form action={action} className="mt-8 flex flex-col gap-3 sm:flex-row">
      <div className="flex flex-1 flex-col gap-1">
        <input
          type="email"
          name="email"
          placeholder="o-seu-email@exemplo.com"
          aria-label="Email para newsletter"
          required
          className="rounded-lg border border-sage-500 bg-sage-800/60 px-4 py-3 text-cream-100 placeholder-sage-400 outline-none ring-sage-400 focus:ring-2"
        />
        {state?.error && (
          <p className="text-xs text-red-400">{state.error}</p>
        )}
      </div>
      <Button variant="secondary" size="md" type="submit" disabled={isPending}>
        {isPending ? "A subscrever..." : "Subscrever"}
      </Button>
    </form>
  );
}
