import { Fornecedor } from './../models/fornecedor.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private collection: AngularFirestoreCollection<any>;

  constructor(private _afs: AngularFirestore) {
    this.collection = this._afs.collection<Fornecedor[]>('fornecedores');
  }

  /**
   * A function to find all elements from a document firebase
   */
  findAll(): Observable<Fornecedor[]> {
    return this.collection.snapshotChanges().pipe(
      map(actions => actions.map(this.documentsToDomainObject))
    );
  }

  /**
   * A function to find one element by id, from a document firebase
   */
  findOne(id: string): Observable<Fornecedor> {
    return this.collection.doc<Fornecedor>(id).valueChanges();
  }

  /**
   * A function to remove one element by id, from a document firebase
   */
  remove(id: string) {
    this.collection.doc<Fornecedor>(id).delete();
  }

  /**
   * A function to save one product
   */
  create(fornecedor: Fornecedor) {
    this.collection.add(fornecedor);
  }

  /**
   * A function to update one product
   */
  update(id: string, fornecedor: Fornecedor) {
    this.collection.doc<Fornecedor>(id).update(fornecedor);
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
