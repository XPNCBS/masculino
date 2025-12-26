// Автогенерированный класс для шаблона: root
export class Root {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLDivElement;
  public customContainer!: HTMLDivElement;
  public aside!: HTMLElement;
  public cards!: HTMLDivElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.customContainer = document.createElement('div') as HTMLDivElement;
    this.aside = document.createElement('aside') as HTMLElement;
    this.cards = document.createElement('div') as HTMLDivElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.customContainer.className = '\bcustom\b-\bcontainer\b \broot\b-\bcontainer\b \bmain\b \bflex\b \bgap\b-\b10\b';
    this.aside.className = '\baside\b';
    this.cards.className = '\bcards\b \bflex\b';


    // Строим иерархию
    this.root = this.customContainer;
    this.customContainer.appendChild(this.aside);
    this.customContainer.appendChild(this.cards);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('customContainer', this.customContainer);
    this._elements.set('aside', this.aside);
    this._elements.set('cards', this.cards);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      customContainer: this.customContainer,
      aside: this.aside,
      cards: this.cards
    };
  }

  mount(parent: Element): Root {
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