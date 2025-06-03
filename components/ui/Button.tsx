import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRightIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva("group gap-2 flex w-fit items-center rounded-lg px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed cursor-pointer disabled:opacity-50 motion-reduce:transition-none", {
 variants: {
  variant: {
   primary: "bg-blue-500 text-white hover:bg-blue-400",
   secondary: "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
   tertiary: "border-neutral-200 border text-neutral-700 hover:bg-[#f2f3f5] dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021]",
  },
 },
 defaultVariants: {
  variant: "primary",
 },
});

export const Button = ({
 className,
 variant,
 asChild = false,
 ...props
}: React.ComponentPropsWithRef<"button"> &
 VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
 }) => {
 const Comp = asChild ? Slot : "button";

 return <Comp data-slot="button" className={cn(buttonVariants({ variant }), className || "")} {...props} />;
};

export const ButtonArrow = ({ className, ...props }: React.ComponentProps<typeof ArrowRightIcon>) => <ArrowRightIcon className={cn("size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0", className)} {...props} />;
