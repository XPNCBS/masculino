import chokidar from 'chokidar'
import fs from 'node:fs'
import path from 'node:path'

const templatesDir = path.resolve('src/templates')
const outputFile = path.resolve('src/configs/viewList.ts')

function getViewNames() {
  if (!fs.existsSync(templatesDir)) return []

  return fs
    .readdirSync(templatesDir)
    .filter((file) => file.endsWith('.html'))
    .map((file) => path.basename(file, '.html'))
    .sort()
}

function generateFile() {
  const viewNames = getViewNames()

  const content = `// ⚠️ AUTO-GENERATED FILE. DO NOT EDIT.
export const viewNames = ${JSON.stringify(viewNames)} as const

export type ViewName = typeof viewNames[number]
`

  fs.mkdirSync(path.dirname(outputFile), { recursive: true })
  fs.writeFileSync(outputFile, content, 'utf-8')

  console.log('[viewList] updated:', viewNames.join(', '))
}

// первичная генерация
generateFile()

// watcher (для dev)
chokidar
  .watch(templatesDir, {
    ignoreInitial: true,
  })
  .on('add', generateFile)
  .on('unlink', generateFile)
  .on('change', generateFile)
