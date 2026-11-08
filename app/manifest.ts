import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ali Haider - Full-Stack & AI Developer',
    short_name: 'Ali Haider',
    description: 'Portfolio of Ali Haider, specializing in Next.js, Node.js, and AI/LLM integration.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/fav.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}