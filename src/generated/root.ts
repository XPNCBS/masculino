// Автогенерированный класс для шаблона: root
import { BaseView } from './base-view';

export class Root extends BaseView {
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
    root.className = "custom-container root-container main flex gap-10";
    const el1 = document.createElement('aside');
    el1.className = "aside";
    root.appendChild(el1);
    const el2 = document.createElement('div');
    el2.className = "cards flex";
    root.appendChild(el2);
    return root;
  }
}