import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {
  RoundProgressModule,
  ROUND_PROGRESS_DEFAULTS
  } from 'angular-svg-round-progressbar';
import { ComponentModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    IonicModule,
    RoundProgressModule,
    HomePageRoutingModule,
    NgCircleProgressModule.forRoot(),

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
