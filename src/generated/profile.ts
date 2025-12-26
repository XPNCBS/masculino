// Автогенерированный класс для шаблона: profile
export class Profile {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLDivElement;
  public customContainer!: HTMLDivElement;
  public div!: HTMLDivElement;
  public dashboardheader!: HTMLElement;
  public profileIcon!: HTMLImageElement;
  public dashboardheaderP!: HTMLParagraphElement;
  public dashboardheaderP1!: HTMLParagraphElement;
  public accountMenu!: HTMLUListElement;
  public accountMenuitem!: HTMLLIElement;
  public accountMenuitem1!: HTMLLIElement;
  public accountMenuitem2!: HTMLLIElement;
  public accountMenuitem3!: HTMLLIElement;
  public accountMenuitem4!: HTMLLIElement;
  public opacity0!: HTMLSpanElement;
  public accountMenuitem5!: HTMLLIElement;
  public profileContent!: HTMLDivElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.customContainer = document.createElement('div') as HTMLDivElement;
    this.div = document.createElement('div') as HTMLDivElement;
    this.dashboardheader = document.createElement('header') as HTMLElement;
    this.profileIcon = document.createElement('img') as HTMLImageElement;
    this.dashboardheaderP = document.createElement('p') as HTMLParagraphElement;
    this.dashboardheaderP1 = document.createElement('p') as HTMLParagraphElement;
    this.accountMenu = document.createElement('ul') as HTMLUListElement;
    this.accountMenuitem = document.createElement('li') as HTMLLIElement;
    this.accountMenuitem1 = document.createElement('li') as HTMLLIElement;
    this.accountMenuitem2 = document.createElement('li') as HTMLLIElement;
    this.accountMenuitem3 = document.createElement('li') as HTMLLIElement;
    this.accountMenuitem4 = document.createElement('li') as HTMLLIElement;
    this.opacity0 = document.createElement('span') as HTMLSpanElement;
    this.accountMenuitem5 = document.createElement('li') as HTMLLIElement;
    this.profileContent = document.createElement('div') as HTMLDivElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.customContainer.className = '\bcustom\b-\bcontainer\b \bflex\b';
    this.dashboardheader.className = '\bdashboard__header\b';
    this.profileIcon.className = '\bprofile\b-\bicon\b';
    this.dashboardheaderP.className = '\bdashboard__header\b-\bp\b';
    this.dashboardheaderP.textContent = '\bHello\b,';
    this.dashboardheaderP1.className = '\bdashboard__header\b-\bp\b';
    this.dashboardheaderP1.textContent = '\bd6412248\b@\bgmail\b.\bcom\b';
    this.accountMenu.className = '\baccount\b-\bmenu\b';
    this.accountMenuitem.className = '\baccount\b-\bmenu__item\b';
    this.accountMenuitem.textContent = '\bDashboard\b';
    this.accountMenuitem1.className = '\baccount\b-\bmenu__item\b';
    this.accountMenuitem1.textContent = '\bOrders\b';
    this.accountMenuitem2.className = '\baccount\b-\bmenu__item\b';
    this.accountMenuitem2.textContent = '\bDownloads\b';
    this.accountMenuitem3.className = '\baccount\b-\bmenu__item\b';
    this.accountMenuitem3.textContent = '\bAdress\b';
    this.accountMenuitem4.className = '\baccount\b-\bmenu__item\b';
    this.opacity0.className = '\bopacity\b-\b0\b';
    this.opacity0.textContent = '\b_\b';
    this.accountMenuitem5.className = '\baccount\b-\bmenu__item\b';
    this.accountMenuitem5.textContent = '\bLogout\b';
    this.profileContent.className = '\bprofile\b-\bcontent\b \bflex\b-\b1\b';


    // Строим иерархию
    this.root = this.customContainer;
    this.customContainer.appendChild(this.div);
    this.div.appendChild(this.dashboardheader);
    this.dashboardheader.appendChild(this.profileIcon);
    this.dashboardheader.appendChild(this.dashboardheaderP);
    this.dashboardheader.appendChild(this.dashboardheaderP);
    this.div.appendChild(this.accountMenu);
    this.accountMenu.appendChild(this.accountMenuitem);
    this.accountMenu.appendChild(this.accountMenuitem);
    this.accountMenu.appendChild(this.accountMenuitem);
    this.accountMenu.appendChild(this.accountMenuitem);
    this.accountMenu.appendChild(this.accountMenuitem);
    this.accountMenuitem.appendChild(this.opacity0);
    this.accountMenu.appendChild(this.accountMenuitem);
    this.customContainer.appendChild(this.profileContent);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('customContainer', this.customContainer);
    this._elements.set('div', this.div);
    this._elements.set('dashboardheader', this.dashboardheader);
    this._elements.set('profileIcon', this.profileIcon);
    this._elements.set('dashboardheaderP', this.dashboardheaderP);
    this._elements.set('dashboardheaderP1', this.dashboardheaderP1);
    this._elements.set('accountMenu', this.accountMenu);
    this._elements.set('accountMenuitem', this.accountMenuitem);
    this._elements.set('accountMenuitem1', this.accountMenuitem1);
    this._elements.set('accountMenuitem2', this.accountMenuitem2);
    this._elements.set('accountMenuitem3', this.accountMenuitem3);
    this._elements.set('accountMenuitem4', this.accountMenuitem4);
    this._elements.set('opacity0', this.opacity0);
    this._elements.set('accountMenuitem5', this.accountMenuitem5);
    this._elements.set('profileContent', this.profileContent);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      customContainer: this.customContainer,
      div: this.div,
      dashboardheader: this.dashboardheader,
      profileIcon: this.profileIcon,
      dashboardheaderP: this.dashboardheaderP,
      dashboardheaderP1: this.dashboardheaderP1,
      accountMenu: this.accountMenu,
      accountMenuitem: this.accountMenuitem,
      accountMenuitem1: this.accountMenuitem1,
      accountMenuitem2: this.accountMenuitem2,
      accountMenuitem3: this.accountMenuitem3,
      accountMenuitem4: this.accountMenuitem4,
      opacity0: this.opacity0,
      accountMenuitem5: this.accountMenuitem5,
      profileContent: this.profileContent
    };
  }

  mount(parent: Element): Profile {
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