import { NgModule } from '@angular/core';
import { ComponentModule } from '../components/components.module';



@NgModule({
  imports: [
    ComponentModule
  ],
  exports: [
    ComponentModule
  ],
  declarations: [],
  entryComponents: [],
})
export class SharedModule {}
