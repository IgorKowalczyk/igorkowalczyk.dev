import type { Metadata } from "next";
import { Grid } from "./components/Grid";
import { Description, Header1 } from "@/components/ui/Headers";
import { getPhotography } from "@/lib/getPhotography";

export const metadata: Metadata = {
 title: "Photography",
 description: "Explore some of my finest photos, captured during my travels and adventures.",
};

export default async function Page() {
 const photos = await getPhotography();

 return (
  <div className="mt-6 mb-16 flex flex-col items-start justify-center md:mt-12 lg:mt-20">
   <Header1>My photography</Header1>
   <Description> I have a passion for photography, travel, and capturing life's most beautiful moments. Here, you can explore some of my finest photos.</Description>

   <div className="mt-12 w-full">{!photos ? <p className="mb-4 text-red-400">No images found!</p> : <Grid photos={photos} />}</div>
  </div>
 );
}
