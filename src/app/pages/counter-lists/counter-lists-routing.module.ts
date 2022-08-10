import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterListsPage } from './counter-lists.page';

const routes: Routes = [
  {
    path: '',
    component: CounterListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterListsPageRoutingModule {}
