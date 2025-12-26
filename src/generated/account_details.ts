// Автогенерированный класс для шаблона: account_details
export class Account_details {
  private _elements = new Map<string, HTMLElement>();


  public root!: HTMLDivElement;
  public flex!: HTMLDivElement;
  public accountDetailsForm!: HTMLFormElement;
  public flex1!: HTMLDivElement;
  public accountDetailsLabel!: HTMLLabelElement;
  public firstName!: HTMLInputElement;
  public accountDetailsLabel1!: HTMLLabelElement;
  public lastName!: HTMLInputElement;
  public accountDetailsLabel2!: HTMLLabelElement;
  public accountDetailsInput!: HTMLInputElement;
  public span!: HTMLSpanElement;
  public accountDetailsLabel3!: HTMLLabelElement;
  public accountDetailsInput1!: HTMLInputElement;
  public accountDetailsLabel4!: HTMLLabelElement;
  public accountDetailsInput2!: HTMLInputElement;
  public accountDetailsLabel5!: HTMLLabelElement;
  public accountDetailsInput3!: HTMLInputElement;
  public accountDetailsLabel6!: HTMLLabelElement;
  public accountDetailsInput4!: HTMLInputElement;
  public formButtonSingup!: HTMLButtonElement;

  constructor(data: Record<string, any> = {}) {
    // Создаём элементы
    this.flex = document.createElement('div') as HTMLDivElement;
    this.accountDetailsForm = document.createElement('form') as HTMLFormElement;
    this.flex1 = document.createElement('div') as HTMLDivElement;
    this.accountDetailsLabel = document.createElement('label') as HTMLLabelElement;
    this.firstName = document.createElement('input') as HTMLInputElement;
    this.accountDetailsLabel1 = document.createElement('label') as HTMLLabelElement;
    this.lastName = document.createElement('input') as HTMLInputElement;
    this.accountDetailsLabel2 = document.createElement('label') as HTMLLabelElement;
    this.accountDetailsInput = document.createElement('input') as HTMLInputElement;
    this.span = document.createElement('span') as HTMLSpanElement;
    this.accountDetailsLabel3 = document.createElement('label') as HTMLLabelElement;
    this.accountDetailsInput1 = document.createElement('input') as HTMLInputElement;
    this.accountDetailsLabel4 = document.createElement('label') as HTMLLabelElement;
    this.accountDetailsInput2 = document.createElement('input') as HTMLInputElement;
    this.accountDetailsLabel5 = document.createElement('label') as HTMLLabelElement;
    this.accountDetailsInput3 = document.createElement('input') as HTMLInputElement;
    this.accountDetailsLabel6 = document.createElement('label') as HTMLLabelElement;
    this.accountDetailsInput4 = document.createElement('input') as HTMLInputElement;
    this.formButtonSingup = document.createElement('button') as HTMLButtonElement;

    // Настраиваем элементы (классы, текст и т.д.)
    this.flex.className = '\bflex\b \bjustify\b-\bcenter\b';
    this.accountDetailsForm.className = '\baccount_details\b-\bform\b';
    this.flex1.className = '\bflex\b \bitems\b-\bcenter\b \bjustify\b-\bbetween\b \bgap\b-\b2\b';
    this.accountDetailsLabel.className = '\baccount_details\b-\blabel\b \bw\b-[\b47\b%]';
    this.firstName.className = '\baccount_details\b-\binput\b';
    this.firstName.id = '\bfirst_name\b*';
    this.accountDetailsLabel1.className = '\baccount_details\b-\blabel\b \bw\b-[\b47\b%]';
    this.lastName.className = '\baccount_details\b-\binput\b';
    this.lastName.id = '\blast_name\b*';
    this.accountDetailsLabel2.className = '\baccount_details\b-\blabel\b';
    this.accountDetailsInput.className = '\baccount_details\b-\binput\b';
    this.span.textContent = '\bThis\b \bwill\b \bbe\b \bhow\b \byour\b \bname\b \bwill\b \bbe\b \bdisplayed\b \bin\b \bthe\b \baccount\b \bsection\b\\bn\b          \band\b \bin\b \breviews\b';
    this.accountDetailsLabel3.className = '\baccount_details\b-\blabel\b';
    this.accountDetailsInput1.className = '\baccount_details\b-\binput\b';
    this.accountDetailsLabel4.className = '\baccount_details\b-\blabel\b';
    this.accountDetailsInput2.className = '\baccount_details\b-\binput\b';
    this.accountDetailsLabel5.className = '\baccount_details\b-\blabel\b';
    this.accountDetailsInput3.className = '\baccount_details\b-\binput\b';
    this.accountDetailsLabel6.className = '\baccount_details\b-\blabel\b';
    this.accountDetailsInput4.className = '\baccount_details\b-\binput\b';
    this.formButtonSingup.className = '\bform\b-\bbutton\b-\bsingup\b';
    this.formButtonSingup.textContent = '\bSave\b \bchanges\b';


    // Строим иерархию
    this.root = this.flex;
    this.flex.appendChild(this.accountDetailsForm);
    this.accountDetailsForm.appendChild(this.flex);
    this.flex.appendChild(this.accountDetailsLabel);
    this.accountDetailsLabel.appendChild(this.firstName);
    this.flex.appendChild(this.accountDetailsLabel);
    this.accountDetailsLabel.appendChild(this.lastName);
    this.accountDetailsForm.appendChild(this.accountDetailsLabel);
    this.accountDetailsLabel.appendChild(this.accountDetailsInput);
    this.accountDetailsLabel.appendChild(this.span);
    this.accountDetailsForm.appendChild(this.accountDetailsLabel);
    this.accountDetailsLabel.appendChild(this.accountDetailsInput);
    this.accountDetailsForm.appendChild(this.accountDetailsLabel);
    this.accountDetailsLabel.appendChild(this.accountDetailsInput);
    this.accountDetailsForm.appendChild(this.accountDetailsLabel);
    this.accountDetailsLabel.appendChild(this.accountDetailsInput);
    this.accountDetailsForm.appendChild(this.accountDetailsLabel);
    this.accountDetailsLabel.appendChild(this.accountDetailsInput);
    this.accountDetailsForm.appendChild(this.formButtonSingup);


    // Регистрируем элементы
    this._elements.set('root', this.root);
    this._elements.set('flex', this.flex);
    this._elements.set('accountDetailsForm', this.accountDetailsForm);
    this._elements.set('flex1', this.flex1);
    this._elements.set('accountDetailsLabel', this.accountDetailsLabel);
    this._elements.set('firstName', this.firstName);
    this._elements.set('accountDetailsLabel1', this.accountDetailsLabel1);
    this._elements.set('lastName', this.lastName);
    this._elements.set('accountDetailsLabel2', this.accountDetailsLabel2);
    this._elements.set('accountDetailsInput', this.accountDetailsInput);
    this._elements.set('span', this.span);
    this._elements.set('accountDetailsLabel3', this.accountDetailsLabel3);
    this._elements.set('accountDetailsInput1', this.accountDetailsInput1);
    this._elements.set('accountDetailsLabel4', this.accountDetailsLabel4);
    this._elements.set('accountDetailsInput2', this.accountDetailsInput2);
    this._elements.set('accountDetailsLabel5', this.accountDetailsLabel5);
    this._elements.set('accountDetailsInput3', this.accountDetailsInput3);
    this._elements.set('accountDetailsLabel6', this.accountDetailsLabel6);
    this._elements.set('accountDetailsInput4', this.accountDetailsInput4);
    this._elements.set('formButtonSingup', this.formButtonSingup);

    // Применяем начальные данные
    this.update(data);
  }

  // Иерархическая структура
  get structure(): Record<string, any> {
    return {
      flex: this.flex,
      accountDetailsForm: this.accountDetailsForm,
      flex1: this.flex1,
      accountDetailsLabel: this.accountDetailsLabel,
      firstName: this.firstName,
      accountDetailsLabel1: this.accountDetailsLabel1,
      lastName: this.lastName,
      accountDetailsLabel2: this.accountDetailsLabel2,
      accountDetailsInput: this.accountDetailsInput,
      span: this.span,
      accountDetailsLabel3: this.accountDetailsLabel3,
      accountDetailsInput1: this.accountDetailsInput1,
      accountDetailsLabel4: this.accountDetailsLabel4,
      accountDetailsInput2: this.accountDetailsInput2,
      accountDetailsLabel5: this.accountDetailsLabel5,
      accountDetailsInput3: this.accountDetailsInput3,
      accountDetailsLabel6: this.accountDetailsLabel6,
      accountDetailsInput4: this.accountDetailsInput4,
      formButtonSingup: this.formButtonSingup
    };
  }

  mount(parent: Element): Account_details {
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