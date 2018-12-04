import { Fornecedor } from './../../fornecedores/shared/models/fornecedor.model';
import { TranslateService } from '@ngx-translate/core';
import { OrcamentoService } from './../shared/services/orcamento.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Orcamento } from '../shared/models/orcamento.model';

@Component({
  selector: 'app-orcamento-produto',
  templateUrl: './orcamento-produto.component.html',
  styleUrls: ['./orcamento-produto.component.scss']
})
export class OrcamentoProdutoComponent implements OnInit, OnChanges {
  @Input() fornecedor: Fornecedor;

  public orcamentos: Orcamento[];

  /** // TODO: constant */
  public moeda: string;

  constructor(
    private _orcamentoService: OrcamentoService,
    private _loadingController: LoadingController,
    private _translate: TranslateService) { }

  ngOnInit() {
    this.moeda = this._translate.instant('geral.moeda');
  }

  ngOnChanges() {
    this.loadOrcamento();
  }

  async loadOrcamento() {
    const loading = await this._loadingController.create({
      message: this._translate.instant('geral.aguarde')
    });

    await loading.present();

    this._orcamentoService
      .findByFornecedorId(this.fornecedor.id)
      .subscribe((data) => {
        loading.dismiss();
        this.groupByLastPrices(data);
      });
  }

  /**
   * Este método deverá ser removido.
   *
   * Caso o sistema salve os orçamentos, mantendo o hitórico dos valores no mesmo documento(tabela),
   * faz sentido pegar apenas os últimos preços lançados por cada fornecedor.
   *
   * Lembrando que os orçamentos são ordenados por: @fornecedorId, @createdAt, @produtoNome
   * @param orcamentos
   */
  private groupByLastPrices(orcamentos: any[]) {
    this.orcamentos = [];

    orcamentos.forEach(orcamento => {
      if (!this.orcamentos.find(o => o.produto.id === orcamento.produto.id)) {
        this.orcamentos.push(orcamento);
      }
    });

    this.orcamentos = this.orcamentos.sort((o1, o2) => o1.produto.nome.localeCompare(o2.produto.nome));
  }
}
