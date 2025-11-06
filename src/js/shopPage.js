import { cards } from './cards'
import { openModal, closeModal } from './modal'
function createBreadCrumbs(card) {
  const breadCrumbs = document.querySelector('.bread-crumbs')
  const keys = ['season', 'category', 'title']

  keys.forEach((key, index) => {
    if (card[key] !== undefined && card[key].replace(/\s+/g, '') !== '') {
      const link = document.createElement('a')
      if (key !== 'title') {
        link.href = `/?categories=${card[key]}`
      } else {
        link.classList.add('disabled')
      }
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
function nextImg(imagePosition, imagesArray, imageModalImg) {
  imagePosition.value =
    imagePosition.value < imagesArray.length - 1 ? imagePosition.value + 1 : 0

  imageModalImg.src = imagesArray[imagePosition.value].src
}
function prevImg(imagePosition, imagesArray, imageModalImg) {
  imagePosition.value =
    imagePosition.value > 0 ? imagePosition.value - 1 : imagesArray.length - 1

  imageModalImg.src = imagesArray[imagePosition.value].src
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
  colors.textContent = card.colors.map((c) => c.color).join(', ')
  sizes.textContent = card.sizes.join(', ')
}
function colorsActionGenerate(card) {
  const colorWrap = document.querySelector('.color-wrap')
  const colors = card.colors
  colors.forEach((color) => {
    const div = document.createElement('div')
    div.classList.add('color-circle')
    div.style.backgroundColor = color.background
    colorWrap.appendChild(div)
  })
}
function getCurrentSizeOption(text) {
  const currentSizeOption = document.querySelector('.current-size-option')
  currentSizeOption.textContent = text
}
function sizesActionGenerate(card) {
  const sizesWrap = document.querySelector('.product-sizes')
  const ul = document.createElement('ul')
  ul.classList.add('sizes-ul')
  ul.classList.add('hidden')
  sizesWrap.appendChild(ul)

  const sizes = card.sizes

  // первый элемент
  const firstLi = document.createElement('li')
  firstLi.classList.add('sizes-ul__li', 'product-options__pading', 'active')
  firstLi.textContent = 'Выбрать опцию'
  ul.appendChild(firstLi)

  // остальные размеры
  sizes.forEach((size) => {
    const li = document.createElement('li')
    li.classList.add('product-options__pading', 'sizes-ul__li')
    li.textContent = size
    ul.appendChild(li)
  })

  // обработка кликов
  const allLi = ul.querySelectorAll('.sizes-ul__li')
  allLi.forEach((li) => {
    li.addEventListener('click', () => {
      allLi.forEach((el) => el.classList.remove('active'))
      li.classList.add('active')
      ul.classList.add('hidden')
      getCurrentSizeOption(li.textContent)
    })
  })
}
function openSizesBlock() {
  const currentSizeOption = document.querySelector('.current-size-button')
  const sizesUl = document.querySelector('.sizes-ul')
  currentSizeOption.addEventListener('click', () =>
    sizesUl.classList.toggle('hidden')
  )
}
function actionBlockGenerate(card) {
  colorsActionGenerate(card)
  sizesActionGenerate(card)
  getCurrentSizeOption('Выбрать опцию')
  openSizesBlock()
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
  const nextArrow = document.querySelector('.next-arrow')
  const prevArrow = document.querySelector('.prev-arrow')
  const modal = document.querySelector('.image-modal')
  const modalBlure = document.querySelector('.image-modal__blure')
  const modalCloseBtn = document.querySelector('.image-modal__close')
  const imageModalImg = document.querySelector('.image-modal__img')
  const productTitle = document.querySelector('.product-title')
  const productPrice = document.querySelector('.product-price')
  productTitle.textContent = card.title
  productPrice.textContent = `${card.price} $`

  let imagePosition = { value: 0 }

  mainImage.addEventListener('click', () => {
    imageModalImg.src = mainImage.src
    openModal(modal)
  })
  nextArrow.addEventListener('click', () =>
    nextImg(imagePosition, imagesArray, imageModalImg)
  )
  prevArrow.addEventListener('click', () =>
    prevImg(imagePosition, imagesArray, imageModalImg)
  )
  modalBlure.addEventListener('click', () => closeModal(modal))
  modalCloseBtn.addEventListener('click', () => closeModal(modal))
  createBreadCrumbs(card)
  hrefGenerate(id, prevPage, nextPage)
  getMainImage(card, mainImage)
  generateImages(card, imagesList, mainImage, imagesArray, imagePosition)
  activeImage(imagesArray, mainImage)
  tableValues(card)
  actionBlockGenerate(card)
}
