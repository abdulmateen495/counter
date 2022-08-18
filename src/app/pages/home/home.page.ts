import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { Storage } from '@ionic/storage-angular';
import { resetCounterText } from 'src/app/constants/genral.constants';
import { SaveModalComponent } from 'src/app/components/save-modal/save-modal.component';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { LoadingService } from 'src/app/services/loading.service';
import { StorageService } from 'src/app/services/storage.service';
import { CounterService } from 'src/app/services/counter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  counterListArray = [];
  counter: string;
  limit: number = 20;
  progressInitial: number;
  progressGap: number = 100 / this.limit;
  editMode: boolean = false;
  id:number = 0;
  currentObj = null;

  constructor(
    private modal: ModalController,
    private errorHandle: ErrorHandlerService,
    private loadingService: LoadingService,
    private storageService: StorageService,
    private counterService: CounterService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      if (params?.id) {
        this.id = parseInt(params?.id);
        this.editMode = true;
      }
    });
  }

  ionViewWillEnter() {
    if (this.editMode == false) {
      this.storageService.get('counter').then((data) => {
        if (data) {
          this.counter = data?.count;
          this.progressInitial = data?.progressbar;
        }
      });
    }
    this.storageService.get('counterList').then((data) => {
      if (data) {
        this.counterListArray = data;
        if(this.editMode == true){
          console.log(this.counterListArray);
          this.currentObj = this.counterListArray.find(o => o.id == this.id);
          console.log(this.currentObj);
          this.counter = this.currentObj.count
          console.log(this.currentObj);
        }
        console.log(this.counterListArray);
        console.log(this.editMode);
      }
    });

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
      componentProps:{
        buttonText:'Save',
        status:'save',
      }
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      let counterObj = {
        id: 0,
        count: '0',
        title: null,
      };
      if (data && data?.data) {
        if (data?.data?.status == 'save') {
          if (!data.data?.currentObj?.title) {
            counterObj.title = 'new counter';
          }
          if (data.data?.title) counterObj.title = data?.data?.title;
          counterObj.count = this.counter;
          counterObj.id = Math.floor(Math.random() * 1000000);
          this.counterListArray.push(counterObj);
          this.storageService.set('counterList', this.counterListArray);
          this.counter = '0';
          this.progressInitial = 0;
        }
      }
    });
    modal.present();
  }


  // open update counter modal
  async openUpdate(){
    const modal = await this.modal.create({
      component: SaveModalComponent,
      cssClass: 'delete-modal',
      componentProps:{
        buttonText:'Update',
        status:'update',
        title:this.currentObj?.title

      }
    });
    modal.onDidDismiss().then((data) => {
      if (data && data?.data) {
        if (data?.data?.status == 'update') {
          let index = this.counterListArray.findIndex((obj) => obj.id == this.id);
          this.counterListArray[index].title = data?.data?.title;
          this.counterListArray[index].count = this.counter;
          this.storageService.set('counterList', this.counterListArray);
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
      this.progressInitial = this.progressInitial - this.progressGap;
      if (this.progressInitial == 0 && this.counter != '0') {
        this.progressInitial = 100;
      }
    }
  }
}
