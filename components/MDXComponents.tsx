import rehypeShiki from "@shikijs/rehype";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { slugify } from "@/lib/utils";

function createHeading(level: number) {
 const Heading = ({ children }) => {
  const slug = slugify(children);
  return React.createElement(`h${level}`, { id: slug }, [<Link href={`#${slug}`} key={`link-${slug}`} className="anchor" />], children);
 };

 return Heading;
}

const components: MDXComponents = {
 Image: (props: ImageProps) => <Image className="rounded-lg" {...props} />,
 a: (props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => <Link {...props} />,
 h1: createHeading(1),
 h2: createHeading(2),
 h3: createHeading(3),
 h4: createHeading(4),
 h5: createHeading(5),
 h6: createHeading(6),
};

export function MDXComponent(props: React.ComponentPropsWithoutRef<typeof MDXRemote>) {
 return (
  <div className="prose prose-neutral prose-a:underline-offset-6 prose-a:hover:underline-offset-auto prose-img:m-0 dark:prose-invert prose-a:font-bold prose-a:hover:decoration-wavy">
   <MDXRemote
    {...props}
    components={{ ...components, ...(props.components || {}) }}
    options={{
     mdxOptions: {
      format: "mdx",
      rehypePlugins: [
       [
        rehypeShiki,
        {
         themes: {
          dark: "github-dark",
          light: "github-light",
         },
        },
       ],
      ],
     },
    }}
   />
  </div>
 );
}
