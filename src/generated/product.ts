// Автогенерированный класс для шаблона: product
export class Product {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLElement;
  public product!: HTMLElement;
  public productimageWrap!: HTMLDivElement;
  public productimg!: HTMLImageElement;
  public productinfo!: HTMLDivElement;
  public productheader!: HTMLElement;
  public producttitle!: HTMLHeadingElement;
  public productdeleteButton!: HTMLButtonElement;
  public relative!: HTMLDivElement;
  public absolute!: HTMLSpanElement;
  public absolute1!: HTMLSpanElement;
  public productbody!: HTMLDivElement;
  public productcolor!: HTMLParagraphElement;
  public productsizeWrap!: HTMLParagraphElement;
  public productsize!: HTMLSpanElement;
  public productfooter!: HTMLElement;
  public productquantityWrap!: HTMLDivElement;
  public p!: HTMLParagraphElement;
  public div!: HTMLDivElement;
  public productquantityMinus!: HTMLButtonElement;
  public inlineFlex!: HTMLElement;
  public block!: HTMLSpanElement;
  public productquantity!: HTMLSpanElement;
  public productquantityPlus!: HTMLButtonElement;
  public inlineFlex1!: HTMLElement;
  public block1!: HTMLSpanElement;
  public p1!: HTMLParagraphElement;
  public productprice!: HTMLSpanElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.product = document.createElement('article') as HTMLElement;
    this.productimageWrap = document.createElement('div') as HTMLDivElement;
    this.productimg = document.createElement('img') as HTMLImageElement;
    this.productinfo = document.createElement('div') as HTMLDivElement;
    this.productheader = document.createElement('header') as HTMLElement;
    this.producttitle = document.createElement('h2') as HTMLHeadingElement;
    this.productdeleteButton = document.createElement('button') as HTMLButtonElement;
    this.relative = document.createElement('div') as HTMLDivElement;
    this.absolute = document.createElement('span') as HTMLSpanElement;
    this.absolute1 = document.createElement('span') as HTMLSpanElement;
    this.productbody = document.createElement('div') as HTMLDivElement;
    this.productcolor = document.createElement('p') as HTMLParagraphElement;
    this.productsizeWrap = document.createElement('p') as HTMLParagraphElement;
    this.productsize = document.createElement('span') as HTMLSpanElement;
    this.productfooter = document.createElement('footer') as HTMLElement;
    this.productquantityWrap = document.createElement('div') as HTMLDivElement;
    this.p = document.createElement('p') as HTMLParagraphElement;
    this.div = document.createElement('div') as HTMLDivElement;
    this.productquantityMinus = document.createElement('button') as HTMLButtonElement;
    this.inlineFlex = document.createElement('i') as HTMLElement;
    this.block = document.createElement('span') as HTMLSpanElement;
    this.productquantity = document.createElement('span') as HTMLSpanElement;
    this.productquantityPlus = document.createElement('button') as HTMLButtonElement;
    this.inlineFlex1 = document.createElement('i') as HTMLElement;
    this.block1 = document.createElement('span') as HTMLSpanElement;
    this.p1 = document.createElement('p') as HTMLParagraphElement;
    this.productprice = document.createElement('span') as HTMLSpanElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.product.className = '\bproduct\b';
    this.productimageWrap.className = '\bproduct__image\b-\bwrap\b';
    this.productimg.className = '\bproduct__img\b';
    this.productinfo.className = '\bproduct__info\b';
    this.productheader.className = '\bproduct__header\b';
    this.producttitle.className = '\bproduct__title\b';
    this.productdeleteButton.className = '\bproduct__delete\b-\bbutton\b';
    this.relative.className = '\brelative\b \bw\b-\b5\b \bh\b-\b5\b \bcursor\b-\bpointer\b';
    this.absolute.className = '\babsolute\b \binset\b-\b0\b \bbg\b-\bwhite\b \bh\b-[\b2px\b] \brotate\b-\b45\b \btop\b-\b1\b/\b2\b \bblock\b';
    this.absolute1.className = '\babsolute\b \binset\b-\b0\b \bbg\b-\bwhite\b \bh\b-[\b2px\b] -\brotate\b-\b45\b \btop\b-\b1\b/\b2\b \bblock\b';
    this.productbody.className = '\bproduct__body\b';
    this.productcolor.className = '\bproduct__color\b';
    this.productsizeWrap.className = '\bproduct__size\b-\bwrap\b';
    this.productsize.className = '\bproduct__size\b';
    this.productfooter.className = '\bproduct__footer\b';
    this.productquantityWrap.className = '\bproduct__quantity\b-\bwrap\b';
    this.p.textContent = '\bQty\b';
    this.productquantityMinus.className = '\bproduct__quantity\b-\bminus\b \bcursor\b-\bpointer\b';
    this.inlineFlex.className = '\binline\b-\bflex\b \bitems\b-\bcenter\b \bjustify\b-\bcenter\b \bw\b-\b10\b \bh\b-\b10\b \brounded\b-\bfull\b \btransition\b-\bcolors\b';
    this.block.className = '\bblock\b \bw\b-\b0\b \bh\b-\b0\b \bborder\b-\bl\b-[\b10px\b] \bborder\b-\bl\b-\bwhite\b \bborder\b-\bt\b-[\b7px\b] \bborder\b-\bb\b-[\b7px\b] \bborder\b-\bt\b-\btransparent\b \bborder\b-\bb\b-\btransparent\b \bml\b-[\b2px\b]';
    this.productquantity.className = '\bproduct__quantity\b';
    this.productquantityPlus.className = '\bproduct__quantity\b-\bplus\b \bcursor\b-\bpointer\b';
    this.inlineFlex1.className = '\binline\b-\bflex\b \bitems\b-\bcenter\b \bjustify\b-\bcenter\b \bw\b-\b10\b \bh\b-\b10\b \brounded\b-\bful\b \btransition\b-\bcolors\b';
    this.block1.className = '\bblock\b \bw\b-\b0\b \bh\b-\b0\b \bborder\b-\bl\b-[\b10px\b] \bborder\b-\bl\b-\bwhite\b \bborder\b-\bt\b-[\b7px\b] \bborder\b-\bb\b-[\b7px\b] \bborder\b-\bt\b-\btransparent\b \bborder\b-\bb\b-\btransparent\b \bml\b-[\b2px\b]';
    this.productprice.className = '\bproduct__price\b';


    // Строим иерархию
    this.root = this.product;
    this.product.appendChild(this.productimageWrap);
    this.productimageWrap.appendChild(this.productimg);
    this.product.appendChild(this.productinfo);
    this.productinfo.appendChild(this.productheader);
    this.productheader.appendChild(this.producttitle);
    this.productheader.appendChild(this.productdeleteButton);
    this.productdeleteButton.appendChild(this.relative);
    this.relative.appendChild(this.absolute);
    this.relative.appendChild(this.absolute);
    this.productinfo.appendChild(this.productbody);
    this.productbody.appendChild(this.productcolor);
    this.productbody.appendChild(this.productsizeWrap);
    this.productsizeWrap.appendChild(this.productsize);
    this.productinfo.appendChild(this.productfooter);
    this.productfooter.appendChild(this.productquantityWrap);
    this.productquantityWrap.appendChild(this.p);
    this.productquantityWrap.appendChild(this.div);
    this.div.appendChild(this.productquantityMinus);
    this.productquantityMinus.appendChild(this.inlineFlex);
    this.inlineFlex.appendChild(this.block);
    this.div.appendChild(this.productquantity);
    this.div.appendChild(this.productquantityPlus);
    this.productquantityPlus.appendChild(this.inlineFlex);
    this.inlineFlex.appendChild(this.block);
    this.productfooter.appendChild(this.p);
    this.p.appendChild(this.productprice);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('product', this.product);
    this._elements.set('productimageWrap', this.productimageWrap);
    this._elements.set('productimg', this.productimg);
    this._elements.set('productinfo', this.productinfo);
    this._elements.set('productheader', this.productheader);
    this._elements.set('producttitle', this.producttitle);
    this._elements.set('productdeleteButton', this.productdeleteButton);
    this._elements.set('relative', this.relative);
    this._elements.set('absolute', this.absolute);
    this._elements.set('absolute1', this.absolute1);
    this._elements.set('productbody', this.productbody);
    this._elements.set('productcolor', this.productcolor);
    this._elements.set('productsizeWrap', this.productsizeWrap);
    this._elements.set('productsize', this.productsize);
    this._elements.set('productfooter', this.productfooter);
    this._elements.set('productquantityWrap', this.productquantityWrap);
    this._elements.set('p', this.p);
    this._elements.set('div', this.div);
    this._elements.set('productquantityMinus', this.productquantityMinus);
    this._elements.set('inlineFlex', this.inlineFlex);
    this._elements.set('block', this.block);
    this._elements.set('productquantity', this.productquantity);
    this._elements.set('productquantityPlus', this.productquantityPlus);
    this._elements.set('inlineFlex1', this.inlineFlex1);
    this._elements.set('block1', this.block1);
    this._elements.set('p1', this.p1);
    this._elements.set('productprice', this.productprice);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      product: this.product,
      productimageWrap: this.productimageWrap,
      productimg: this.productimg,
      productinfo: this.productinfo,
      productheader: this.productheader,
      producttitle: this.producttitle,
      productdeleteButton: this.productdeleteButton,
      relative: this.relative,
      absolute: this.absolute,
      absolute1: this.absolute1,
      productbody: this.productbody,
      productcolor: this.productcolor,
      productsizeWrap: this.productsizeWrap,
      productsize: this.productsize,
      productfooter: this.productfooter,
      productquantityWrap: this.productquantityWrap,
      p: this.p,
      div: this.div,
      productquantityMinus: this.productquantityMinus,
      inlineFlex: this.inlineFlex,
      block: this.block,
      productquantity: this.productquantity,
      productquantityPlus: this.productquantityPlus,
      inlineFlex1: this.inlineFlex1,
      block1: this.block1,
      p1: this.p1,
      productprice: this.productprice
    };
  }

  mount(parent: Element): Product {
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