import { Observable } from 'rxjs';
import { MessageService } from './../../core/services/message.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Produto } from '../../produtos/shared/models/produto.model';
import { Fornecedor } from '../../fornecedores/shared/models/fornecedor.model';
import { LoadingController } from '@ionic/angular';
import { OrcamentoService } from '../shared/services/orcamento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Orcamento } from '../shared/models/orcamento.model';
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
    private _messageService: MessageService,
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
      message: this._translate.instant('geral.aguarde')
    });

    await loading.present();

    this._orcamentoService
      .findByProdutoIdAndFornecedorId(this.produto.id, this.fornecedor.id)
      .subscribe((data) => {
        loading.dismiss();
        this.form.get('fornecedor').setValue(this.fornecedor);
        this.form.get('produto').setValue(this.produto);
        this.form.get('quantidade').setValue(data[0].id ? data[0].quantidade : null);
        this.form.get('condicao').setValue(data[0].id ? data[0].condicao : null);
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
        await this.subscribeToSave(this._orcamentoService.update(this.orcamentoId, orcamento));
      } else {
        await this.subscribeToSave(this._orcamentoService.create(orcamento));
      }

      await loading.dismiss();

      this.isSubmitted = false;
    }
  }
  private subscribeToSave(result: Observable<any>) {
    result.subscribe(data => {
      this._messageService.presentToast(this._translate.instant('geral.registro_salvo'), 'success');
    },
      err => {
        this._messageService.presentToast(this._translate.instant('geral.error'), 'error');
      });
  }

  get valor() {
    return this.form.get('valor');
  }

  get quantidade() {
    return this.form.get('quantidade');
  }
}
