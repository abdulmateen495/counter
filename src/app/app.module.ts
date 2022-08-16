import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { IonicStorageModule } from '@ionic/storage-angular';


import {
  RoundProgressModule,
  ROUND_PROGRESS_DEFAULTS
  } from 'angular-svg-round-progressbar';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RoundProgressModule,
    NgCircleProgressModule.forRoot(),
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    {
      provide: ROUND_PROGRESS_DEFAULTS,
      useValue: {
        color: '#f00',
        background: '#0f0'
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
