// Автогенерированный класс для шаблона: adress
export class Adress {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLDivElement;
  public flex!: HTMLDivElement;
  public flexCol!: HTMLDivElement;
  public textBase!: HTMLParagraphElement;
  public text2xl!: HTMLParagraphElement;
  public textBase1!: HTMLParagraphElement;
  public yellowText!: HTMLParagraphElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.flex = document.createElement('div') as HTMLDivElement;
    this.flexCol = document.createElement('div') as HTMLDivElement;
    this.textBase = document.createElement('p') as HTMLParagraphElement;
    this.text2xl = document.createElement('p') as HTMLParagraphElement;
    this.textBase1 = document.createElement('p') as HTMLParagraphElement;
    this.yellowText = document.createElement('p') as HTMLParagraphElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.flex.className = '\bflex\b \bjustify\b-\bcenter\b';
    this.flexCol.className = '\bflex\b-\bcol\b \bflex\b \bgap\b-\b4\b';
    this.textBase.className = '\btext\b-\bbase\b';
    this.textBase.textContent = '\bThe\b \bfollowing\b \baddresses\b \bwill\b \bbe\b \bused\b \bon\b \bthe\b \bcheckout\b \bpage\b \bby\b \bdefault\b.';
    this.text2xl.className = '\btext\b-\b2xl\b';
    this.text2xl.textContent = '\bBilling\b \baddress\b';
    this.textBase1.className = '\btext\b-\bbase\b';
    this.textBase1.textContent = '\bYou\b \bhave\b \bnot\b \bset\b \bup\b \bthis\b \btype\b \bof\b \baddress\b \byet\b.';
    this.yellowText.className = '\byellow\b-\btext\b';
    this.yellowText.textContent = '\bAdd\b';


    // Строим иерархию
    this.root = this.flex;
    this.flex.appendChild(this.flexCol);
    this.flexCol.appendChild(this.textBase);
    this.flexCol.appendChild(this.text2xl);
    this.flexCol.appendChild(this.textBase);
    this.flexCol.appendChild(this.yellowText);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('flex', this.flex);
    this._elements.set('flexCol', this.flexCol);
    this._elements.set('textBase', this.textBase);
    this._elements.set('text2xl', this.text2xl);
    this._elements.set('textBase1', this.textBase1);
    this._elements.set('yellowText', this.yellowText);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      flex: this.flex,
      flexCol: this.flexCol,
      textBase: this.textBase,
      text2xl: this.text2xl,
      textBase1: this.textBase1,
      yellowText: this.yellowText
    };
  }

  mount(parent: Element): Adress {
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