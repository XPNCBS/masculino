// Автогенерированный класс для шаблона: main
import { BaseView } from './base-view';

export class Main extends BaseView {
  public root!: HTMLElement;
  public main!: HTMLElement & ReturnType<BaseView['_createElementWithHandlers']>;

  constructor(data: Record<string, any> = {}) {
    super();
    
    this.root = this._createRootElement() as HTMLElement;
    
    this.main = this._createElementWithHandlers('main', this.root.querySelector('[data-element="main"]')!);

    this._elements.set('root', this.root);
    this._elements.set('main', this.main);

    this.update(data);
  }

  private _createRootElement(): HTMLElement {
    const root = document.createElement('main');
    root.className = "content";
    return root;
  }
}