import { Observable } from 'rxjs';
import { Orcamento } from './../shared/models/orcamento.model';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from '@ionic/angular';
import { OrcamentoService } from './../shared/services/orcamento.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Produto } from '../../produtos/shared/models/produto.model';

@Component({
  selector: 'app-orcamento-ranking',
  templateUrl: './orcamento-ranking.component.html',
  styleUrls: ['./orcamento-ranking.component.scss']
})
export class OrcamentoRankingComponent implements OnInit, OnChanges {
  @Input() produto: Produto;

  public orcamentos: Orcamento[];

  constructor(
    private _orcamentoService: OrcamentoService,
    private _loadingController: LoadingController,
    private _translate: TranslateService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.loadOrcamento();
  }

  async loadOrcamento() {

    const loading = await this._loadingController.create({
      message: this._translate.instant('geral.carregando')
    });

    await loading.present();

    this._orcamentoService
      .findByProdutoId(this.produto.id)
      .subscribe((data) => {
        loading.dismiss();
        this.getOnlyMaxResults(data);
      });
  }

  private getOnlyMaxResults(orcamentos: any[]) {
    let last: string;
    this.orcamentos = [];

    orcamentos.forEach(orcamento => {
      if (orcamento.fornecedorId !== last) {
        last = orcamento.fornecedorId;
        this.orcamentos.push(orcamento);
      }
    });

    this.orcamentos = this.orcamentos.sort((o1, o2) => o1.valor - o2.valor);
  }
}
