import { Header } from "../generated";
export function headerComponent(){
const header = new Header()
const [isOpen,setIsOpen] = header.useState(false)
header.burgerMenu.css(()=>(
    {'max-height':isOpen.value ? `${header.burgerMenu.scrollHeight}px`:'0px'}
))
header.burger.onClick = ()=>setIsOpen(prev=>!prev)
return header
}