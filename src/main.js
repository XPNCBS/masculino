import './style.css'
import { cards } from './js/cards'
import { generateCards } from './js/cardsFunctions'
import { asideContent } from './js/asideContent'
import { generateAside } from './js/asideFunctions'
import { shopPage } from './js/shopPage'
const content = document.querySelector('.content')
const rootTemplate = document.querySelector('#root')
const shopTemplate = document.querySelector('#shop')

const burgerButton = document.querySelector('.burger-button')
const headerLists = document.querySelector('.header__lists')

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
