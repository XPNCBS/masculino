// Автогенерированный класс для шаблона: resetpassword
export class Resetpassword {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLFormElement;
  public customContainer!: HTMLFormElement;
  public signinFormContent!: HTMLDivElement;
  public div!: HTMLDivElement;
  public passwordFormLostText!: HTMLParagraphElement;
  public signinFormLabel!: HTMLLabelElement;
  public signinProfilForminput!: HTMLInputElement;
  public signinFormButton!: HTMLButtonElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.customContainer = document.createElement('form') as HTMLFormElement;
    this.signinFormContent = document.createElement('div') as HTMLDivElement;
    this.div = document.createElement('div') as HTMLDivElement;
    this.passwordFormLostText = document.createElement('p') as HTMLParagraphElement;
    this.signinFormLabel = document.createElement('label') as HTMLLabelElement;
    this.signinProfilForminput = document.createElement('input') as HTMLInputElement;
    this.signinFormButton = document.createElement('button') as HTMLButtonElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.customContainer.className = '\bcustom\b-\bcontainer\b \bsignin\b-\bform\b';
    this.signinFormContent.className = '\bsignin\b-\bform\b-\bcontent\b \bsignin\b-\bform\b-\bpadding\b \bmt\b-\b10\b';
    this.passwordFormLostText.className = '\bpassword\b-\bform\b-\blost\b-\btext\b';
    this.passwordFormLostText.textContent = '\bLost\b \byour\b \bpassword\b? \bPlease\b \benter\b \byour\b \busername\b \bor\b \bemail\b \baddress\b. \bYou\b\\bn\b          \bwill\b \breceive\b \ba\b \blink\b \bto\b \bcreate\b \ba\b \bnew\b \bpassword\b \bvia\b \bemail\b.';
    this.signinFormLabel.className = '\bsignin\b-\bform\b-\blabel\b \bgrid\b \bgap\b-\b5\b \bmt\b-\b5\b \btext\b-\bxs\b';
    this.signinProfilForminput.className = '\bsignin\b-\bprofil\b-\bform__input\b';
    this.signinFormButton.className = '\bsignin\b-\bform\b-\bbutton\b \bsingin\b';
    this.signinFormButton.textContent = '\bReset\b \bpassword\b';


    // Строим иерархию
    this.root = this.customContainer;
    this.customContainer.appendChild(this.signinFormContent);
    this.signinFormContent.appendChild(this.div);
    this.div.appendChild(this.passwordFormLostText);
    this.div.appendChild(this.signinFormLabel);
    this.signinFormLabel.appendChild(this.signinProfilForminput);
    this.signinFormContent.appendChild(this.signinFormButton);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('customContainer', this.customContainer);
    this._elements.set('signinFormContent', this.signinFormContent);
    this._elements.set('div', this.div);
    this._elements.set('passwordFormLostText', this.passwordFormLostText);
    this._elements.set('signinFormLabel', this.signinFormLabel);
    this._elements.set('signinProfilForminput', this.signinProfilForminput);
    this._elements.set('signinFormButton', this.signinFormButton);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      customContainer: this.customContainer,
      signinFormContent: this.signinFormContent,
      div: this.div,
      passwordFormLostText: this.passwordFormLostText,
      signinFormLabel: this.signinFormLabel,
      signinProfilForminput: this.signinProfilForminput,
      signinFormButton: this.signinFormButton
    };
  }

  mount(parent: Element): Resetpassword {
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