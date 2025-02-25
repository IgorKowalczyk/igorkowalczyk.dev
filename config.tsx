import { Icons } from "./components/Icons";
import { Contact, Header, Meta, Project, Technology } from "./lib/types";

export const meta = {
 title: "Igor Kowalczyk - Full-stack developer",
 description: "I’m a full-stack developer based in Poland. I have a passion for building web applications and solving problems.",
 shortDescription: "Full-stack developer, designer, and creator",
 keywords: ["full-stack", "developer", "designer", "creator", "web", "applications"],
 //url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`,
 url: "https://igorkowalczyk.dev",
 accounts: {
  github: {
   username: "igorkowalczyk",
   repo: "igorkowalczyk.github.io",
  },
  twitter: {
   username: "@majonezexe",
  },
  discord: {
   username: "@majonez.exe",
   invite: "https://discord.gg/sgt4QEyDxK",
   id: "544164729354977282",
  },
  instagram: {
   username: "majonezexe",
  },
 },
} satisfies Meta;

export const header = {
 title: "Igor Kowalczyk",
 description: meta.description,
} satisfies Header;

export const projects = [
 {
  name: "Majo.exe",
  started: "2020-02-24T16:59:08Z",
  description: "Discord bot for almost everything - Memes, Image editing, Giveaway, Moderation, Anime and even more! With over 150 slash commands!",
  images: [
   {
    src: "/assets/projects/majoexe/image-01.png",
    alt: "Majo.exe main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "React",
    icon: "/assets/tech/react.svg",
   },
   {
    name: "Next.js",
    icon: "/assets/tech/next.svg",
   },
   {
    name: "Discord.js",
    icon: "/assets/tech/discordjs.svg",
   },
   {
    name: "Prisma",
    icon: "/assets/tech/prisma.svg",
   },
  ],
  website: "https://majoexe.xyz",
  github: "https://github.com/igorkowalczyk/majo.exe",
 },
 {
  name: "Los Santos County",
  description: "A fully customizable dashboard for FiveM communities with applications, administrator panel, payments, 2FA, permissions, Discord, Steam, CFX Forum integrations and more!",
  images: [
   {
    src: "/assets/projects/ls-county/image-01.png",
    alt: "Los Santos County main page MacBook Pro mockup",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "React",
    icon: "/assets/tech/react.svg",
   },
   {
    name: "TailwindCSS",
    icon: "/assets/tech/tailwindcss.svg",
   },
   {
    name: "Next.js",
    icon: "/assets/tech/next.svg",
   },
   {
    name: "Prisma",
    icon: "/assets/tech/prisma.svg",
   },
  ],
  website: null,
  github: null,
 },
 {
  name: "RabbitRP",
  description: "Website for a FiveM roleplay server with player applications, server statistics, player profiles, Discord integration and more. Fully customizable and easy to use.",
  images: [
   {
    src: "/assets/projects/rabbitrp/image-01.png",
    alt: "RabbitRP main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "Astro",
    icon: "/assets/tech/astro.svg",
   },
   {
    name: "PostgreSQL",
    icon: "/assets/tech/postgresql.svg",
   },
   {
    name: "Discord API",
    icon: "/assets/tech/discord.svg",
   },
   {
    name: "TailwindCSS",
    icon: "/assets/tech/tailwindcss.svg",
   },
  ],
  website: "https://rabbitrp.pl",
  github: null,
 },
 {
  name: "Discord activity watcher",
  started: "2023-10-05T00:00:00Z",
  description: "API for displaying Discord activity data in JSON or SVG",
  images: [
   {
    src: "/assets/projects/discord-activity/image-01.png",
    alt: "Discord activity main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "Fresh",
    icon: "/assets/tech/fresh.svg",
   },
   {
    name: "Deno",
    icon: "/assets/tech/deno.svg",
   },
   {
    name: "TypeScript",
    icon: "/assets/tech/typescript.svg",
   },
   {
    name: "Discord API",
    icon: "/assets/tech/discord.svg",
   },
  ],
  website: "https://discord-activity.deno.dev",
  github: "https://github.com/igorkowalczyk/discord-activity",
 },
 {
  name: "Profile views",
  started: "2023-01-27T00:00:00Z",
  description: "Create your own badge that will count views anywhere you want!",
  images: [
   {
    src: "/assets/projects/profile-views/image-01.png",
    alt: "Profile views main page screenshot",
    width: 1920,
    height: 1080,
   },
  ],
  technologies: [
   {
    name: "Astro",
    icon: "/assets/tech/astro.svg",
   },
   {
    name: "Deno",
    icon: "/assets/tech/deno.svg",
   },
   {
    name: "TypeScript",
    icon: "/assets/tech/typescript.svg",
   },
   {
    name: "React",
    icon: "/assets/tech/react.svg",
   },
  ],
  website: "https://views.igorkowalczyk.dev",
  github: "https://github.com/igorkowalczyk/github-views",
 },
] satisfies Project[];

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
   href: "/photography/",
   title: "Photography",
  },
  {
   href: meta.accounts.discord.invite,
   title: "Discord",
   target: "_blank",
  },
 ],
};

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

export const technologies = [
 {
  name: "React",
  icon: "/assets/tech/react.svg",
  link: "https://reactjs.org/",
 },
 {
  name: "Next.js",
  icon: "/assets/tech/next.svg",
  class: "invert-0 dark:invert",
  link: "https://nextjs.org/",
 },
 {
  name: "TailwindCSS",
  icon: "/assets/tech/tailwindcss.svg",
  link: "https://tailwindcss.com/",
 },
 {
  name: "Javascript",
  icon: "/assets/tech/javascript.svg",
 },
 {
  name: "Typescript",
  icon: "/assets/tech/typescript.svg",
  link: "https://www.typescriptlang.org/",
 },
 {
  name: "Node.js",
  icon: "/assets/tech/nodejs.svg",
  link: "https://nodejs.org/",
 },
 {
  name: "Express.js",
  icon: "/assets/tech/express.svg",
  class: "invert-0 dark:invert",
  link: "https://expressjs.com/",
 },
 {
  name: "NPM",
  icon: "/assets/tech/npm.svg",
  link: "https://www.npmjs.com/",
 },
 {
  name: "PNPM",
  icon: "/assets/tech/pnpm.svg",
  link: "https://pnpm.io/",
 },
 {
  name: "Git",
  icon: "/assets/tech/git.svg",
  link: "https://git-scm.com/",
 },
 {
  name: "Github",
  icon: "/assets/tech/github.svg",
  class: "dark:invert-0 invert",
  link: "https://github.com",
 },
 {
  name: "Figma",
  icon: "/assets/tech/figma.svg",
  link: "https://figma.com/",
 },
 {
  name: "Turborepo",
  icon: "/assets/tech/turborepo.svg",
  link: "https://turbo.build/",
 },
 {
  name: "Deno",
  icon: "/assets/tech/deno.svg",
  link: "https://deno.land/",
 },
 {
  name: "PostgreSQL",
  icon: "/assets/tech/postgresql.svg",
 },
 {
  name: "MySQL",
  icon: "/assets/tech/mysql.svg",
  link: "https://www.mysql.com/",
 },
 {
  name: "MongoDB",
  icon: "/assets/tech/mongodb.svg",
  link: "https://www.mongodb.com/",
 },
 {
  name: "Discord.js",
  icon: "/assets/tech/discordjs.svg",
  link: "https://discord.js.org/",
 },
 {
  name: "Rollup",
  icon: "/assets/tech/rollup.svg",
  link: "https://rollupjs.org/",
 },
 {
  name: "Docker",
  icon: "/assets/tech/docker.svg",
  link: "https://www.docker.com/",
 },
 {
  name: "Vercel",
  icon: "/assets/tech/vercel.svg",
  class: "invert-0 dark:invert",
  link: "https://vercel.com/",
 },
 {
  name: "Astro",
  icon: "/assets/tech/astro.svg",
  class: "invert-0 dark:invert",
  link: "https://astro.build/",
 },
 {
  name: "ESlint",
  icon: "/assets/tech/eslint.svg",
  link: "https://eslint.org/",
 },
] satisfies Technology[];
