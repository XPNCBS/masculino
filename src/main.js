import './style.css'
import { cards } from './js/cards'
import { generateCards } from './js/cardsFunctions'
import { asideContent } from './js/asideContent'
import { generateAside } from './js/asideFunctions'
import { shopPage } from './js/shopPage'
import { openModal, closeModal } from './js/modal'
import { loadProductsToCart } from './js/cartFunctions'
import { profilePage } from './js/profileFunctions'
import { listenOfhistoryChange } from './js/utils/listenOfHistoryChange'
import { showActiveLinks } from './js/asideFunctions'
const content = document.querySelector('.content')
const rootTemplate = document.querySelector('#root')
const shopTemplate = document.querySelector('#shop')
const cardsTemplate = document.querySelector('#card')
const productTemplate = document.querySelector('#product')

const profileTemplate = document.querySelector('#profile')
const signin = document.querySelector('#signin')
const signup = document.querySelector('#signup')
const resetpassword = document.querySelector('#resetpassword')

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
const profileOpen = document.querySelector('.profile-open')
const profileModal = document.querySelector('.modal-profile')
const modalProfileClose = document.querySelector('.modal-profile__close')
const modalProfileBlure = document.querySelector('.modal-profile__blure')
listenOfhistoryChange()
profileOpen.addEventListener('click', () => {
  openModal(profileModal)
})
modalProfileClose.addEventListener('click', () => {
  closeModal(profileModal)
})
modalProfileBlure.addEventListener('click', () => {
  closeModal(profileModal)
})
cartCloseBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    closeModal(cartWrap)
  })
})

cartBlure.addEventListener('click', () => {
  closeModal(cartWrap)
})
openCartBtn.addEventListener('click', () => {
  openModal(cartWrap)
})

loadProductsToCart(productTemplate, cartProducts)
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
const hash = window.location.hash
if (window.location.pathname === '/masculino/' && !hash) {
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
  function cardsReload() {
    cardsContainer.innerHTML = ''
    generateCards(cardsTemplate, cards, cardsContainer)
  }
  window.addEventListener('URLChange', () => {
   cardsReload()
   showActiveLinks()
  })
  generateAside(asideContent, aside)
  generateCards(cardsTemplate, cards, cardsContainer)

} else if (hash === '#/shop') {
  const shopContent = shopTemplate.content.cloneNode(true)
  content.appendChild(shopContent)
  shopPage()
  const cardsTemplate = document.querySelector('#card')
  const cardsContainer = document.querySelector('.cards')
  generateCards(cardsTemplate, cards, cardsContainer, true)
} else if (hash === '#/profile') {
  document.title = 'Masculino — Профиль'
  const profileContent = profileTemplate.content.cloneNode(true)
  content.appendChild(profileContent)
  profilePage()
} else if (hash === '#/signin') {
  document.title = 'Masculino — Войти'
  const signinContent = signin.content.cloneNode(true)
  content.appendChild(signinContent)
} else if (hash === '#/signup') {
  document.title = 'Masculino — Регистрация'
  const signupContent = signup.content.cloneNode(true)
  content.appendChild(signupContent)
} else if (hash === '#/resetpassword') {
  document.title = 'Masculino — Сброс пароля'
  const resetpasswordContent = resetpassword.content.cloneNode(true)
  content.appendChild(resetpasswordContent)
} else if (hash === '#/cart') {
  document.title = 'Masculino — Корзина'
  const cartContent = document.querySelector('#cart').content.cloneNode(true)
  content.appendChild(cartContent)
  const divShoppingCartContent = document.querySelector(
    '.div-shopping-cart-content'
  )
  loadProductsToCart(productTemplate, divShoppingCartContent)
} else {
  const errorTemplate = document.querySelector('#error')
  const errorContent = errorTemplate.content.cloneNode(true)
  content.appendChild(errorContent)
  document.title = 'Masculino — 404 Not Found'
}
