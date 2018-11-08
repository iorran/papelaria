import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private collection: AngularFirestoreCollection<any>; 

  constructor(private _afs: AngularFirestore) {  
    this.collection = this._afs.collection<any>('produtos'); 
  }

  findAll(): Observable<Produto> {
    return this.collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Produto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  remove(id: string) { 
    this._afs.doc(`produtos/${id}`).delete();
  }

}