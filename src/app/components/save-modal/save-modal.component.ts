import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.scss'],
})
export class SaveModalComponent implements OnInit {
  title:string = null;
  counter:string = null;
  @Input() buttonText: string;
  @Input() status: string;
  @Input() currentObj = null;
  constructor(private modal: ModalController) {

   }

  ngOnInit() {
      if(this.currentObj){
        this.title = this.currentObj?.title
      }

  }



  async save() {
    if(this.status == 'save'){
      await this.modal.dismiss({title:this.title,status:'save'});
    }
    if(this.status == 'update'){
      await this.modal.dismiss({title:this.title,status:'update'});
    }

  }

}
