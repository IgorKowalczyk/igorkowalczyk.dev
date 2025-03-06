import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import * as React from "react";
import { useRef, useState } from "react";
import { Icons } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const NavigationMenuViewport = ({ className, ...props }: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Viewport>) => (
 <div className="">
  <NavigationMenuPrimitive.Viewport className={cn("text-text viewport data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in absolute mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border border-black/10 bg-white/90 shadow-lg backdrop-blur-xl transition-[width,_height] duration-300 md:w-[var(--radix-navigation-menu-viewport-width)] dark:border-neutral-800 dark:bg-[#161617]/70", className)} {...props} />
 </div>
);
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenu = ({ className, children, ...props }: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Root>) => {
 const rootRef = useRef<HTMLElement>(null);
 const [activeItem, setActiveItem] = useState({ left: 0, width: 0, bottom: 0 });

 const onRootValueChange = (value: string) => {
  if (!rootRef.current || !value) return;
  const trigger = rootRef.current?.querySelector(`#${value}`);
  const wrapper = rootRef.current?.firstChild as Element | null;

  if (!wrapper || !trigger) return;

  const triggerRect = trigger.getBoundingClientRect();
  const wrapperRect = wrapper.getBoundingClientRect();

  setActiveItem({
   left: triggerRect.left - wrapperRect.left,
   width: triggerRect.width,
   bottom: triggerRect.bottom,
  });
 };

 return (
  <NavigationMenuPrimitive.Root
   ref={rootRef}
   className={cn("relative z-50 flex items-center justify-center", className)}
   onValueChange={onRootValueChange}
   {...props}
   style={
    {
     "--active-item-left": activeItem.left + "px",
     "--active-item-width": activeItem.width + "px",
     "--active-item-bottom": activeItem.bottom + "px",
    } as React.CSSProperties
   }
  >
   <NavigationMenuViewport />
   {children}
  </NavigationMenuPrimitive.Root>
 );
};
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = ({ className, ...props }: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) => <NavigationMenuPrimitive.List className={cn("group flex flex-1 list-none items-center justify-center space-x-2", className)} {...props} />;
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = ({ ...props }: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) => {
 const id = props.value?.replace(" ", "-");
 return <NavigationMenuPrimitive.Item id={id} value={id} {...props} />;
};

const navigationMenuTriggerStyle = cva("group cursor-pointer inline-flex h-10 w-max items-center justify-center rounded-md text-neutral-700 transition-colors hover:bg-black/10 hover:text-neutral-800 focus:bg-white/10 focus:text-neutral-800 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-active:bg-black/10 data-[state=open]:bg-black/10 data-active:text-neutral-800 data-[state=open]:text-neutral-800 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-neutral-200 dark:focus:bg-white/10 dark:focus:text-neutral-200 dark:data-active:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-active:text-neutral-200 dark:data-[state=open]:text-neutral-200 sm:px-3 sm:py-2");

const NavigationMenuTrigger = ({ className, children, ...props }: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Trigger>) => (
 <NavigationMenuPrimitive.Trigger className={cn(navigationMenuTriggerStyle(), "group leading-none", className)} {...props}>
  {children} <Icons.ChevronRight className="ml-1 size-4 transition-transform duration-100 ease-in group-data-[state=open]:rotate-90" aria-hidden="true" />
 </NavigationMenuPrimitive.Trigger>
);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = ({ className, ...props }: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Content>) => <NavigationMenuPrimitive.Content className={cn("data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left top-0 left-0 w-full md:absolute md:w-auto", className)} {...props} />;
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuIndicator = ({ className, ...props }: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Indicator>) => (
 <NavigationMenuPrimitive.Indicator className={cn("origin-top-center origin-top-center data-[state=hidden]:animate-scale-out data-[state=visible]:animate-scale-in top-full z-10 flex h-2 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]", className)} {...props}>
  <div className="relative top-[60%] size-2.5 rotate-45 rounded-tl-sm border border-b-0 border-black/10 bg-white/90 backdrop-blur-sm dark:border-neutral-800 dark:bg-[#161617]/70" />
 </NavigationMenuPrimitive.Indicator>
);
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export { navigationMenuTriggerStyle, NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport };
