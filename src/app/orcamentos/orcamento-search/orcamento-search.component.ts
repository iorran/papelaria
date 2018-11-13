import { Component, OnInit } from '@angular/core';
import { Produto } from '../../produtos/shared/models/produto.model';
import { ProdutoService } from '../../produtos/shared/services/produto.service';
import { FornecedorService } from '../../fornecedores/shared/services/fornecedor.service';
import { LoadingController } from '@ionic/angular';
import { Fornecedor } from '../../fornecedores/shared/models/fornecedor.model';

@Component({
  selector: 'app-orcamento-search',
  templateUrl: './orcamento-search.component.html',
  styleUrls: ['./orcamento-search.component.scss']
})
export class OrcamentoSearchComponent implements OnInit {
  public produto: Produto;
  public produtos: Produto[];
  public fornecedor: Fornecedor;
  public fornecedores: Fornecedor[];

  constructor(
    private _produtoService: ProdutoService,
    private _fornecedorService: FornecedorService,
    private _loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.loadProdutos();
    this.loadFornecedores();
  }

  private async loadProdutos() {
    const loading = await this._loadingController.create({
      message: 'Carregando ...'
    });

    await loading.present();

    this._produtoService.findAll().subscribe(res => {
      loading.dismiss();
      this.produtos = res;
    });
  }

  private async loadFornecedores() {
    const loading = await this._loadingController.create({
      message: 'Carregando ...'
    });

    await loading.present();

    this._fornecedorService.findAll().subscribe(res => {
      loading.dismiss();
      this.fornecedores = res;
    });
  }
}
