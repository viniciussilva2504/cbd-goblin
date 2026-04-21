import { Leaf } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-sage-600">
        <Leaf className="h-10 w-10 animate-pulse" strokeWidth={1.5} />
        <p className="text-sm font-medium text-charcoal-500">A carregar...</p>
      </div>
    </div>
  );
}
