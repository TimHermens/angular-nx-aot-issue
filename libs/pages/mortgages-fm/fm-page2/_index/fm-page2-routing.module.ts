import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmPage2Page } from './fm-page2.page';

const routes: Routes = [
  { path: '', component: FmPage2Page },
  { path: 'default.html', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
