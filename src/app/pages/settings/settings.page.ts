import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { deleteAllCountersText } from 'src/app/constants/genral.constants';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkMode = false;
  constructor(
    private modal: ModalController,
    private renderer: Renderer2,
    private storageService: StorageService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
     this.storageService.get("theme").then(data => {
       if(!data)return;
       data == 'dark' ? this.darkMode = true:false;
     })
  }


  //delete all counters
  async deleteAllCounters() {
    const modal = await this.modal.create({
      component: DeleteModalComponent,
      cssClass: 'delete-modal',
      componentProps: {
        modalText: deleteAllCountersText,
        buttonText: 'Delete',
        status: 'delete',
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data && data?.data) {
        if (data?.data?.status == 'delete') {
         this.storageService.delete("counterList");
        }
      }
    });
    modal.present();
  }

  // switch theme
  themeSwitcher(event) {
    if (event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      this.storageService.set('theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      this.storageService.set('theme', 'light');
    }
  }
}
