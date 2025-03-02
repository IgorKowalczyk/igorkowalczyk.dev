import Image, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Link from "@/components/ui/Link";
import type { LinkProps } from "next/link";

const components = {
 Image: (props: ImageProps) => <Image className="rounded-lg" {...props} />,
 a: (props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => <Link {...props} />,
};

export function MDXComponent({ code }) {
 if (!code) return null;
 const Component = useMDXComponent(code);

 return (
  <div className="prose prose-neutral prose-a:underline-offset-6 prose-a:hover:underline-offset-auto prose-img:m-0 dark:prose-invert prose-a:font-bold prose-a:hover:decoration-wavy">
   <Component components={{ ...components }} />
  </div>
 );
}
