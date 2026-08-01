import { MetadataRoute } from "next";
// import { readFileSync } from "fs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  // const fileContent = readFileSync("app/blogs/blogData.tsx", "utf-8");
  // const urlMatches = [...fileContent.matchAll(/url:\s*"([^"]+)"/g)];
  // const blogSlugs = urlMatches.map((match) => match[1]);

  // const blogPages = blogSlugs.map((slug) => ({
  //   url: `https://growbyteeglobal.com/blogs/${slug}`,
  //   lastModified: today,
  // }));

  return [
    { url: "https://growbyteeglobal.com/", lastModified: today },
    // ...blogPages,
  ];
}
