import { Produto } from './../models/produto.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private collection: AngularFirestoreCollection<any>;

  constructor(private _afs: AngularFirestore) {
    this.collection = this._afs.collection<Produto[]>('produtos');
  }

  /**
   * A function to find all elements from a document firebase
   */
  findAll(): Observable<Produto[]> {
    return this.collection.snapshotChanges().pipe(
      map(actions => actions.map(this.documentsToDomainObject))
    );
  }

  /**
   * A function to find one element by id, from a document firebase
   */
  findOne(id: string): Observable<Produto> {
    return this.collection.doc<Produto>(id).snapshotChanges().pipe(
      map(this.documentToDomainObject)
    );
  }

  /**
   * A function to remove one element by id, from a document firebase
   */
  remove(id: string) {
    this._afs.doc(`produtos/${id}`).delete();
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
