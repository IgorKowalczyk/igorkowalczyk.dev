import { meta } from "@/config/metadata";
import type { Contact } from "@/lib/types";

export const contact = {
 links: [
  {
   href: "mailto:majonezexe@protonmail.com",
   title: "Email",
   icon: "AtSign",
  },
  {
   href: meta.accounts.discord.invite,
   title: "Discord",
   icon: "Discord",
  },
  {
   href: `https://x.com/${meta.accounts.twitter.username}`,
   title: "Twitter / X",
   icon: "Twitter",
  },
  {
   href: `https://www.instagram.com/${meta.accounts.instagram.username}/`,
   title: "Instagram",
   icon: "Instagram",
  },
 ],
} satisfies Contact;
