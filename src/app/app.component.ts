import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Produtos', url: '/produtos', icon: 'pricetag' },
    { title: 'Fornecedores', url: '/fornecedores', icon: 'business' },
    { title: 'Orçamentos', url: '/orcamentos', icon: 'cart' }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _translate: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this._initTranslate();

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private _initTranslate() {
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang('pt-BR');


    if (this._translate.getBrowserLang() !== undefined) {
      this._translate.use(this._translate.getBrowserLang());
    } else {
      this._translate.use('pt-BR'); // Set your language here
    }
  }
}
