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

export function generateCards(template, cards, container) {
  cards.forEach((cardItem) => {
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
