import { deleteProduct } from "./cartFunctions"

function createProduct(template, src, title, quantity, price, color, size,id,cart) {
  const productTemplate = template.content.cloneNode(true)
  const productImg = productTemplate.querySelector('.product__img')
  const productTitle = productTemplate.querySelector('.product__title')
  const productColor = productTemplate.querySelector('.product__color')
  const productSize = productTemplate.querySelector('.product__size')
  const productQuantity = productTemplate.querySelector('.product__quantity')
  const productPrice = productTemplate.querySelector('.product__price')
  const productDeleteBtn = productTemplate.querySelector('.product__delete-button')
  productDeleteBtn.addEventListener('click',()=>deleteProduct(cart,id))
  productImg.src = src
  productImg.alt = `${title} ${color} ${size}`
  productTitle.textContent = title
  productColor.textContent = color
  productSize.textContent = size
  productQuantity.textContent = quantity
  productPrice.textContent = price
  return productTemplate
}

export function generateProduct(template, cart, container) {
    cart.forEach((productItem) =>{
        const product = createProduct(template,productItem.src,productItem.title,productItem.quantity,productItem.price,productItem.color,productItem.size,productItem.id,cart)
        container.appendChild(product)}   
        
    )
    
}
