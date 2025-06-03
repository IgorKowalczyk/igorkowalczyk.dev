import { meta } from "@/config/metadata";
import type { Nav } from "@/lib/types";

export const nav = {
 main: [
  {
   href: "/",
   title: "Home",
  },
  {
   href: "/work/",
   title: "My work",
  },
  {
   href: "/blog/",
   title: "Blog",
  },
 ],
 // Only for mobile navigation, will be merged with the main navigation
 mobile: [
  {
   href: meta.accounts.discord.invite,
   title: "Discord",
   target: "_blank",
  },
 ],
 popovers: [
  {
   title: "More",
   components: [
    {
     title: "My Github Profile",
     href: `https://github.com/${meta.accounts.github.username}`,
     description: "Explore my projects and contributions on GitHub.",
     icon: "Github",
     iconStyles: "fill-black dark:fill-white/70 stroke-none!",
    },
    {
     title: "Contact Me",
     href: "/contact",
     description: "Have any questions? Feel free to reach out to me.",
     icon: "Send",
    },
   ],
  },
 ],
} satisfies Nav;
