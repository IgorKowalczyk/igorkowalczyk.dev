import fs from "node:fs";
import path from "node:path";

console.log("Deleting files from /public");

const deleteIfExists = (path: string) => {
 if (fs.existsSync(path)) {
  if (fs.lstatSync(path).isDirectory()) {
   fs.rmSync(path, { recursive: true });
  } else {
   fs.rmSync(path);
  }
 }
};

deleteIfExists("public/.well-known");
deleteIfExists("public/assets/projects");
deleteIfExists("public/setup.jpg");
deleteIfExists("public/avatar.png");

console.log("Deleting files from /content");
deleteIfExists("content");

console.log("Creating /content/uses.mdx");
const contentDir = "content";
if (!fs.existsSync(contentDir)) {
 fs.mkdirSync(contentDir, { recursive: true });
}

fs.writeFileSync(
 path.join(contentDir, "uses.mdx"),
 `---
title: "Uses"
description: "Just a collection of tools, software, and hardware I use on a daily basis."
---

# Uses
- Code from [GitHub](https://github.com/igorkowalczyk/igorkowalczyk.dev)
`
);

console.log("Creating /content/blog/hello-world.mdx");
const blogDir = path.join(contentDir, "blog");
if (!fs.existsSync(blogDir)) {
 fs.mkdirSync(blogDir, { recursive: true });
}

fs.writeFileSync(
 path.join(blogDir, "hello-world.mdx"),
 `---
title: "Hello, World!"
description: "The first post on my blog, saying hello to the world."
date: ${new Date().toISOString()}
---

# Hello, World!

You can delete this post and start writing your own content!

# Markdown

This blog uses Markdown for writing posts. You can learn more about it [here](https://www.markdownguide.org/).

# Frontmatter

This blog uses frontmatter to define metadata for each post. Here's an example:

\`\`\`md
---
title: "Hello, World!"
description: "The first post on my blog, saying hello to the world."
date: 2049-12-31T23:59:59.999Z
---
\`\`\`
`
);

console.log("Done!");
