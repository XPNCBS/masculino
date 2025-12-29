// Базовый класс для всех сгенерированных компонентов с реактивными зависимостями
export abstract class BaseView {
  protected _elements = new Map<string, HTMLElement>();
  protected _eventHandlers = new Map<string, Map<string, EventListener>>();
  protected _states = new Map<string, { 
    value: any, 
    subscribers: Array<{ callback: (value: any) => void }>,
    dependencies: Map<string, Array<() => void>>
  }>();
  protected _bindings = new Map<string, Array<() => void>>();
  protected _reactiveEffects = new Map<string, Array<() => void>>();
  protected _classBindings = new Map<string, Map<string, string[]>>(); // Храним привязанные классы по эффектам
  protected _styleBindings = new Map<string, Map<string, Map<string, string>>>(); // Храним стили по эффектам
  protected _stateKeyCounter = 0;
  protected _effectKeyCounter = 0;
  
  // Трекер для отслеживания зависимостей
  private _currentEffect: { id: string; dependencies: Set<string>; fn: () => void } | null = null;
  private _effectDependencies = new Map<string, Set<string>>();
  
  abstract root: HTMLElement;

  protected _createElementWithHandlers<T extends HTMLElement>(name: string, element: T): T & {
    onClick?: ((event: MouseEvent) => void) | null;
    onDblClick?: ((event: MouseEvent) => void) | null;
    onInput?: ((event: Event) => void) | null;
    onChange?: ((event: Event) => void) | null;
    onFocus?: ((event: FocusEvent) => void) | null;
    onBlur?: ((event: FocusEvent) => void) | null;
    onSubmit?: ((event: SubmitEvent) => void) | null;
    onMouseEnter?: ((event: MouseEvent) => void) | null;
    onMouseLeave?: ((event: MouseEvent) => void) | null;
    onKeyDown?: ((event: KeyboardEvent) => void) | null;
    onKeyUp?: ((event: KeyboardEvent) => void) | null;
    onContextMenu?: ((event: MouseEvent) => void) | null;
    
    // Методы для работы с содержимым с поддержкой реактивности
    text: (content?: string | (() => string) | { value: any }) => string | (() => void) | undefined;
    html: (content?: string | (() => string) | { value: any }) => string | (() => void) | undefined;
    val: (content?: any | (() => any) | { value: any }) => any | (() => void) | undefined;
    class: (className?: string | (() => string) | { value: any }) => string | (() => void) | undefined;
    attr: (name: string, value?: string | (() => string) | { value: any }) => string | (() => void) | undefined;
    css: (
      styles?: 
        | Record<string, string> 
        | (() => Record<string, string>) 
        | { value: Record<string, string> }
        | {
            // Основные CSS свойства
            color?: string | (() => string);
            backgroundColor?: string | (() => string);
            background?: string | (() => string);
            fontSize?: string | (() => string);
            fontWeight?: string | (() => string);
            fontFamily?: string | (() => string);
            lineHeight?: string | (() => string);
            textAlign?: string | (() => string);
            textDecoration?: string | (() => string);
            textTransform?: string | (() => string);
            letterSpacing?: string | (() => string);
            
            // Размеры и позиционирование
            width?: string | (() => string);
            height?: string | (() => string);
            minWidth?: string | (() => string);
            minHeight?: string | (() => string);
            maxWidth?: string | (() => string);
            maxHeight?: string | (() => string);
            padding?: string | (() => string);
            paddingTop?: string | (() => string);
            paddingRight?: string | (() => string);
            paddingBottom?: string | (() => string);
            paddingLeft?: string | (() => string);
            margin?: string | (() => string);
            marginTop?: string | (() => string);
            marginRight?: string | (() => string);
            marginBottom?: string | (() => string);
            marginLeft?: string | (() => string);
            
            // Отображение и layout
            display?: string | (() => string);
            position?: string | (() => string);
            top?: string | (() => string);
            right?: string | (() => string);
            bottom?: string | (() => string);
            left?: string | (() => string);
            flex?: string | (() => string);
            flexDirection?: string | (() => string);
            flexWrap?: string | (() => string);
            justifyContent?: string | (() => string);
            alignItems?: string | (() => string);
            alignContent?: string | (() => string);
            flexGrow?: string | (() => string);
            flexShrink?: string | (() => string);
            flexBasis?: string | (() => string);
            order?: string | (() => string);
            gridTemplateColumns?: string | (() => string);
            gridTemplateRows?: string | (() => string);
            gridGap?: string | (() => string);
            gridColumn?: string | (() => string);
            gridRow?: string | (() => string);
            
            // Границы и оформление
            border?: string | (() => string);
            borderWidth?: string | (() => string);
            borderStyle?: string | (() => string);
            borderColor?: string | (() => string);
            borderTop?: string | (() => string);
            borderRight?: string | (() => string);
            borderBottom?: string | (() => string);
            borderLeft?: string | (() => string);
            borderRadius?: string | (() => string);
            boxShadow?: string | (() => string);
            opacity?: string | (() => string);
            overflow?: string | (() => string);
            overflowX?: string | (() => string);
            overflowY?: string | (() => string);
            
            // Анимация и переходы
            transition?: string | (() => string);
            transform?: string | (() => string);
            animation?: string | (() => string);
            
            // Курсор и видимость
            cursor?: string | (() => string);
            visibility?: string | (() => string);
            pointerEvents?: string | (() => string);
            userSelect?: string | (() => string);
            
            // Z-index и слои
            zIndex?: string | (() => string);
            
            // Прочие свойства
            listStyle?: string | (() => string);
            outline?: string | (() => string);
            resize?: string | (() => string);
            verticalAlign?: string | (() => string);
            whiteSpace?: string | (() => string);
            wordBreak?: string | (() => string);
            wordWrap?: string | (() => string);
            
            // Custom свойства (любые другие свойства CSS)
            [key: `--${string}`]: string | (() => string);
            [key: string]: string | (() => string);
          }
    ) => Record<string, string> | (() => void) | undefined;
    
  } {
    const enhancedElement = element as any;
    
    // Обработчики событий
    const handlers: Record<string, keyof HTMLElementEventMap> = {
      onClick: 'click',
      onDblClick: 'dblclick',
      onInput: 'input',
      onChange: 'change',
      onFocus: 'focus',
      onBlur: 'blur',
      onSubmit: 'submit',
      onMouseEnter: 'mouseenter',
      onMouseLeave: 'mouseleave',
      onKeyDown: 'keydown',
      onKeyUp: 'keyup',
      onContextMenu: 'contextmenu'
    };

    Object.entries(handlers).forEach(([property, eventType]) => {
      Object.defineProperty(enhancedElement, property, {
        set: (handler: ((event: any) => void) | null) => {
          const elementHandlers = this._eventHandlers.get(name) || new Map<string, EventListener>();
          const oldHandler = elementHandlers.get(eventType);
          if (oldHandler) {
            element.removeEventListener(eventType, oldHandler);
          }

          if (handler) {
            const typedHandler = handler as EventListener;
            element.addEventListener(eventType, typedHandler);
            elementHandlers.set(eventType, typedHandler);
          } else {
            elementHandlers.delete(eventType);
          }
          
          this._eventHandlers.set(name, elementHandlers);
        },
        get: () => {
          const elementHandlers = this._eventHandlers.get(name);
          return elementHandlers?.get(eventType) || null;
        },
        configurable: true,
        enumerable: true
      });
    });

    // React-подобный эффект для реактивности
    const createReactiveEffect = (
      getter: () => any,
      setter: (value: any, effectId?: string) => void,
      options?: { immediate?: boolean }
    ): () => void => {
      const effectId = `effect_${this._effectKeyCounter++}`;
      
      const effectFn = () => {
        const result = getter();
        setter(result, effectId);
      };
      
      // Начинаем отслеживание зависимостей
      this._currentEffect = {
        id: effectId,
        dependencies: new Set<string>(),
        fn: effectFn
      };
      
      // Первый вызов для установки зависимостей
      effectFn();
      
      const trackedDeps = new Set(this._currentEffect.dependencies);
      this._currentEffect = null;
      
      // Сохраняем зависимости
      this._effectDependencies.set(effectId, trackedDeps);
      
      // Подписываемся на все зависимости
      trackedDeps.forEach(stateKey => {
        const state = this._states.get(stateKey);
        if (state) {
          const callback = () => {
            // При изменении зависимости перезапускаем эффект
            effectFn();
          };
          
          if (!state.dependencies) {
            state.dependencies = new Map();
          }
          if (!state.dependencies.has(effectId)) {
            state.dependencies.set(effectId, []);
          }
          state.dependencies.get(effectId)!.push(callback);
          state.subscribers.push({ callback });
        }
      });
      
      if (options?.immediate) {
        effectFn();
      }
      
      return () => {
        // Очистка эффекта
        trackedDeps.forEach(stateKey => {
          const state = this._states.get(stateKey);
          if (state?.dependencies?.has(effectId)) {
            state.dependencies.delete(effectId);
          }
        });
        this._effectDependencies.delete(effectId);
        
        // Для class эффектов удаляем связанные классы
        if (this._classBindings.has(name) && this._classBindings.get(name)!.has(effectId)) {
          const classesToRemove = this._classBindings.get(name)!.get(effectId)!;
          classesToRemove.forEach((cls: string) => {
            if (cls) element.classList.remove(cls);
          });
          this._classBindings.get(name)!.delete(effectId);
        }
        
        // Для css эффектов удаляем связанные стили
        if (this._styleBindings.has(name) && this._styleBindings.get(name)!.has(effectId)) {
          const stylesToRemove = this._styleBindings.get(name)!.get(effectId)!;
          Object.keys(stylesToRemove).forEach(styleName => {
            element.style.removeProperty(styleName);
          });
          this._styleBindings.get(name)!.delete(effectId);
        }
      };
    };

    // Метод text с поддержкой реактивных функций
    enhancedElement.text = (content?: string | (() => string) | { value: any }): string | (() => void) | undefined => {
      if (content === undefined) {
        return element.textContent || '';
      }
      
      // Если передали состояние { value: any }
      if (content && typeof content === 'object' && 'value' in content) {
        this._bindStateToElement(name, content as { value: any }, (el, val) => {
          el.textContent = val != null ? val.toString() : '';
        });
        return;
      }
      
      // Если передали функцию - создаем реактивный эффект
      if (typeof content === 'function') {
        return createReactiveEffect(
          () => {
            const result = (content as () => any)();
            return result != null ? result.toString() : '';
          },
          (value) => {
            element.textContent = value;
          },
          { immediate: true }
        );
      }
      
      // Простое статическое значение
      element.textContent = content != null ? content.toString() : '';
    };
    
    // Метод html с поддержкой реактивных функций
    enhancedElement.html = (content?: string | (() => string) | { value: any }): string | (() => void) | undefined => {
      if (content === undefined) {
        return element.innerHTML;
      }
      
      // Если передали состояние { value: any }
      if (content && typeof content === 'object' && 'value' in content) {
        this._bindStateToElement(name, content as { value: any }, (el, val) => {
          el.innerHTML = val != null ? val.toString() : '';
        });
        return;
      }
      
      // Если передали функцию - создаем реактивный эффект
      if (typeof content === 'function') {
        return createReactiveEffect(
          () => {
            const result = (content as () => any)();
            return result != null ? result.toString() : '';
          },
          (value) => {
            element.innerHTML = value;
          },
          { immediate: true }
        );
      }
      
      // Простое статическое значение
      element.innerHTML = content != null ? content.toString() : '';
    };
    
    // Метод val с поддержкой реактивных функций
    enhancedElement.val = (content?: any | (() => any) | { value: any }): any | (() => void) | undefined => {
      if (content === undefined) {
        if (element instanceof HTMLInputElement || 
            element instanceof HTMLTextAreaElement ||
            element instanceof HTMLSelectElement) {
          return (element as any).value;
        }
        return element.textContent || '';
      }
      
      // Если передали состояние { value: any }
      if (content && typeof content === 'object' && 'value' in content) {
        this._bindStateToElement(name, content as { value: any }, (el, val) => {
          if (el instanceof HTMLInputElement || 
              el instanceof HTMLTextAreaElement ||
              el instanceof HTMLSelectElement) {
            (el as any).value = val != null ? val.toString() : '';
          } else {
            el.textContent = val != null ? val.toString() : '';
          }
        });
        return;
      }
      
      // Если передали функцию - создаем реактивный эффект
      if (typeof content === 'function') {
        return createReactiveEffect(
          () => {
            const result = (content as () => any)();
            return result != null ? result.toString() : '';
          },
          (value) => {
            if (element instanceof HTMLInputElement || 
                element instanceof HTMLTextAreaElement ||
                element instanceof HTMLSelectElement) {
              (element as any).value = value;
            } else {
              element.textContent = value;
            }
          },
          { immediate: true }
        );
      }
      
      // Простое статическое значение
      const finalValue = content != null ? content.toString() : '';
      if (element instanceof HTMLInputElement || 
          element instanceof HTMLTextAreaElement ||
          element instanceof HTMLSelectElement) {
        (element as any).value = finalValue;
      } else {
        element.textContent = finalValue;
      }
    };
    
    // Метод class с поддержкой реактивных функций и нескольких классов
    enhancedElement.class = (className?: string | (() => string) | { value: any }): string | (() => void) | undefined => {
      if (className === undefined) {
        return element.className || '';
      }
      
      // Если передали состояние { value: any }
      if (className && typeof className === 'object' && 'value' in className) {
        // Для состояний сохраняем предыдущее значение, чтобы удалять старый класс
        let previousStateValue: any = null;
        
        this._bindStateToElement(name, className as { value: any }, (el, val) => {
          // Удаляем старый класс состояния
          if (previousStateValue != null && previousStateValue !== '') {
            const oldClasses = previousStateValue.toString().split(' ').filter(Boolean);
            oldClasses.forEach((cls: string) => el.classList.remove(cls));
          }
          
          // Добавляем новый класс состояния
          if (val != null && val !== '') {
            const newClasses = val.toString().split(' ').filter(Boolean);
            newClasses.forEach((cls: string) => {
              if (!el.classList.contains(cls)) {
                el.classList.add(cls);
              }
            });
          }
          
          // Сохраняем текущее значение для следующего обновления
          previousStateValue = val;
        });
        return;
      }
      
      // Если передали функцию - создаем реактивный эффект
      if (typeof className === 'function') {
        return createReactiveEffect(
          () => {
            const result = (className as () => any)();
            return result != null ? result.toString() : '';
          },
          (value, effectId) => {
            if (!this._classBindings.has(name)) {
              this._classBindings.set(name, new Map<string, string[]>());
            }
            const elementBindings = this._classBindings.get(name)!;
            
            // Удаляем предыдущие классы этого эффекта
            if (effectId && elementBindings.has(effectId)) {
              const oldClasses = elementBindings.get(effectId)!;
              oldClasses.forEach((cls: string) => {
                if (cls) element.classList.remove(cls);
              });
            }
            
            // Добавляем новые классы
            if (value != null && value !== '') {
              const newClasses = value.toString().split(' ').filter(Boolean);
              newClasses.forEach((cls: string) => {
                if (cls && !element.classList.contains(cls)) {
                  element.classList.add(cls);
                }
              });
              
              // Сохраняем классы этого эффекта
              if (effectId) {
                elementBindings.set(effectId, newClasses);
              }
            } else if (effectId) {
              elementBindings.delete(effectId);
            }
          },
          { immediate: true }
        );
      }
      
      // Простое статическое значение - добавляем классы (не перезаписываем)
      if (className != null && className !== '') {
        const classesToAdd = className.toString().split(' ').filter(Boolean);
        classesToAdd.forEach((cls: string) => {
          if (cls && !element.classList.contains(cls)) {
            element.classList.add(cls);
          }
        });
      }
    };
    
    // Метод css для установки стилей с поддержкой реактивности и кумулятивности
    enhancedElement.css = (
      styles?: 
        | Record<string, string> 
        | (() => Record<string, string>) 
        | { value: Record<string, string> }
        | {
            color?: string | (() => string);
            backgroundColor?: string | (() => string);
            background?: string | (() => string);
            fontSize?: string | (() => string);
            fontWeight?: string | (() => string);
            fontFamily?: string | (() => string);
            lineHeight?: string | (() => string);
            textAlign?: string | (() => string);
            textDecoration?: string | (() => string);
            textTransform?: string | (() => string);
            letterSpacing?: string | (() => string);
            width?: string | (() => string);
            height?: string | (() => string);
            minWidth?: string | (() => string);
            minHeight?: string | (() => string);
            maxWidth?: string | (() => string);
            maxHeight?: string | (() => string);
            padding?: string | (() => string);
            paddingTop?: string | (() => string);
            paddingRight?: string | (() => string);
            paddingBottom?: string | (() => string);
            paddingLeft?: string | (() => string);
            margin?: string | (() => string);
            marginTop?: string | (() => string);
            marginRight?: string | (() => string);
            marginBottom?: string | (() => string);
            marginLeft?: string | (() => string);
            display?: string | (() => string);
            position?: string | (() => string);
            top?: string | (() => string);
            right?: string | (() => string);
            bottom?: string | (() => string);
            left?: string | (() => string);
            flex?: string | (() => string);
            flexDirection?: string | (() => string);
            flexWrap?: string | (() => string);
            justifyContent?: string | (() => string);
            alignItems?: string | (() => string);
            alignContent?: string | (() => string);
            flexGrow?: string | (() => string);
            flexShrink?: string | (() => string);
            flexBasis?: string | (() => string);
            order?: string | (() => string);
            gridTemplateColumns?: string | (() => string);
            gridTemplateRows?: string | (() => string);
            gridGap?: string | (() => string);
            gridColumn?: string | (() => string);
            gridRow?: string | (() => string);
            border?: string | (() => string);
            borderWidth?: string | (() => string);
            borderStyle?: string | (() => string);
            borderColor?: string | (() => string);
            borderTop?: string | (() => string);
            borderRight?: string | (() => string);
            borderBottom?: string | (() => string);
            borderLeft?: string | (() => string);
            borderRadius?: string | (() => string);
            boxShadow?: string | (() => string);
            opacity?: string | (() => string);
            overflow?: string | (() => string);
            overflowX?: string | (() => string);
            overflowY?: string | (() => string);
            transition?: string | (() => string);
            transform?: string | (() => string);
            animation?: string | (() => string);
            cursor?: string | (() => string);
            visibility?: string | (() => string);
            pointerEvents?: string | (() => string);
            userSelect?: string | (() => string);
            zIndex?: string | (() => string);
            listStyle?: string | (() => string);
            outline?: string | (() => string);
            resize?: string | (() => string);
            verticalAlign?: string | (() => string);
            whiteSpace?: string | (() => string);
            wordBreak?: string | (() => string);
            wordWrap?: string | (() => string);
            [key: `--${string}`]: string | (() => string);
            [key: string]: string | (() => string);
          }
    ): Record<string, string> | (() => void) | undefined => {
      if (styles === undefined) {
        // Возвращаем текущие стили как простой объект
        const result: Record<string, string> = {};
        for (let i = 0; i < element.style.length; i++) {
          const property = element.style[i];
          result[property] = element.style.getPropertyValue(property);
        }
        return result;
      }
      
      // Обработка объекта с подсказками
      const processStyleObject = (styleObj: any): Record<string, string> => {
        const result: Record<string, string> = {};
        
        // Преобразуем camelCase в kebab-case для CSS свойств
        const camelToKebab = (str: string): string => {
          return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
        };
        
        Object.entries(styleObj).forEach(([key, value]) => {
          if (value != null) {
            // Если значение - функция, вызываем её
            const resolvedValue = typeof value === 'function' ? value() : value;
            if (resolvedValue != null) {
              // Преобразуем свойство в kebab-case, если это не custom property
              const cssProperty = key.startsWith('--') ? key : camelToKebab(key);
              result[cssProperty] = resolvedValue.toString();
            }
          }
        });
        
        return result;
      };
      
      // Если передали состояние { value: Record<string, string> }
      if (styles && typeof styles === 'object' && 'value' in styles) {
        let previousStyles: Record<string, string> | null = null;
        
        // Явно указываем тип для TypeScript
        const stateWithValue = styles as { value: Record<string, string> };
        this._bindStateToElement(name, stateWithValue, (el, val) => {
          // Удаляем предыдущие стили состояния
          if (previousStyles) {
            Object.keys(previousStyles).forEach(property => {
              el.style.removeProperty(property);
            });
          }
          
          // Применяем новые стили состояния
          if (val && typeof val === 'object') {
            Object.entries(val).forEach(([property, value]) => {
              if (value != null) {
                el.style.setProperty(property, value.toString());
              } else {
                el.style.removeProperty(property);
              }
            });
          }
          
          // Сохраняем текущие стили для следующего обновления
          previousStyles = val && typeof val === 'object' ? {...val} : null;
        });
        return;
      }
      
      // Если передали функцию - создаем реактивный эффект
      if (typeof styles === 'function') {
        return createReactiveEffect(
          () => {
            const result = (styles as () => any)();
            // Если результат - объект с подсказками, преобразуем его
            if (result && typeof result === 'object' && !('value' in result)) {
              return processStyleObject(result);
            }
            return result && typeof result === 'object' ? result : {};
          },
          (value, effectId) => {
            if (!this._styleBindings.has(name)) {
              this._styleBindings.set(name, new Map<string, Map<string, string>>());
            }
            const elementBindings = this._styleBindings.get(name)!;
            
            // Удаляем предыдущие стили этого эффекта
            if (effectId && elementBindings.has(effectId)) {
              const oldStyles = elementBindings.get(effectId)!;
              Object.keys(oldStyles).forEach(property => {
                element.style.removeProperty(property);
              });
            }
            
            // Применяем новые стили
            if (value && typeof value === 'object') {
              const newStyles: Map<string, string> = new Map();
              Object.entries(value).forEach(([property, propertyValue]) => {
                if (propertyValue != null) {
                  element.style.setProperty(property, propertyValue.toString());
                  newStyles.set(property, propertyValue.toString());
                }
              });
              
              // Сохраняем стили этого эффекта
              if (effectId && newStyles.size > 0) {
                elementBindings.set(effectId, newStyles);
              } else if (effectId) {
                elementBindings.delete(effectId);
              }
            } else if (effectId) {
              elementBindings.delete(effectId);
            }
          },
          { immediate: true }
        );
      }
      
      // Если передали объект с подсказками (не простой Record<string, string>)
      if (styles && typeof styles === 'object') {
        const isPlainRecord = (obj: any): boolean => {
          return obj !== null && 
                 typeof obj === 'object' && 
                 !Array.isArray(obj) &&
                 !('value' in obj) &&
                 Object.keys(obj).every(key => typeof obj[key] !== 'function');
        };
        
        // Если это простой объект без функций
        if (isPlainRecord(styles)) {
          Object.entries(styles as Record<string, string>).forEach(([property, value]) => {
            if (value != null) {
              element.style.setProperty(property, value.toString());
            } else {
              element.style.removeProperty(property);
            }
          });
        } else {
          // Если это объект с подсказками (может содержать функции)
          const processedStyles = processStyleObject(styles);
          Object.entries(processedStyles).forEach(([property, value]) => {
            if (value != null) {
              element.style.setProperty(property, value.toString());
            }
          });
        }
      }
    };
    
    // Метод attr для установки атрибутов с реактивностью
    enhancedElement.attr = (attrName: string, value?: string | (() => string) | { value: any }): string | (() => void) | undefined => {
      if (value === undefined) {
        return element.getAttribute(attrName) || '';
      }
      
      // Если передали состояние { value: any }
      if (value && typeof value === 'object' && 'value' in value) {
        this._bindStateToElement(name, value as { value: any }, (el, val) => {
          if (val != null) {
            el.setAttribute(attrName, val.toString());
          } else {
            el.removeAttribute(attrName);
          }
        });
        return;
      }
      
      // Если передали функцию - создаем реактивный эффект
      if (typeof value === 'function') {
        return createReactiveEffect(
          () => {
            const result = (value as () => any)();
            return result != null ? result.toString() : '';
          },
          (attrValue) => {
            if (attrValue != null) {
              element.setAttribute(attrName, attrValue);
            } else {
              element.removeAttribute(attrName);
            }
          },
          { immediate: true }
        );
      }
      
      // Простое статическое значение
      if (value != null) {
        element.setAttribute(attrName, value.toString());
      } else {
        element.removeAttribute(attrName);
      }
    };

    return enhancedElement;
  }

  // Привязка состояния к элементу
  private _bindStateToElement<T>(
    elementName: string, 
    state: { value: T }, 
    updater: (element: HTMLElement, value: T) => void
  ): void {
    const element = this._elements.get(elementName);
    if (!element) {
      console.warn(`Element ${elementName} not found`);
      return;
    }
    
    // Находим ключ состояния
    const key = Array.from(this._states.entries())
      .find(([_, s]) => s.value === state.value)?.[0];
    
    if (!key) {
      console.warn('State not found');
      return;
    }
    
    const stateInfo = this._states.get(key)!;
    
    // Создаем callback с отслеживанием зависимостей
    const callback = (value: T) => {
      updater(element, value);
    };
    
    // Добавляем подписчика
    stateInfo.subscribers.push({ callback });
    
    // Сохраняем отписку
    const unsubscribe = () => {
      const index = stateInfo.subscribers.findIndex(s => s.callback === callback);
      if (index > -1) {
        stateInfo.subscribers.splice(index, 1);
      }
    };
    
    if (!this._bindings.has(elementName)) {
      this._bindings.set(elementName, []);
    }
    this._bindings.get(elementName)!.push(unsubscribe);
    
    // Инициализируем начальное значение
    updater(element, state.value);
  }

  // Улучшенный useState с отслеживанием зависимостей
  useState<T>(initialValue: T): [{ value: T }, (newValue: T | ((prev: T) => T)) => void] {
    const key = `state_${this._stateKeyCounter++}`;
    
    let currentValue = initialValue;
    const subscribers: Array<{ callback: (value: T) => void }> = [];
    const dependencies = new Map<string, Array<() => void>>();
    
    // Создаем прокси для отслеживания доступа
    const stateProxy = new Proxy({ value: currentValue } as { value: T }, {
      get: (target, prop) => {
        if (prop === 'value' && this._currentEffect) {
          // Отслеживаем зависимость
          this._currentEffect.dependencies.add(key);
        }
        return target[prop as keyof typeof target];
      },
      set: (target, prop, value) => {
        target[prop as keyof typeof target] = value;
        return true;
      }
    });
    
    // Сохраняем состояние
    this._states.set(key, { 
      value: currentValue, 
      subscribers,
      dependencies
    });
    
    // Setter функция
    const setter = (newValue: T | ((prev: T) => T)): void => {
      const oldValue = currentValue;
      
      if (typeof newValue === 'function') {
        currentValue = (newValue as (prev: T) => T)(oldValue);
      } else {
        currentValue = newValue;
      }
      
      // Обновляем значение в прокси
      stateProxy.value = currentValue;
      
      // Обновляем внутреннее состояние
      this._states.set(key, { 
        value: currentValue, 
        subscribers,
        dependencies
      });
      
      // Уведомляем всех подписчиков
      subscribers.forEach(({ callback }) => {
        try {
          callback(currentValue);
        } catch (error) {
          console.error('Error in state subscriber:', error);
        }
      });
    };
    
    return [stateProxy, setter];
  }

  // Метод для создания пользовательских эффектов
  useEffect(effect: () => void | (() => void)): () => void {
    const effectId = `user_effect_${this._effectKeyCounter++}`;
    
    // Начинаем отслеживание
    this._currentEffect = {
      id: effectId,
      dependencies: new Set<string>(),
      fn: effect
    };
    
    // Вызываем эффект для сбора зависимостей
    const cleanup = effect();
    
    const trackedDeps = new Set(this._currentEffect.dependencies);
    this._currentEffect = null;
    
    // Сохраняем зависимости
    this._effectDependencies.set(effectId, trackedDeps);
    
    // Создаем подписки на зависимости
    const unsubscribeFns: Array<() => void> = [];
    
    trackedDeps.forEach(stateKey => {
      const state = this._states.get(stateKey);
      if (state) {
        const callback = () => {
          // При изменении зависимости перезапускаем эффект
          if (cleanup && typeof cleanup === 'function') {
            cleanup();
          }
          effect();
        };
        
        if (!state.dependencies) {
          state.dependencies = new Map();
        }
        if (!state.dependencies.has(effectId)) {
          state.dependencies.set(effectId, []);
        }
        state.dependencies.get(effectId)!.push(callback);
        state.subscribers.push({ callback });
        
        unsubscribeFns.push(() => {
          const index = state.subscribers.findIndex(s => s.callback === callback);
          if (index > -1) {
            state.subscribers.splice(index, 1);
          }
          if (state.dependencies?.has(effectId)) {
            state.dependencies.delete(effectId);
          }
        });
      }
    });
    
    // Возвращаем функцию для очистки
    return () => {
      unsubscribeFns.forEach(fn => fn());
      if (cleanup && typeof cleanup === 'function') {
        cleanup();
      }
      this._effectDependencies.delete(effectId);
    };
  }

  mount(parent: Element): this {
    parent.appendChild(this.root);
    return this;
  }

  unmount(): this {
    if (this.root.parentNode) {
      this.root.parentNode.removeChild(this.root);
    }
    return this;
  }

  getElement(name: string): HTMLElement | undefined {
    return this._elements.get(name);
  }

  update(data: Record<string, any>): void {
    Object.entries(data).forEach(([key, value]) => {
      const element = this._elements.get(key);
      if (element) {
        this._updateElement(element, value);
      }
    });
  }

  private _updateElement(element: HTMLElement, value: any): void {
    if (element instanceof HTMLInputElement || 
        element instanceof HTMLTextAreaElement ||
        element instanceof HTMLSelectElement) {
      (element as any).value = value != null ? value.toString() : '';
    } else if (element instanceof HTMLImageElement && value != null) {
      (element as HTMLImageElement).src = value.toString();
    } else if (element instanceof HTMLAnchorElement && value != null) {
      (element as HTMLAnchorElement).href = value.toString();
    } else {
      element.textContent = value != null ? value.toString() : '';
    }
  }

  // Очистка всех обработчиков и эффектов
  destroy(): void {
    // Очищаем биндинги
    this._bindings.forEach(unsubscribes => {
      unsubscribes.forEach(unsubscribe => unsubscribe());
    });
    this._bindings.clear();
    
    // Очищаем обработчики
    this._eventHandlers.forEach((handlers, elementName) => {
      const element = this._elements.get(elementName);
      if (element) {
        handlers.forEach((handler, eventType) => {
          element.removeEventListener(eventType, handler);
        });
      }
      handlers.clear();
    });
    this._eventHandlers.clear();
    
    // Очищаем состояния
    this._states.forEach(state => {
      state.subscribers.length = 0;
      state.dependencies?.clear();
    });
    this._states.clear();
    
    // Очищаем эффекты
    this._effectDependencies.clear();
    this._reactiveEffects.clear();
    this._classBindings.clear();
    this._styleBindings.clear();
  }

  get structure(): Record<string, any> {
    const structure: Record<string, any> = {};
    this._elements.forEach((element, name) => {
      if (name !== 'root') {
        structure[name] = element;
      }
    });
    return structure;
  }
}