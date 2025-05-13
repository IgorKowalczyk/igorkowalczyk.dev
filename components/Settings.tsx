"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle, DialogFooter } from "@/components/ui/Dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/Drawer";
import { Icons } from "@/components/ui/Icons";
import Link from "@/components/ui/Link";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import { meta } from "@/config/metadata";
import { useIsMobile } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function SettingsContent() {
 const [decorationsEnabled, setDecorationsEnabled] = useState<boolean>(true);
 const { resolvedTheme, setTheme } = useTheme();

 useEffect(() => {
  setDecorationsEnabled(() => localStorage.getItem("decorations") !== "false");
 }, []);

 return (
  <div className="mt-2 divide-y divide-black/10 dark:divide-white/10">
   <div className="flex w-full cursor-auto items-center py-3 text-base text-neutral-800 select-none dark:text-white">
    <Icons.SunMoon className="mr-2 size-5" />
    Theme
    <div className="ml-auto w-32">
     {!resolvedTheme ? (
      <div className="flex h-10 w-full items-center justify-center text-neutral-800 dark:text-white">
       <Icons.RefreshCw className="size-5 animate-spin" />
      </div>
     ) : (
      <Select value={resolvedTheme} onValueChange={(e) => setTheme(e)}>
       <SelectTrigger>
        {resolvedTheme === "dark" ? (
         <>
          <Icons.Moon className="size-4" />
          Dark
         </>
        ) : (
         <>
          <Icons.Sun className="size-4" />
          Light
         </>
        )}
       </SelectTrigger>
       <SelectContent>
        <SelectItem value="system" className="mb-0.5">
         <Icons.Laptop className="size-4" />
         <span>System</span>
        </SelectItem>
        <SelectItem value="dark" className="mb-0.5">
         <Icons.Moon className="size-4" />
         <span>Dark</span>
        </SelectItem>
        <SelectItem value="light">
         <Icons.Sun className="size-4" />
         <span>Light</span>
        </SelectItem>
       </SelectContent>
      </Select>
     )}
    </div>
   </div>

   <div className="flex w-full items-center py-3 text-base text-neutral-800 select-none dark:text-white">
    <Icons.Sparkles className="mr-2 size-5" />
    Display decorations
    <div className="ml-auto flex w-32 items-center justify-end gap-2 text-sm text-neutral-800/50 italic dark:text-neutral-300/50">
     <Switch
      checked={decorationsEnabled}
      onCheckedChange={() => {
       localStorage.setItem("decorations", !decorationsEnabled ? "true" : "false");
       window.dispatchEvent(new Event("decorations"));
       setDecorationsEnabled((prev) => !prev);
      }}
     />
    </div>
   </div>
  </div>
 );
}

export default function Settings() {
 const [isOpen, setIsOpen] = useState<boolean>(false);
 const isMobile = useIsMobile();

 return (
  <>
   <Button
    variant="secondary"
    aria-label="Open settings"
    onClick={() => setIsOpen(true)}
    className={cn(
     {
      "bg-neutral-300! dark:bg-white/15!": isOpen,
      "bg-transparent! hover:bg-neutral-300! dark:hover:bg-white/15!": !isOpen,
     },
     "group ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg px-2 outline-hidden! duration-200 focus:bg-neutral-300! dark:focus:bg-white/15!"
    )}
   >
    <Icons.Settings
     className={cn(
      {
       "rotate-90 dark:text-white": isOpen,
       "text-neutral-800 dark:text-neutral-200": !isOpen,
      },
      "h-5 w-5 shrink-0 duration-200 group-hover:rotate-90 group-hover:transform motion-reduce:transition-none dark:group-hover:text-white"
     )}
    />
   </Button>

   {isMobile ? (
    <Drawer shouldScaleBackground={true} direction="bottom" open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
     <DrawerContent variant="bottom">
      <DrawerHeader>
       <DrawerTitle>
        <Icons.Settings className="size-6 text-neutral-800 dark:text-white" /> Settings
       </DrawerTitle>
       <DrawerDescription>Here you can change your settings, like website theme or decorations.</DrawerDescription>
      </DrawerHeader>
      <SettingsContent />
     </DrawerContent>
    </Drawer>
   ) : (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
     <DialogContent>
      <DialogHeader>
       <DialogTitle>
        <Icons.Settings className="size-6 text-neutral-800 dark:text-white" />
        Settings
       </DialogTitle>
       <DialogDescription>Here you can change your settings, like website theme or decorations.</DialogDescription>
      </DialogHeader>
      <SettingsContent />
      <DialogFooter>
       <Link target="_blank" rel="noreferrer" href={`https://github.com/${meta.accounts.github.username}/${meta.accounts.github.repo}`} className="flex items-center text-sm text-neutral-800 opacity-50 duration-200 hover:opacity-100 motion-reduce:transition-none dark:text-white">
        Source code <Icons.ExternalLink className="ml-2 size-3" />
       </Link>

       <Button variant="secondary" className="ml-auto" onClick={() => setIsOpen(false)}>
        Save
       </Button>
      </DialogFooter>
     </DialogContent>
    </Dialog>
   )}
  </>
 );
}
