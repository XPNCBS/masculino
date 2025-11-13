function createProduct(template, src, title, quantity, price, color, size) {
  const productTemplate = template.content.cloneNode(true)
  const productImg = productTemplate.querySelector('.product__img')
  const productTitle = productTemplate.querySelector('.product__title')
  const producColor = productTemplate.querySelector('.product__color')
  const productSize = productTemplate.querySelector('.product__size')
  const productQuantity = productTemplate.querySelector('.product__Quantity')
  productImg.src = src
  productImg.alt = `${title} ${color} ${size}`
  productTitle.textContent = title
  productColor.textContent = color
  productSize.textContent = size
  productQuantity.textContent = quantity
  productPrice.textContent = price
  return productTemplate
}
