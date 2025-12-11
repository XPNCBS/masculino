import { deleteProduct } from './cartFunctions'
import { changeProductQuantityInCart } from './cartFunctions'
export function createProduct(
  template,
  src,
  title,
  quantity,
  startPrice,
  price,
  color,
  size,
  id
) {
  const productTemplate = template.content.cloneNode(true)
  const root = productTemplate.querySelector('.product')
  root.dataset.id = id
  const productImg = productTemplate.querySelector('.product__img')
  const productTitle = productTemplate.querySelector('.product__title')
  const productColor = productTemplate.querySelector('.product__color')
  const productSize = productTemplate.querySelector('.product__size')
  const productQuantity = productTemplate.querySelector('.product__quantity')
  const productPrice = productTemplate.querySelector('.product__price')
  const productDeleteBtn = productTemplate.querySelector(
    '.product__delete-button'
  )
  const productQuantityMinus = productTemplate.querySelector(
    '.product__quantity-minus'
  )
  const productQuantityPlus = productTemplate.querySelector(
    '.product__quantity-plus'
  )
  productDeleteBtn.addEventListener('click', () => {
    deleteProduct(id)
    globalProductDelete(id)
  })
  productImg.src = src
  productImg.alt = `${title} ${color} ${size}`
  productTitle.textContent = title
  productColor.textContent = color
  productSize.textContent = size
  productQuantity.textContent = quantity
  productPrice.textContent = price
  productQuantityPlus.addEventListener('click', () => {
    const currentQuantity = Number(productQuantity.textContent)
    const newQuantity = currentQuantity + 1
    const newPrice = startPrice * newQuantity
    globalUpdateQuantityAndPrice(id, newQuantity, newPrice)
    changeProductQuantityInCart(id, newQuantity, newPrice)
  })
  productQuantityMinus.addEventListener('click', () => {
    const currentQuantity = Number(productQuantity.textContent)
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1
      const newPrice = startPrice * newQuantity
      globalUpdateQuantityAndPrice(id, newQuantity, newPrice)
      changeProductQuantityInCart(id, newQuantity, newPrice)
    }
  })
  return productTemplate
}

export function generateProduct(template, cart, container) {
  cart.forEach((productItem) => {
    const product = createProduct(
      template,
      productItem.src,
      productItem.title,
      productItem.quantity,
      productItem.startPrice,
      productItem.price,
      productItem.color,
      productItem.size,
      productItem.id
    )
    container.appendChild(product)
  })
  
}
function globalUpdateQuantityAndPrice(id, newQuantity, newPrice) {
  const products = document.querySelectorAll(`[data-id="${id}"]`);
  products.forEach((product) => {
    const quantityElement = product.querySelector('.product__quantity');
    const priceElement = product.querySelector('.product__price');
    quantityElement.textContent = newQuantity;
    priceElement.textContent = newPrice;
  });


}
function globalProductDelete(id) {
  const products = document.querySelectorAll(`[data-id="${id}"]`);
  products.forEach((product) => {
    product.remove();
  });
}