import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable, of } from 'rxjs';
import { switchMap, tap, map, take } from 'rxjs/operators';

import { Usuario } from '../../shared/models/usuario.model';

@Injectable()
export class AuthService {
  user: Observable<Usuario>;

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private _angularFirestore: AngularFirestore
  ) {
    this.user = this._firebaseAuth.authState.pipe(
      switchMap(
        user => user ? this.findUser(user) : of(null)
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
        // this.notify.update('Welcome back!', 'success');
        return this.updateUserData(credential.user);
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

  findUser(user: firebase.User) {
    return this._angularFirestore.doc<Usuario>(`users/${user.uid}`).valueChanges();
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this._angularFirestore.doc(`users/${user.uid}`);

    const data: Usuario = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });

  }
}
