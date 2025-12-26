// Автогенерированный класс для шаблона: signup
export class Signup {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLFormElement;
  public customContainer!: HTMLFormElement;
  public signinFormContent!: HTMLDivElement;
  public createAccount!: HTMLHeadingElement;
  public signinFormLabel!: HTMLLabelElement;
  public signinProfilForminput!: HTMLInputElement;
  public signinFormLabel1!: HTMLLabelElement;
  public signinProfilForminput1!: HTMLInputElement;
  public signinFormLabel2!: HTMLLabelElement;
  public signinProfilForminput2!: HTMLInputElement;
  public signupFormPolicyText!: HTMLParagraphElement;
  public policyLink!: HTMLAnchorElement;
  public signinFormButton!: HTMLButtonElement;
  public signinFormLsOr!: HTMLDivElement;
  public line!: HTMLDivElement;
  public span!: HTMLSpanElement;
  public line1!: HTMLDivElement;
  public signinFormButton1!: HTMLAnchorElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.customContainer = document.createElement('form') as HTMLFormElement;
    this.signinFormContent = document.createElement('div') as HTMLDivElement;
    this.createAccount = document.createElement('h2') as HTMLHeadingElement;
    this.signinFormLabel = document.createElement('label') as HTMLLabelElement;
    this.signinProfilForminput = document.createElement('input') as HTMLInputElement;
    this.signinFormLabel1 = document.createElement('label') as HTMLLabelElement;
    this.signinProfilForminput1 = document.createElement('input') as HTMLInputElement;
    this.signinFormLabel2 = document.createElement('label') as HTMLLabelElement;
    this.signinProfilForminput2 = document.createElement('input') as HTMLInputElement;
    this.signupFormPolicyText = document.createElement('p') as HTMLParagraphElement;
    this.policyLink = document.createElement('a') as HTMLAnchorElement;
    this.signinFormButton = document.createElement('button') as HTMLButtonElement;
    this.signinFormLsOr = document.createElement('div') as HTMLDivElement;
    this.line = document.createElement('div') as HTMLDivElement;
    this.span = document.createElement('span') as HTMLSpanElement;
    this.line1 = document.createElement('div') as HTMLDivElement;
    this.signinFormButton1 = document.createElement('a') as HTMLAnchorElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.customContainer.className = '\bcustom\b-\bcontainer\b \bsignin\b-\bform\b';
    this.signinFormContent.className = '\bsignin\b-\bform\b-\bcontent\b \bsignin\b-\bform\b-\bpadding\b';
    this.createAccount.className = '\bcreate\b-\baccount\b';
    this.createAccount.textContent = 'Создать аккаунт';
    this.signinFormLabel.className = '\bsignin\b-\bform\b-\blabel\b';
    this.signinProfilForminput.className = '\bsignin\b-\bprofil\b-\bform__input\b';
    this.signinFormLabel1.className = '\bsignin\b-\bform\b-\blabel\b';
    this.signinProfilForminput1.className = '\bsignin\b-\bprofil\b-\bform__input\b';
    this.signinFormLabel2.className = '\bsignin\b-\bform\b-\blabel\b';
    this.signinProfilForminput2.className = '\bsignin\b-\bprofil\b-\bform__input\b';
    this.signupFormPolicyText.className = '\bsignup\b-\bform\b-\bpolicy\b-\btext\b';
    this.policyLink.className = '\bpolicy\b-\blink\b';
    this.policyLink.textContent = '\bpolicy\b.';
    this.signinFormButton.className = '\bsignin\b-\bform\b-\bbutton\b \bsingup\b';
    this.signinFormButton.textContent = 'Создать аккаунт';
    this.signinFormLsOr.className = '\bsignin\b-\bform\b-\bls\b-\bor\b';
    this.line.className = '\bline\b';
    this.span.textContent = 'Или';
    this.line1.className = '\bline\b';
    this.signinFormButton1.className = '\bsignin\b-\bform\b-\bbutton\b \bsingin\b \bflex\b \bjustify\b-\bcenter\b';
    this.signinFormButton1.textContent = 'Войти';


    // Строим иерархию
    this.root = this.customContainer;
    this.customContainer.appendChild(this.signinFormContent);
    this.signinFormContent.appendChild(this.createAccount);
    this.signinFormContent.appendChild(this.signinFormLabel);
    this.signinFormLabel.appendChild(this.signinProfilForminput);
    this.signinFormContent.appendChild(this.signinFormLabel);
    this.signinFormLabel.appendChild(this.signinProfilForminput);
    this.signinFormContent.appendChild(this.signinFormLabel);
    this.signinFormLabel.appendChild(this.signinProfilForminput);
    this.signinFormContent.appendChild(this.signupFormPolicyText);
    this.signupFormPolicyText.appendChild(this.policyLink);
    this.signinFormContent.appendChild(this.signinFormButton);
    this.signinFormContent.appendChild(this.signinFormLsOr);
    this.signinFormLsOr.appendChild(this.line);
    this.signinFormLsOr.appendChild(this.span);
    this.signinFormLsOr.appendChild(this.line);
    this.signinFormContent.appendChild(this.signinFormButton);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('customContainer', this.customContainer);
    this._elements.set('signinFormContent', this.signinFormContent);
    this._elements.set('createAccount', this.createAccount);
    this._elements.set('signinFormLabel', this.signinFormLabel);
    this._elements.set('signinProfilForminput', this.signinProfilForminput);
    this._elements.set('signinFormLabel1', this.signinFormLabel1);
    this._elements.set('signinProfilForminput1', this.signinProfilForminput1);
    this._elements.set('signinFormLabel2', this.signinFormLabel2);
    this._elements.set('signinProfilForminput2', this.signinProfilForminput2);
    this._elements.set('signupFormPolicyText', this.signupFormPolicyText);
    this._elements.set('policyLink', this.policyLink);
    this._elements.set('signinFormButton', this.signinFormButton);
    this._elements.set('signinFormLsOr', this.signinFormLsOr);
    this._elements.set('line', this.line);
    this._elements.set('span', this.span);
    this._elements.set('line1', this.line1);
    this._elements.set('signinFormButton1', this.signinFormButton1);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      customContainer: this.customContainer,
      signinFormContent: this.signinFormContent,
      createAccount: this.createAccount,
      signinFormLabel: this.signinFormLabel,
      signinProfilForminput: this.signinProfilForminput,
      signinFormLabel1: this.signinFormLabel1,
      signinProfilForminput1: this.signinProfilForminput1,
      signinFormLabel2: this.signinFormLabel2,
      signinProfilForminput2: this.signinProfilForminput2,
      signupFormPolicyText: this.signupFormPolicyText,
      policyLink: this.policyLink,
      signinFormButton: this.signinFormButton,
      signinFormLsOr: this.signinFormLsOr,
      line: this.line,
      span: this.span,
      line1: this.line1,
      signinFormButton1: this.signinFormButton1
    };
  }

  mount(parent: Element): Signup {
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