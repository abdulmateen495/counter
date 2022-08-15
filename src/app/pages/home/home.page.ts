import { Component } from '@angular/core';
import { ModalController,AlertController } from '@ionic/angular';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  handlerMessage = '';
  roleMessage = '';
  constructor(private modal:ModalController, private alertController: AlertController) {}

  async openReload(){
    // console.log("hello");
    // const modal = await this.modal.create({
    //   component:DeleteModalComponent,
    //   cssClass:'delete-modal'
    // })
    // modal.present();
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }

}
