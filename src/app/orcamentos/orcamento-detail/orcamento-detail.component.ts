import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../produtos/shared/models/produto.model';
import { Fornecedor } from '../../fornecedores/shared/models/fornecedor.model';
import { LoadingController } from '@ionic/angular';
import { OrcamentoService } from '../shared/services/orcamento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Orcamento } from '../shared/models/orcamento.model';

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
  public createdAt: any;

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

    this.loadOrcamento();
  }

  async loadOrcamento() {
    const loading = await this._loadingController.create({
      message: 'Carregando ...'
    });

    await loading.present();

    this._orcamentoService
      .findByProdutoIdAndFornecedorId(this.produto.id, this.fornecedor.id)
      .subscribe((data) => {
        loading.dismiss();
        this.createdAt = data[0].createdAt;
        this.form.patchValue(data[0]);
        // this.form.get('valor').setValue(data[0].valor);
      });
  }

  async save() {
    this.isSubmitted = true;
    const orcamento: Orcamento = this.form.value;

    if (this.form.valid) {
      const loading = await this._loadingController.create({
        message: 'Salvando ...'
      });

      await loading.present();

      this._orcamentoService.create(orcamento);

      loading.dismiss();

      this.isSubmitted = false;
    }
  }

  get valor() {
    return this.form.get('valor');
  }
}
