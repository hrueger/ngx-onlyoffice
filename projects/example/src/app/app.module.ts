import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxOnlyOfficeModule } from "ngx-onlyoffice";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOnlyOfficeModule,
  ],
  providers: [],
})
export class AppModule { }
