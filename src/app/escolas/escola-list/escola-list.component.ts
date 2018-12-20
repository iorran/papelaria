import { MessageService } from './../../core/services/message.service';
import { EscolaService } from './../shared/services/escola.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Escola } from './../shared/models/escola.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escola-list',
  templateUrl: './escola-list.component.html',
  styleUrls: ['./escola-list.component.scss']
})
export class EscolaListComponent implements OnInit {

  public escolas: Escola[];
  public escolasFiltered: Escola[];

  constructor(
    private _escolaService: EscolaService,
    private _router: Router,
    private _alertController: AlertController,
    private _translate: TranslateService,
    private _loadingController: LoadingController,
    private _messageService: MessageService) {
  }

  ngOnInit() {
    this.loadEscolas();
  }

  private async loadEscolas() {
    const loading = await this._loadingController.create({
      message: this._translate.instant('geral.aguarde')
    });

    await loading.present();

    this._escolaService.findAll().subscribe(res => {
      loading.dismiss();
      this.escolas = res;
      this.escolasFiltered = res;
    });
  }

  search(event: any) {
    const searchQuery: string = event.target.value;

    this.escolasFiltered = this.escolas;

    this.escolasFiltered = this.escolas.filter((p) => {
      return p.nome.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }

  edit(id: string) {
    this._router.navigate(['escolas/edit', id]);
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
            this._escolaService.remove(id);
            this._messageService.presentToast(this._translate.instant('geral.registro_removido'), 'success');
          },
        },
      ],
    });

    await alert.present();
  }

}
