import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true, // минификация HTML/CSS/JS
    }),
  ],
  base: '/masculino', // Базовый путь для корректной работы при деплое на GitHub Pages
  server: {
    host: true, // или '0.0.0.0' — доступ из локальной сети
    port: 5173, // можно поменять, если занят
  },
})
