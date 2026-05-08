import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

const sections = ['', '#projects', '#now', '#signals', '#about', '#contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-05-08T00:00:00+09:30');

  return sections.map((section) => ({
    url: `${site.url}/${section}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: section ? 0.7 : 1,
  }));
}
