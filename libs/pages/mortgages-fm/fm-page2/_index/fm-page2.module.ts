import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateCompiler, TranslateModule, TranslateParser } from '@ngx-translate/core';
import {
  MODULE_NAME,
  CoreTranslateCompiler,
  CoreTranslateParser,
  CoreTranslateService,
} from '@core/shared-translate';
import { PageRoutingModule } from './fm-page2-routing.module';
import { FmPage2Page } from './fm-page2.page';
import { UiComponentsModule } from '@core/ui-components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiComponentsModule,
    TranslateModule.forChild({
      compiler: {
        provide: TranslateCompiler,
        useClass: CoreTranslateCompiler,
      },
      parser: { provide: TranslateParser, useClass: CoreTranslateParser },
    }),
    PageRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FmPage2Page],
  providers: [
    { provide: MODULE_NAME, useValue: 'FM_PAGE2' },
    CoreTranslateService,
  ],
})
export class FmPage2Module {}
