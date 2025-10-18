import { cards } from './cards'
function createBreadCrumbs(card) {
  const breadCrumbs = document.querySelector('.bread-crumbs')
  const keys = ['season', 'category', 'title']

  keys.forEach((key, index) => {
    if (card[key] !== undefined && card[key].replace(/\s+/g, '') !== '') {
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
    }
  })
}
function getMainImage(card, mainImage) {
  mainImage.src = card.images[0]
}
function changeImage(mainImage, image, imagesArray, imagePosition, index) {
  mainImage.src = image.src
  imagePosition.value = index
  activeImage(imagesArray, mainImage)
}
function activeImage(imagesArray, mainImage) {
  imagesArray.forEach((img) => {
    if (img.src === mainImage.src && !img.classList.contains('active')) {
      img.classList.add('active')
    } else {
      img.classList.remove('active')
    }
  })
}
function generateImages(
  card,
  imagesList,
  mainImage,
  imagesArray,
  imagePosition
) {
  const images = card.images
  images.forEach((img, index) => {
    const li = document.createElement('li')
    const image = document.createElement('img')
    image.src = img
    image.classList.add('selectable-img')
    image.addEventListener('click', () =>
      changeImage(mainImage, image, imagesArray, imagePosition, index)
    )
    li.appendChild(image)
    imagesArray.push(image)
    imagesList.appendChild(li)
  })
}
function hrefGenerate(id, prevPage, nextPage) {
  const idNumber = Number(id)
  nextPage.href =
    cards.length - 1 > idNumber ? `shop?id=${idNumber + 1}` : `shop?id=0`
  prevPage.href =
    idNumber === 0 ? `shop?id=${cards.length - 1}` : `shop?id=${idNumber - 1}`
}
function modalActions(
  target,
  imagePosition,
  imagesArray,
  modal,
  imageModalImg
) {
  if (
    target.classList.contains('modal-content') ||
    target.classList.contains('close')
  ) {
    modal.classList.remove('open')
  } else if (target.classList.contains('next-arrow')) {
    imagePosition.value =
      imagePosition.value < imagesArray.length - 1 ? imagePosition.value + 1 : 0

    imageModalImg.src = imagesArray[imagePosition.value].src
  } else if (target.classList.contains('prev-arrow')) {
    imagePosition.value =
      imagePosition.value > 0 ? imagePosition.value - 1 : imagesArray.length - 1

    imageModalImg.src = imagesArray[imagePosition.value].src
  }
}
function openModal(src, modal, imageModalImg, imagePosition) {
  imageModalImg.src = src
  console.log(imagePosition)
  modal.classList.add('open')
}
function tableValues(card) {
  const sizes = document.querySelector('.sizes')
  const colors = document.querySelector('.colors')
  const material = document.querySelector('.material')
  const sku = document.querySelector('.SKU')
  const categories = document.querySelector('.categories')
  categories.textContent = `${card.season}, ${card.category}`
  sku.textContent = card.sku
  material.textContent = card.material
  colors.textContent = card.colors.join(', ')
  sizes.textContent = card.sizes.join(', ')
}

export function shopPage() {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  const card = cards[id]
  document.title = `${card.title} — Masculino`
  const mainImage = document.querySelector('.main-image')
  const imagesList = document.querySelector('.images-list')
  const imagesArray = []
  const prevPage = document.querySelector('.prev-page')
  const nextPage = document.querySelector('.next-page')
  const modal = document.querySelector('.modal')
  const imageModalImg = document.querySelector('.image-modal__img')
  let imagePosition = { value: 0 }
  mainImage.addEventListener('click', () =>
    openModal(mainImage.src, modal, imageModalImg, imagePosition)
  )
  modal.addEventListener('click', (e) =>
    modalActions(e.target, imagePosition, imagesArray, modal, imageModalImg)
  )
  createBreadCrumbs(card)
  hrefGenerate(id, prevPage, nextPage)
  getMainImage(card, mainImage)
  generateImages(card, imagesList, mainImage, imagesArray, imagePosition)
  activeImage(imagesArray, mainImage)
  tableValues(card)
}
