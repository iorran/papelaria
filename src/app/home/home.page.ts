import { Router } from '@angular/router';
import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private _authService: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout().then((res) => this._router.navigate(['/']));
  }
}
