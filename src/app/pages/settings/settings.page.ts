import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { deleteAllCountersText } from 'src/app/constants/genral.constants';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {
  }

  async deleteAllCounters(){
    const modal = await this.modal.create({
      component:DeleteModalComponent,
      cssClass:'delete-modal',
      componentProps: {
        modalText: deleteAllCountersText,
        buttonText:'Delete',
        status:'delete'
      },
    })
    modal.present();
  }

}
