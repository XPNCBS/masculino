// Автогенерированный класс для шаблона: shop
export class Shop {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLDivElement;
  public div!: HTMLDivElement;
  public sectionBreadcrumbs!: HTMLElement;
  public breadCrumbs!: HTMLElement;
  public breadCrumbslink!: HTMLAnchorElement;
  public px3!: HTMLSpanElement;
  public div1!: HTMLDivElement;
  public prevPage!: HTMLAnchorElement;
  public inlineFlex!: HTMLElement;
  public block!: HTMLSpanElement;
  public nextPage!: HTMLAnchorElement;
  public inlineFlex1!: HTMLElement;
  public block1!: HTMLSpanElement;
  public productDescription!: HTMLElement;
  public productDescriptionblock!: HTMLDivElement;
  public div2!: HTMLDivElement;
  public mainImage!: HTMLImageElement;
  public imagesList!: HTMLUListElement;
  public productDescriptionblock1!: HTMLDivElement;
  public grid!: HTMLDivElement;
  public productTitle!: HTMLHeadingElement;
  public productPrice!: HTMLParagraphElement;
  public wrap!: HTMLDivElement;
  public productOptions!: HTMLUListElement;
  public productOptionsoption!: HTMLLIElement;
  public productColors!: HTMLDivElement;
  public colorWrap!: HTMLDivElement;
  public productSizes!: HTMLLIElement;
  public productOptionspading!: HTMLDivElement;
  public currentSizeButton!: HTMLButtonElement;
  public currentSizeOption!: HTMLSpanElement;
  public span!: HTMLSpanElement;
  public productQuantity!: HTMLLIElement;
  public productOptionspading1!: HTMLDivElement;
  public flex!: HTMLDivElement;
  public quantityMinusButton!: HTMLButtonElement;
  public inlineFlex2!: HTMLElement;
  public block2!: HTMLSpanElement;
  public quantity!: HTMLSpanElement;
  public quantityPlusButton!: HTMLButtonElement;
  public inlineFlex3!: HTMLElement;
  public block3!: HTMLSpanElement;
  public btnWrap!: HTMLLIElement;
  public addToCart!: HTMLButtonElement;
  public AdditionalInformation!: HTMLElement;
  public customContainer!: HTMLDivElement;
  public h2!: HTMLHeadingElement;
  public table!: HTMLTableElement;
  public tbody!: HTMLElement;
  public tr!: HTMLTableRowElement;
  public py5!: HTMLTableCellElement;
  public pl30!: HTMLTableCellElement;
  public colors!: HTMLDivElement;
  public tr1!: HTMLTableRowElement;
  public py51!: HTMLTableCellElement;
  public pl301!: HTMLTableCellElement;
  public material!: HTMLDivElement;
  public tr2!: HTMLTableRowElement;
  public py52!: HTMLTableCellElement;
  public pl302!: HTMLTableCellElement;
  public sizes!: HTMLDivElement;
  public borderB!: HTMLDivElement;
  public customContainer1!: HTMLDivElement;
  public div3!: HTMLDivElement;
  public span1!: HTMLSpanElement;
  public SKU!: HTMLSpanElement;
  public span2!: HTMLSpanElement;
  public categories!: HTMLSpanElement;
  public customContainer2!: HTMLElement;
  public h21!: HTMLHeadingElement;
  public cards!: HTMLDivElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.div = document.createElement('div') as HTMLDivElement;
    this.sectionBreadcrumbs = document.createElement('section') as HTMLElement;
    this.breadCrumbs = document.createElement('nav') as HTMLElement;
    this.breadCrumbslink = document.createElement('a') as HTMLAnchorElement;
    this.px3 = document.createElement('span') as HTMLSpanElement;
    this.div1 = document.createElement('div') as HTMLDivElement;
    this.prevPage = document.createElement('a') as HTMLAnchorElement;
    this.inlineFlex = document.createElement('i') as HTMLElement;
    this.block = document.createElement('span') as HTMLSpanElement;
    this.nextPage = document.createElement('a') as HTMLAnchorElement;
    this.inlineFlex1 = document.createElement('i') as HTMLElement;
    this.block1 = document.createElement('span') as HTMLSpanElement;
    this.productDescription = document.createElement('section') as HTMLElement;
    this.productDescriptionblock = document.createElement('div') as HTMLDivElement;
    this.div2 = document.createElement('div') as HTMLDivElement;
    this.mainImage = document.createElement('img') as HTMLImageElement;
    this.imagesList = document.createElement('ul') as HTMLUListElement;
    this.productDescriptionblock1 = document.createElement('div') as HTMLDivElement;
    this.grid = document.createElement('div') as HTMLDivElement;
    this.productTitle = document.createElement('h1') as HTMLHeadingElement;
    this.productPrice = document.createElement('p') as HTMLParagraphElement;
    this.wrap = document.createElement('div') as HTMLDivElement;
    this.productOptions = document.createElement('ul') as HTMLUListElement;
    this.productOptionsoption = document.createElement('li') as HTMLLIElement;
    this.productColors = document.createElement('div') as HTMLDivElement;
    this.colorWrap = document.createElement('div') as HTMLDivElement;
    this.productSizes = document.createElement('li') as HTMLLIElement;
    this.productOptionspading = document.createElement('div') as HTMLDivElement;
    this.currentSizeButton = document.createElement('button') as HTMLButtonElement;
    this.currentSizeOption = document.createElement('span') as HTMLSpanElement;
    this.span = document.createElement('span') as HTMLSpanElement;
    this.productQuantity = document.createElement('li') as HTMLLIElement;
    this.productOptionspading1 = document.createElement('div') as HTMLDivElement;
    this.flex = document.createElement('div') as HTMLDivElement;
    this.quantityMinusButton = document.createElement('button') as HTMLButtonElement;
    this.inlineFlex2 = document.createElement('i') as HTMLElement;
    this.block2 = document.createElement('span') as HTMLSpanElement;
    this.quantity = document.createElement('span') as HTMLSpanElement;
    this.quantityPlusButton = document.createElement('button') as HTMLButtonElement;
    this.inlineFlex3 = document.createElement('i') as HTMLElement;
    this.block3 = document.createElement('span') as HTMLSpanElement;
    this.btnWrap = document.createElement('li') as HTMLLIElement;
    this.addToCart = document.createElement('button') as HTMLButtonElement;
    this.AdditionalInformation = document.createElement('section') as HTMLElement;
    this.customContainer = document.createElement('div') as HTMLDivElement;
    this.h2 = document.createElement('h2') as HTMLHeadingElement;
    this.table = document.createElement('table') as HTMLTableElement;
    this.tbody = document.createElement('tbody') as HTMLElement;
    this.tr = document.createElement('tr') as HTMLTableRowElement;
    this.py5 = document.createElement('td') as HTMLTableCellElement;
    this.pl30 = document.createElement('td') as HTMLTableCellElement;
    this.colors = document.createElement('div') as HTMLDivElement;
    this.tr1 = document.createElement('tr') as HTMLTableRowElement;
    this.py51 = document.createElement('td') as HTMLTableCellElement;
    this.pl301 = document.createElement('td') as HTMLTableCellElement;
    this.material = document.createElement('div') as HTMLDivElement;
    this.tr2 = document.createElement('tr') as HTMLTableRowElement;
    this.py52 = document.createElement('td') as HTMLTableCellElement;
    this.pl302 = document.createElement('td') as HTMLTableCellElement;
    this.sizes = document.createElement('div') as HTMLDivElement;
    this.borderB = document.createElement('div') as HTMLDivElement;
    this.customContainer1 = document.createElement('div') as HTMLDivElement;
    this.div3 = document.createElement('div') as HTMLDivElement;
    this.span1 = document.createElement('span') as HTMLSpanElement;
    this.SKU = document.createElement('span') as HTMLSpanElement;
    this.span2 = document.createElement('span') as HTMLSpanElement;
    this.categories = document.createElement('span') as HTMLSpanElement;
    this.customContainer2 = document.createElement('section') as HTMLElement;
    this.h21 = document.createElement('h2') as HTMLHeadingElement;
    this.cards = document.createElement('div') as HTMLDivElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.sectionBreadcrumbs.className = '\bsection\b-\bbreadcrumbs\b \bflex\b \bjustify\b-\bbetween\b \bitems\b-\bcenter\b \bcustom\b-\bcontainer\b';
    this.breadCrumbs.className = '\bbread\b-\bcrumbs\b \bpy\b-\b5\b';
    this.breadCrumbslink.className = '\bbread\b-\bcrumbs__link\b';
    this.breadCrumbslink.textContent = '\bShop\b';
    this.px3.className = '\bpx\b-\b3\b';
    this.px3.textContent = '/';
    this.prevPage.className = '\bprev\b-\bpage\b';
    this.inlineFlex.className = '\binline\b-\bflex\b \bitems\b-\bcenter\b \bjustify\b-\bcenter\b \bw\b-\b10\b \bh\b-\b10\b \brounded\b-\bfull\b \btransition\b-\bcolors\b';
    this.block.className = '\bblock\b \bw\b-\b0\b \bh\b-\b0\b \bborder\b-\bl\b-[\b10px\b] \bborder\b-\bl\b-\bwhite\b \bborder\b-\bt\b-[\b7px\b] \bborder\b-\bb\b-[\b7px\b] \bborder\b-\bt\b-\btransparent\b \bborder\b-\bb\b-\btransparent\b \bml\b-[\b2px\b]';
    this.nextPage.className = '\bnext\b-\bpage\b';
    this.inlineFlex1.className = '\binline\b-\bflex\b \bitems\b-\bcenter\b \bjustify\b-\bcenter\b \bw\b-\b10\b \bh\b-\b10\b \brounded\b-\bful\b \btransition\b-\bcolors\b';
    this.block1.className = '\bblock\b \bw\b-\b0\b \bh\b-\b0\b \bborder\b-\bl\b-[\b10px\b] \bborder\b-\bl\b-\bwhite\b \bborder\b-\bt\b-[\b7px\b] \bborder\b-\bb\b-[\b7px\b] \bborder\b-\bt\b-\btransparent\b \bborder\b-\bb\b-\btransparent\b \bml\b-[\b2px\b]';
    this.productDescription.className = '\bproduct\b-\bdescription\b \bcustom\b-\bcontainer\b';
    this.productDescriptionblock.className = '\bproduct\b-\bdescription__block\b';
    this.mainImage.className = '\bmain\b-\bimage\b';
    this.imagesList.className = '\bimages\b-\blist\b';
    this.productDescriptionblock1.className = '\bproduct\b-\bdescription__block\b \bproduct\b-\bdescriptionright__block\b';
    this.grid.className = '\bgrid\b \bgap\b-\b3\b';
    this.productTitle.className = '\bproduct\b-\btitle\b \bfont\b-\bbold\b \btext\b-\b2xl\b';
    this.productPrice.className = '\bproduct\b-\bprice\b \btext\b-\blg\b';
    this.wrap.className = '\bwrap\b';
    this.productOptions.className = '\bproduct\b-\boptions\b';
    this.productOptionsoption.className = '\bproduct\b-\boptions__option\b \brounded\b-\bt\b-\bmd\b';
    this.productColors.className = '\bproduct\b-\bcolors\b \bproduct\b-\boptions__pading\b';
    this.colorWrap.className = '\bcolor\b-\bwrap\b';
    this.productSizes.className = '\bproduct\b-\bsizes\b \bproduct\b-\boptions__option\b';
    this.productOptionspading.className = '\bproduct\b-\boptions__pading\b \bflex\b \bjustify\b-\bbetween\b \bitems\b-\bcenter\b';
    this.currentSizeButton.className = '\bcurrent\b-\bsize\b-\bbutton\b \bflex\b \bitems\b-\bcenter\b \bgap\b-\b1\b \bcursor\b-\bpointer\b';
    this.currentSizeOption.className = '\bcurrent\b-\bsize\b-\boption\b';
    this.span.textContent = '▼';
    this.productQuantity.className = '\bproduct\b-\bquantity\b \bproduct\b-\boptions__option\b';
    this.productOptionspading1.className = '\bproduct\b-\boptions__pading\b \bflex\b \bjustify\b-\bbetween\b \bitems\b-\bcenter\b';
    this.flex.className = '\bflex\b \bitems\b-\bcenter\b';
    this.quantityMinusButton.className = '\bquantity\b-\bminus\b-\bbutton\b \bcursor\b-\bpointer\b';
    this.inlineFlex2.className = '\binline\b-\bflex\b \bitems\b-\bcenter\b \bjustify\b-\bcenter\b \bw\b-\b10\b \bh\b-\b10\b \brounded\b-\bfull\b \btransition\b-\bcolors\b';
    this.block2.className = '\bblock\b \bw\b-\b0\b \bh\b-\b0\b \bborder\b-\bl\b-[\b10px\b] \bborder\b-\bl\b-\bwhite\b \bborder\b-\bt\b-[\b7px\b] \bborder\b-\bb\b-[\b7px\b] \bborder\b-\bt\b-\btransparent\b \bborder\b-\bb\b-\btransparent\b \bml\b-[\b2px\b]';
    this.quantity.className = '\bquantity\b';
    this.quantity.textContent = '\b1\b';
    this.quantityPlusButton.className = '\bquantity\b-\bplus\b-\bbutton\b \bcursor\b-\bpointer\b';
    this.inlineFlex3.className = '\binline\b-\bflex\b \bitems\b-\bcenter\b \bjustify\b-\bcenter\b \bw\b-\b10\b \bh\b-\b10\b \brounded\b-\bful\b \btransition\b-\bcolors\b';
    this.block3.className = '\bblock\b \bw\b-\b0\b \bh\b-\b0\b \bborder\b-\bl\b-[\b10px\b] \bborder\b-\bl\b-\bwhite\b \bborder\b-\bt\b-[\b7px\b] \bborder\b-\bb\b-[\b7px\b] \bborder\b-\bt\b-\btransparent\b \bborder\b-\bb\b-\btransparent\b \bml\b-[\b2px\b]';
    this.btnWrap.className = '\bbtn\b-\bwrap\b';
    this.addToCart.className = '\badd\b-\bto\b-\bcart\b \bitems\b-\bcenter\b';
    this.addToCart.textContent = 'Добавить в корзину';
    this.AdditionalInformation.className = '\bAdditional\b-\binformation\b \bmt\b-\b20\b';
    this.customContainer.className = '\bcustom\b-\bcontainer\b \bflex\b \bitems\b-\bcenter\b \bjustify\b-\bcenter\b \bflex\b-\bcol\b \bpy\b-\b10\b';
    this.h2.textContent = '\bAdditional\b \binformation\b';
    this.py5.className = '\bpy\b-\b5\b';
    this.py5.textContent = 'Цвет';
    this.pl30.className = '\bpl\b-\b30\b';
    this.colors.className = '\bcolors\b';
    this.py51.className = '\bpy\b-\b5\b';
    this.py51.textContent = 'Материал';
    this.pl301.className = '\bpl\b-\b30\b';
    this.material.className = '\bmaterial\b';
    this.py52.className = '\bpy\b-\b5\b';
    this.py52.textContent = 'Размер';
    this.pl302.className = '\bpl\b-\b30\b';
    this.sizes.className = '\bsizes\b';
    this.borderB.className = '\bborder\b-\bb\b \bborder\b-\bt\b \bpy\b-\b5\b \bw\b';
    this.customContainer1.className = '\bcustom\b-\bcontainer\b \bflex\b \bitems\b-\bcenter\b \bjustify\b-\bcenter\b \bflex\b-\bcol\b';
    this.SKU.className = '\bSKU\b';
    this.categories.className = '\bcategories\b';
    this.customContainer2.className = '\bcustom\b-\bcontainer\b';
    this.h21.textContent = '\bRelated\b \bproducts\b';
    this.cards.className = '\bcards\b \bcards\b-\bshop\b';


    // Строим иерархию
    this.root = this.div;
    this.div.appendChild(this.sectionBreadcrumbs);
    this.sectionBreadcrumbs.appendChild(this.breadCrumbs);
    this.breadCrumbs.appendChild(this.breadCrumbslink);
    this.breadCrumbs.appendChild(this.px3);
    this.sectionBreadcrumbs.appendChild(this.div);
    this.div.appendChild(this.prevPage);
    this.prevPage.appendChild(this.inlineFlex);
    this.inlineFlex.appendChild(this.block);
    this.div.appendChild(this.nextPage);
    this.nextPage.appendChild(this.inlineFlex);
    this.inlineFlex.appendChild(this.block);
    this.div.appendChild(this.productDescription);
    this.productDescription.appendChild(this.productDescriptionblock);
    this.productDescriptionblock.appendChild(this.div);
    this.div.appendChild(this.mainImage);
    this.productDescriptionblock.appendChild(this.imagesList);
    this.productDescription.appendChild(this.productDescriptionblock);
    this.productDescriptionblock.appendChild(this.grid);
    this.grid.appendChild(this.productTitle);
    this.grid.appendChild(this.productPrice);
    this.grid.appendChild(this.wrap);
    this.wrap.appendChild(this.productOptions);
    this.productOptions.appendChild(this.productOptionsoption);
    this.productOptionsoption.appendChild(this.productColors);
    this.productColors.appendChild(this.colorWrap);
    this.productOptions.appendChild(this.productSizes);
    this.productSizes.appendChild(this.productOptionspading);
    this.productOptionspading.appendChild(this.currentSizeButton);
    this.currentSizeButton.appendChild(this.currentSizeOption);
    this.currentSizeButton.appendChild(this.span);
    this.productOptions.appendChild(this.productQuantity);
    this.productQuantity.appendChild(this.productOptionspading);
    this.productOptionspading.appendChild(this.flex);
    this.flex.appendChild(this.quantityMinusButton);
    this.quantityMinusButton.appendChild(this.inlineFlex);
    this.inlineFlex.appendChild(this.block);
    this.flex.appendChild(this.quantity);
    this.flex.appendChild(this.quantityPlusButton);
    this.quantityPlusButton.appendChild(this.inlineFlex);
    this.inlineFlex.appendChild(this.block);
    this.productOptions.appendChild(this.btnWrap);
    this.btnWrap.appendChild(this.addToCart);
    this.div.appendChild(this.AdditionalInformation);
    this.AdditionalInformation.appendChild(this.customContainer);
    this.customContainer.appendChild(this.h2);
    this.customContainer.appendChild(this.table);
    this.table.appendChild(this.tbody);
    this.tbody.appendChild(this.tr);
    this.tr.appendChild(this.py5);
    this.tr.appendChild(this.pl30);
    this.pl30.appendChild(this.colors);
    this.tbody.appendChild(this.tr);
    this.tr.appendChild(this.py5);
    this.tr.appendChild(this.pl30);
    this.pl30.appendChild(this.material);
    this.tbody.appendChild(this.tr);
    this.tr.appendChild(this.py5);
    this.tr.appendChild(this.pl30);
    this.pl30.appendChild(this.sizes);
    this.AdditionalInformation.appendChild(this.borderB);
    this.borderB.appendChild(this.customContainer);
    this.customContainer.appendChild(this.div);
    this.div.appendChild(this.span);
    this.span.appendChild(this.SKU);
    this.div.appendChild(this.span);
    this.span.appendChild(this.categories);
    this.div.appendChild(this.customContainer);
    this.customContainer.appendChild(this.h2);
    this.customContainer.appendChild(this.cards);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('div', this.div);
    this._elements.set('sectionBreadcrumbs', this.sectionBreadcrumbs);
    this._elements.set('breadCrumbs', this.breadCrumbs);
    this._elements.set('breadCrumbslink', this.breadCrumbslink);
    this._elements.set('px3', this.px3);
    this._elements.set('div1', this.div1);
    this._elements.set('prevPage', this.prevPage);
    this._elements.set('inlineFlex', this.inlineFlex);
    this._elements.set('block', this.block);
    this._elements.set('nextPage', this.nextPage);
    this._elements.set('inlineFlex1', this.inlineFlex1);
    this._elements.set('block1', this.block1);
    this._elements.set('productDescription', this.productDescription);
    this._elements.set('productDescriptionblock', this.productDescriptionblock);
    this._elements.set('div2', this.div2);
    this._elements.set('mainImage', this.mainImage);
    this._elements.set('imagesList', this.imagesList);
    this._elements.set('productDescriptionblock1', this.productDescriptionblock1);
    this._elements.set('grid', this.grid);
    this._elements.set('productTitle', this.productTitle);
    this._elements.set('productPrice', this.productPrice);
    this._elements.set('wrap', this.wrap);
    this._elements.set('productOptions', this.productOptions);
    this._elements.set('productOptionsoption', this.productOptionsoption);
    this._elements.set('productColors', this.productColors);
    this._elements.set('colorWrap', this.colorWrap);
    this._elements.set('productSizes', this.productSizes);
    this._elements.set('productOptionspading', this.productOptionspading);
    this._elements.set('currentSizeButton', this.currentSizeButton);
    this._elements.set('currentSizeOption', this.currentSizeOption);
    this._elements.set('span', this.span);
    this._elements.set('productQuantity', this.productQuantity);
    this._elements.set('productOptionspading1', this.productOptionspading1);
    this._elements.set('flex', this.flex);
    this._elements.set('quantityMinusButton', this.quantityMinusButton);
    this._elements.set('inlineFlex2', this.inlineFlex2);
    this._elements.set('block2', this.block2);
    this._elements.set('quantity', this.quantity);
    this._elements.set('quantityPlusButton', this.quantityPlusButton);
    this._elements.set('inlineFlex3', this.inlineFlex3);
    this._elements.set('block3', this.block3);
    this._elements.set('btnWrap', this.btnWrap);
    this._elements.set('addToCart', this.addToCart);
    this._elements.set('AdditionalInformation', this.AdditionalInformation);
    this._elements.set('customContainer', this.customContainer);
    this._elements.set('h2', this.h2);
    this._elements.set('table', this.table);
    this._elements.set('tbody', this.tbody);
    this._elements.set('tr', this.tr);
    this._elements.set('py5', this.py5);
    this._elements.set('pl30', this.pl30);
    this._elements.set('colors', this.colors);
    this._elements.set('tr1', this.tr1);
    this._elements.set('py51', this.py51);
    this._elements.set('pl301', this.pl301);
    this._elements.set('material', this.material);
    this._elements.set('tr2', this.tr2);
    this._elements.set('py52', this.py52);
    this._elements.set('pl302', this.pl302);
    this._elements.set('sizes', this.sizes);
    this._elements.set('borderB', this.borderB);
    this._elements.set('customContainer1', this.customContainer1);
    this._elements.set('div3', this.div3);
    this._elements.set('span1', this.span1);
    this._elements.set('SKU', this.SKU);
    this._elements.set('span2', this.span2);
    this._elements.set('categories', this.categories);
    this._elements.set('customContainer2', this.customContainer2);
    this._elements.set('h21', this.h21);
    this._elements.set('cards', this.cards);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      div: this.div,
      sectionBreadcrumbs: this.sectionBreadcrumbs,
      breadCrumbs: this.breadCrumbs,
      breadCrumbslink: this.breadCrumbslink,
      px3: this.px3,
      div1: this.div1,
      prevPage: this.prevPage,
      inlineFlex: this.inlineFlex,
      block: this.block,
      nextPage: this.nextPage,
      inlineFlex1: this.inlineFlex1,
      block1: this.block1,
      productDescription: this.productDescription,
      productDescriptionblock: this.productDescriptionblock,
      div2: this.div2,
      mainImage: this.mainImage,
      imagesList: this.imagesList,
      productDescriptionblock1: this.productDescriptionblock1,
      grid: this.grid,
      productTitle: this.productTitle,
      productPrice: this.productPrice,
      wrap: this.wrap,
      productOptions: this.productOptions,
      productOptionsoption: this.productOptionsoption,
      productColors: this.productColors,
      colorWrap: this.colorWrap,
      productSizes: this.productSizes,
      productOptionspading: this.productOptionspading,
      currentSizeButton: this.currentSizeButton,
      currentSizeOption: this.currentSizeOption,
      span: this.span,
      productQuantity: this.productQuantity,
      productOptionspading1: this.productOptionspading1,
      flex: this.flex,
      quantityMinusButton: this.quantityMinusButton,
      inlineFlex2: this.inlineFlex2,
      block2: this.block2,
      quantity: this.quantity,
      quantityPlusButton: this.quantityPlusButton,
      inlineFlex3: this.inlineFlex3,
      block3: this.block3,
      btnWrap: this.btnWrap,
      addToCart: this.addToCart,
      AdditionalInformation: this.AdditionalInformation,
      customContainer: this.customContainer,
      h2: this.h2,
      table: this.table,
      tbody: this.tbody,
      tr: this.tr,
      py5: this.py5,
      pl30: this.pl30,
      colors: this.colors,
      tr1: this.tr1,
      py51: this.py51,
      pl301: this.pl301,
      material: this.material,
      tr2: this.tr2,
      py52: this.py52,
      pl302: this.pl302,
      sizes: this.sizes,
      borderB: this.borderB,
      customContainer1: this.customContainer1,
      div3: this.div3,
      span1: this.span1,
      SKU: this.SKU,
      span2: this.span2,
      categories: this.categories,
      customContainer2: this.customContainer2,
      h21: this.h21,
      cards: this.cards
    };
  }

  mount(parent: Element): Shop {
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