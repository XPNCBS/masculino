// getTemplatesContent.ts
import { viewNames, type ViewName } from './viewList'

export type TemplatesContent = Record<ViewName, DocumentFragment>

function getTemplatesContent(): TemplatesContent {
  const templatesContent = {} as TemplatesContent

  viewNames.forEach((id) => {
    const template = document.querySelector<HTMLTemplateElement>(`#${id}`)
    if (template) {
      templatesContent[id] = template.content.cloneNode(
        true
      ) as DocumentFragment
    }
  })

  return templatesContent
}

// Использование:
export const templates = getTemplatesContent()
