import { ProdutoService } from './../shared/services/produto.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/models/produto.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {
  public produtos: Produto[];
  public produtosFiltered: Produto[];

  constructor(
    private _produtoService: ProdutoService,
    private _router: Router,
    private _alertController: AlertController,
    private _translate: TranslateService,
    private _loadingController: LoadingController) {
  }

  ngOnInit() {
    this.loadProdutos();
  }

  private async loadProdutos() {
    const loading = await this._loadingController.create({
      message: this._translate.instant('geral.carregando')
    });

    await loading.present();

    this._produtoService.findAll().subscribe(res => {
      loading.dismiss();
      this.produtos = res;
      this.produtosFiltered = res;
    });
  }

  search(event: any) {
    const searchQuery: string = event.target.value;

    this.produtosFiltered = this.produtos;

    this.produtosFiltered = this.produtos.filter((p) => {
      return p.nome.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }

  edit(id: string) {
    this._router.navigate(['produtos/edit', id]);
  }

  async remove(id: string) {
    const alert = await this._alertController.create({
      message:  this._translate.instant('geral.removendo'),
      buttons: [
        {
          text:  this._translate.instant('geral.btn.nao'),
          role: 'cancel'
        },
        {
          text:  this._translate.instant('geral.btn.sim'),
          handler: () => {
            this._produtoService.remove(id);
          },
        },
      ],
    });

    await alert.present();
  }
}
