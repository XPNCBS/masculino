export function listenOfhistoryChange() {
  const origPush = history.pushState
  const origReplace = history.replaceState
  history.pushState = function (...args) {
    origPush.apply(this, args)
    window.dispatchEvent(new Event('URLChange'))
  }
  history.replaceState = function (...args) {
    origReplace.apply(this, args)
    window.dispatchEvent(new Event('URLChange'))
  }
}
