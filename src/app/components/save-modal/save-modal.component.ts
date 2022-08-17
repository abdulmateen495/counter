import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.scss'],
})
export class SaveModalComponent implements OnInit {
  title:string = null;
  constructor(private modal: ModalController) {
    console.log(this.title)
   }

  ngOnInit() {}



  async save() {
    await this.modal.dismiss({title:this.title,status:'save'});
  }

}
