import { ProdutoService } from './../shared/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../shared/models/produto.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.scss']
})
export class ProdutoDetailComponent implements OnInit {

  public isEdit: boolean;
  public produto: Produto = <Produto>{};

  constructor(private _activatedRoute: ActivatedRoute,
    private _produtoService: ProdutoService,
    private _loadingController: LoadingController) { }

  ngOnInit() {
    this.produto.id = this._activatedRoute.snapshot.params['id'];
    this.isEdit = this.produto.id !== undefined;
    if (this.produto.id) {
      this.loadProduto();
    }
  }

  private async loadProduto() {

    const loading = await this._loadingController.create({
      message: 'Carregando ...'
    });

    await loading.present();

    this._produtoService.findOne(this.produto.id).subscribe(res => {
      loading.dismiss();
      this.produto = res;
    });
  }

  save() {

  }
}
