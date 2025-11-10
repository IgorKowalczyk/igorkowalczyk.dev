import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXComponent } from "@/components/MDXComponents";
import { Header1 } from "@/components/ui/Headers";
import { meta } from "@/config/metadata";
import { getBlogPosts } from "@/lib/blogUtils";
import { cn } from "@/lib/utils";
import { parseISO } from "@/lib/utils";
import Avatar from "@/public/assets/avatar.png";

export function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) return {};

  const { title, publishedAt: publishedTime, summary: description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${meta.url}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) notFound();

  return (
    <article className="mt-6 mb-16 flex min-h-screen flex-col items-start justify-center md:mt-12 lg:mt-20">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image ? `${meta.url}${post.metadata.image}` : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${meta.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: post.metadata.author,
            },
          }),
        }}
      />

      <div className="grid flex-1 grid-cols-1 md:grid-cols-[1fr_minmax(auto,640px)_1fr] md:*:col-start-2">
        <div className="w-max">
          <header className="mb-6 w-full">
            <Header1>{post.metadata.title}</Header1>
            <div className="mt-4 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
              <div className="flex items-center">
                <Image alt={meta.title} height={24} width={24} src={Avatar} className="rounded-full" />
                <time className="ml-2 text-sm text-neutral-700 dark:text-neutral-300" dateTime={new Date(post.metadata.publishedAt).toUTCString()}>
                  {post.metadata.author} / {parseISO(post.metadata.publishedAt)}
                </time>
              </div>
              <p className="mt-2 min-w-32 text-sm text-neutral-700 md:mt-0 dark:text-neutral-300">
                {post.wordCount} words • {post.readingTime?.text}
              </p>
            </div>
          </header>
          <MDXComponent source={post.content} />
        </div>
        <div className="sticky top-24 col-start-3! mt-8 ml-12 hidden w-max max-w-56 flex-col space-y-2 self-start text-base xl:flex">
          <p className="mb-2 text-sm uppercase">On this page</p>
          {post.headings &&
            post.headings.map((props: { size: number; content: string; slug: string }) => (
              <Link
                key={props.slug}
                href={`#${props.slug}`}
                scroll={true}
                className={cn(
                  {
                    "ml-2": props.size === 2,
                    "ml-4": props.size === 3,
                  },
                  "font-normal! no-underline opacity-50 duration-200 hover:underline hover:opacity-100 motion-reduce:transition-none"
                )}
              >
                {props.content}
              </Link>
            ))}
        </div>
      </div>
      <Link
        href={`https://github.com/${meta.accounts.github.username}/${meta.accounts.github.repo}/blob/master/data/blog/${post.slug}.mdx`}
        target="_blank"
        rel="noopener noreferrer"
        className="my-4 ml-auto duration-100 hover:text-neutral-700 hover:underline hover:decoration-wavy motion-reduce:transition-none dark:hover:text-white"
      >
        Suggest a change
      </Link>
    </article>
  );
}
