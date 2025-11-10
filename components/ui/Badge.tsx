import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "flex items-center gap-2 rounded-lg border border-black/10 font-mono font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5",
  {
    variants: {
      size: {
        small: "text-sm px-2 py-1",
        default: "px-2 py-1",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export const Badge = ({ children, size, className, ...props }: React.ComponentPropsWithRef<"span"> & VariantProps<typeof badgeVariants>) => {
  return (
    <span {...props} className={cn(badgeVariants({ size }), className || "", className)}>
      {children}
    </span>
  );
};
