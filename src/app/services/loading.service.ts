import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: HTMLIonLoadingElement;
  constructor(private loadingCtrl: LoadingController) { }

  //Show Loader
  async show() {
    this.loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    this.loading.present();
  }

  //Hide Loader
  async hide() {
    await this.loading.dismiss();
  }
}
