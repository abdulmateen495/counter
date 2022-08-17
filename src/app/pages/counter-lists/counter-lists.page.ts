import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-counter-lists',
  templateUrl: './counter-lists.page.html',
  styleUrls: ['./counter-lists.page.scss'],
})
export class CounterListsPage implements OnInit {
  counterList = [];
  constructor(private storageService:StorageService, private counterService:CounterService) {
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.storageService.get("counterList").then(data => {
       this.counterList  = data;
    })
  }

  doInfinite(infiniteScroll) {

  }


}
