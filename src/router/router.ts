import { routes } from "./routes";
import { root } from "../configs/root";
import { layoutComponent } from "../components/layoutComponent";
import { errorPage } from "../pages/errorPage";

export function router(){
renderPage()
   window.addEventListener('URLChange',()=>renderPage())
}
function renderPage(){
    root.innerHTML = ''
    const url = new URL(window.location.href)
    const path = url.pathname
    if (path in routes){
        const routFunc = routes[path as keyof typeof routes]
        routFunc()
    }
    else {layoutComponent(root,errorPage)}
}