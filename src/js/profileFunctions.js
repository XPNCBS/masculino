function setActiveMenuItem(accountMenuItems, id) {
  accountMenuItems.forEach((item) => {
    if (item.textContent.toLowerCase() === id) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}
function changeProfileId(accountMenuItems) {
  accountMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
      const newId = item.textContent.toLowerCase().replace(/\s+/g, '')
      window.location.href = '/profile?id=' + newId
    })
  })
}
const profile = {
  generate: (id) => {
    const profileContent = document.querySelector('.profile-content')
    const template = document.querySelector('#' + id)
    const content = template.content.cloneNode(true)
    profileContent.appendChild(content)
  },
}
export function profilePage() {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  const accountMenuItems = document.querySelectorAll('.account-menu__item')
  setActiveMenuItem(accountMenuItems, id)
  changeProfileId(accountMenuItems)
  profile.generate(id)
}
