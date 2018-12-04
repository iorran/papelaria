
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class UserService {
  private collection: AngularFirestoreCollection<any>;

  constructor(private _afs: AngularFirestore) {
    this.collection = this._afs.collection<Usuario[]>('usuarios');
  }

  /**
   * A function to find one element by id, from a document firebase
   */
  findOne(id: string): Observable<Usuario> {
    return this.collection.doc<Usuario>(id).valueChanges();
  }

  /**
   * A function to remove one element by id, from a document firebase
   */
  remove(id: string) {
    return from(this.collection.doc<Usuario>(id).delete());
  }

  /**
   * A function to save one product
   */
  create(usuario: Usuario) {
    return from(this.collection.add(usuario));
  }

  /**
   * A function to update one product
   */
  update(id: string, usuario: Usuario) {
    return from(this.collection.doc<Usuario>(id).set(usuario, { merge: true }));
  }
}
