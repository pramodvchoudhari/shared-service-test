import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Observable";
import { Page } from "./page.model";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  currentPage: Page;
  private messageStream = new BehaviorSubject<string>(
    "default value of message"
  );
  currentMessage = this.messageStream.asObservable();

  private page = new BehaviorSubject<Page>(new Page());

  pages = this.page.asObservable();
  private newPage = new BehaviorSubject<Page>(new Page());
  constructor() {}

  updateMessage(newMessage: string) {
    this.messageStream.next(newMessage);
  }
  public getPage(): Page {
    return this.page;
  }
  updatePage(page: Page) {
    //   this.currentMessage = page;
    this.page.next(this.page);
  }

  sendData(page: Page) {
    this.newPage.next(page);
  }

  clearData() {
    this.newPage.next(new Page());
  }

  getData(): Observable<Page> {
    return this.newPage.asObservable();
  }
}
