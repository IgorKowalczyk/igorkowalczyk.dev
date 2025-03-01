"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import { Icons } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = ({ ref, className, ...props }: React.ComponentPropsWithRef<typeof DialogPrimitive.Overlay>) => <DialogPrimitive.Overlay ref={ref} className={cn("fixed inset-0 bg-black/50 duration-200 data-[closed]:opacity-0 motion-reduce:transition-none dark:bg-[#161617]/70", className)} {...props} />;
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = ({ ref, className, children, ...props }: React.ComponentPropsWithRef<typeof DialogPrimitive.Content>) => (
 <DialogPortal>
  <DialogOverlay />
  <DialogPrimitive.Content ref={ref} className={cn("fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-black/15 bg-white/90 p-6 text-left shadow-lg backdrop-blur-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-1/2 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-1/2 dark:border-neutral-800 dark:bg-[#161617]/70", className)} {...props}>
   {children}
   <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:text-neutral-600 dark:data-[state=open]:text-neutral-400">
    <Icons.X className="size-5" />
    <span className="sr-only">Close</span>
   </DialogPrimitive.Close>
  </DialogPrimitive.Content>
 </DialogPortal>
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("space-y-1 text-base", className)} {...props} />;
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("mt-4 flex items-center", className)} {...props} />;
DialogFooter.displayName = "DialogFooter";

const DialogTitle = ({ ref, className, ...props }: React.ComponentPropsWithRef<typeof DialogPrimitive.Title>) => <DialogPrimitive.Title ref={ref} className={cn("flex gap-2 text-xl font-medium text-neutral-900 duration-200 motion-reduce:transition-none dark:text-white", className)} {...props} />;
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = ({ ref, className, ...props }: React.ComponentPropsWithRef<typeof DialogPrimitive.Description>) => <DialogPrimitive.Description ref={ref} className={cn("text-base text-neutral-600 dark:text-neutral-400", className)} {...props} />;
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };
