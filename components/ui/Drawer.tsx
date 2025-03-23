"use client";

import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";

export const drawerVariants = cva("fixed z-20 flex w-full flex-col border-black/10 bg-white p-6 outline-hidden! duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]", {
 variants: {
  variant: {
   bottom: "inset-x-0 bottom-0 border-t pb-12",
   left: "inset-y-0 left-0 max-w-96 border-r",
  },
 },
 defaultVariants: {
  variant: "bottom",
 },
});

export const Drawer = ({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => <DrawerPrimitive.Root {...props} />;
Drawer.displayName = "Drawer";

export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerPortal = DrawerPrimitive.Portal;
export const DrawerClose = DrawerPrimitive.Close;

export const DrawerOverlay = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>) => <DrawerPrimitive.Overlay className={cn("fixed inset-0 bg-black/50 dark:bg-[#161617]/70", className)} {...props} />;
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

export interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>, VariantProps<typeof drawerVariants> {}

export const DrawerContent = ({ className, children, variant, ...props }: DrawerContentProps) => (
 <DrawerPortal>
  <DrawerOverlay />
  <DrawerPrimitive.Content className={cn(drawerVariants({ variant }), className)} {...props}>
   <div className={cn("mx-auto h-1 w-12 rounded-full bg-neutral-400", variant === "left" ? "absolute top-1/2 right-0 -translate-y-1/2 rotate-90" : "mb-3")} />
   {children}
  </DrawerPrimitive.Content>
 </DrawerPortal>
);
DrawerContent.displayName = "DrawerContent";

export const DrawerHeader = ({ className, ...props }: React.ComponentPropsWithRef<"div">) => <div className={cn("my-4", className)} {...props} />;
DrawerHeader.displayName = "DrawerHeader";

export const DrawerFooter = ({ className, ...props }: React.ComponentPropsWithRef<"div">) => <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />;
DrawerFooter.displayName = "DrawerFooter";

export const DrawerTitle = ({ ref, className, ...props }: React.ComponentPropsWithRef<typeof DrawerPrimitive.Title>) => <DrawerPrimitive.Title ref={ref} className={cn("flex gap-2 text-xl font-medium text-neutral-900 duration-200 motion-reduce:transition-none dark:text-white", className)} {...props} />;

export const DrawerDescription = ({ ref, className, ...props }: React.ComponentPropsWithRef<typeof DrawerPrimitive.Description>) => <DrawerPrimitive.Description ref={ref} className={cn("text-base text-neutral-600 dark:text-neutral-400", className)} {...props} />;
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
