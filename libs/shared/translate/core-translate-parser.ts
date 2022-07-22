import { Inject, Injectable } from '@angular/core';

import { TranslateDefaultParser } from '@ngx-translate/core';
import { MODULE_NAME } from './translate.tokens';

@Injectable({
  providedIn: 'root',
})
export class CoreTranslateParser extends TranslateDefaultParser {
  constructor(
    @Inject(MODULE_NAME)
    private _prefix: string
  ) {
    super();
  }
  public getValue(target: any, key: string): any {
    const _key = `${this._prefix}.${key}`;
    const result = super.getValue.apply(this, [target, _key]);
    return result;
  }

  // Unfortunately we'll have to override the interpolate functionality as well
  // because we can't overload the private interpolateString function by itself.
  // This was needed because it eventually calls getValue, which would call
  // our own getValue, while within the interpolateString function, we need the
  // superclass' getValue
  // eslint-disable-next-line @typescript-eslint/ban-types
  public interpolate(expr: string | Function, params?: any): string {
    let result: string;

    if (typeof expr === 'string') {
      result = this.coreInterpolateString(expr, params);
    } else if (typeof expr === 'function') {
      result = this.coreInterpolateFunction(expr, params);
    }

    return result;
  }

  private coreInterpolateString(expr: string, params?: any) {
    if (!params) {
      return expr;
    }

    return expr.replace(
      this.templateMatcher,
      (substring: string, b: string) => {
        const r = super.getValue(params, b);
        return typeof r !== 'undefined' ? r : substring;
      }
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private coreInterpolateFunction(fn: Function, params?: any) {
    return fn(params);
  }
}
