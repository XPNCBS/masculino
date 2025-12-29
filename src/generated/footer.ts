// Автогенерированный класс для шаблона: footer
import { BaseView } from './base-view';

export class Footer extends BaseView {
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
    const root = document.createElement('footer');
    root.className = "custom-container footer pt-25 pb-5";
    root.appendChild(document.createTextNode("\n    © 2021. Kelzin Group. Все права защищены.\n  "));
    return root;
  }
}