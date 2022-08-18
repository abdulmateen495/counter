import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children:[
      {
        path:'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path:'home/:id',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path:'lists',
        loadChildren: () => import('../counter-lists/counter-lists.module').then(m => m.CounterListsPageModule)
      },
      {
        path:'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path:'remove-ads',
        loadChildren: () => import('../remove-ads/remove-ads.module').then(m => m.RemoveAdsPageModule)
      },
      {
        path: '',
        redirectTo: '/main/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
