export function createSPAlinks() {
  const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a')
  links.forEach((link: HTMLAnchorElement) => {
    link.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault()
      history.pushState(null, '', link.href)
    })
  })
}
