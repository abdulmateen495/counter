import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { NoRecordFoundComponent } from './no-record-found/no-record-found.component';
import { SaveModalComponent } from './save-modal/save-modal.component';



@NgModule({
  imports: [
    IonicModule,
    FormsModule,

  ],
  declarations: [
    DeleteModalComponent,
    SaveModalComponent,
    NoRecordFoundComponent
  ],
  exports:[
    DeleteModalComponent,
    SaveModalComponent,
    NoRecordFoundComponent
  ]
})
export class ComponentModule {}
