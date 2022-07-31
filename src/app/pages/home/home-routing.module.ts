import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RemoveAdsComponent } from '../../components/remove-ads/remove-ads.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'remove-ads',
        component: RemoveAdsComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
