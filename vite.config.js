import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'node:url';
// NOTE: `base` must match your GitHub repo name for GitHub Pages.
// If your repo is https://github.com/<user>/knowledgeforge,
// then base should be '/knowledgeforge/'.
// If you use a custom domain or a <user>.github.io repo, set base to '/'.
export default defineConfig({
    base: '/knowledgeforge/',
    resolve: {
        alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
    },
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],
            manifest: {
                name: 'KnowledgeForge',
                short_name: 'KnowledgeForge',
                description: 'Learn through spaced-repetition quizzes that track what you actually know.',
                theme_color: '#1a1a2e',
                background_color: '#0f0f1a',
                display: 'standalone',
                orientation: 'portrait',
                scope: '/knowledgeforge/',
                start_url: '/knowledgeforge/',
                icons: [
                    { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
                    { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
                    { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
                ]
            },
            workbox: {
                navigateFallback: '/knowledgeforge/index.html',
                globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}']
            }
        })
    ]
});
