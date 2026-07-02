import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], 
    },
    sitemap: 'http://102.211.210.72:3004/sitemap.xml',
  };
}