// Автогенерированный класс для шаблона: adress
import { BaseView } from './base-view';

export class Adress extends BaseView {
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
    root.className = "flex justify-center";
    const el1 = document.createElement('div');
    el1.className = "flex-col flex gap-4";
    root.appendChild(el1);
        const el2 = document.createElement('p');
        el2.className = "text-base";
        el1.appendChild(el2);
            el2.appendChild(document.createTextNode("\n        The following addresses will be used on the checkout page by default.\n      "));
        const el3 = document.createElement('p');
        el3.className = "text-2xl";
        el1.appendChild(el3);
            el3.appendChild(document.createTextNode("Billing address"));
        const el4 = document.createElement('p');
        el4.className = "text-base";
        el1.appendChild(el4);
            el4.appendChild(document.createTextNode("You have not set up this type of address yet."));
        const el5 = document.createElement('p');
        el5.className = "yellow-text";
        el5.setAttribute("href", "/masculino#/profile?id=account_details");
        el1.appendChild(el5);
            el5.appendChild(document.createTextNode("\n        Add\n      "));
    return root;
  }
}