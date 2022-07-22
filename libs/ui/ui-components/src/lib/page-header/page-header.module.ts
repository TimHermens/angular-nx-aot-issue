import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [PageHeaderComponent],
  declarations: [PageHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiPageHeaderModule {}
