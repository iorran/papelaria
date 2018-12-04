import { Orcamento } from './../models/orcamento.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
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
      map(actions => actions.map(this.documentToDomainObject))
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
    return from(this.collection.doc<Orcamento>(id).delete());
  }

  /**
   * A function to save one orcamento
   */
  create(orcamento: Orcamento) {
    orcamento.createdAt = new Date();
    return from(this.collection.add(orcamento));
  }

  /**
   * A function to update one orcamento
   */
  update(id: string, orcamento: Orcamento) {
    return from(this.collection.doc<Orcamento>(id).update(orcamento));
  }

  /**
   * findByProdutoIdAndFornecedorId
   */
  public findByProdutoIdAndFornecedorId(produtoId: string, fornecedorId: string): Observable<Orcamento[]> {
    return this._afs.collection<Orcamento>('orcamentos',
      ref => ref
        .where('produto.id', '==', produtoId)
        .where('fornecedor.id', '==', fornecedorId)
        .orderBy('createdAt', 'desc')
        .limit(1)
      ).snapshotChanges().pipe(
        map(actions => actions.map(this.documentToDomainObject))
      );
  }

  /**
   * findByProdutoId
   */
  public findByProdutoId(produtoId: string): Observable<Orcamento[]> {
    return this._afs.collection<Orcamento>('orcamentos',
      ref => ref
        .where('produto.id', '==', produtoId)
        .orderBy('createdAt', 'desc')
        .orderBy('valor', 'asc')
        .orderBy('fornecedor.id', 'desc')
      ).snapshotChanges().pipe(
        map(actions => actions.map(this.documentToDomainObject))
      );
  }

  /**
   * findByFornecedorId
   */
  public findByFornecedorId(fornecedorId: string): Observable<Orcamento[]> {
    return this._afs.collection<Orcamento>('orcamentos',
      ref => ref
        .where('fornecedor.id', '==', fornecedorId)
        .orderBy('createdAt', 'desc')
        .orderBy('produto.nome', 'asc')
      ).snapshotChanges().pipe(
        map(actions => actions.map(this.documentToDomainObject))
      );
  }

  documentToDomainObject = _ => {
    const object = _.payload.doc.data() as Orcamento;
    object.id = _.payload.doc.id;
    return object;
  }

}
