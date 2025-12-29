import { layoutComponent } from "../components/layoutComponent"
import { root } from "../configs/root"
function c(){

}
const baseUrl = import.meta.env.VITE_BASE_URL
export const routes:Record<string,()=>void> = {
    [baseUrl]:()=>layoutComponent(root,c)
}
