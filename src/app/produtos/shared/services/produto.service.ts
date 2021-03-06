import { Produto } from './../models/produto.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
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
    return this.collection.doc<Produto>(id).valueChanges();
  }

  /**
   * A function to remove one element by id, from a document firebase
   */
  remove(id: string): Observable<any>  {
    return from(this.collection.doc<Produto>(id).delete());
  }

  /**
   * A function to save one product
   */
  create(produto: Produto): Observable<any>  {
    return from(this.collection.add(produto));
  }

  /**
   * A function to update one product
   */
  update(id: string, produto: Produto): Observable<any> {
    return from(this.collection.doc<Produto>(id).update(produto));
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
