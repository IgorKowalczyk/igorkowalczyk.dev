import { cn } from "@/lib/utils";

export function Description({ children, ...props }: React.ComponentProps<"p">) {
 return (
  <p {...props} className={cn("text-neutral-700 dark:text-neutral-300", props.className)}>
   {children}
  </p>
 );
}

export function Header1({ children, ...props }: React.ComponentProps<"h1">) {
 return (
  <h1
   {...props}
   className={cn(
    "dark:color-black mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-3xl font-black tracking-[-0.03em] text-neutral-800 motion-reduce:transition-none dark:text-white",
    props.className
   )}
  >
   {children}
   <span className="text-fill-transparent bg-linear-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text dark:from-[#a2facf] dark:to-[#64acff]">.</span>
  </h1>
 );
}

export function Header2({ children, ...props }: React.ComponentProps<"h2">) {
 return (
  <h2 {...props} className={cn("mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none", props.className)}>
   {children}
   <span className="text-fill-transparent bg-linear-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text dark:from-[#a2facf] dark:to-[#64acff]">.</span>
  </h2>
 );
}
