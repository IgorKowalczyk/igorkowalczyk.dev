import type { LucideIcons } from "@/components/ui/Icons";

export interface Language {
  size: number;
  node: {
    color: string;
    name: string;
  };
}

export type Project = {
  name: string;
  started?: string;
  ended?: string;
  description: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  technologies: {
    name: string;
    icon: string;
  }[];
  website: string | null;
  github: string | null;
};

export type Header = {
  title: string;
  description: string;
};

export interface ContactLink {
  href: string;
  title: string;
  icon: LucideIcons | React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type Contact = {
  links: ContactLink[];
};

export type Technology = {
  name: string;
  icon: string;
  class?: string;
  link?: string;
};

export type Meta = {
  title: string;
  description: string;
  shortDescription: string;
  keywords: string[];
  url: string;
  accounts: {
    github: {
      username: string;
      repo: string;
    };
    twitter?: {
      username: string;
    };
    discord?: {
      username: string;
      invite?: string;
      id: string;
    };
    instagram?: {
      username: string;
    };
  };
};

export type NavItem = {
  href: string;
  title: string;
  target?: string;
};

export type NavPopoverItem = {
  title: string;
  href: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconStyles?: string;
};

export type NavPopover = {
  title: string;
  components: NavPopoverItem[];
};

export type Nav = {
  main: NavItem[];
  mobile: NavItem[];
  popovers: NavPopover[];
};
