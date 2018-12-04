import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../shared/models/fornecedor.model';
import { FornecedorService } from '../shared/services/fornecedor.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.scss']
})
export class FornecedorListComponent implements OnInit {

  public fornecedores: Fornecedor[];
  public fornecedoresFiltered: Fornecedor[];

  constructor(
    private _fornecedorService: FornecedorService,
    private _router: Router,
    private _alertController: AlertController,
    private _translate: TranslateService,
    private _loadingController: LoadingController) {
  }

  ngOnInit() {
    this.loadFornecedors();
  }

  private async loadFornecedors() {
    const loading = await this._loadingController.create({
      message: this._translate.instant('geral.aguarde')
    });

    await loading.present();

    this._fornecedorService.findAll().subscribe(res => {
      loading.dismiss();
      this.fornecedores = res;
      this.fornecedoresFiltered = res;
    });
  }

  search(event: any) {
    const searchQuery: string = event.target.value;

    this.fornecedoresFiltered = this.fornecedores;

    this.fornecedoresFiltered = this.fornecedores.filter((p) => {
      return p.nome.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }

  edit(id: string) {
    this._router.navigate(['fornecedores/edit', id]);
  }

  async remove(id: string) {
    const alert = await this._alertController.create({
      message: this._translate.instant('geral.removendo'),
      buttons: [
        {
          text: this._translate.instant('geral.btn.nao'),
          role: 'cancel'
        },
        {
          text: this._translate.instant('geral.btn.sim'),
          handler: () => {
            this._fornecedorService.remove(id);
          },
        },
      ],
    });

    await alert.present();
  }
}
