import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'fm-page1',
    loadChildren: () =>
      import('@core/mortgages-fm-page-fm-page1').then(m => m.FmPage1Module),
  },
  {
    path: 'fm-page2',
    loadChildren: () =>
      import('@core/mortgages-fm-page-fm-page2').then(m => m.FmPage2Module),
  },
  {
    path: '',
    redirectTo: 'fm-page1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortgagesRoutingModule {}
