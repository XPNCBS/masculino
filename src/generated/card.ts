// Автогенерированный класс для шаблона: card
export class Card {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLElement;
  public card!: HTMLElement;
  public cardimageBlock!: HTMLElement;
  public cardvisibleImg!: HTMLImageElement;
  public cardhoverImg!: HTMLImageElement;
  public cardbody!: HTMLDivElement;
  public titleXbutton!: HTMLDivElement;
  public cardtitle!: HTMLHeadingElement;
  public cardaction!: HTMLButtonElement;
  public overflowVisible!: HTMLElement;
  public svgpath!: HTMLElement;
  public price!: HTMLParagraphElement;
  public footer!: HTMLElement;
  public cardlink!: HTMLAnchorElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.card = document.createElement('article') as HTMLElement;
    this.cardimageBlock = document.createElement('header') as HTMLElement;
    this.cardvisibleImg = document.createElement('img') as HTMLImageElement;
    this.cardhoverImg = document.createElement('img') as HTMLImageElement;
    this.cardbody = document.createElement('div') as HTMLDivElement;
    this.titleXbutton = document.createElement('div') as HTMLDivElement;
    this.cardtitle = document.createElement('h2') as HTMLHeadingElement;
    this.cardaction = document.createElement('button') as HTMLButtonElement;
    this.overflowVisible = document.createElement('svg') as HTMLElement;
    this.svgpath = document.createElement('path') as HTMLElement;
    this.price = document.createElement('p') as HTMLParagraphElement;
    this.footer = document.createElement('footer') as HTMLElement;
    this.cardlink = document.createElement('a') as HTMLAnchorElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.card.className = '\bcard\b';
    this.cardimageBlock.className = '\bcard__image\b-\bblock\b';
    this.cardvisibleImg.className = '\bcard__visible\b-\bimg\b';
    this.cardhoverImg.className = '\bcard__hover\b-\bimg\b';
    this.cardbody.className = '\bcard__body\b';
    this.titleXbutton.className = '\btitleXbutton\b';
    this.cardtitle.className = '\bcard__title\b';
    this.cardaction.className = '\bcard__action\b';
    this.overflowVisible.className = '\boverflow\b-\bvisible\b';
    this.svgpath.className = '\bsvg__path\b';
    this.price.className = '\bprice\b';
    this.footer.className = '\bfooter\b';
    this.cardlink.className = '\bcard__link\b';


    // Строим иерархию
    this.root = this.card;
    this.card.appendChild(this.cardimageBlock);
    this.cardimageBlock.appendChild(this.cardvisibleImg);
    this.cardimageBlock.appendChild(this.cardhoverImg);
    this.card.appendChild(this.cardbody);
    this.cardbody.appendChild(this.titleXbutton);
    this.titleXbutton.appendChild(this.cardtitle);
    this.titleXbutton.appendChild(this.cardaction);
    this.cardaction.appendChild(this.overflowVisible);
    this.overflowVisible.appendChild(this.svgpath);
    this.cardbody.appendChild(this.price);
    this.card.appendChild(this.footer);
    this.footer.appendChild(this.cardlink);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('card', this.card);
    this._elements.set('cardimageBlock', this.cardimageBlock);
    this._elements.set('cardvisibleImg', this.cardvisibleImg);
    this._elements.set('cardhoverImg', this.cardhoverImg);
    this._elements.set('cardbody', this.cardbody);
    this._elements.set('titleXbutton', this.titleXbutton);
    this._elements.set('cardtitle', this.cardtitle);
    this._elements.set('cardaction', this.cardaction);
    this._elements.set('overflowVisible', this.overflowVisible);
    this._elements.set('svgpath', this.svgpath);
    this._elements.set('price', this.price);
    this._elements.set('footer', this.footer);
    this._elements.set('cardlink', this.cardlink);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      card: this.card,
      cardimageBlock: this.cardimageBlock,
      cardvisibleImg: this.cardvisibleImg,
      cardhoverImg: this.cardhoverImg,
      cardbody: this.cardbody,
      titleXbutton: this.titleXbutton,
      cardtitle: this.cardtitle,
      cardaction: this.cardaction,
      overflowVisible: this.overflowVisible,
      svgpath: this.svgpath,
      price: this.price,
      footer: this.footer,
      cardlink: this.cardlink
    };
  }

  mount(parent: Element): Card {
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