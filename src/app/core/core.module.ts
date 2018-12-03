import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { ToastService } from './../core/services/toast.service';
import { environment } from './../../environments/environment';
import { CacheService } from './services/cache.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'papelaria-jacarepagua'),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastService,
    AuthService,
    CacheService,
    AuthGuard
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
