import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { deleteCounterText } from 'src/app/constants/genral.constants';
import { CounterService } from 'src/app/services/counter.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-counter-lists',
  templateUrl: './counter-lists.page.html',
  styleUrls: ['./counter-lists.page.scss'],
})
export class CounterListsPage implements OnInit {
  counterList = [];
  page: number = 1;
  perPage: number = 10;
  totalData: number = 0;
  totalPagesData: number = 0;
  constructor(
    private storageService: StorageService,
    private counterService: CounterService,
    private modal: ModalController,
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.counterList = [];
    this.storageService.get('counterList').then((data) => {
      if(data){
        this.counterList = data;
      }
    });
  }

  doInfinite(infiniteScroll) {}

  async deleteCounter(id:number) {
    const modal = await this.modal.create({
      component: DeleteModalComponent,
      cssClass: 'delete-modal',
      componentProps: {
        modalText: deleteCounterText,
        buttonText: 'Delete',
        status: 'delete-single',
        id:id,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data && data?.data) {
        if (data?.data?.status == 'delete-single') {
          this.counterList = this.counterList.filter((x) => {
            return x.id != data?.data?.id;
          });
          this.storageService.set("counterList",this.counterList)
        }
      }
    });
    modal.present();
  }

  editCounter(id:number){

  }
}
