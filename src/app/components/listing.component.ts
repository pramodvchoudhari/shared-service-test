import { Component, Input, Inject, OnInit } from "@angular/core";
import { SharedService } from "./shared.service";
import { Page, Actions } from "./page.model";
import { MessageService } from "./message.service";
@Component({
  selector: "listing",
  template: `
    <h4>Hello Listing</h4>
    <button (click)="buttonClick()">Click</button>{{ message }}
    <h4>{{page.lastAction}}</h4>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class ListingComponent implements OnInit {
  message: string;
  page: Page;
  constructor(
    @Inject(SharedService) private dataService,
    @Inject(MessageService) private messageService
  ) {
    this.page = new Page();
    this.page.actions = this.getActions();
  }
  getActions(): Actions[] {
    const arr: Actions = [
      { name: "Enable", isdisabled: false, classes: "fa-bicycle" },
      { name: "Edit", isdisabled: true, classes: "fa-bus" },
      { name: "View", isdisabled: false, classes: "fa-car " }
    ];
    return arr;
  }
  ngOnInit() {
    //subscribe in the component to the current message
    this.dataService.currentMessage.subscribe(message => {
      this.message = message;
    });
    this.messageService.listen().subscribe((m: any) => {
      console.log(m);
      this.onFilterClick(m);
      this.page.lastAction='Header clicked';
    });
    const page = this.dataService.getPage();
    this.page.actions = this.getActions();
    this.page.id = 2;
    this.page.name = "Pramod";
    this.dataService.sendData(this.page);
  }
  onFilterClick(event) {
    console.log("Fire onFilterClick: ", event);
  }
  otherMessage() {
    this.dataService.updateMessage("Hello from component one");
  }
  buttonClick() {
    this.dataService.updateMessage("Click from Listing");
  }
}
