// Автогенерированный класс для шаблона: error
import { BaseView } from './base-view';

export class Error extends BaseView {
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
    root.className = "flex flex-col items-center justify-center gap-5 mt-10";
    const el1 = document.createElement('img');
    el1.setAttribute("src", "public/icons/close-circle-svgrepo-com.svg");
    el1.setAttribute("alt", "error-icon");
    root.appendChild(el1);
    const el2 = document.createElement('p');
    el2.className = "text-xl";
    root.appendChild(el2);
        el2.appendChild(document.createTextNode("Page not found."));
    const el3 = document.createElement('p');
    el3.className = "text-xs";
    root.appendChild(el3);
        el3.appendChild(document.createTextNode("\n      It looks like nothing was found at this location. Click the link below to\n      return home.\n    "));
    const el4 = document.createElement('a');
    el4.setAttribute("href", "/masculino/");
    el4.className = "go-home";
    root.appendChild(el4);
        el4.appendChild(document.createTextNode(" ← Home"));
    return root;
  }
}