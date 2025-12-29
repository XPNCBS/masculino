import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // загружаем env
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [tailwindcss()],
  }
})
