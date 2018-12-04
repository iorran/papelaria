import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    { title: 'home.titulo', url: '/home', icon: 'home' },
    { title: 'produtos.titulo', url: '/produtos', icon: 'pricetag' },
    { title: 'fornecedores.titulo', url: '/fornecedores', icon: 'business' },
    { title: 'orcamentos.titulo', url: '/orcamentos', icon: 'cart' }
  ];

  constructor(
    private _platform: Platform,
    private _splashScreen: SplashScreen,
    private _statusBar: StatusBar,
    private _translate: TranslateService,
    private _menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.initTranslate();
    this._platform.ready().then(() => {
      this._statusBar.styleDefault();
      this._splashScreen.hide();
      this._menuCtrl.enable(false, 'menuId');
    });
  }

  private initTranslate() {
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang('pt');
    if (this._translate.getBrowserLang() !== undefined) {
      this._translate.use(this._translate.getBrowserLang());
    } else {
      this._translate.use('pt'); // Set your language here
    }
  }
}
