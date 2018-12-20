import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { EscolaService } from './../shared/services/escola.service';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from '../../core/services/message.service';

@Component({
  selector: 'app-escola-detail',
  templateUrl: './escola-detail.component.html',
  styleUrls: ['./escola-detail.component.scss']
})
export class EscolaDetailComponent implements OnInit {
  public form: FormGroup;
  public param: string;
  public isSubmitted: boolean;

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _escolaService: EscolaService,
    private _translate: TranslateService,
    private _loadingController: LoadingController,
    private _messageService: MessageService) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      listas: new FormControl()
    });

    this.param = this._activatedRoute.snapshot.params['id'];

    if (this.param) {
      this.loadEscolas();
    }
  }

  private async loadEscolas() {
    const loading = await this._loadingController.create({
      message: this._translate.instant('geral.aguarde')
    });

    await loading.present();

    this._escolaService.findOne(this.param).subscribe(res => {
      loading.dismiss();
      this.form.patchValue(res);
    });
  }

  async save() {
    this.isSubmitted = true;
    const escola = this.form.value;

    if (this.form.valid) {
      const loading = await this._loadingController.create({
        message: this._translate.instant('geral.salvando')
      });

      await loading.present();

      if (this.param) {
        await this.subscribeToSave(this._escolaService.update(this.param, escola));
      } else {
        await this.subscribeToSave(this._escolaService.create(escola));
      }

      loading.dismiss();
      this.form.reset();
      this.isSubmitted = false;

      this._router.navigateByUrl('escolas');
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
}
