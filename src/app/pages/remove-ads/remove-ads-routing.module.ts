import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoveAdsPage } from './remove-ads.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveAdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoveAdsPageRoutingModule {}
