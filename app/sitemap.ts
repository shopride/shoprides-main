import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.shoprides.ca", lastModified: new Date() },
    { url: "https://www.shoprides.ca/privacy-policy", lastModified: new Date() },
    { url: "https://www.shoprides.ca/terms-of-use", lastModified: new Date() },
  ];
}
