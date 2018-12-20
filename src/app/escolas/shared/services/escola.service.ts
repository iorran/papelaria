import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Escola } from './../models/escola.model';

@Injectable()
export class EscolaService {
  private collection: AngularFirestoreCollection<any>;

  constructor(private _afs: AngularFirestore) {
    this.collection = this._afs.collection<Escola[]>('escolas');
  }

  /**
   * A function to find all elements from a document firebase
   */
  findAll(): Observable<Escola[]> {
    return this.collection.snapshotChanges().pipe(
      map(actions => actions.map(this.documentsToDomainObject))
    );
  }

  /**
   * A function to find one element by id, from a document firebase
   */
  findOne(id: string): Observable<Escola> {
    return this.collection.doc<Escola>(id).valueChanges();
  }

  /**
   * A function to remove one element by id, from a document firebase
   */
  remove(id: string) {
    return from(this.collection.doc<Escola>(id).delete());
  }

  /**
   * A function to save one product
   */
  create(escola: Escola) {
    return from(this.collection.add(escola));
  }

  /**
   * A function to update one product
   */
  update(id: string, escola: Escola) {
    return from(this.collection.doc<Escola>(id).update(escola));
  }

  documentsToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  }

  documentToDomainObject = _ => {
    const object = _.payload.data();
    object.id = _.payload.id;
    return object;
  }

}
