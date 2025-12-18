const onUrlChange = () => {
  if (location.pathname === '/profile') {
    console.log('Профиль открыт');
  }
};

// back / forward
window.addEventListener('popstate', onUrlChange);

// перехват pushState
const pushState = history.pushState;
history.pushState = function (...args) {
  pushState.apply(this, args);
  onUrlChange();
};

// перехват replaceState
const replaceState = history.replaceState;
history.replaceState = function (...args) {
  replaceState.apply(this, args);
  onUrlChange();
};