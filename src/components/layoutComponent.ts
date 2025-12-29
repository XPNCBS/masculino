import { footerComponent } from "./footerComponent";
import { headerComponent } from "./headerComponent";
import { mainComponent } from "./mainComponent";
import { mainReset } from "../configs/mainReset";
export function layoutComponent(root:HTMLDivElement, page: (main:HTMLElement) => void){   
    const header = headerComponent()
    const main = mainComponent()
    const footer = footerComponent()
    
    header.mount(root)
    main.mount(root)
    footer.mount(root)
       window.addEventListener('URLChange',()=>{
     
        page(main.main)
       })
    
} 