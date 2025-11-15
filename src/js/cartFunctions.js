import { generateProduct } from "./productFunctions"
function loadTotalCartQuantity(cart){
  const totalCartQuantity = document.querySelector('.total-cart-quantity')
  let quantity = 0
  cart.forEach((cartItem)=>{
    quantity+=cartItem.quantity
  })
  totalCartQuantity.textContent = quantity
}
export function loadProductsToCart(productTemplate,cartProducts) {
  const storedCart = localStorage.getItem('cart')
  const cart = storedCart ? JSON.parse(storedCart) : []
  console.log(cart)
  generateProduct(productTemplate,cart,cartProducts)
  loadTotalCartQuantity(cart)
  
}


function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
function generateUniqueID(cart) {
  let id;

  do {
    id = generateUUID();
  } while (cart.some(item => item.id === id));

  return id;
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
    const existingProduct = cart.find(item =>
      item.title === product.title &&
      item.size === product.size &&
      item.color === product.color
    )

    if (existingProduct) {
      // увеличиваем количество
      existingProduct.quantity += product.quantity
      existingProduct.price = Number(card.price.replace(',', '.')) * existingProduct.quantity
    } 
    else {
      // добавляем новый товар
      cart.push({
        ...product,
        id: generateUniqueID(cart),      // <---- вот тут добавляется id
      })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
  })

  updateButtonState()
  return updateButtonState
}
export function deleteProduct(cart, id) {
  // Фильтруем корзину
  const updatedCart = cart.filter(item => item.id !== id);

  // Сохраняем обратно в localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  // Возвращаем обновлённую корзину (если нужно дальше использовать)
  return updatedCart;
}