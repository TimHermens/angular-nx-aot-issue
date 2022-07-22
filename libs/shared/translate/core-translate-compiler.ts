import { Injectable, Inject } from '@angular/core';
import { TranslateCompiler } from '@ngx-translate/core';
import { MODULE_NAME } from './translate.tokens';

@Injectable()
export class CoreTranslateCompiler extends TranslateCompiler {
  constructor(
    @Inject(MODULE_NAME)
    private _prefix: string
  ) {
    super();
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  public compile(value: string, _lang: string): string | Function {
    return value;
  }
  public compileTranslations(translations: any, _lang: string): any {
    const _translations = { [this._prefix]: translations };
    return _translations;
  }
}
