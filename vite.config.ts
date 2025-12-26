import { defineConfig, Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

function templatesToBodyEnd(): Plugin {
  const templatesDir = path.resolve(__dirname, 'src/templates')

  function loadTemplates() {
    if (!fs.existsSync(templatesDir)) return ''

    return fs
      .readdirSync(templatesDir)
      .filter((file) => file.endsWith('.html'))
      .map((file) => fs.readFileSync(path.join(templatesDir, file), 'utf-8'))
      .join('\n')
  }

  return {
    name: 'vite-templates-to-body-end',

    transformIndexHtml(html) {
      const templates = loadTemplates()

      // добавляем ПЕРЕД закрывающим body
      return html.replace(/<\/body>/i, `${templates}\n</body>`)
    },

    // HMR при изменении templates
    handleHotUpdate({ file, server }) {
      if (file.includes('/src/templates/')) {
        server.ws.send({ type: 'full-reload' })
      }
    },
  }
}

export default defineConfig({
  plugins: [templatesToBodyEnd()],
})
