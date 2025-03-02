"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
import { cn } from "@/lib/utils";

const Switch = ({ ref, className, ...props }: React.ComponentPropsWithRef<typeof SwitchPrimitives.Root>) => (
 <SwitchPrimitives.Root className={cn("peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-black/10 transition-colors focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:hover:border-neutral-800 dark:data-[state=checked]:bg-neutral-800/50", className)} {...props} ref={ref}>
  <SwitchPrimitives.Thumb className={cn("pointer-events-none block size-5 rounded-full bg-neutral-800 transition-transform data-[state=checked]:translate-x-[25px] data-[state=unchecked]:translate-x-1 dark:bg-neutral-200")} />
 </SwitchPrimitives.Root>
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
