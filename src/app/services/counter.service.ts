import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = new BehaviorSubject('0');
  counterLIsts = new BehaviorSubject([]);
  constructor(private storageService:StorageService) { }

  setList(data:Array<string>){
    this.storageService.set("counterList",data);
    this.counterLIsts.next(data);
  }

  setCounter(counter:string){
    this.storageService.set("counter",counter);
    this.counter.next(counter);
  }
}
