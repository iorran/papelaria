import { Component, OnInit, Input } from '@angular/core';
import { Fornecedor } from '../../fornecedores/shared/models/fornecedor.model';

@Component({
  selector: 'app-orcamento-ranking',
  templateUrl: './orcamento-ranking.component.html',
  styleUrls: ['./orcamento-ranking.component.scss']
})
export class OrcamentoRankingComponent implements OnInit {
  @Input() fornecedor: Fornecedor;

  constructor() { }

  ngOnInit() {
  }

}
