import "server-only";

import { compile, run } from "@mdx-js/mdx";
import rehypeShiki from "@shikijs/rehype";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import type { LinkProps } from "next/link";
import Link from "next/link";
import React, { cache } from "react";
import * as runtime from "react/jsx-runtime";
import { slugify } from "@/lib/utils";

function createHeading(level: number) {
  const Heading = ({ children }) => {
    const slug = slugify(children);
    return React.createElement(`h${level}`, { id: slug }, [<Link href={`#${slug}`} key={`link-${slug}`} className="anchor" />], children);
  };

  return Heading;
}

const defaultComponents: MDXComponents = {
  Image: (props: ImageProps) => <Image className="rounded-lg" {...props} alt={props.alt || ""} />,
  a: (props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => <Link {...props} />,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
};

type MDXComponentProps = {
  source: string;
  components?: MDXComponents;
};

const getMDXContent = cache(async (source: string) => {
  const code = String(
    await compile(source, {
      outputFormat: "function-body",
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
    })
  );

  const { default: MDXContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return MDXContent as React.ComponentType<{ components?: MDXComponents }>;
});

export async function MDXComponent({ source, components }: MDXComponentProps) {
  const MDXContent = await getMDXContent(source);

  return (
    <div className="prose prose-neutral prose-a:underline-offset-6 prose-a:hover:underline-offset-auto prose-img:m-0 dark:prose-invert prose-a:font-bold prose-a:hover:decoration-wavy">
      <MDXContent components={{ ...defaultComponents, ...(components || {}) }} />
    </div>
  );
}
