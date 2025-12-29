// Автогенерированный класс для шаблона: product
import { BaseView } from './base-view';

export class Product extends BaseView {
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
    root.className = "product";
    const el1 = document.createElement('div');
    el1.className = "product__image-wrap";
    root.appendChild(el1);
        const el2 = document.createElement('img');
        el2.className = "product__img";
        el2.setAttribute("src", "");
        el2.setAttribute("alt", "");
        el1.appendChild(el2);
    const el3 = document.createElement('div');
    el3.className = "product__info";
    root.appendChild(el3);
        const el4 = document.createElement('header');
        el4.className = "product__header";
        el3.appendChild(el4);
            const el5 = document.createElement('h2');
            el5.className = "product__title";
            el4.appendChild(el5);
            const el6 = document.createElement('button');
            el6.className = "product__delete-button";
            el4.appendChild(el6);
                const el7 = document.createElement('div');
                el7.className = "relative w-5 h-5 cursor-pointer";
                el6.appendChild(el7);
                    const el8 = document.createElement('span');
                    el8.className = "absolute inset-0 bg-white h-[2px] rotate-45 top-1/2 block";
                    el7.appendChild(el8);
                    const el9 = document.createElement('span');
                    el9.className = "absolute inset-0 bg-white h-[2px] -rotate-45 top-1/2 block";
                    el7.appendChild(el9);
        const el10 = document.createElement('div');
        el10.className = "product__body";
        el3.appendChild(el10);
            const el11 = document.createElement('p');
            el11.className = "product__color";
            el10.appendChild(el11);
            const el12 = document.createElement('p');
            el12.className = "product__size-wrap";
            el10.appendChild(el12);
                el12.appendChild(document.createTextNode("\n          Размер "));
                const el13 = document.createElement('span');
                el13.className = "product__size";
                el12.appendChild(el13);
        const el14 = document.createElement('footer');
        el14.className = "product__footer";
        el3.appendChild(el14);
            const el15 = document.createElement('div');
            el15.className = "product__quantity-wrap";
            el14.appendChild(el15);
                const el16 = document.createElement('p');
                el15.appendChild(el16);
                    el16.appendChild(document.createTextNode("Qty"));
                const el17 = document.createElement('div');
                el15.appendChild(el17);
                    const el18 = document.createElement('button');
                    el18.className = "product__quantity-minus cursor-pointer";
                    el17.appendChild(el18);
                        const el19 = document.createElement('i');
                        el19.className = "inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors";
                        el19.setAttribute("role", "button");
                        el19.setAttribute("aria-label", "Play");
                        el18.appendChild(el19);
                            const el20 = document.createElement('span');
                            el20.className = "block w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-b-[7px] border-t-transparent border-b-transparent ml-[2px]";
                            el20.style.cssText = "transform: rotate(180deg)";
                            el19.appendChild(el20);
                    const el21 = document.createElement('span');
                    el21.className = "product__quantity";
                    el17.appendChild(el21);
                    const el22 = document.createElement('button');
                    el22.className = "product__quantity-plus cursor-pointer";
                    el17.appendChild(el22);
                        const el23 = document.createElement('i');
                        el23.className = "inline-flex items-center justify-center w-10 h-10 rounded-ful transition-colors";
                        el23.setAttribute("role", "button");
                        el23.setAttribute("aria-label", "Play");
                        el22.appendChild(el23);
                            const el24 = document.createElement('span');
                            el24.className = "block w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-b-[7px] border-t-transparent border-b-transparent ml-[2px]";
                            el23.appendChild(el24);
            const el25 = document.createElement('p');
            el14.appendChild(el25);
                const el26 = document.createElement('span');
                el26.className = "product__price";
                el25.appendChild(el26);
                el25.appendChild(document.createTextNode("$"));
    return root;
  }
}