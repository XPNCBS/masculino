// Автогенерированный класс для шаблона: downloads
export class Downloads {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLParagraphElement;
  public p!: HTMLParagraphElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.p = document.createElement('p') as HTMLParagraphElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.p.textContent = '\bNo\b \bdownloads\b \bavailable\b \byet\b.';


    // Строим иерархию
    this.root = this.p;


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('p', this.p);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      p: this.p
    };
  }

  mount(parent: Element): Downloads {
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