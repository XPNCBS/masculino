// Автогенерированный класс для шаблона: cart
import { BaseView } from './base-view';

export class Cart extends BaseView {
  public root!: HTMLDivElement;
  // Нет элементов с data-element

  constructor(data: Record<string, any> = {}) {
    super();
    
    this.root = this._createRootElement() as HTMLDivElement;
    
    // Нет элементов для инициализации

    this._elements.set('root', this.root);
    // Нет элементов для регистрации

    this.update(data);
  }

  private _createRootElement(): HTMLElement {
    const root = document.createElement('div');
    root.className = "custom-container cart-div";
    const el1 = document.createElement('section');
    el1.className = "shopping-cart";
    root.appendChild(el1);
        const el2 = document.createElement('h2');
        el2.className = "cart-title";
        el1.appendChild(el2);
            el2.appendChild(document.createTextNode("Shopping Cart"));
        const el3 = document.createElement('div');
        el3.className = "div-shopping-cart-content";
        el1.appendChild(el3);
        const el4 = document.createElement('div');
        el4.className = "div-shopcart-btns";
        el1.appendChild(el4);
            const el5 = document.createElement('button');
            el5.className = "shopcart-btn";
            el4.appendChild(el5);
                el5.appendChild(document.createTextNode("Continue shopping"));
            const el6 = document.createElement('button');
            el6.className = "shopcart-btn";
            el4.appendChild(el6);
                el6.appendChild(document.createTextNode("Update cart"));
    const el7 = document.createElement('section');
    el7.className = "cart-totals";
    root.appendChild(el7);
        const el8 = document.createElement('h2');
        el8.className = "cart-title";
        el7.appendChild(el8);
            el8.appendChild(document.createTextNode("Cart totals"));
        const el9 = document.createElement('div');
        el9.className = "mt-5 mb-2";
        el7.appendChild(el9);
            const el10 = document.createElement('div');
            el10.className = "div-totals-counter border-b border-b-gray-500";
            el9.appendChild(el10);
                const el11 = document.createElement('span');
                el10.appendChild(el11);
                    el11.appendChild(document.createTextNode("Subtotal"));
                const el12 = document.createElement('span');
                el12.className = "subtotal-counter cart__total-price";
                el10.appendChild(el12);
                    el12.appendChild(document.createTextNode("0"));
            const el13 = document.createElement('div');
            el13.className = "div-totals-counter";
            el9.appendChild(el13);
                const el14 = document.createElement('span');
                el13.appendChild(el14);
                    el14.appendChild(document.createTextNode("Total"));
                const el15 = document.createElement('span');
                el15.className = "total-counter cart__total-price";
                el13.appendChild(el15);
                    el15.appendChild(document.createTextNode("0"));
        const el16 = document.createElement('span');
        el16.className = "text-ptc";
        el7.appendChild(el16);
            el16.appendChild(document.createTextNode("Proceed to checkout"));
    return root;
  }
}