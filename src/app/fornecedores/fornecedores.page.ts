import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FornecedorService } from './shared/services/fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from './shared/models/fornecedor.model';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.scss'],
})
export class FornecedoresPage implements OnInit {

  public fornecedores: Fornecedor[];
  public fornecedoresFiltered: Fornecedor[];

  constructor(
    private _fornecedorService: FornecedorService,
    private _router: Router,
    private _alertController: AlertController,
    private _loadingController: LoadingController) {
  }

  ngOnInit() {
    this.loadFornecedors();
  }

  private async loadFornecedors() {
    const loading = await this._loadingController.create({
      message: 'Carregando ...'
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

  add() {
    this._router.navigateByUrl('fornecedores/add');
  }

  edit(id: string) {
    this._router.navigate(['fornecedores/edit', id]);
  }

  async remove(id: string) {
    const alert = await this._alertController.create({
      message: 'Deseja realmente deletar o fornecedor?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this._fornecedorService.remove(id);
          },
        },
      ],
    });

    await alert.present();
  }

}
