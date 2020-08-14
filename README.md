# NgxOnlyoffice

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=hrueger/ngx-onlyoffice)](https://dependabot.com)

This library displays the OnlyOffice viewer or editor in your Angular application.

Note, that you have to host the server yourself.

## Installation
Type `npm i ngx-onlyoffice` in your command prompt.

## Usage
See below or refer to the [example](https://github.com/hrueger/ngx-onlyoffice/tree/master/projects/example/src/app).

Include the module in `your app.module.ts`.
```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxOnlyOfficeModule } from "ngx-onlyoffice";  // <-- here
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOnlyOfficeModule, // <-- and here
    ...
  ],
  providers: [],
})
export class AppModule { }
```

Use in your template:
```html
<onlyoffice [config]="myConfig"></onlyoffice>
```

An example config:
```typescript
public myConfig = {
    /*
        editorConfig is the original config for onlyoffice, see docs under https://api.onlyoffice.com/editors/config/document
    */
    editorConfig: { 
      document: {
        fileType: "docx",
        info: {
          author: "Me",
          created: "26.11.19",
        },
        key: "3277238458",
        permissions: {
          download: true,
          edit: true,
        },
        title: "TestTitle",
        url: "example.com",
      },
      documentType: "text",
      editorConfig: {
        embedded: {
          embedUrl: "example.com",
          saveUrl: "example.com",
          shareUrl: "example.com",
          toolbarDocked: "top",
        },
        lang: "en",
        mode: "edit",
      },
      events: {
        onBack: console.log,
        onDocumentStateChange: console.log,
        onError: console.log,
        onReady: console.log,
        onRequestEditRights: console.log,
        onSave: console.log,
      },
      height: "100%",
      type: "desktop",
      width: "100%",
    },
    script: "https://example-server.com/api/api.js", // <-- This is the api script URL.
  };
```
