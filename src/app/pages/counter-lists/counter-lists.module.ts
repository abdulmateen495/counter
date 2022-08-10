import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CounterListsPageRoutingModule } from './counter-lists-routing.module';

import { CounterListsPage } from './counter-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CounterListsPageRoutingModule
  ],
  declarations: [CounterListsPage]
})
export class CounterListsPageModule {}
