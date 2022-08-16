import { Component } from '@angular/core';
import { ModalController,AlertController } from '@ionic/angular';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { Storage } from '@ionic/storage-angular';
import { resetCounterText } from 'src/app/constants/genral.constants';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modal:ModalController, private alertController: AlertController) {}
  counter:string = '0';
  limit:number = 20;
  progressInitial:number = 0;
  progressGap:number = 100/this.limit;
  async openReload(){
    const modal = await this.modal.create({
      component:DeleteModalComponent,
      cssClass:'delete-modal',
      componentProps: {
        modalText: resetCounterText,
        buttonText: 'Reset',
      },
    })
    modal.present();
  }


  increment(){
    let count:any = parseInt(this.counter);
    count = count + 1;
    count.toString;
    this.counter = count;
    this.progressInitial = this.progressInitial + this.progressGap;
    if(this.progressInitial > 100){
      this.progressInitial = 0;
      this.progressInitial = this.progressInitial + this.progressGap;
    }
  }

  decrement(){
    if(this.counter > '0'){
      let count:any = parseInt(this.counter);
      count = count - 1;
      count.toString;
      this.counter = count;
      this.progressInitial = this.progressInitial - this.progressGap;
      if(this.progressInitial == 0 && this.counter != '0'){
        this.progressInitial = 100;
      }
    }

  }
}
