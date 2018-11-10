import { ProdutoService } from './../shared/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Produto } from '../shared/models/produto.model';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.scss']
})
export class ProdutoDetailComponent implements OnInit {
  public form: FormGroup;
  public param: string;

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _produtoService: ProdutoService,
    private _loadingController: LoadingController) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required)
    });

    this.param = this._activatedRoute.snapshot.params['id'];

    if (this.param) {
      this.loadProduto();
    }
  }

  private async loadProduto() {
    const loading = await this._loadingController.create({
      message: 'Carregando ...'
    });

    await loading.present();

    this._produtoService.findOne(this.param).subscribe(res => {
      loading.dismiss();
      this.form.setValue(res);
    });
  }

  async save() {
    const produto = this.form.value;

    if (this.form.valid) {
      const loading = await this._loadingController.create({
        message: 'Salvando ...'
      });

      await loading.present();

      if (this.param) {
        this._produtoService.update(this.param, produto);
      } else {
        this._produtoService.create(produto);
      }

      loading.dismiss();

      this.form.reset();

      this._router.navigateByUrl('produtos');
    }
  }
}
