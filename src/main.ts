import './style.css'
import { Footer } from './generated'
const footer = new Footer()
const app = document.querySelector('#app') as HTMLDivElement
footer.mount(app)

