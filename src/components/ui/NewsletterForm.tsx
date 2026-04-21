"use client";

import Button from "@/components/ui/Button";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-8 flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        placeholder="o-seu-email@exemplo.com"
        aria-label="Email para newsletter"
        className="flex-1 rounded-lg border border-sage-500 bg-sage-800/60 px-4 py-3 text-cream-100 placeholder-sage-400 outline-none ring-sage-400 focus:ring-2"
      />
      <Button variant="secondary" size="md" type="submit">
        Subscrever
      </Button>
    </form>
  );
}
