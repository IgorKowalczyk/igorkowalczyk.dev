import type { MetadataRoute } from "next";
import { meta } from "@/config";
import { getBlogPosts, getOtherPages } from "@/lib/blogUtils";

export default function sitemap(): MetadataRoute.Sitemap {
 const blogs = getBlogPosts();

 const posts = blogs.map((post) => ({
  url: `${meta.url}/blog/${post.slug}`,
  lastModified: post.metadata.publishedAt,
 }));

 const otherPages = getOtherPages();
 const pages = otherPages.map((post) => ({
  url: `${meta.url}/${post.slug}`,
  lastModified: new Date().toISOString().split("T")[0],
 }));

 const routes = ["", "/blog", "/contact", "/work"].map((route) => ({
  url: `${meta.url}${route}`,
  lastModified: new Date().toISOString().split("T")[0],
 }));

 return [...routes, ...posts, ...pages];
}
