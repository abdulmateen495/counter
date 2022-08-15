import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';



@NgModule({
  imports: [
    IonicModule,
  ],
  declarations: [
    DeleteModalComponent
  ],
  exports:[
    DeleteModalComponent
  ]
})
export class ComponentModule {}
