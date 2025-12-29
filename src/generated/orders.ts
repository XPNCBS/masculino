// Автогенерированный класс для шаблона: orders
import { BaseView } from './base-view';

export class Orders extends BaseView {
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
    root.appendChild(document.createTextNode("No order has been made yet."));
    return root;
  }
}