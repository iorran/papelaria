import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _translate: TranslateService,
    private _loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.load();
  }

  private async load() {
  }

  logout() {
    this._authService.logout().then((res) => this._router.navigate(['/']));
  }
}
