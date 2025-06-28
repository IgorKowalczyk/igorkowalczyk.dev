import type { Project } from "@/lib/types";

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
  website: "https://majoexe.com",
  github: "https://github.com/igorkowalczyk/majo.exe",
 },
 {
  name: "Los Santos County",
  description:
   "A fully customizable dashboard for FiveM communities with applications, administrator panel, payments, 2FA, permissions, Discord, Steam, CFX Forum integrations and more!",
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
  description:
   "Website for a FiveM roleplay server with player applications, server statistics, player profiles, Discord integration and more. Fully customizable and easy to use.",
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
