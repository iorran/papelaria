import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _router: Router, private _authService: AuthService) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const isLoggedIn = this._authService.isLoggedIn();
        if (!isLoggedIn) {
            this._router.navigate(['/']);
            return !isLoggedIn;
        }
        return isLoggedIn;
    }
}
