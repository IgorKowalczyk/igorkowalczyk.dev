import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXComponent } from "@/components/MDXComponents";
import { Header1 } from "@/components/ui/Headers";
import Link from "@/components/ui/Link";
import { meta } from "@/config";
import { getOtherPages } from "@/lib/blogUtils";
import setup from "@/public/assets/uses.png";

export const metadata = {
 title: "What I use",
 description: "A list of tools, software, and hardware that I use on a daily basis for work and personal projects.",
};

export default function Page() {
 const uses = getOtherPages().find((page) => page.slug === "uses");

 if (!uses) return notFound();

 return (
  <article className="mt-6 mb-16 flex flex-col items-start justify-center md:mt-12 lg:mt-20">
   <header>
    <Header1>{uses.metadata.title}</Header1>
    <p className="pb-2 text-neutral-700 dark:text-neutral-300">{uses.metadata.description}</p>
   </header>
   <Link href={`https://github.com/${meta.accounts.github.username}/dotfiles`} target="_blank" rel="noopener noreferrer">
    <Image src={setup} loading="eager" alt="My setup" className="blur-0 relative z-10 my-4 scale-100 transform cursor-pointer rounded-2xl bg-neutral-200 duration-200 will-change-auto hover:opacity-75 hover:brightness-90 motion-reduce:duration-0 dark:bg-neutral-200/15" placeholder="blur" />
   </Link>
   <section className="w-full max-w-none">
    <MDXComponent source={uses.content} />
   </section>
  </article>
 );
}
