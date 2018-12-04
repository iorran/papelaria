import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class MessageService {
  private toast: HTMLIonToastElement;

  constructor(
    private _toastController: ToastController
  ) { }

  async presentToast(message: string, color: string, position: any = 'bottom', duration: number = 2000, showCloseButton: boolean = true) {
    this.toast = await this._toastController.create({
      message,
      color,
      position,
      duration,
      showCloseButton
    });
    this.toast.present();
  }
}
