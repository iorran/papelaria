import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
})
export class ProdutoListPage implements OnInit { 
  private collection: AngularFirestoreCollection<any>; 
  public produtos: Observable<Produto[]>;

  constructor(private _afs: AngularFirestore,
    private _router: Router,
    private _alertController: AlertController) { 
  }

  ngOnInit() {  
    this.collection = this._afs.collection<any>('produtos'); 
    this.produtos = this.collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Produto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  add(){ 
    this._router.navigate(['/produto-detail']);  
  }

  edit(id: string){ 
    alert(id);
  } 

  async remove(id: string){ 
    const alert = await this._alertController.create({
      message: 'Deseja realmente deletar o produto?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this._afs.doc(`produtos/${id}`).delete();
          },
        },
      ],
    });
  
    await alert.present();
  }

}
