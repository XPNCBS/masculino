export function generateAside(asideContent, aside) {
  asideContent.forEach((asideItem) => {
    const ul = document.createElement('ul')
    ul.classList.add('filter-column')
    const li = document.createElement('li')
    const title = document.createElement('h2')
    title.classList.add('font-medium')
    title.textContent = asideItem.title
    li.appendChild(title)
    ul.appendChild(li)
    generateAsideLinks(asideItem.elements, ul, asideItem.href)
    aside.appendChild(ul)
  })
}
function generateAsideLinks(elements, ul, href) {
  const params = new URLSearchParams(window.location.search)
  const category = params.get('categories')
  elements.forEach((element) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.href = `/?${href}=${element}`
    link.classList.add('filtr__button')
    if (category) {
      if (category === element) {
        link.classList.add('active')
      }
    }
    link.textContent = element
    li.appendChild(link)
    ul.appendChild(li)
  })
}
