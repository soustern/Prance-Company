// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import Sitemap from 'vite-plugin-sitemap';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({ hostname: 'https://www.prancecompany.com/' }),

    VitePWA({
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://fonts\\.googleapis\\.com/.*', 'i'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: new RegExp('^https://fonts\\.gstatic\\.com/.*', 'i'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      
      registerType: 'autoUpdate',
      
      manifest: false,
      
      includeAssets: ['logo.webp', 'logoAbout.webp']
    })
  ],
  base: "/",
})