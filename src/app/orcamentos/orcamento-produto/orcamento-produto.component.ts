import { Fornecedor } from './../../fornecedores/shared/models/fornecedor.model';
import { TranslateService } from '@ngx-translate/core';
import { OrcamentoService } from './../shared/services/orcamento.service';
import { Component, OnInit, Input } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-orcamento-produto',
  templateUrl: './orcamento-produto.component.html',
  styleUrls: ['./orcamento-produto.component.scss']
})
export class OrcamentoProdutoComponent implements OnInit {
  @Input() fornecedor: Fornecedor;

  constructor(
    private _orcamentoService: OrcamentoService,
    private _loadingController: LoadingController,
    private _translate: TranslateService
  ) { }

  ngOnInit() {
  }

}
