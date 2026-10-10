import type { MetadataRoute } from 'next'

// Замените домен на боевой при деплое на свой хостинг
const SITE = 'https://azino777-official.example'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}/`,
      lastModified: new Date('2026-10-10'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
