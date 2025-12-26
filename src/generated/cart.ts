// Автогенерированный класс для шаблона: cart
export class Cart {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLDivElement;
  public customContainer!: HTMLDivElement;
  public shoppingCart!: HTMLElement;
  public cartTitle!: HTMLHeadingElement;
  public divShoppingCartContent!: HTMLDivElement;
  public divShopcartBtns!: HTMLDivElement;
  public shopcartBtn!: HTMLButtonElement;
  public shopcartBtn1!: HTMLButtonElement;
  public cartTotals!: HTMLElement;
  public cartTitle1!: HTMLHeadingElement;
  public mt5!: HTMLDivElement;
  public divTotalsCounter!: HTMLDivElement;
  public span!: HTMLSpanElement;
  public subtotalCounter!: HTMLSpanElement;
  public divTotalsCounter1!: HTMLDivElement;
  public span1!: HTMLSpanElement;
  public totalCounter!: HTMLSpanElement;
  public textPtc!: HTMLSpanElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.customContainer = document.createElement('div') as HTMLDivElement;
    this.shoppingCart = document.createElement('section') as HTMLElement;
    this.cartTitle = document.createElement('h2') as HTMLHeadingElement;
    this.divShoppingCartContent = document.createElement('div') as HTMLDivElement;
    this.divShopcartBtns = document.createElement('div') as HTMLDivElement;
    this.shopcartBtn = document.createElement('button') as HTMLButtonElement;
    this.shopcartBtn1 = document.createElement('button') as HTMLButtonElement;
    this.cartTotals = document.createElement('section') as HTMLElement;
    this.cartTitle1 = document.createElement('h2') as HTMLHeadingElement;
    this.mt5 = document.createElement('div') as HTMLDivElement;
    this.divTotalsCounter = document.createElement('div') as HTMLDivElement;
    this.span = document.createElement('span') as HTMLSpanElement;
    this.subtotalCounter = document.createElement('span') as HTMLSpanElement;
    this.divTotalsCounter1 = document.createElement('div') as HTMLDivElement;
    this.span1 = document.createElement('span') as HTMLSpanElement;
    this.totalCounter = document.createElement('span') as HTMLSpanElement;
    this.textPtc = document.createElement('span') as HTMLSpanElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.customContainer.className = '\bcustom\b-\bcontainer\b \bcart\b-\bdiv\b';
    this.shoppingCart.className = '\bshopping\b-\bcart\b';
    this.cartTitle.className = '\bcart\b-\btitle\b';
    this.cartTitle.textContent = '\bShopping\b \bCart\b';
    this.divShoppingCartContent.className = '\bdiv\b-\bshopping\b-\bcart\b-\bcontent\b';
    this.divShopcartBtns.className = '\bdiv\b-\bshopcart\b-\bbtns\b';
    this.shopcartBtn.className = '\bshopcart\b-\bbtn\b';
    this.shopcartBtn.textContent = '\bContinue\b \bshopping\b';
    this.shopcartBtn1.className = '\bshopcart\b-\bbtn\b';
    this.shopcartBtn1.textContent = '\bUpdate\b \bcart\b';
    this.cartTotals.className = '\bcart\b-\btotals\b';
    this.cartTitle1.className = '\bcart\b-\btitle\b';
    this.cartTitle1.textContent = '\bCart\b \btotals\b';
    this.mt5.className = '\bmt\b-\b5\b \bmb\b-\b2\b';
    this.divTotalsCounter.className = '\bdiv\b-\btotals\b-\bcounter\b \bborder\b-\bb\b \bborder\b-\bb\b-\bgray\b-\b500\b';
    this.span.textContent = '\bSubtotal\b';
    this.subtotalCounter.className = '\bsubtotal\b-\bcounter\b \bcart__total\b-\bprice\b';
    this.subtotalCounter.textContent = '\b0\b';
    this.divTotalsCounter1.className = '\bdiv\b-\btotals\b-\bcounter\b';
    this.span1.textContent = '\bTotal\b';
    this.totalCounter.className = '\btotal\b-\bcounter\b \bcart__total\b-\bprice\b';
    this.totalCounter.textContent = '\b0\b';
    this.textPtc.className = '\btext\b-\bptc\b';
    this.textPtc.textContent = '\bProceed\b \bto\b \bcheckout\b';


    // Строим иерархию
    this.root = this.customContainer;
    this.customContainer.appendChild(this.shoppingCart);
    this.shoppingCart.appendChild(this.cartTitle);
    this.shoppingCart.appendChild(this.divShoppingCartContent);
    this.shoppingCart.appendChild(this.divShopcartBtns);
    this.divShopcartBtns.appendChild(this.shopcartBtn);
    this.divShopcartBtns.appendChild(this.shopcartBtn);
    this.customContainer.appendChild(this.cartTotals);
    this.cartTotals.appendChild(this.cartTitle);
    this.cartTotals.appendChild(this.mt5);
    this.mt5.appendChild(this.divTotalsCounter);
    this.divTotalsCounter.appendChild(this.span);
    this.divTotalsCounter.appendChild(this.subtotalCounter);
    this.mt5.appendChild(this.divTotalsCounter);
    this.divTotalsCounter.appendChild(this.span);
    this.divTotalsCounter.appendChild(this.totalCounter);
    this.cartTotals.appendChild(this.textPtc);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('customContainer', this.customContainer);
    this._elements.set('shoppingCart', this.shoppingCart);
    this._elements.set('cartTitle', this.cartTitle);
    this._elements.set('divShoppingCartContent', this.divShoppingCartContent);
    this._elements.set('divShopcartBtns', this.divShopcartBtns);
    this._elements.set('shopcartBtn', this.shopcartBtn);
    this._elements.set('shopcartBtn1', this.shopcartBtn1);
    this._elements.set('cartTotals', this.cartTotals);
    this._elements.set('cartTitle1', this.cartTitle1);
    this._elements.set('mt5', this.mt5);
    this._elements.set('divTotalsCounter', this.divTotalsCounter);
    this._elements.set('span', this.span);
    this._elements.set('subtotalCounter', this.subtotalCounter);
    this._elements.set('divTotalsCounter1', this.divTotalsCounter1);
    this._elements.set('span1', this.span1);
    this._elements.set('totalCounter', this.totalCounter);
    this._elements.set('textPtc', this.textPtc);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      customContainer: this.customContainer,
      shoppingCart: this.shoppingCart,
      cartTitle: this.cartTitle,
      divShoppingCartContent: this.divShoppingCartContent,
      divShopcartBtns: this.divShopcartBtns,
      shopcartBtn: this.shopcartBtn,
      shopcartBtn1: this.shopcartBtn1,
      cartTotals: this.cartTotals,
      cartTitle1: this.cartTitle1,
      mt5: this.mt5,
      divTotalsCounter: this.divTotalsCounter,
      span: this.span,
      subtotalCounter: this.subtotalCounter,
      divTotalsCounter1: this.divTotalsCounter1,
      span1: this.span1,
      totalCounter: this.totalCounter,
      textPtc: this.textPtc
    };
  }

  mount(parent: Element): Cart {
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