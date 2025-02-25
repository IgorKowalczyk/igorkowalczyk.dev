import { meta } from "@/config/metadata";

export const footer = {
 categories: [
  {
   title: "Important Links",
   links: [
    {
     title: "Home",
     href: "/",
    },
    {
     title: "My work",
     href: "/work",
    },
    {
     title: "Blog",
     href: "/blog",
    },
   ],
  },
  {
   title: "Social",
   links: [
    {
     title: "Github",
     href: `https://github.com/${meta.accounts.github.username}`,
     target: "_blank",
    },
    {
     title: "Instagram",
     href: `https://instagram.com/${meta.accounts.instagram.username}`,
     target: "_blank",
    },

    {
     title: "Discord",
     href: meta.accounts.discord.invite,
     target: "_blank",
    },
   ],
  },
  {
   title: "Other",
   links: [
    {
     title: "What i use",
     href: "/uses",
    },
    {
     title: "Contact",
     href: "/contact",
    },
    {
     title: "Photography",
     href: "/photography",
    },
   ],
  },
 ],
};
