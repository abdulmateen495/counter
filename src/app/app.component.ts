import { Component, Renderer2 } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storageService:StorageService, private renderer:Renderer2) {
     this.storageService.set("counter",{count:"0",progressbar:0});
     this.storageService.get("theme").then(data => {
       if(data){
         this.renderer.setAttribute(document.body,'color-theme',data);
       }
     })
  }
}
