"use client";

import Image from "next/image";
import { Masonry } from "react-plock";
import Link from "@/components/ui/Link";
import type { Photo } from "@/lib/getPhotography";

export const Grid = ({ photos }: { photos: Photo[] }) => {
 return (
  <Masonry
   items={photos}
   config={{
    columns: [1, 2],
    gap: [24, 24],
    media: [640, 1024],
   }}
   render={(result) => (
    <Link key={`photo-${result.path}`} href={result.path} target="_blank">
     <Image className="blur-0 cursor-zoom-in rounded-lg bg-neutral-200 duration-200 hover:opacity-70 dark:bg-neutral-200/15" src={result.path} alt={"Photo by Igor Kowalczyk"} width={720} height={480} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw" />
    </Link>
   )}
  />
 );
};
