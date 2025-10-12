import './style.css'
import { cards } from './js/cards'
import { generateCards } from './js/cardsFunctions'
import { asideContent } from './js/asideContent'
import { generateAside } from './js/asideFunctions'
import { shopPage } from './js/shopPage'
const app = document.querySelector('#app')
const rootTemplate = document.querySelector('#root')
const shopTemplate = document.querySelector('#shop')
if (window.location.pathname === '/' || window.location.pathname === '/#') {
  document.title = 'Masculino — Каталог продукции для заказа'
  const rootContent = rootTemplate.content.cloneNode(true)
  app.appendChild(rootContent)
  const cardsTemplate = document.querySelector('#card')
  const cardsContainer = document.querySelector('.cards')
  const aside = document.querySelector('.aside')
  generateAside(asideContent, aside)
  generateCards(cardsTemplate, cards, cardsContainer)
} else if (window.location.pathname === '/shop') {
  const shopContent = shopTemplate.content.cloneNode(true)
  app.appendChild(shopContent)
  shopPage()
}
