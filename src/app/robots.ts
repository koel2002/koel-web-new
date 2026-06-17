import { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://koel-group-app.web.app';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/investment-pitch', '/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
