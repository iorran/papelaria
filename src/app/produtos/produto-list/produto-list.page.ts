import { DataBundleService } from './../../shared/services/data-bundle.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'; 
import { AlertController } from '@ionic/angular';
import { ProdutoService } from '../../shared/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
})
export class ProdutoListPage implements OnInit { 
  public produtos: Observable<Produto[]>;

  constructor(
    private _storage: DataBundleService,
    private _produtoService: ProdutoService,
    private _router: Router,
    private _alertController: AlertController) { 
  }

  ngOnInit() {  
    this.produtos = this._produtoService.findAll();
  }

  add(){ 
    this._router.navigate(['/produto-detail']);  
  }

  edit(id: string){ 
    this._storage.save(id);
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
            this._produtoService.remove(id);
          },
        },
      ],
    });
  
    await alert.present();
  }

}
