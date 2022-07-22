import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CoreTranslateService } from '@core/shared-translate';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot({
      animated: true,
      scrollPadding: false,
    }),
    RouterModule.forRoot([
      {
        path: 'mortgages-fm',
        loadChildren: () =>
          import('./remote-entry/entry.module').then(m => m.RemoteEntryModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mortgages-fm'
      }
    ]),
    TranslateModule.forRoot(),
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    CoreTranslateService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
