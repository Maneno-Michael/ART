import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/programs`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/programs/art-resilience-centers`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/programs/my-food-my-power`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/programs/her-land-her-power`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/programs/art4equity`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/programs/voices-from-the-roots`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/get-involved`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/donate`, lastModified: new Date(), priority: 0.9, changeFrequency: 'weekly' },
  ];
}