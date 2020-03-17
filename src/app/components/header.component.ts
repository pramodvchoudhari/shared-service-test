import { Component, Input, Inject } from "@angular/core";
import { SharedService } from "./shared.service";
import { MessageService } from "./message.service";
@Component({
  selector: "header",
  template: `
    <h4>Hello Header</h4>
    <button (click)="buttonClick()">Click</button>
    <button (click)="clickFilter()">Filter</button>{{ message }}
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HeaderComponent {
  message: string;

  constructor(
    @Inject(SharedService) private dataService,
    @Inject(MessageService) private messageService
  ) {}

  ngOnInit() {
    //subscribe in the component to the current message
    this.dataService.currentMessage.subscribe(message => {
      this.message = message;
    });
  }

  otherMessage() {
    this.dataService.updateMessage("Hello from component one");
  }
  buttonClick() {
    this.dataService.updateMessage("Click from Header");
  }

  clickFilter() {
    this.messageService.filter("Register Click");
  }
}
