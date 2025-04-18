import { NextResponse } from "next/server";
import { meta } from "@/config";
import { getBlogPosts } from "@/lib/blogUtils";

export const dynamic = "force-static";

export function GET() {
 const posts = getBlogPosts();

 const updatedDate = posts.length ? new Date(Math.max(...posts.map((post) => new Date(post.metadata.publishedAt).getTime()))).toISOString() : new Date().toISOString();

 const entries = posts
  .map(
   (post) => `
        <entry>
          <id>${meta.url}/blog/${post.slug}</id>
          <title>${post.metadata.title}</title>
          <summary>${post.metadata.summary}</summary>
          <link href="${meta.url}/blog/${post.slug}"/>
          <updated>${new Date(post.metadata.publishedAt).toISOString()}</updated>
        </entry>`
  )
  .join("");

 return new NextResponse(
  `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
      <title>${meta.title}</title>
      <subtitle>Blog</subtitle>
      <link href="${meta.url}/feed" rel="self"/>
      <link href="${meta.url}/"/>
      <updated>${updatedDate}</updated>
      <author>
        <name>${meta.title}</name>
      </author>
      <id>${meta.url}/</id>
      ${entries}
    </feed>`,
  {
   headers: {
    "content-type": "application/atom+xml; charset=utf-8",
   },
  }
 );
}
