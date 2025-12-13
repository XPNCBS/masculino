export function generateAside(asideContent, aside) {
  asideContent.forEach((asideItem) => {
    const ul = document.createElement('ul')
    const liWrap = document.createElement('li')
    const ulInLiWrap = document.createElement('ul')
    liWrap.appendChild(ulInLiWrap)

    ul.classList.add('filter-column')
    ulInLiWrap.classList.add('ulInWrap')

    const li = document.createElement('li')
    li.classList.add('li-button')

    // 📌 обработчик клика только для мобильных
    li.addEventListener('click', () => {
      if (window.innerWidth > 991) return // 👉 пропускаем на десктопе

      document.querySelectorAll('.ulInWrap.active').forEach((el) => {
        if (el !== ulInLiWrap) {
          el.classList.remove('active')
          el.style.maxHeight = '0px'
          el.style.paddingBottom = '0px'
        }
      })

      if (ulInLiWrap.classList.contains('active')) {
        // закрываем
        ulInLiWrap.classList.remove('active')
        ulInLiWrap.style.maxHeight = '0px'
        ulInLiWrap.style.paddingBottom = '0px'
      } else {
        // открываем
        ulInLiWrap.classList.add('active')
        ulInLiWrap.style.maxHeight = ulInLiWrap.scrollHeight + 'px'
        ulInLiWrap.style.paddingBottom = '20px'
      }
    })

    const title = document.createElement('h2')
    title.classList.add('font-medium')
    title.textContent = asideItem.title

    li.appendChild(title)
    ul.appendChild(li)
    ul.appendChild(liWrap)

    generateAsideLinks(asideItem.elements, ulInLiWrap, asideItem.href)
    aside.appendChild(ul)
  })
}

function generateAsideLinks(elements, ul, hrefKey) {
  const params = new URLSearchParams(window.location.search)
  const currentValue = params.get(hrefKey)

  elements.forEach((element) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
   const newParams = new URLSearchParams(params)
    if (hrefKey === 'sizes') {
     link.classList.add('filtr__button--size')
      if (!currentValue){
        addParamsToLink(newParams, link, hrefKey, element)
      }
      else{
       
        const selectedSizes = currentValue.split(',') // получаем массив выбранных размеров
               if (selectedSizes.includes(element)){
                link.classList.add('active')
                const newSelectedSizes = selectedSizes.filter(size => size !== element); // удаляем размер
                newParams.set(hrefKey, newSelectedSizes.join(',')) // обновляем параметр
              if (newSelectedSizes.length === 0){
                link.href = `/masculino/` // если размеров нет, убираем параметр из ссылки
              }
              else{
                link.href = `/masculino/?${newParams.toString()}`
              }
               }
                else{ 
                            selectedSizes.push(element) // добавляем новый размер
          newParams.set(hrefKey, selectedSizes.join(',')) // обновляем параметр
          link.href = `/masculino/?${newParams.toString()}`}
          
      }
    } else {
      // создаём копию текущих параметров
      addParamsToLink(newParams, link, hrefKey, element)
    }

    // генерируем новую ссылку с сохранением остальных параметров

    link.classList.add('filtr__button')

    // если текущий параметр активен — подсвечиваем
    if (currentValue === element) {
      link.classList.add('active')
    }

    link.textContent = element
    li.appendChild(link)
    ul.appendChild(li)
  })
}
function addParamsToLink(newParams, link, hrefKey,element){
   
      newParams.set(hrefKey, element) // добавляем или обновляем нужный параметр
      link.href = `/masculino/?${newParams.toString()}`
}