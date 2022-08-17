import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private toast: ToastController, private alert: AlertController) {}

  async showToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async showAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  handle(error: any) {
    console.warn(error);
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case -1:
        case 0:
          this.showToast('Errors.Network');
          return;
          return;
        case 403:
          this.showToast('Forbidden');
          return;
        case 404:
          this.showToast('NotFound');
          return;
        case 405:
          this.showToast('NotAllowed');
          return;
      }
    }
  }
}
