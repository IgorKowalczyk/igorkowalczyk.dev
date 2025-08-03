import { AtSignIcon } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import { meta } from "@/config/metadata";
import type { Contact } from "@/lib/types";

export const contact = {
 links: [
  {
   href: "mailto:contact@igorkowalczyk.dev",
   title: "Email",
   icon: AtSignIcon,
  },
  {
   href: meta.accounts.discord.invite,
   title: "Discord",
   icon: Icons.Discord,
  },
  {
   href: `https://x.com/${meta.accounts.twitter.username}`,
   title: "Twitter / X",
   icon: Icons.Twitter,
  },
  {
   href: `https://www.instagram.com/${meta.accounts.instagram.username}/`,
   title: "Instagram",
   icon: Icons.Instagram,
  },
 ],
} satisfies Contact;
