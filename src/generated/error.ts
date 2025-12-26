// Автогенерированный класс для шаблона: error
export class Error {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLDivElement;
  public flex!: HTMLDivElement;
  public img!: HTMLImageElement;
  public textXl!: HTMLParagraphElement;
  public textXs!: HTMLParagraphElement;
  public goHome!: HTMLAnchorElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.flex = document.createElement('div') as HTMLDivElement;
    this.img = document.createElement('img') as HTMLImageElement;
    this.textXl = document.createElement('p') as HTMLParagraphElement;
    this.textXs = document.createElement('p') as HTMLParagraphElement;
    this.goHome = document.createElement('a') as HTMLAnchorElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.flex.className = '\bflex\b \bflex\b-\bcol\b \bitems\b-\bcenter\b \bjustify\b-\bcenter\b \bgap\b-\b5\b \bmt\b-\b10\b';
    this.textXl.className = '\btext\b-\bxl\b';
    this.textXl.textContent = '\bPage\b \bnot\b \bfound\b.';
    this.textXs.className = '\btext\b-\bxs\b';
    this.textXs.textContent = '\bIt\b \blooks\b \blike\b \bnothing\b \bwas\b \bfound\b \bat\b \bthis\b \blocation\b. \bClick\b \bthe\b \blink\b \bbelow\b \bto\b\\bn\b      \breturn\b \bhome\b.';
    this.goHome.className = '\bgo\b-\bhome\b';
    this.goHome.textContent = '← \bHome\b';


    // Строим иерархию
    this.root = this.flex;
    this.flex.appendChild(this.img);
    this.flex.appendChild(this.textXl);
    this.flex.appendChild(this.textXs);
    this.flex.appendChild(this.goHome);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('flex', this.flex);
    this._elements.set('img', this.img);
    this._elements.set('textXl', this.textXl);
    this._elements.set('textXs', this.textXs);
    this._elements.set('goHome', this.goHome);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      flex: this.flex,
      img: this.img,
      textXl: this.textXl,
      textXs: this.textXs,
      goHome: this.goHome
    };
  }

  mount(parent: Element): Error {
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