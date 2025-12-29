// Автогенерированный класс для шаблона: resetpassword
import { BaseView } from './base-view';

export class Resetpassword extends BaseView {
  public root!: HTMLFormElement;
  // Нет элементов с data-element

  constructor(data: Record<string, any> = {}) {
    super();
    
    this.root = this._createRootElement() as HTMLFormElement;
    
    // Нет элементов для инициализации

    this._elements.set('root', this.root);
    // Нет элементов для регистрации

    this.update(data);
  }

  private _createRootElement(): HTMLElement {
    const root = document.createElement('form');
    root.className = "custom-container signin-form";
    const el1 = document.createElement('div');
    el1.className = "signin-form-content signin-form-padding mt-10";
    root.appendChild(el1);
        const el2 = document.createElement('div');
        el2.className = "";
        el1.appendChild(el2);
            const el3 = document.createElement('p');
            el3.className = "password-form-lost-text";
            el2.appendChild(el3);
                el3.appendChild(document.createTextNode("\n          Lost your password? Please enter your username or email address. You\n          will receive a link to create a new password via email.\n        "));
            const el4 = document.createElement('label');
            el4.className = "signin-form-label grid gap-5 mt-5 text-xs";
            el2.appendChild(el4);
                el4.appendChild(document.createTextNode("\n          Username or email\n          "));
                const el5 = document.createElement('input');
                el5.className = "signin-profil-form__input";
                el5.setAttribute("type", "password");
                el4.appendChild(el5);
        const el6 = document.createElement('button');
        el6.className = "signin-form-button singin";
        el1.appendChild(el6);
            el6.appendChild(document.createTextNode("Reset password"));
    return root;
  }
}