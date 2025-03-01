"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import React from "react";
import Settings from "@/components/Settings";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/Drawer";
import { Icons } from "@/components/ui/Icons";
import Link from "@/components/ui/Link";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, NavigationMenuItem, navigationMenuTriggerStyle, NavigationMenuContent, NavigationMenuTrigger } from "@/components/ui/NavigationMenu";
import { nav } from "@/config/navigation";
import { cn } from "@/lib/utils";
export function MobileNavigation() {
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

export const NavigationPopoverItem = ({ ref, className, title, children, iconName, ...props }: React.ComponentPropsWithRef<typeof Link> & { iconName: keyof typeof Icons }) => {
 const Icon = Icons[iconName] as React.ElementType;
 return (
  <li>
   <NavigationMenuLink asChild>
    <Link ref={ref} className={cn("flex w-full select-none items-center rounded-md p-3 leading-none outline-none transition-colors hover:bg-black/10 focus:bg-black/10 dark:hover:bg-white/5 dark:focus:bg-white/5", className)} {...props}>
     <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-black/10 text-white dark:bg-white/10 dark:text-neutral-800 sm:size-12">
      <Icon className="inline size-6 stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/70" />
     </div>
     <div className="ml-3 space-y-1 text-sm">
      <div className="font-medium leading-none text-neutral-900 dark:text-white">{title}</div>
      <p className="text-neutral-500 dark:text-neutral-400">{children}</p>
     </div>
    </Link>
   </NavigationMenuLink>
  </li>
 );
};
NavigationPopoverItem.displayName = "PopoverItem";

export default function NavigationPopover() {
 return nav.popovers.map((popover) => (
  <NavigationMenuItem key={popover.title} value={popover.title}>
   <NavigationMenuTrigger>{popover.title}</NavigationMenuTrigger>

   <NavigationMenuContent className="">
    <ul className="w-[384px] space-y-1 p-2">
     {popover.components.map((component) => (
      <NavigationPopoverItem href={component.href} title={component.title} key={component.title} iconName={component.icon}>
       {component.description}
      </NavigationPopoverItem>
     ))}
    </ul>
   </NavigationMenuContent>
  </NavigationMenuItem>
 ));
}

export function NavigationItem({ path, text }: { path: string; text: string }) {
 const pathname = usePathname() || "/";
 const isActive = pathname.split("/")[1].trim() === path.split("/")[1].trim();

 return (
  <NavigationMenuItem>
   <NavigationMenuLink asChild active={isActive} className={navigationMenuTriggerStyle()}>
    <Link href={path}>{text}</Link>
   </NavigationMenuLink>
  </NavigationMenuItem>
 );
}

export function Navigation() {
 return (
  <NavigationMenu className="z-50 mx-auto flex w-full max-w-screen-md items-center gap-4 pt-9 font-mono">
   <Link href="/" className="text-lg font-black text-neutral-800 duration-300 motion-reduce:transition-none dark:text-white">
    IK
    <span className="bg-gradient-to-r from-[#6310ff] to-[#14291ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </Link>
   <MobileNavigation />
   <NavigationMenuList className="hidden lg:inline-flex">
    {nav.main.map((item) => (
     <NavigationItem path={item.href} text={item.title} key={`nav-left-${item.href}`} />
    ))}
    <NavigationPopover />
   </NavigationMenuList>
   <Settings />
  </NavigationMenu>
 );
}
