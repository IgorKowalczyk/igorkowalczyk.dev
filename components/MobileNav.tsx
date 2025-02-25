"use client";

import { useState } from "react";
import { Button, buttonVariants } from "@/components/Button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/Drawer";
import { Icons } from "@/components/Icons";
import { nav } from "@/config/navigation";
import { cn } from "@/lib/utils";

export default function MobileNav() {
 const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
 const menuItems = [...nav.main, ...nav.mobile];

 return (
  <Drawer direction="left" open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
   <DrawerTrigger className={cn(buttonVariants({ variant: "secondary" }), "size-10 justify-center border-0 !bg-transparent !outline-none hover:!bg-neutral-300 dark:hover:!bg-white/15 lg:hidden")}>
    <Icons.AlignLeft className="size-5 shrink-0 text-neutral-900 dark:text-neutral-100" />
   </DrawerTrigger>

   <DrawerContent variant="left">
    <DrawerHeader>
     <DrawerTitle className="sr-only">Menu</DrawerTitle>
     <DrawerDescription className="sr-only">All navigation links. Press tab to cycle through links.</DrawerDescription>
    </DrawerHeader>
    <div className="mt-3 flex flex-col gap-2">
     {menuItems.map((item) => (
      <Button variant="secondary" key={item.href} href={item.href} className="w-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
       {item.title}
      </Button>
     ))}
    </div>
   </DrawerContent>
  </Drawer>
 );
}
