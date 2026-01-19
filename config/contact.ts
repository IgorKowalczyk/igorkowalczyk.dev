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
    }
  ],
} satisfies Contact;
