import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  @Input() modalText: string;
  @Input() buttonText: string;
  constructor(private modal: ModalController) { }

  ngOnInit() {}

  async confirm() {
    await this.modal.dismiss();
  }

  async cancel() {
    await this.modal.dismiss();
  }

}
