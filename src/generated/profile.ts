// Автогенерированный класс для шаблона: profile
import { BaseView } from './base-view';

export class Profile extends BaseView {
  public root!: HTMLDivElement;
  // Нет элементов с data-element

  constructor(data: Record<string, any> = {}) {
    super();
    
    this.root = this._createRootElement() as HTMLDivElement;
    
    // Нет элементов для инициализации

    this._elements.set('root', this.root);
    // Нет элементов для регистрации

    this.update(data);
  }

  private _createRootElement(): HTMLElement {
    const root = document.createElement('div');
    root.className = "custom-container flex";
    const el1 = document.createElement('div');
    el1.className = "";
    root.appendChild(el1);
        const el2 = document.createElement('header');
        el2.className = "dashboard__header";
        el1.appendChild(el2);
            const el3 = document.createElement('img');
            el3.className = "profile-icon";
            el3.setAttribute("src", "public/icons/profile-default-svgrepo-com.svg");
            el3.setAttribute("alt", "profile-icon");
            el2.appendChild(el3);
            const el4 = document.createElement('p');
            el4.className = "dashboard__header-p";
            el2.appendChild(el4);
                el4.appendChild(document.createTextNode("Hello,"));
            const el5 = document.createElement('p');
            el5.className = "dashboard__header-p";
            el2.appendChild(el5);
                el5.appendChild(document.createTextNode("d6412248@gmail.com"));
        const el6 = document.createElement('ul');
        el6.className = "account-menu";
        el1.appendChild(el6);
            const el7 = document.createElement('li');
            el7.className = "account-menu__item";
            el6.appendChild(el7);
                el7.appendChild(document.createTextNode("Dashboard"));
            const el8 = document.createElement('li');
            el8.className = "account-menu__item";
            el6.appendChild(el8);
                el8.appendChild(document.createTextNode("Orders"));
            const el9 = document.createElement('li');
            el9.className = "account-menu__item";
            el6.appendChild(el9);
                el9.appendChild(document.createTextNode("Downloads"));
            const el10 = document.createElement('li');
            el10.className = "account-menu__item";
            el6.appendChild(el10);
                el10.appendChild(document.createTextNode("Adress"));
            const el11 = document.createElement('li');
            el11.className = "account-menu__item";
            el6.appendChild(el11);
                el11.appendChild(document.createTextNode("\n          Account"));
                const el12 = document.createElement('span');
                el12.className = "opacity-0";
                el11.appendChild(el12);
                    el12.appendChild(document.createTextNode("_"));
                el11.appendChild(document.createTextNode("details\n        "));
            const el13 = document.createElement('li');
            el13.className = "account-menu__item";
            el6.appendChild(el13);
                el13.appendChild(document.createTextNode("Logout"));
    const el14 = document.createElement('div');
    el14.className = "profile-content flex-1";
    root.appendChild(el14);
    return root;
  }
}