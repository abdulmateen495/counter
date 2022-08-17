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
  constructor(private modal: ModalController, private counter:CounterService) { }

  ngOnInit() {}

  async confirm() {
    if(this.status == 'reset'){
      await this.modal.dismiss({ status: 'reset' });
    }

  }

  async cancel() {
    await this.modal.dismiss();
  }

}
