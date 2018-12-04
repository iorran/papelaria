import { ProdutoService } from './../shared/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { MessageService } from '../../core/services/message.service';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.scss']
})
export class ProdutoDetailComponent implements OnInit {
  public form: FormGroup;
  public param: string;
  public isSubmitted: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _produtoService: ProdutoService,
    private _translate: TranslateService,
    private _messageService: MessageService,
    private _loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      codigo: new FormControl()
    });

    this.param = this._activatedRoute.snapshot.params['id'];

    if (this.param) {
      this.loadProduto();
    }
  }

  private async loadProduto() {
    const loading = await this._loadingController.create({
      message: this._translate.instant('geral.carregando')
    });
    await loading.present();

    this._produtoService.findOne(this.param).subscribe(res => {
      loading.dismiss();
      this.form.patchValue(res);
    });
  }

  async save() {
    this.isSubmitted = true;
    const produto = this.form.value;

    if (this.form.valid) {
      const loading = await this._loadingController.create({
        message: this._translate.instant('geral.carregando')
      });

      await loading.present();

      if (this.param) {
        await this.subscribeToSave(this._produtoService.update(this.param, produto));
      } else {
        await this.subscribeToSave(this._produtoService.create(produto));
      }

      loading.dismiss();
      this.form.reset();
      this.isSubmitted = false;

      this._router.navigateByUrl('produtos');
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

  get nome() {
    return this.form.get('nome');
  }
  get marca() {
    return this.form.get('marca');
  }
}
