import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable, of } from 'rxjs';
import { switchMap, tap, map, take } from 'rxjs/operators';

import { UserService } from './user.service';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class AuthService {
  user: Observable<Usuario>;

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private _userService: UserService
  ) {
    this.user = this._firebaseAuth.authState.pipe(
      switchMap(
        user => user ? this._userService.findOne(user.uid) : of(null)
      )
    );
  }
  logout() {
    return this._firebaseAuth.auth.signOut();
  }
  signInRegular(email, password) {
    return this._firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        const usuario: Usuario = {
          uid: credential.user.uid,
          email: credential.user.email,
          displayName: credential.user.displayName,
          photoURL: credential.user.photoURL
        };
        return this._userService.update(usuario.uid, usuario);
      })
      .catch(error => console.log(error));
  }

  isLoggedIn() {
    return this.user.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
        }
        return loggedIn;
      })
    );
  }
}
