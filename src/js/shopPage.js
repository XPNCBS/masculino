import { cards } from './cards'
function createBreadCrumbs(card) {
  const breadCrumbs = document.querySelector('.bread-crumbs')
  const keys = ['season', 'category', 'title']

  keys.forEach((key, index) => {
    const link = document.createElement('a')
    link.href = '#'
    link.textContent = card[key]
    breadCrumbs.appendChild(link)
    if (index !== keys.length - 1) {
      const span = document.createElement('span')
      span.textContent = '/'
      span.classList.add('px-3')
      breadCrumbs.appendChild(span)
    }
  })
}
function getMainImage(card, mainImage) {
  mainImage.src = card.src
}
function generateImages(card, imagesList) {
  const images = card.images
  images.forEach((img) => {
    const li = document.createElement('li')
    const image = document.createElement('img')
    image.src = img
    li.appendChild(image)
    imagesList.appendChild(li)
  })
}
export function shopPage() {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  const card = cards[id]
  const mainImage = document.querySelector('.main-image')
  const imagesList = document.querySelector('.images-list')
  createBreadCrumbs(card)
  getMainImage(card, mainImage)
  generateImages(card, imagesList)
}
