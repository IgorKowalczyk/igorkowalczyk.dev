import { NextResponse } from "next/server";
import { technologies } from "@/config";

export const dynamic = "force-static";

export function GET() {
 const sanitizedTechnologies = technologies.map(({ class: _, ...rest }) => rest);

 return new NextResponse(JSON.stringify(sanitizedTechnologies), {
  headers: {
   "content-type": "application/json",
  },
 });
}
