import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

const ctaVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-sans font-medium tracking-wide",
    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "rounded-pill bg-clay text-bone px-7 py-3.5 text-[0.95rem] shadow-[0_1px_0_rgba(43,38,34,0.04)] hover:bg-clay-deep hover:-translate-y-0.5",
        ghost:
          "rounded-pill border border-ink/30 text-ink px-7 py-3.5 text-[0.95rem] hover:border-ink hover:bg-ink/[0.03] hover:-translate-y-0.5",
        link: [
          "relative inline-block px-0 py-1 text-ink",
          "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full",
          "after:origin-right after:scale-x-0 after:bg-current",
          "after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:after:origin-left hover:after:scale-x-100 hover:text-clay",
        ].join(" "),
      },
      size: {
        default: "",
        sm: "text-[0.85rem] px-5 py-2.5",
        lg: "text-base px-9 py-4",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type CTAProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ctaVariants> & {
    asChild?: boolean;
  };

export const CTA = forwardRef<HTMLButtonElement, CTAProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref as never}
        className={cn(ctaVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
CTA.displayName = "CTA";
