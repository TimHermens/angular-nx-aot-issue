import { Injectable } from '@angular/core';
import {
  MissingTranslationHandler,
  TranslateCompiler,
  TranslateLoader,
  TranslateParser,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';

export interface ICoreTranslation<T = any> {
  en: T;
  nl: T;
  pt?: T;
  es?: T;
  de?: T;
  cn?: T;
}

@Injectable()
export class CoreTranslateService extends TranslateService {
  constructor(
    store: TranslateStore,
    currentLoader: TranslateLoader,
    compiler: TranslateCompiler,
    parser: TranslateParser,
    missingTranslationHandler: MissingTranslationHandler
  ) {
    super(store, currentLoader, compiler, parser, missingTranslationHandler);
  }
  setTranslations(translations: ICoreTranslation) {
    Object.keys(translations).forEach(lang => {
      this.setTranslation(lang, translations[lang], true);
    });
  }
}
