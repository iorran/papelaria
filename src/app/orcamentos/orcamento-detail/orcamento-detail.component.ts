import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../produtos/shared/models/produto.model';
import { Fornecedor } from '../../fornecedores/shared/models/fornecedor.model';
import { LoadingController } from '@ionic/angular';
import { OrcamentoService } from '../shared/services/orcamento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-orcamento-detail',
  templateUrl: './orcamento-detail.component.html',
  styleUrls: ['./orcamento-detail.component.scss']
})
export class OrcamentoDetailComponent implements OnInit {

  @Input() fornecedor: Fornecedor;
  @Input() produto: Produto;

  public form: FormGroup;
  public isSubmitted: boolean;

  constructor(
    private _orcamentoService: OrcamentoService,
    private _loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      valor: new FormControl('', Validators.required),
      produtoId: new FormControl(this.produto.id, Validators.required),
      fornecedorId: new FormControl(this.fornecedor.id, Validators.required)
    });
  }

  get valor() {
    return this.form.get('valor');
  }
}
