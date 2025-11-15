import './style.css'
import { cards } from './js/cards'
import { generateCards } from './js/cardsFunctions'
import { asideContent } from './js/asideContent'
import { generateAside } from './js/asideFunctions'
import { shopPage } from './js/shopPage'
import { openModal, closeModal } from './js/modal'
import { loadProductsToCart } from './js/cartFunctions'
const content = document.querySelector('.content')
const rootTemplate = document.querySelector('#root')
const shopTemplate = document.querySelector('#shop')
const cardsTemplate = document.querySelector('#card')
const productTemplate = document.querySelector('#product')

const burgerButton = document.querySelector('.burger-button')
const headerLists = document.querySelector('.header__lists')
const modalSearch = document.querySelector('.modal-search')
const searchBtn = document.querySelector('.search')
const modalSearchBlure = document.querySelector('.modal-search__blure')
const modalSearchCloseBtn = document.querySelector('.modal-search__close')
const modalSearchInput = document.querySelector('.modal-search__input')
const modalSearchSection = document.querySelector('.modal-search__section')
const modalSearchTitle = document.querySelector('.modal-search__title')
const cartProducts = document.querySelector('.cart__products')
const openCartBtn = document.querySelector('.open-cart')
const cartWrap = document.querySelector('.cart-wrap')
const cartBlure = document.querySelector('.cart-blure')
const cartCloseBtns = document.querySelectorAll('.cart__close-button')
cartCloseBtns.forEach((btn)=>
{btn.addEventListener('click',()=>{
  closeModal(cartWrap)
})}
)

cartBlure.addEventListener('click',()=>{
  closeModal(cartWrap)
})
openCartBtn.addEventListener('click',()=>{
  openModal(cartWrap)
})


loadProductsToCart(productTemplate,cartProducts)
modalSearchInput.addEventListener('input', (e) => {
  generateCards(
    cardsTemplate,
    cards,
    modalSearchSection,
    false,
    true,
    e.target.value
  )
  const cardsArray = modalSearchSection.querySelectorAll('.card')

  if (e.target.value.trim() === '') {
    // если строка пустая
    modalSearchTitle.textContent = ''
  } else if (e.target.value.trim() !== '' && cardsArray.length < 1) {
    // если строка не пустая и карточек нет
    modalSearchTitle.textContent = 'Нет совпадений'
  } else {
    // если строка не пустая и карточки есть
    modalSearchTitle.textContent = 'Showing all results:'
  }
})

function clearSearch() {
  modalSearchInput.value = ''
  modalSearchTitle.textContent = ''
  modalSearchSection.innerHTML = ''
}
searchBtn.addEventListener('click', () => {
  clearSearch()
  openModal(modalSearch)
})
modalSearchBlure.addEventListener('click', () => closeModal(modalSearch))
modalSearchCloseBtn.addEventListener('click', () => closeModal(modalSearch))
burgerButton.addEventListener('click', () => {
  const isActive = headerLists.classList.contains('active')

  if (isActive) {
    // 🔒 Закрываем меню
    headerLists.classList.remove('active')
    headerLists.style.maxHeight = '0px'
  } else {
    // 🔓 Открываем меню
    headerLists.classList.add('active')
    headerLists.style.maxHeight = headerLists.scrollHeight + 'px'
  }
})

if (window.location.pathname === '/' || window.location.pathname === '/#') {
  const header = document.querySelector('.header')
  const headerLinks = header.querySelectorAll('.filtr__button')
  const params = new URLSearchParams(window.location.search)
  const category = params.get('categories')
  if (category) {
    headerLinks.forEach((link) => {
      if (link.textContent === category) {
        link.classList.add('active')
      }
    })
  }
  document.title = 'Masculino — Каталог продукции для заказа'
  const rootContent = rootTemplate.content.cloneNode(true)
  content.appendChild(rootContent)
  const cardsTemplate = document.querySelector('#card')
  const cardsContainer = document.querySelector('.cards')
  const aside = document.querySelector('.aside')
  generateAside(asideContent, aside)
  generateCards(cardsTemplate, cards, cardsContainer)
} else if (window.location.pathname === '/shop') {
  const shopContent = shopTemplate.content.cloneNode(true)
  content.appendChild(shopContent)
  shopPage()
  const cardsTemplate = document.querySelector('#card')
  const cardsContainer = document.querySelector('.cards')
  generateCards(cardsTemplate, cards, cardsContainer, true)
}
