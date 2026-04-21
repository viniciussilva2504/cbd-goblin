import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
          {
            // Variants
            "bg-sage-600 text-white hover:bg-sage-700 active:bg-sage-800 shadow-sm":
              variant === "primary",
            "bg-gold-500 text-charcoal-900 hover:bg-gold-600 active:bg-gold-600 shadow-sm":
              variant === "secondary",
            "border border-sage-600 text-sage-600 hover:bg-sage-50 active:bg-sage-100":
              variant === "outline",
            "text-charcoal-700 hover:bg-cream-200 active:bg-cream-300":
              variant === "ghost",
            // Sizes
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-sm": size === "md",
            "px-7 py-3.5 text-base": size === "lg",
            // Full width
            "w-full": fullWidth,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
