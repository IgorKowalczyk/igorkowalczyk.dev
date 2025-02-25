import { Icons } from "@/components/Icons";
import { meta } from "@/config/metadata";
import type { Contact } from "@/lib/types";

export const contact = {
 links: [
  {
   href: "mailto:majonezexe@protonmail.com",
   title: "Email",
   icon(props) {
    return <Icons.AtSign {...props} />;
   },
  },
  {
   href: meta.accounts.discord.invite,
   title: "Discord",
   icon(props) {
    return <Icons.Discord {...props} />;
   },
  },
  {
   href: `https://x.com/${meta.accounts.twitter.username}`,
   title: "Twitter / X",
   icon(props) {
    return <Icons.Twitter {...props} />;
   },
  },
  {
   href: `https://www.instagram.com/${meta.accounts.instagram.username}/`,
   title: "Instagram",
   icon(props) {
    return <Icons.Instagram {...props} />;
   },
  },
 ],
} satisfies Contact;
