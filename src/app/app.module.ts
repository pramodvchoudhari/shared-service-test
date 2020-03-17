import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ListingComponent } from "./components/listing.component";
import { ActionsComponent } from "./components/actions.component";
import { BreadcrumbComponent } from "./components/breadcrumb.component";
import { HeaderComponent } from "./components/header.component";
import { SidebarComponent } from "./components/sidebar.component";
import { PagingComponent } from "./components/paging.component";
import { ExportsComponent } from "./components/exports.component";
import { MRMComponent } from "./components/mrm.component";
import { SharedService } from "./components/shared.service";
import { MessageService } from "./components/message.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ListingComponent,
    ActionsComponent,
    BreadcrumbComponent,
    HeaderComponent,
    SidebarComponent,
    PagingComponent,
    ExportsComponent,
    MRMComponent
  ],
  providers:[SharedService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
