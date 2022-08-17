import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { Storage } from '@ionic/storage-angular';
import { resetCounterText } from 'src/app/constants/genral.constants';
import { SaveModalComponent } from 'src/app/components/save-modal/save-modal.component';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { LoadingService } from 'src/app/services/loading.service';
import { StorageService } from 'src/app/services/storage.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  counterListArray = [];
  counter: string ;
  limit: number = 20;
  progressInitial: number;
  progressGap: number = 100 / this.limit;
  counterObj = {
    count:'0',
    title:null
  };
  constructor(
    private modal: ModalController,
    private errorHandle: ErrorHandlerService,
    private loadingService: LoadingService,
    private storageService: StorageService,
    private counterService: CounterService
  ) {
  }

  ionViewWillEnter() {
    this.storageService.get("counter").then(data=> {
      this.counter = data?.count;
      this.progressInitial = data?.progressbar;
    })
    this.storageService.get("counterList").then(data=> {
      this.counterListArray = data;
    })
  }

  // open reset counter modal
  async openReload() {
    const modal = await this.modal.create({
      component: DeleteModalComponent,
      cssClass: 'delete-modal',
      componentProps: {
        modalText: resetCounterText,
        buttonText: 'Reset',
        status: 'reset',
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data && data?.data) {
        if (data?.data?.status == 'reset') {
          this.progressInitial = 0;
          this.counter = '0';
        }
      }
    });
    modal.present();
  }

  // open save counter modal
  async openSave() {
    const modal = await this.modal.create({
      component: SaveModalComponent,
      cssClass: 'delete-modal',
    });
    modal.onDidDismiss().then((data) => {
      if (data && data?.data) {
        if (data?.data?.status == 'save') {
          if (!data.data?.title) {
            this.counterObj.title = 'new counter';
          }
          if(data.data?.title)this.counterObj.title = data?.data?.title;
          this.counterObj.count = this.counter;
          this.counterListArray.push(this.counterObj);
          this.storageService.set("counterList",this.counterListArray);
          this.counter = '0';
          this.progressInitial = 0;
        }
      }
    });
    modal.present();
  }

  // increment the counter
  increment() {
    let count: any = parseInt(this.counter);
    count = count + 1;
    count.toString;
    this.counter = count;
    this.counterService.counter.next(this.counter);
    this.progressInitial = this.progressInitial + this.progressGap;
    if (this.progressInitial > 100) {
      this.progressInitial = 0;
      this.progressInitial = this.progressInitial + this.progressGap;
    }
  }

  // decrement the counter
  decrement() {
    if (this.counter > '0') {
      let count: any = parseInt(this.counter);
      count = count - 1;
      count.toString;
      this.counter = count;
      this.counterService.counter.next(this.counter);
      this.progressInitial = this.progressInitial - this.progressGap;
      if (this.progressInitial == 0 && this.counter != '0') {
        this.progressInitial = 100;
      }
    }
  }
}
