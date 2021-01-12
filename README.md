# `ngx-onlyoffice`
![Available on npm](https://img.shields.io/npm/v/ngx-onlyoffice)
[![License](https://img.shields.io/badge/License-MIT-blue)](./LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/hrueger/ngx-onlyoffice?color=brightgreen)](https://github.com/hrueger/ngx-onlyoffice/commits)
[![Maintenance](https://img.shields.io/maintenance/yes/2021)](https://github.com/hrueger/ngx-onlyoffice/commits)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=hrueger/ngx-onlyoffice)](https://dependabot.com)

This ONLYOFFICE wrapper for Angular displays the ONLYOFFICE viewer or editor in your Angular application.

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
    script: "https://office.example-server/web-apps/apps/api/documents/api.js", // <-- This is the api script URL.
  };
```

## Config Changes
When you change the config, the editor will reload automatically. For this to work, you need to **replace the entire config object**. Just changing one property won't trigger a reload. Example:
```TypeScript
// wrong
this.config.editorConfig.document.title = "New Title";

// right
this.config = {
  editorConfig: {
    document: {
      title: "New title",
      ...
    },
    ...
  },
  ...
}
```
Note that here you have to specify the whole configuration object, just some properties won't work.

However, if you just want to change some properties, you can use `Object.assign` like so:
```TypeScript
this.config = Object.assign({}, this.config, {
    editorConfig: {
        title: "New Title"
    }
})
```

## License
MIT
