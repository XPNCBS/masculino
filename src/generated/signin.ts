// Автогенерированный класс для шаблона: signin
import { BaseView } from './base-view';

export class Signin extends BaseView {
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
    el1.className = "signin-form-content signin-form-padding";
    root.appendChild(el1);
        const el2 = document.createElement('h2');
        el1.appendChild(el2);
            el2.appendChild(document.createTextNode("Войти"));
        const el3 = document.createElement('label');
        el3.className = "signin-form-label";
        el1.appendChild(el3);
            el3.appendChild(document.createTextNode("\n        Имя пользователя или Email *\n        "));
            const el4 = document.createElement('input');
            el4.className = "signin-profil-form__input";
            el4.setAttribute("type", "email");
            el3.appendChild(el4);
        const el5 = document.createElement('label');
        el5.className = "signin-form-label";
        el1.appendChild(el5);
            el5.appendChild(document.createTextNode("\n        Пароль\n        "));
            const el6 = document.createElement('input');
            el6.className = "signin-profil-form__input";
            el6.setAttribute("type", "password");
            el5.appendChild(el6);
        const el7 = document.createElement('div');
        el7.className = "flex justify-between items-center";
        el1.appendChild(el7);
            const el8 = document.createElement('label');
            el8.className = "signin-form-label signin-form-label-last";
            el7.appendChild(el8);
                const el9 = document.createElement('input');
                el9.className = "signin-profil-form__input";
                el9.setAttribute("type", "checkbox");
                el8.appendChild(el9);
                el8.appendChild(document.createTextNode("\n          Запомнить меня\n        "));
            const el10 = document.createElement('a');
            el10.className = "signin-forget-password";
            el10.setAttribute("href", "/masculino#/resetpassword");
            el7.appendChild(el10);
                el10.appendChild(document.createTextNode("Забыли свой пароль"));
        const el11 = document.createElement('button');
        el11.className = "signin-form-button singin";
        el1.appendChild(el11);
            el11.appendChild(document.createTextNode("Войти"));
        const el12 = document.createElement('div');
        el12.className = "signin-form-ls-or";
        el1.appendChild(el12);
            const el13 = document.createElement('div');
            el13.className = "line";
            el12.appendChild(el13);
            const el14 = document.createElement('span');
            el14.style.cssText = "color: rgb(255, 255, 255)";
            el12.appendChild(el14);
                el14.appendChild(document.createTextNode("Или"));
            const el15 = document.createElement('div');
            el15.className = "line";
            el12.appendChild(el15);
        const el16 = document.createElement('a');
        el16.setAttribute("href", "/masculino#/signup");
        el16.className = "signin-form-button singup";
        el1.appendChild(el16);
            el16.appendChild(document.createTextNode("Создать аккаунт"));
    return root;
  }
}