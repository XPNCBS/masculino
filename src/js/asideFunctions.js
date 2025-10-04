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
    generateAsideButtons(asideItem.elements, ul)
    aside.appendChild(ul)
  })
}
function generateAsideButtons(elements, ul) {
  elements.forEach((element) => {
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.classList.add('filtr__button')
    button.textContent = element
    li.appendChild(button)
    ul.appendChild(li)
  })
}
