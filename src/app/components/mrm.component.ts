import { Component, Input,Inject } from '@angular/core';
import {ListingComponent} from './listing.component';
import {PagingComponent} from './paging.component';
import {ActionsComponent} from './actions.component';
import { ExportsComponent } from './exports.component';
import {SharedService} from './shared.service';

@Component({
  selector: 'mrm',
  template: `
  <listing></listing>
<paging></paging>
<actions></actions>
<exports></exports> <button (click)="buttonClick()">MRM</button>{{message}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class MRMComponent  {
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
    this.dataService.updateMessage("Click from MRM");
  }
}
