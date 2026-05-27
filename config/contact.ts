import { AtSignIcon } from "lucide-react";
import type { Contact } from "@/lib/types";

export const contact = {
  links: [
    {
      href: "mailto:contact@igorkowalczyk.dev",
      title: "Email",
      icon: AtSignIcon,
    },
  ],
} satisfies Contact;
