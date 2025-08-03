"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = ({ ref, className, children, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Trigger>) => (
 <SelectPrimitive.Trigger
  ref={ref}
  className={cn(
   "relative flex w-full cursor-pointer flex-row items-center justify-between rounded-lg border border-black/10 p-2 text-left text-sm text-neutral-700 outline-hidden duration-200 hover:border-black/30 hover:text-neutral-800 motion-reduce:transition-none sm:text-sm dark:border-neutral-800 dark:text-neutral-200/75 dark:hover:border-neutral-800 dark:hover:text-neutral-200",
   className
  )}
  {...props}
 >
  <SelectValue>
   <span className="flex flex-row items-center gap-2 truncate leading-none">{children}</span>
  </SelectValue>
  <SelectPrimitive.Icon asChild className="pointer-events-none opacity-70">
   <ChevronsUpDownIcon className="size-4 shrink-0" />
  </SelectPrimitive.Icon>
 </SelectPrimitive.Trigger>
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = ({ ref, className, children, position, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Content>) => (
 <SelectPrimitive.Portal>
  <SelectPrimitive.Content
   ref={ref}
   className={cn(
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-black/10 bg-white/80 text-base shadow-2xl backdrop-blur-md dark:border-neutral-800 dark:bg-[#161617]/70",
    position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
    className
   )}
   position={position}
   {...props}
  >
   <SelectPrimitive.Viewport className={cn("p-1.5", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}>
    {children}
   </SelectPrimitive.Viewport>
  </SelectPrimitive.Content>
 </SelectPrimitive.Portal>
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = ({ ref, className, children, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Item>) => (
 <SelectPrimitive.Item
  ref={ref}
  className={cn(
   "relative flex w-full cursor-pointer items-center rounded-lg p-2 pr-8 text-sm text-neutral-800 outline-hidden duration-200 select-none focus:bg-black/10 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none dark:text-white dark:focus:bg-white/10",
   className
  )}
  {...props}
 >
  <SelectPrimitive.ItemText>
   <span className="flex flex-row items-center gap-2 truncate leading-none">{children}</span>
  </SelectPrimitive.ItemText>
  <span className="absolute right-2 flex size-4 items-center justify-center">
   <SelectPrimitive.ItemIndicator>
    <CheckIcon className="size-4 shrink-0" />
   </SelectPrimitive.ItemIndicator>
  </span>
 </SelectPrimitive.Item>
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = ({ ref, className, ...props }: React.ComponentPropsWithRef<typeof SelectPrimitive.Separator>) => (
 <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-neutral-400 dark:bg-neutral-800", className)} {...props} />
);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectItem, SelectSeparator };
