import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public myConfig = {
    editorConfig: {
      document: {
        fileType: "docx",
        info: {
          author: "Me",
          created: "26.11.19",
        },
        key: "651231321",
        permissions: {
          download: true,
          edit: true,
        },
        title: "TestTitle",
        url:
          "http://178.32.249.86:81/onlyoffice_php/app_data/62.216.207.218/demo (1).docx",
      },
      documentType: "text",
      editorConfig: {
        embedded: {
          embedUrl:
            "http://178.32.249.86:81/onlyoffice_php/app_data/62.216.207.218/demo (1).docx",
          saveUrl:
            "http://178.32.249.86:81/onlyoffice_php/app_data/62.216.207.218/demo (1).docx",
          shareUrl:
            "http://178.32.249.86:81/onlyoffice_php/app_data/62.216.207.218/demo (1).docx",
          toolbarDocked: "top",
        },
        lang: "en",
        mode: "edit",
      },
      events: {
        // tslint:disable-next-line: no-console
        onBack: console.log,
        // tslint:disable-next-line: no-console
        onDocumentStateChange: console.log,
        // tslint:disable-next-line: no-console
        onError: console.log,
        // tslint:disable-next-line: no-console
        onReady: console.log,
        // tslint:disable-next-line: no-console
        onRequestEditRights: console.log,
        // tslint:disable-next-line: no-console
        onSave: console.log,
      },
      height: "100%",
      type: "desktop",
      width: "100%",
    },
    script: "http://localhost:8080/web-apps/apps/api/documents/api.js",
  };

  public loadAnotherDoc() {
    this.myConfig = {
      editorConfig: {
        document: {
          fileType: "xlsx",
          info: {
            author: "Me",
            created: "26.11.19",
          },
          key: "5132133121",
          permissions: {
            download: true,
            edit: true,
          },
          title: "Cool",
          url:
            "http://178.32.249.86:81/onlyoffice_php/app_data/62.216.207.218/demo.xlsx",
        },
        documentType: "spreadsheet",
        editorConfig: {
          embedded: {
            embedUrl:
              "http://178.32.249.86:81/onlyoffice_php/app_data/62.216.207.218/demo.xlsx",
            saveUrl:
              "http://178.32.249.86:81/onlyoffice_php/app_data/62.216.207.218/demo.xlsx",
            shareUrl:
              "http://178.32.249.86:81/onlyoffice_php/app_data/62.216.207.218/demo.xlsx",
            toolbarDocked: "top",
          },
          lang: "en",
          mode: "edit",
        },
        events: {
          // tslint:disable-next-line: no-console
          onBack: console.log,
          // tslint:disable-next-line: no-console
          onDocumentStateChange: console.log,
          // tslint:disable-next-line: no-console
          onError: console.log,
          // tslint:disable-next-line: no-console
          onReady: console.log,
          // tslint:disable-next-line: no-console
          onRequestEditRights: console.log,
          // tslint:disable-next-line: no-console
          onSave: console.log,
        },
        height: "100%",
        type: "desktop",
        width: "100%",
      },
      script: "http://localhost:8080/web-apps/apps/api/documents/api.js",
    };
  }
}
