import { MetadataRoute } from 'next';
import { COMPANIES_DATA } from '@/lib/constants';
import { NAV_LINKS } from '@/lib/nav-links';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://koel-group-app.web.app';

  // Get static routes from nav links, filtering out parent links
  const staticRoutes = NAV_LINKS
    .flatMap(link => link.sublinks ? link.sublinks.map(sub => sub.href) : link.href)
    .filter(href => !href.includes('/companies/')) // Exclude dynamic company routes for now
    .map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '/' ? 1 : 0.8,
    }));
  
  // Get unique static routes to avoid duplicates
  const uniqueStaticRoutes = Array.from(new Map(staticRoutes.map(item => [item.url, item])).values());


  // Get dynamic company routes
  const companyRoutes = COMPANIES_DATA.map((company) => ({
    url: `${siteUrl}/companies/${company.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    ...uniqueStaticRoutes,
    ...companyRoutes
  ];
}
