import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../produtos/shared/models/produto.model';
import { ProdutoService } from '../../produtos/shared/services/produto.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-orcamento-produto',
  templateUrl: './orcamento-produto.component.html',
  styleUrls: ['./orcamento-produto.component.scss']
})
export class OrcamentoProdutoComponent implements OnInit {
  @Input() produto: Produto;

  constructor(
    private _produtoService: ProdutoService,
    private _loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

}
