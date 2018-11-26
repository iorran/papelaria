import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _toastController: ToastController) { }

  async presentToast(message: string, color: string, position: any = 'bottom', duration: number = 2000, showCloseButton: boolean = true) {
    const toast = await this._toastController.create({
      message,
      color,
      position,
      duration,
      showCloseButton
    });
    toast.present();
  }
}
