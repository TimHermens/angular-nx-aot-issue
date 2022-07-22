import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { CoreTranslateService } from '@core/shared-translate';
import { translations } from './fm-page1.translate';

@Component({
  selector: 'page-fm-page1',
  templateUrl: './fm-page1.page.html',
  styleUrls: ['./fm-page1.page.css'],
})
export class FmPage1Page implements OnInit {
  currentLang: string;

  constructor(
    private translateService: CoreTranslateService,
    private titleService: Title
  ) {
    this.currentLang = this.translateService.currentLang;
  }

  /**
   * ngOnInit() hook only runs ONCE. On subsequent page visits this hook will NOT be executed.
   * Use it for actions that need to be done once in an app such as setting up your Redux store.
   */
  ngOnInit() {
    this.translateService.setTranslations(translations);
  }

  // Fired when the component routing has finished animating.
  ionViewDidEnter() {
    this.titleService.setTitle(this.translateService.instant('TITLE'));
  }

  /**
   * This hook will run every time you enter this page.
   * Useful for making sure you reset state (clear a form, start from step 1, etc.)
   */
  // ionViewWillEnter(){}

  /**
   * This hook will run every time just before leaving the page.
   * Useful for cleaning up, such as removing event listeners and unsubscribing from observables
   */
  // ionViewWillLeave(){}
}
