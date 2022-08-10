import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoveAdsPageRoutingModule } from './remove-ads-routing.module';

import { RemoveAdsPage } from './remove-ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoveAdsPageRoutingModule
  ],
  declarations: [RemoveAdsPage]
})
export class RemoveAdsPageModule {}
