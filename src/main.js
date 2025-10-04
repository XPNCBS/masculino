import './style.css'
import { cards } from './js/cards'
import { generateCards } from './js/cardsFunctions'
import { asideContent } from './js/asideContent'
import { generateAside } from './js/asideFunctions'
const cardsTemplate = document.querySelector('#card')
const cardsContainer = document.querySelector('.cards')
const aside = document.querySelector('.aside')
generateAside(asideContent, aside)
generateCards(cardsTemplate, cards, cardsContainer)
