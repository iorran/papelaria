import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { FornecedorService } from './../shared/services/fornecedor.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-fornecedor-detail',
  templateUrl: './fornecedor-detail.component.html',
  styleUrls: ['./fornecedor-detail.component.scss']
})
export class FornecedorDetailComponent implements OnInit {
  public form: FormGroup;
  public param: string;
  public isSubmitted: boolean;

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _fornecedorService: FornecedorService,
    private _translate: TranslateService,
    private _loadingController: LoadingController) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      cnpj: new FormControl()
    });

    this.param = this._activatedRoute.snapshot.params['id'];

    if (this.param) {
      this.loadFornecedores();
    }
  }

  private async loadFornecedores() {
    const loading = await this._loadingController.create({
      message: this._translate.instant('geral.carregando')
    });

    await loading.present();

    this._fornecedorService.findOne(this.param).subscribe(res => {
      loading.dismiss();
      this.form.patchValue(res);
    });
  }

  async save() {
    this.isSubmitted = true;
    const fornecedor = this.form.value;

    if (this.form.valid) {
      const loading = await this._loadingController.create({
        message: this._translate.instant('geral.salvando')
      });

      await loading.present();

      if (this.param) {
        this._fornecedorService.update(this.param, fornecedor);
      } else {
        this._fornecedorService.create(fornecedor);
      }

      loading.dismiss();

      this.form.reset();
      this.isSubmitted = false;

      this._router.navigateByUrl('fornecedores');
    }
  }

  get nome() {
    return this.form.get('nome');
  }
  get marca() {
    return this.form.get('marca');
  }
}
