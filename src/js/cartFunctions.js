import { generateProduct } from './productFunctions'
import { createProduct } from './productFunctions'
export function loadTotalCartQuantity(cart) {
  const totalCartQuantity = document.querySelector('.total-cart-quantity')
  let quantity = 0
  cart.forEach((cartItem) => {
    quantity += cartItem.quantity
  })
  totalCartQuantity.textContent = quantity
}
export function loadProductsToCart(productTemplate, cartProducts) {
  const storedCart = localStorage.getItem('cart')
  const cart = storedCart ? JSON.parse(storedCart) : []
  generateProduct(productTemplate, cart, cartProducts)
  loadTotalCartQuantity(cart)
  changeCartMode(cart)
  getTotalPrice()
}
export function changeProductQuantityInCart(id, newQuantity, newPrice) {
  // Находим индекс продукта
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const productIndex = cart.findIndex((item) => item.id === id)

  // Если продукт не найден — выходим
  if (productIndex === -1) return cart

  // Обновляем количество
  cart[productIndex].quantity = newQuantity
  cart[productIndex].price = newPrice

  // Записываем в localStorage
  localStorage.setItem('cart', JSON.stringify(cart))
  const updatedCart = JSON.parse(localStorage.getItem('cart')) || []
  loadTotalCartQuantity(updatedCart)
  getTotalPrice()

  return cart
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
function generateUniqueID(cart) {
  let id

  do {
    id = generateUUID()
  } while (cart.some((item) => item.id === id))

  return id
}
export function addToCart(product, card) {
  const addToCartBtn = document.querySelector('.add-to-cart')

  function updateButtonState() {
    if (product.size === 'Выбрать опцию') {
      addToCartBtn.classList.add('disabled')
      addToCartBtn.disabled = true
    } else {
      addToCartBtn.classList.remove('disabled')
      addToCartBtn.disabled = false
    }
  }

  addToCartBtn.addEventListener('click', () => {
    if (product.size === 'Выбрать опцию') return

    let cart = JSON.parse(localStorage.getItem('cart')) || []

    // Проверяем по title + size + color
    const existingProduct = cart.find(
      (item) =>
        item.title === product.title &&
        item.size === product.size &&
        item.color === product.color
    )

    if (existingProduct) {
      // увеличиваем количество
      existingProduct.quantity += product.quantity
      existingProduct.price =
        Number(card.price.replace(',', '.')) * existingProduct.quantity
    } else {
      const id = generateUniqueID(cart)
      // добавляем новый товар
      cart.push({
        ...product,
        id: id, // <---- вот тут добавляется id
      })
      product.id = id
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    cart = JSON.parse(localStorage.getItem('cart')) || []
    const productTemplate = document.querySelector('#product')
    const cartProducts = document.querySelector('.cart__products')
    const createdProduct = createProduct(
      productTemplate,
      product.src,
      product.title,
      product.quantity,
      product.startPrice,
      product.price,
      product.color,
      product.size,
      product.id,
      cart
    )
    cartProducts.appendChild(createdProduct)
    loadTotalCartQuantity(cart)
    changeCartMode(cart)
    getTotalPrice()
  })

  updateButtonState()
  return updateButtonState
}
export function deleteProduct(id) {
  // Фильтруем корзину
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const updatedCart = cart.filter((item) => item.id !== id)
  cart.forEach((i) => {})

  // Сохраняем обратно в localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCart))
  loadTotalCartQuantity(updatedCart)
  // Возвращаем обновлённую корзину (если нужно дальше использовать)
  changeCartMode(updatedCart)
  getTotalPrice()
}

function changeCartMode(cart) {
  const cartCartEmpty = document.querySelector('.cart__cart-empty')
  const cartFooter = document.querySelector('.cart__footer')
  cartCartEmpty.classList.toggle('empty', cart.length === 0)
  cartFooter.classList.toggle('empty', cart.length === 0)
}
function getTotalPrice() {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const cartTotalPrice = document.querySelector('.cart__total-price')
  let sum = 0
  cart.forEach((product) => {
    sum += product.price
  })
  cartTotalPrice.textContent = sum + '$'
}
