import type { MetadataRoute } from 'next'

// Замените домен на боевой при деплое на свой хостинг
const SITE = 'https://azino777-official.example'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  }
}
