import './style.css'
const cards = [
  {
    title: "Водолазка(normal)",
    price: '13,5',
    href: "#",
    src: "public/images/1_Водолазка_normal__scr.jpg",
    hoverSrc:
      "public/images/1_Водолазка_normal__hover.jpg",
  },
  {
    title: "Куртка (normal)",
    price: '49,00',
    href: "#",
    src: "public/images/2_Куртка__normal__src.jpeg",
    hoverSrc:
      "public/images/2_Куртка__normal__src.jpeg",
  },
  {
    title: "Куртка (normal)",
    price: '49,50',
    href: "#",
    src: "public/images/3_Куртка__normal__src.jpg",
    hoverSrc:
      "public/images/3_Куртка__normal__hover.jpg",
  },
  {
    title: "Куртка (oversize)",
    price: '32,00',
    href: "#",
    src: "public/images/4_Куртка__oversize__src.jpg",
    hoverSrc:
      "public/images/4_Куртка__oversize__hover.jpg",
  },
  {
    title: "Мужская двойка(normal)",
    price: '29,00',
    href: "#",
    src: "public/images/5_Мужская_двойка_normal__hover.jpg",
    hoverSrc:
      "public/images/5_Мужская_двойка_normal__hover.jpg",
  },
  {
    title: "Мужская кофта(normal)",
    price: '10,50',
    href: "#",
    src: "public/images/6_Мужская_кофта_normal__src.jpg",
    hoverSrc:
      "public/images/6_Мужская_кофта_normal__hover.jpg",
  },
  {
    title: "Мужская кофта(normal)",
    price: '12,00',
    href: "#",
    src: "public/images/7_Мужская_кофта_normal__src.jpg",
    hoverSrc:
      "public/images/7_Мужская_кофта_normal__hover.jpg",
  },
  {
    title: "Мужская рубашка(normal)",
    price: '11,00',
    href: "#",
    src: "8_Мужская_рубашка_normal__src.jpg",
    hoverSrc:
      "8_Мужская_рубашка_normal__src.jpg",
  },
    {
    title: "Мужской бомбер(oversize)",
    price: '29,00',
    href: "#",
    src: "public/images/9_Мужской_бомбер_oversize__src.jpg",
    hoverSrc:
      "public/images/9_Мужской_бомбер_oversize__hover.jpg",
  },
    {
    title: "Мужской кардиган (normal)",
    price: '15,50',
    href: "#",
    src: "public/images/10_Мужской_кардиган__normal__src.jpg",
    hoverSrc:
      "public/images/10_Мужской_кардиган__normal__hover.jpg",
  },
];
function generateCard(tile, price, href, src, hoverSrc) {
  const card = `<article class="card">
      <header class="card__image-block">
        <img
          src="${src}"
          data-src="https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-03-300x450.jpg"
          data-srcset="https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-03-300x450.jpg 300w, https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-03-200x300.jpg 200w, https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-03-682x1024.jpg 682w, https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-03-768x1152.jpg 768w, https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-03-600x900.jpg 600w, https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-03.jpg 853w"
          alt=""
          sizes="(max-width: 300px) 100vw, 300px"
          width="300"
          height="450"
          class="card__visible-img"
        />
        <img
          src="${hoverSrc}"
          data-src="https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-06-300x450.jpg"
          data-srcset="https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-06-300x450.jpg 300w, https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-06-200x300.jpg 200w, https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-06-682x1024.jpg 682w, https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-06-768x1152.jpg 768w, https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-06-600x900.jpg 600w, https://masculinostore.kz/wp-content/uploads/2021/10/photo_2021-10-27_14-02-06.jpg 853w"
          alt=""
          sizes="(max-width: 300px) 100vw, 300px"
          width="300"
          height="450"
          class="card__hover-img"
        />
      </header>
      <div class="card__body">
        <div class="titleXbutton"><h2 class="card__title">${tile}</h2>
        <button type="button" class="card__action">
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                
                class="svg__path"
              ></path>
            </g>
          </svg>
        </button></div>
        <p class="price">${price} $</p>
      </div>
      <footer class="footer">
        <a class="card__link" href="${href}">${tile}</a>
      </footer>
    </article>`;
  return card;
}

const cardsContainer = document.querySelector(".cards");

let cardsContent = "";

cards.forEach((cardItem) => {
  const card = generateCard(
    cardItem.title,
    cardItem.price,
    cardItem.href,
    cardItem.src,
    cardItem.hoverSrc
  );
  cardsContent += card;
});

cardsContainer.innerHTML = cardsContent;
const actions = document.querySelectorAll(".card__action");
function like(e) {
  const button = e.currentTarget;
  button.classList.toggle("liked");
}
actions.forEach((btn) => {
  btn.addEventListener("click", like);
});
