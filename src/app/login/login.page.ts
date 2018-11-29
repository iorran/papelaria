import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form: FormGroup;
  public isSubmitted: boolean;

  constructor(private _authService: AuthService,
    private _router: Router) { }

  ngOnInit() {
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['/home']);
    }

    this.form = new FormGroup({
      email: new FormControl('iorranpt@gmail.com', Validators.required),
      password: new FormControl('123456', Validators.required)
    });
  }

  signInWithEmail() {
    this._authService.signInRegular(this.email.value, this.password.value)
      .then(data => {
        this._router.navigate(['/home']);
      })
      .catch(data => {
        console.error(data);
      });
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
}
