import type { Header, Meta } from "@/lib/types";

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
   repo: "igorkowalczyk.dev",
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
