import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmPage1Page } from './fm-page1.page';

const routes: Routes = [
  { path: '', component: FmPage1Page },
  { path: 'default.html', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
