import { Component, Input,Inject } from '@angular/core';
import {SharedService} from './shared.service';

@Component({
  selector: 'sidebar',
  template: `<h4>Hello Sidebar</h4><button (click)="buttonClick()">Click</button>{{message}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class SidebarComponent  {
    message: string;

  constructor(@Inject(SharedService) private dataService){
  }

  ngOnInit() {
  //subscribe in the component to the current message
   this.dataService.currentMessage.subscribe( message => {
   this.message = message;
   })
  }
  
  otherMessage(){
    this.dataService.updateMessage("Hello from component one");
  }
  buttonClick(){
    this.dataService.updateMessage("Click from Sidebar");
  }
}
