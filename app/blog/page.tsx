import type { Metadata } from "next";
import { Description, Header1, Header2 } from "@/components/ui/Headers";
import { Icons } from "@/components/ui/Icons";
import Link from "@/components/ui/Link";
import { getBlogPosts } from "@/lib/blogUtils";
import { parseISO } from "@/lib/utils";

export const metadata: Metadata = {
 title: "Tech Blog",
 description: "A blog about technology, programming, and various intriguing topics. Here I share my experiences, projects and opinions.",
};

export default function Page() {
 const posts = getBlogPosts().sort((a, b) => Number(new Date(b.metadata.publishedAt)) - Number(new Date(a.metadata.publishedAt)));

 return (
  <section className="mt-6 mb-16 overflow-hidden md:mt-12 lg:mt-20">
   <Header1>Tech Blog</Header1>
   <Description className="mb-16">A blog about technology, programming, and various intriguing topics. Here I share my experiences, projects and opinions.</Description>

   <Header2>All Posts</Header2>
   {!posts.length && <p className="mb-4 text-red-400">No posts found!</p>}
   <div className="relative mt-3 ml-3 flex flex-col items-start justify-center border-l border-neutral-200 dark:border-neutral-800">
    {posts.map((post, index) => (
     <Link href={`/blog/${post.slug}`} key={`/blog/${post.slug}`} className="-mt-px mb-10 ml-6 rounded-xl border border-neutral-200 px-6 py-3 duration-200 hover:bg-neutral-200/50 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
      <span className="absolute -left-3 -mt-3 flex size-6 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-black/10 dark:border-neutral-800 dark:bg-[#161617]">
       <Icons.Calendar1 className="size-3 text-neutral-800 dark:text-white" />
      </span>
      <header>
       <h3 className="mb-1 flex items-center text-lg font-bold text-neutral-900 dark:text-white">
        {post.metadata.title} {index === 0 && <span className="mr-2 ml-3 hidden rounded-sm bg-black/10 py-0.5 pr-2.5 pl-1.5 text-sm font-medium sm:block dark:bg-white/10">🔥 Latest</span>}
       </h3>
       <time className="mb-2 block text-sm leading-none font-normal text-neutral-500 dark:text-neutral-500" dateTime={new Date(post.metadata.publishedAt).toUTCString()}>
        {parseISO(post.metadata.publishedAt)}
       </time>
      </header>
      <p className="mb-2 text-base font-normal text-neutral-700 dark:text-neutral-300">{post.metadata.summary}</p>
      <p className="inline-flex text-sm font-bold text-blue-500">Read more...</p>
     </Link>
    ))}
   </div>
  </section>
 );
}
