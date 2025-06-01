import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'


interface SitemapConfig {
  routes: string[];
}


// https://vite.dev/config/
export default defineConfig({

  plugins: [
    react(),
    Sitemap({
      hostname: 'https://charmidez.github.io',
      ...(async () => {
        // Tu peux charger tes routes dynamiquement ici
        const staticRoutes = ['/', '/about', '/projectmine', '/contact'];

        // Exemple dynamique : depuis une liste d'articles
        const blogPosts = [
          'pourquoi-utiliser-nextjs',
          'comprendre-git-et-plateformes',
          'kotlin-vs-spring',
        ];

        const blogRoutes = blogPosts.map((slug) => `/actualite/${slug}`);
        return { routes: [...staticRoutes, ...blogRoutes] };
      })().then((config) => config as SitemapConfig),
    }),
  ],
  base: "/"
})

