import { Orcamento } from './../models/orcamento.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {
  private collection: AngularFirestoreCollection<any>;

  constructor(private _afs: AngularFirestore) {
    this.collection = this._afs.collection<Orcamento[]>('orcamentos');
  }

  /**
   * A function to find all elements from a document firebase
   */
  findAll(): Observable<Orcamento[]> {
    return this.collection.snapshotChanges().pipe(
      map(actions => actions.map(this.documentsToDomainObject))
    );
  }

  /**
   * A function to find one element by id, from a document firebase
   */
  findOne(id: string): Observable<Orcamento> {
    return this.collection.doc<Orcamento>(id).valueChanges();
  }

  /**
   * A function to remove one element by id, from a document firebase
   */
  remove(id: string) {
    this.collection.doc<Orcamento>(id).delete();
  }

  /**
   * A function to save one orcamento
   */
  create(orcamento: Orcamento) {
    this.collection.add(orcamento);
  }

  /**
   * A function to update one orcamento
   */
  update(id: string, orcamento: Orcamento) {
    this.collection.doc<Orcamento>(id).update(orcamento);
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
