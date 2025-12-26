// scripts/generateViewList.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIEWS_DIR = path.resolve(__dirname, '../src/templates');
const OUTPUT_DIR = path.resolve(__dirname, '../src/generated');

// Функция для экранирования строк в JavaScript строках
function escapeForJsString(str) {
  if (str == null) return '';
  return str
    .replace(/\\/g, '\\\\') // обратный слеш
    .replace(/'/g, "\\'") // одинарные кавычки
    .replace(/"/g, '\\"') // двойные кавычки
    .replace(/\n/g, '\\n') // новая строка
    .replace(/\r/g, '\\r') // возврат каретки
    .replace(/\t/g, '\\t') // табуляция
    .replace(/\f/g, '\\f') // перевод формата
    .replace(/\b/g, '\\b') // возврат на шаг
    .replace(/`/g, '\\`'); // обратные кавычки
}

function toCamelCase(str) {
  // Убираем все не-буквенно-цифровые символы и делаем camelCase
  let result = str.replace(/[-_\s](.)/g, (_, char) => char.toUpperCase());

  // Убираем оставшиеся спецсимволы
  result = result.replace(/[^a-zA-Z0-9]/g, '');

  // Если начинается с цифры, добавляем префикс
  if (/^\d/.test(result)) {
    result = 'el' + result;
  }

  return result;
}

function getHTMLElementType(tagName) {
  const typeMap = {
    div: 'HTMLDivElement',
    button: 'HTMLButtonElement',
    span: 'HTMLSpanElement',
    input: 'HTMLInputElement',
    form: 'HTMLFormElement',
    ul: 'HTMLUListElement',
    li: 'HTMLLIElement',
    a: 'HTMLAnchorElement',
    img: 'HTMLImageElement',
    p: 'HTMLParagraphElement',
    h1: 'HTMLHeadingElement',
    h2: 'HTMLHeadingElement',
    h3: 'HTMLHeadingElement',
    h4: 'HTMLHeadingElement',
    h5: 'HTMLHeadingElement',
    h6: 'HTMLHeadingElement',
    select: 'HTMLSelectElement',
    option: 'HTMLOptionElement',
    textarea: 'HTMLTextAreaElement',
    label: 'HTMLLabelElement',
    table: 'HTMLTableElement',
    tr: 'HTMLTableRowElement',
    td: 'HTMLTableCellElement',
    th: 'HTMLTableCellElement',
    footer: 'HTMLElement',
  };

  return typeMap[tagName.toLowerCase()] || 'HTMLElement';
}

function extractTemplateContent(html) {
  const $ = cheerio.load(html);

  // Если есть тег <template>, извлекаем его содержимое
  const template = $('template');
  if (template.length > 0) {
    // Возвращаем HTML содержимое шаблона
    return $.html(template.contents());
  }

  // Если нет тега template, возвращаем как есть
  return html;
}

function generateViewFactory(viewName, htmlContent) {
  const $ = cheerio.load(htmlContent);
  const className = viewName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  // Извлекаем содержимое шаблона
  const templateContent = extractTemplateContent(htmlContent);
  const $content = cheerio.load(templateContent);

  // Получаем корневой элемент из содержимого шаблона
  const rootElement = $content('body').children().first()[0];
  if (!rootElement) {
    throw new Error(`Шаблон ${viewName} не содержит элементов`);
  }

  // Собираем все уникальные элементы
  const elementMap = new Map();

  function collectElements(element, $context) {
    const $element = $context(element);
    const tagName = element.tagName;
    const className = $element.attr('class') || '';
    const id = $element.attr('id') || '';

    // Создаем имя переменной
    let varName = '';
    if (id) {
      varName = toCamelCase(id);
    } else if (className) {
      varName = toCamelCase(className.split(' ')[0]);
    } else {
      varName = tagName.toLowerCase();
    }

    // Уникализируем имя если нужно
    let uniqueName = varName;
    let counter = 1;
    while (elementMap.has(uniqueName)) {
      uniqueName = `${varName}${counter}`;
      counter++;
    }

    // Сохраняем элемент
    elementMap.set(uniqueName, {
      tagName,
      className,
      id,
      originalName: varName,
    });

    // Рекурсивно собираем детей
    $element.children().each((_, child) => {
      collectElements(child, $context);
    });
  }

  collectElements(rootElement, $content);

  // Определяем тип корневого элемента
  const rootElementType = getHTMLElementType(rootElement.tagName);

  // Генерируем объявления элементов (добавляем root)
  const elementDeclarations =
    `
  public root!: ${rootElementType};
` +
    Array.from(elementMap.entries())
      .map(([varName, { tagName }]) => {
        const elementType = getHTMLElementType(tagName);
        return `  public ${varName}!: ${elementType};`;
      })
      .join('\n');

  // Генерируем инициализацию элементов
  const elementInitializations = Array.from(elementMap.entries())
    .map(([varName, { tagName }]) => {
      const elementType = getHTMLElementType(tagName);
      return `    this.${varName} = document.createElement('${tagName}') as ${elementType};`;
    })
    .join('\n');

  // Генерируем иерархию
  const hierarchyCode = generateHierarchyCode(rootElement, $content, elementMap);

  // Генерируем регистрацию элементов
  const registerElementsCode = Array.from(elementMap.keys())
    .map((varName) => `    this._elements.set('${varName}', this.${varName});`)
    .join('\n');

  // Генерируем настройку элементов (классы, текст и т.д.)
  const elementSetupCode = generateElementSetupCode(rootElement, $content, elementMap);

  return `// Автогенерированный класс для шаблона: ${viewName}
export class ${className} {
  private _elements = new Map<string, HTMLElement>();

${elementDeclarations}

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
${elementInitializations}

    // Настраиваем элементы (классы, текст и т.д.)
${elementSetupCode}

    // Строим иерархию
${hierarchyCode}

    // Регистрируем элементы
    this._elements.set('root', this.root);
${registerElementsCode}

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
${Array.from(elementMap.entries())
  .map(([varName]) => `      ${varName}: this.${varName}`)
  .join(',\n')}
    };
  }

  mount(parent: Element): ${className} {
    parent.appendChild(this.root);
    return this;
  }

  getElement(name: string): HTMLElement | undefined {
    return this._elements.get(name);
  }

  update(data: Record<string, any>): void {
    Object.entries(data).forEach(([key, value]) => {
      const element = this._elements.get(key);
      if (element) {
        element.textContent = value.toString();
      }
    });
  }
}`;
}

function generateHierarchyCode(rootElement, $, elementMap) {
  let code = '';

  // Находим имя переменной для корневого элемента
  const $root = $(rootElement);
  const rootClassName = $root.attr('class') || '';
  const rootId = $root.attr('id') || '';

  let rootVarName = '';
  if (rootId) {
    rootVarName = toCamelCase(rootId);
  } else if (rootClassName) {
    rootVarName = toCamelCase(rootClassName.split(' ')[0]);
  } else {
    rootVarName = rootElement.tagName.toLowerCase();
  }

  // Ищем реальное уникальное имя в мапе
  const actualRootVarName =
    Array.from(elementMap.entries()).find(([_, info]) => info.originalName === rootVarName)?.[0] ||
    rootVarName;

  code += `    this.root = this.${actualRootVarName};\n`;

  function buildHierarchy(element, parentVarName, $context) {
    const $element = $context(element);
    const children = $element.children().toArray();

    if (children.length === 0) return;

    children.forEach((child) => {
      const $child = $context(child);
      const childClassName = $child.attr('class') || '';
      const childId = $child.attr('id') || '';

      let childVarName = '';
      if (childId) {
        childVarName = toCamelCase(childId);
      } else if (childClassName) {
        childVarName = toCamelCase(childClassName.split(' ')[0]);
      } else {
        childVarName = child.tagName.toLowerCase();
      }

      // Ищем реальное уникальное имя в мапе
      const actualChildVarName =
        Array.from(elementMap.entries()).find(
          ([_, info]) => info.originalName === childVarName
        )?.[0] || childVarName;

      code += `    this.${parentVarName}.appendChild(this.${actualChildVarName});\n`;

      // Рекурсивно обрабатываем детей
      buildHierarchy(child, actualChildVarName, $context);
    });
  }

  buildHierarchy(rootElement, actualRootVarName, $);
  return code;
}

function generateElementSetupCode(rootElement, $, elementMap) {
  let code = '';
  const processedElements = new Set();

  function processElement(element, $context) {
    const $element = $context(element);
    const tagName = element.tagName;
    const className = $element.attr('class') || '';
    const id = $element.attr('id') || '';
    const text = $element.text().trim();

    // Определяем имя переменной
    let varName = '';
    if (id) {
      varName = toCamelCase(id);
    } else if (className) {
      varName = toCamelCase(className.split(' ')[0]);
    } else {
      varName = tagName.toLowerCase();
    }

    // Ищем реальное уникальное имя
    let actualVarName = varName;
    for (const [name, info] of elementMap.entries()) {
      if (info.originalName === varName && !processedElements.has(name)) {
        actualVarName = name;
        break;
      }
    }

    processedElements.add(actualVarName);

    // Добавляем классы (с экранированием)
    if (className) {
      const escapedClassName = escapeForJsString(className);
      code += `    this.${actualVarName}.className = '${escapedClassName}';\n`;
    }

    // Добавляем id (с экранированием)
    if (id) {
      const escapedId = escapeForJsString(id);
      code += `    this.${actualVarName}.id = '${escapedId}';\n`;
    }

    // Добавляем текст (только если нет детей, с экранированием)
    if (text && $element.children().length === 0) {
      const escapedText = escapeForJsString(text);
      code += `    this.${actualVarName}.textContent = '${escapedText}';\n`;
    }

    // Рекурсивно обрабатываем детей
    $element.children().each((_, child) => {
      processElement(child, $context);
    });
  }

  processElement(rootElement, $);
  return code;
}

async function generateAll() {
  try {
    if (!fs.existsSync(VIEWS_DIR)) {
      console.log(`❌ Директория ${VIEWS_DIR} не найдена`);
      return;
    }

    const files = fs.readdirSync(VIEWS_DIR);
    const htmlFiles = files.filter((f) => f.endsWith('.html'));

    if (htmlFiles.length === 0) {
      console.log(`ℹ️  В директории ${VIEWS_DIR} не найдено .html файлов`);
      return;
    }

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Генерируем файлы для каждого шаблона
    for (const file of htmlFiles) {
      const viewName = path.parse(file).name;
      const htmlPath = path.join(VIEWS_DIR, file);
      const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

      try {
        const generatedCode = generateViewFactory(viewName, htmlContent);
        const outputPath = path.join(OUTPUT_DIR, `${viewName}.ts`);
        fs.writeFileSync(outputPath, generatedCode);
        console.log(`✅ Сгенерирован: ${viewName}.ts`);
      } catch (error) {
        console.error(`❌ Ошибка генерации ${viewName}:`, error.message);
      }
    }

    // Генерируем индексный файл
    const indexContent =
      htmlFiles
        .map((file) => {
          const viewName = path.parse(file).name;
          const className = viewName
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
          return `export { ${className} } from './${viewName}';`;
        })
        .join('\n') + '\n';

    fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent);
    console.log(`✅ Сгенерировано ${htmlFiles.length} компонентов`);
  } catch (error) {
    console.error('❌ Критическая ошибка:', error.message);
  }
}

// Запускаем генерацию
generateAll();
