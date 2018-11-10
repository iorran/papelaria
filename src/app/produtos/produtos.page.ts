import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProdutoService } from './shared/services/produto.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Produto } from './shared/models/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  public produtos: Produto[];
  public produtosFiltered: Produto[];

  constructor(
    private _produtoService: ProdutoService,
    private _router: Router,
    private _alertController: AlertController,
    private _loadingController: LoadingController) {
  }

  ngOnInit() {
    this.loadProdutos();
  }

  private async loadProdutos() {
    const loading = await this._loadingController.create({
      message: 'Carregando ...'
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

  add() {
    this._router.navigateByUrl('produtos/add');
  }

  edit(id: string) {
    this._router.navigate(['produtos/edit', id]);
  }

  async remove(id: string) {
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
