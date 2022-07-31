import { NgModule } from '@angular/core';
import { RemoveAdsComponent } from './remove-ads/remove-ads.component';



@NgModule({
  declarations: [
    RemoveAdsComponent
  ],
  exports:[
    RemoveAdsComponent
  ]
})
export class ComponentModule {}
