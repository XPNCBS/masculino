// Автогенерированный класс для шаблона: card
import { BaseView } from './base-view';

export class Card extends BaseView {
  public root!: HTMLElement;
  // Нет элементов с data-element

  constructor(data: Record<string, any> = {}) {
    super();
    
    this.root = this._createRootElement() as HTMLElement;
    
    // Нет элементов для инициализации

    this._elements.set('root', this.root);
    // Нет элементов для регистрации

    this.update(data);
  }

  private _createRootElement(): HTMLElement {
    const root = document.createElement('article');
    root.className = "card";
    const el1 = document.createElement('header');
    el1.className = "card__image-block";
    root.appendChild(el1);
        const el2 = document.createElement('img');
        el2.setAttribute("src", "");
        el2.setAttribute("alt", "");
        el2.className = "card__visible-img";
        el1.appendChild(el2);
        const el3 = document.createElement('img');
        el3.setAttribute("src", "");
        el3.setAttribute("alt", "");
        el3.className = "card__hover-img";
        el1.appendChild(el3);
    const el4 = document.createElement('div');
    el4.className = "card__body";
    root.appendChild(el4);
        const el5 = document.createElement('div');
        el5.className = "titleXbutton";
        el4.appendChild(el5);
            const el6 = document.createElement('h2');
            el6.className = "card__title";
            el5.appendChild(el6);
            const el7 = document.createElement('button');
            el7.setAttribute("type", "button");
            el7.className = "card__action";
            el5.appendChild(el7);
                const el8 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                el8.setAttribute('width', "16");
                el8.setAttribute('height', "16");
                el8.setAttribute('viewBox', "0 0 16 16");
                el8.setAttribute('fill', "none");
                el8.setAttribute('xmlns', "http://www.w3.org/2000/svg");
                el8.setAttribute('stroke', "#000");
                el8.setAttribute('class', "overflow-visible");
                el7.appendChild(el8);
                    const el9 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    el9.setAttribute('d', "M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z");
                    el9.setAttribute('class', "svg__path");
                    el8.appendChild(el9);
        const el10 = document.createElement('p');
        el10.className = "price";
        el4.appendChild(el10);
    const el11 = document.createElement('footer');
    el11.className = "footer";
    root.appendChild(el11);
        const el12 = document.createElement('a');
        el12.className = "card__link";
        el12.setAttribute("href", "");
        el11.appendChild(el12);
    return root;
  }
}