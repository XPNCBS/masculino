// Автогенерированный класс для шаблона: account_details
import { BaseView } from './base-view';

export class Account_details extends BaseView {
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
    root.className = "flex justify-center";
    const el1 = document.createElement('form');
    el1.className = "account_details-form";
    root.appendChild(el1);
        const el2 = document.createElement('div');
        el2.className = "flex items-center justify-between gap-2";
        el1.appendChild(el2);
            const el3 = document.createElement('label');
            el3.className = "account_details-label w-[47%]";
            el2.appendChild(el3);
                el3.appendChild(document.createTextNode("\n          First name *\n          "));
                const el4 = document.createElement('input');
                el4.setAttribute("type", "text");
                el4.setAttribute("id", "first_name*");
                el4.className = "account_details-input";
                el3.appendChild(el4);
            const el5 = document.createElement('label');
            el5.className = "account_details-label w-[47%]";
            el2.appendChild(el5);
                el5.appendChild(document.createTextNode("\n          Last name *\n          "));
                const el6 = document.createElement('input');
                el6.setAttribute("type", "text");
                el6.setAttribute("id", "last_name*");
                el6.className = "account_details-input";
                el5.appendChild(el6);
        const el7 = document.createElement('label');
        el7.className = "account_details-label";
        el1.appendChild(el7);
            el7.appendChild(document.createTextNode("Display name * "));
            const el8 = document.createElement('input');
            el8.setAttribute("type", "text");
            el8.className = "account_details-input";
            el7.appendChild(el8);
            const el9 = document.createElement('span');
            el7.appendChild(el9);
                el9.appendChild(document.createTextNode("This will be how your name will be displayed in the account section\n          and in reviews"));
        const el10 = document.createElement('label');
        el10.className = "account_details-label";
        el1.appendChild(el10);
            el10.appendChild(document.createTextNode("Email adress * "));
            const el11 = document.createElement('input');
            el11.setAttribute("type", "email");
            el11.className = "account_details-input";
            el10.appendChild(el11);
        const el12 = document.createElement('label');
        el12.className = "account_details-label";
        el1.appendChild(el12);
            el12.appendChild(document.createTextNode("Current password (leave blank to leave unchanged) *"));
            const el13 = document.createElement('input');
            el13.setAttribute("type", "password");
            el13.className = "account_details-input";
            el12.appendChild(el13);
        const el14 = document.createElement('label');
        el14.className = "account_details-label";
        el1.appendChild(el14);
            el14.appendChild(document.createTextNode("New password (leave blank to leave unchanged) *"));
            const el15 = document.createElement('input');
            el15.setAttribute("type", "password");
            el15.className = "account_details-input";
            el14.appendChild(el15);
        const el16 = document.createElement('label');
        el16.className = "account_details-label";
        el1.appendChild(el16);
            el16.appendChild(document.createTextNode("Confirm new password *\n        "));
            const el17 = document.createElement('input');
            el17.setAttribute("type", "password");
            el17.className = "account_details-input";
            el16.appendChild(el17);
        const el18 = document.createElement('button');
        el18.className = "form-button-singup";
        el1.appendChild(el18);
            el18.appendChild(document.createTextNode("Save changes"));
    return root;
  }
}