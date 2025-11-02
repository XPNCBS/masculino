function like(e) {
  const button = e.currentTarget
  button.classList.toggle('liked')
}
function createCard(template, tile, price, href, src, hoverSrc) {
  const cardTemplate = template.content.cloneNode(true)
  const cardTitle = cardTemplate.querySelector('.card__title')
  const cardPrice = cardTemplate.querySelector('.price')
  const cardLink = cardTemplate.querySelector('.card__link')
  const cardVisibleImg = cardTemplate.querySelector('.card__visible-img')
  const cardHoverImg = cardTemplate.querySelector('.card__hover-img')
  const cardAction = cardTemplate.querySelector('.card__action')
  cardAction.addEventListener('click', like)
  cardTitle.textContent = tile
  cardPrice.textContent = price + ' ' + '$'
  cardLink.href = href
  cardLink.textContent = tile
  cardVisibleImg.src = src
  cardHoverImg.src = hoverSrc
  return cardTemplate
}

export function generateCards(
  template,
  cards,
  container,
  randomMode = false,
  search = false,
  value = ''
) {
  const params = new URLSearchParams(window.location.search)
  const category = params.get('categories')
  const prices = params.get('prices')

  let cardsToRender = [...cards]

  // если включён режим случайных карточек
  if (randomMode) {
    cardsToRender = cardsToRender
      .sort(() => Math.random() - 0.5) // перемешиваем
      .slice(0, 4) // берём первые 4
  }
  // while (container.firstChild){
  //   container.removeChild(container.firstChild)
  // }
  if (search) {
    if (typeof value === 'string') {
      const renderedCards = container.querySelectorAll('.card')
      const trimmed = value.trim()
      if (trimmed === '') {
        container.innerHTML = ''
        return
      }

      cardsToRender.forEach((cardItem) => {
        if (cardItem.title.toLowerCase().includes(trimmed.toLowerCase())) {
          const card = createCard(
            template,
            cardItem.title,
            cardItem.price,
            cardItem.href,
            cardItem.src,
            cardItem.hoverSrc
          )

          container.appendChild(card)
        }
      })
      renderedCards.forEach((cardItem) => {
        if (!cardItem.title.toLowerCase().includes(trimmed.toLowerCase())) {
          container.removeChild(cardItem)
        }
      })
    }
  } else {
    cardsToRender.forEach((cardItem) => {
      // показываем все, если категории нет или указано "All"
      if (!randomMode && category && category !== 'Все') {
        if (cardItem.category !== category && cardItem.season !== category)
          return
      }

      if (!randomMode && prices && prices !== 'All') {
        const price = parseFloat(cardItem.price.replace(',', '.'))
        const pricesArray = prices
          .replace(/\$/g, '')
          .split('-')
          .map((p) => parseFloat(p.replace(',', '.').trim()))

        const minPrice = pricesArray[0]
        const maxPrice = pricesArray[1]

        // если диапазон есть
        if (maxPrice) {
          if (price < minPrice || price > maxPrice) return
        } else {
          // если только одно значение (например, "10$")
          if (price !== minPrice) return
        }
      }
      const card = createCard(
        template,
        cardItem.title,
        cardItem.price,
        cardItem.href,
        cardItem.src,
        cardItem.hoverSrc
      )

      container.appendChild(card)
    })
  }
}
