// Автогенерированный класс для шаблона: dashboard
export class Dashboard {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLParagraphElement;
  public dasbordText!: HTMLParagraphElement;
  public yellowText!: HTMLAnchorElement;
  public yellowText1!: HTMLAnchorElement;
  public yellowText2!: HTMLAnchorElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.dasbordText = document.createElement('p') as HTMLParagraphElement;
    this.yellowText = document.createElement('a') as HTMLAnchorElement;
    this.yellowText1 = document.createElement('a') as HTMLAnchorElement;
    this.yellowText2 = document.createElement('a') as HTMLAnchorElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.dasbordText.className = '\bdasbord\b-\btext\b';
    this.yellowText.className = '\byellow\b-\btext\b';
    this.yellowText.textContent = '\brecent\b \borders\b';
    this.yellowText1.className = '\byellow\b-\btext\b';
    this.yellowText1.textContent = '\bbilling\b \baddress\b';
    this.yellowText2.className = '\byellow\b-\btext\b';
    this.yellowText2.textContent = '\bedit\b \byour\b \bpassword\b \band\b \baccount\b \bdetails\b';


    // Строим иерархию
    this.root = this.dasbordText;
    this.dasbordText.appendChild(this.yellowText);
    this.dasbordText.appendChild(this.yellowText);
    this.dasbordText.appendChild(this.yellowText);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('dasbordText', this.dasbordText);
    this._elements.set('yellowText', this.yellowText);
    this._elements.set('yellowText1', this.yellowText1);
    this._elements.set('yellowText2', this.yellowText2);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      dasbordText: this.dasbordText,
      yellowText: this.yellowText,
      yellowText1: this.yellowText1,
      yellowText2: this.yellowText2
    };
  }

  mount(parent: Element): Dashboard {
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