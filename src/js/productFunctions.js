function createProduct(template, src, title, quantity, price, color, size) {
  const productTemplate = template.content.cloneNode(true)
  const productImg = productTemplate.querySelector('.product__img')
  const productTitle = productTemplate.querySelector('.product__title')
  const productColor = productTemplate.querySelector('.product__color')
  const productSize = productTemplate.querySelector('.product__size')
  const productQuantity = productTemplate.querySelector('.product__quantity')
  const productPrice = productTemplate.querySelector('.product__price')
  productImg.src = src
  productImg.alt = `${title} ${color} ${size}`
  productTitle.textContent = title
  productColor.textContent = color
  productSize.textContent = size
  productQuantity.textContent = quantity
  productPrice.textContent = price
  return productTemplate
}

export function generateProduct(template, products, container) {
    products.forEach((productItem) =>{
        const product = createProduct(template,productItem.src,productItem.title,productItem.quantity,productItem.price,productItem.color,productItem.size)
        container.appendChild(product)}   
        
    )
    
}
