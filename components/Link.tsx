import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as TransitionLink } from "next-view-transitions";

type LinkProps = NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = function Link({ ref, ...props }: LinkProps & { ref?: React.RefObject<HTMLAnchorElement> }) {
 const { href, ...rest } = props;

 if (typeof href === "string" && href.startsWith("#")) {
  return <NextLink {...rest} href={href} ref={ref} />;
 }

 return <TransitionLink {...rest} href={href} ref={ref} />;
};

export default Link;
