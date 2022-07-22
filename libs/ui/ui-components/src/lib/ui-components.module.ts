import { NgModule } from '@angular/core';
import { UiPageHeaderModule } from "./page-header/page-header.module";

@NgModule({
  imports: [UiPageHeaderModule],
  exports: [UiPageHeaderModule],
})
export class UiComponentsModule {
}
