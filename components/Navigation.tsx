"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import React from "react";
import Settings from "@/components/Settings";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/Drawer";
import { Icons } from "@/components/ui/Icons";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, NavigationMenuItem, navigationMenuTriggerStyle, NavigationMenuContent, NavigationMenuTrigger } from "@/components/ui/NavigationMenu";
import { nav } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
 const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
 const menuItems = [...nav.main, ...nav.mobile];

 return (
  <Drawer shouldScaleBackground={false} direction="left" open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
   <DrawerTrigger aria-label="Open navigation" className={cn(buttonVariants({ variant: "secondary" }), "size-10 justify-center border-0 bg-transparent! outline-hidden! hover:bg-neutral-300! lg:hidden dark:hover:bg-white/15!")}>
    <Icons.AlignLeft className="size-5 shrink-0 text-neutral-900 dark:text-neutral-100" />
   </DrawerTrigger>

   <DrawerContent variant="left">
    <DrawerHeader>
     <DrawerTitle className="sr-only">Menu</DrawerTitle>
     <DrawerDescription className="sr-only">All navigation links. Press tab to cycle through links.</DrawerDescription>
    </DrawerHeader>
    <div className="mt-3 flex flex-col gap-2">
     {menuItems.map((item) => (
      <Button variant="secondary" key={item.href} asChild className="w-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
       <Link href={item.href}>{item.title}</Link>
      </Button>
     ))}
    </div>
   </DrawerContent>
  </Drawer>
 );
}

export const NavigationPopoverItem = ({ ref, className, title, children, iconName, iconStyles, ...props }: React.ComponentPropsWithRef<typeof Link> & { iconName: keyof typeof Icons; iconStyles?: string }) => {
 const Icon = Icons[iconName] as React.ElementType;
 return (
  <li>
   <NavigationMenuLink asChild>
    <Link ref={ref} className={cn("flex w-full items-center rounded-lg p-3 leading-none outline-hidden transition-colors select-none hover:bg-black/10 focus:bg-black/10 dark:hover:bg-white/5 dark:focus:bg-white/5", className)} {...props}>
     <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-black/10 text-white sm:size-12 dark:bg-white/10 dark:text-neutral-800">
      <Icon className={cn("inline size-6 stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/70", iconStyles || "")} />
     </div>
     <div className="ml-3 space-y-1 text-sm">
      <div className="leading-none font-medium text-neutral-900 dark:text-white">{title}</div>
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
      <NavigationPopoverItem href={component.href} title={component.title} key={component.title} iconName={component.icon} iconStyles={component.iconStyles}>
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
  <NavigationMenu className="max-w-body z-10 mx-auto flex w-full items-center gap-4 pt-9 font-mono">
   <Link href="/" className="-ml-4 text-lg font-black text-neutral-800 duration-300 motion-reduce:transition-none dark:text-white">
    IK
    <span className="text-fill-transparent bg-linear-to-r from-[#6310ff] to-[#14291ff] box-decoration-clone bg-clip-text dark:from-[#a2facf] dark:to-[#64acff]">.</span>
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
