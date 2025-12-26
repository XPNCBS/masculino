// Автогенерированный класс для шаблона: footer
export class Footer {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLElement;
  public customContainer!: HTMLElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.customContainer = document.createElement('footer') as HTMLElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.customContainer.className = '\bcustom\b-\bcontainer\b \bfooter\b \bpt\b-\b25\b \bpb\b-\b5\b';
    this.customContainer.textContent = '© \b2021\b. \bKelzin\b \bGroup\b. Все права защищены.';


    // Строим иерархию
    this.root = this.customContainer;


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('customContainer', this.customContainer);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      customContainer: this.customContainer
    };
  }

  mount(parent: Element): Footer {
    parent.appendChild(this.root);
    return this;
  }

  getElement(name: string): HTMLElement | undefined {
    return this._elements.get(name);
  }

  update(data: Record<string, any>): void {
    Object.entries(data).forEach(([key, value]) => {
      const element = this._elements.get(key);
      if (element) {
        element.textContent = value.toString();
      }
    });
  }
}