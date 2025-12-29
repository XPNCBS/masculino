// Автогенерированный класс для шаблона: dashboard
import { BaseView } from './base-view';

export class Dashboard extends BaseView {
  public root!: HTMLParagraphElement;
  // Нет элементов с data-element

  constructor(data: Record<string, any> = {}) {
    super();
    
    this.root = this._createRootElement() as HTMLParagraphElement;
    
    // Нет элементов для инициализации

    this._elements.set('root', this.root);
    // Нет элементов для регистрации

    this.update(data);
  }

  private _createRootElement(): HTMLElement {
    const root = document.createElement('p');
    root.className = "dasbord-text";
    root.appendChild(document.createTextNode("\n    From your account dashboard you can view your\n    "));
    const el1 = document.createElement('a');
    el1.className = "yellow-text";
    el1.setAttribute("href", "/masculino#/profile?id=orders");
    root.appendChild(el1);
        el1.appendChild(document.createTextNode("recent orders"));
    root.appendChild(document.createTextNode("\n    , manage your\n    "));
    const el2 = document.createElement('a');
    el2.className = "yellow-text";
    el2.setAttribute("href", "/masculino#/profile?id=adress");
    root.appendChild(el2);
        el2.appendChild(document.createTextNode("billing address"));
    root.appendChild(document.createTextNode(", and\n    "));
    const el3 = document.createElement('a');
    el3.className = "yellow-text";
    el3.setAttribute("href", "/masculino#/profile?id=account_details");
    root.appendChild(el3);
        el3.appendChild(document.createTextNode("edit your password and account details"));
    root.appendChild(document.createTextNode(".\n  "));
    return root;
  }
}