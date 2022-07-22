import { Component } from '@angular/core';
import { CoreTranslateService } from '@core/shared-translate';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private readonly translateService: CoreTranslateService) {
    this.translateService.setDefaultLang('en');
  }
}
