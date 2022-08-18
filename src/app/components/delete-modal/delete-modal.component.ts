import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CounterService } from '../../services/counter.service';


@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  @Input() modalText: string;
  @Input() buttonText: string;
  @Input() status: string;
  @Input() id?: number;
  constructor(private modal: ModalController, private counter:CounterService) { }

  ngOnInit() {}

  async confirm() {
    if(this.status == 'reset'){
      await this.modal.dismiss({ status: 'reset' });
    }
    if(this.status == 'delete-single'){
      await this.modal.dismiss({ status: 'delete-single' , id:this.id});
    }
    if(this.status == 'delete'){
      await this.modal.dismiss({ status: 'delete' });
    }

  }

  async cancel() {
    await this.modal.dismiss();
  }

}
