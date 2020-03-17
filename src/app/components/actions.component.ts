import { Component, Input, Inject } from "@angular/core";
import { SharedService } from "./shared.service";
import { Actions, Page } from "./page.model";
@Component({
  selector: "actions",
  template: `
    <h4>Hello Action</h4>
    <button (click)="buttonClick()">Click</button> {{ message }}
    <ul>
      <li *ngFor="let action of actions">
      <a href="" class="btn" ng-disabled="!action.isdisabled"> {{ action.name }} &nbsp;<i class="fa" [ngClass]="action.classes "   aria-hidden="true"></i></a>
      </li>
    </ul>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class ActionsComponent {
  message: string;
  actions: Actions[];
  constructor(@Inject(SharedService) private dataService) {}

  ngOnInit() {
    //subscribe in the component to the current message
    this.dataService.currentMessage.subscribe(message => {
      this.message = message;
    });

    this.dataService.getData().subscribe(page => {
     // debugger;
      this.actions = page.actions;
    });
  }

  otherMessage() {
    this.dataService.updateMessage("Hello from component one");
  }
  buttonClick() {
    this.dataService.updateMessage("Click from Action");
  }
}
