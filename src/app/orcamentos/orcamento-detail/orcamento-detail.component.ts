import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Produto } from '../../produtos/shared/models/produto.model';
import { Fornecedor } from '../../fornecedores/shared/models/fornecedor.model';
import { LoadingController } from '@ionic/angular';
import { OrcamentoService } from '../shared/services/orcamento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Orcamento } from '../shared/models/orcamento.model';
import { ToastService } from '../../shared/services/toast.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-orcamento-detail',
  templateUrl: './orcamento-detail.component.html',
  styleUrls: ['./orcamento-detail.component.scss']
})
export class OrcamentoDetailComponent implements OnInit, OnChanges {

  @Input() fornecedor: Fornecedor;
  @Input() produto: Produto;

  public form: FormGroup;
  public isSubmitted: boolean;
  public orcamentoId: string;

  constructor(
    private _orcamentoService: OrcamentoService,
    private _loadingController: LoadingController,
    private _toastService: ToastService,
    private _translate: TranslateService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      valor: new FormControl('', Validators.required),
      produto: new FormControl(this.produto, Validators.required),
      fornecedor: new FormControl(this.fornecedor, Validators.required),
      quantidade: new FormControl('', Validators.required),
      condicao: new FormControl()
    });

    this.loadOrcamento();
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
      .findByProdutoIdAndFornecedorId(this.produto.id, this.fornecedor.id)
      .subscribe((data) => {
        loading.dismiss();
        this.form.get('fornecedor').setValue(data[0].fornecedor);
        this.form.get('produto').setValue(data[0].produto);
        this.form.get('quantidade').setValue(data[0].quantidade);
        this.form.get('condicao').setValue(data[0].condicao);
        this.valor.setValue(data[0].id ? data[0].valor : null);
      });
  }

  async save() {
    this.isSubmitted = true;
    const orcamento: Orcamento = this.form.value;

    if (this.form.valid) {
      const loading = await this._loadingController.create({
        message: this._translate.instant('geral.salvando')
      });

      await loading.present();

      if (this.orcamentoId) {
        await this.update(orcamento);
      } else {
        await this.create(orcamento);
      }

      await loading.dismiss();

      this.isSubmitted = false;
    }
  }

  update(orcamento: Orcamento): any {
    this._orcamentoService.update(this.orcamentoId, orcamento)
      .then((res) => {
        this._toastService.presentToast(this._translate.instant('geral.registro_atualizado'), 'success');
      }).catch((res) => {
        this._toastService.presentToast(this._translate.instant('geral.error'), 'error');
      });
  }

  create(orcamento: Orcamento): any {
    this._orcamentoService.create(orcamento)
      .then((res) => {
        this._toastService.presentToast(this._translate.instant('geral.registro_criado'), 'success');
      }).catch((res) => {
        this._toastService.presentToast(this._translate.instant('geral.error'), 'error');
      });
  }

  get valor() {
    return this.form.get('valor');
  }

  get quantidade() {
    return this.form.get('quantidade');
  }
}
