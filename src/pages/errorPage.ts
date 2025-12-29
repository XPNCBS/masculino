import { errorComponent } from "../components/errorComponent";
export function errorPage(main:HTMLElement){
    const error = errorComponent()
    error.mount(main)
}