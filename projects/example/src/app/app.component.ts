import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public myConfig = {
    script: "http://178.32.249.86/OfficeWeb/apps/api/documents/api.js",
    editorConf: {
        width: "100%",
        height: "100%",
        type: "desktop",
        documentType: "text",
        document: {
            fileType: "docs",
            key: "3277238458",
            title: "TestTitle",
            url: "http://178.32.249.86:81/onlyoffice_php/app_data/66.8.205.177/demo (1).docx",
            vkey: "QUlIYW93WXNWM2E1RGxMeVFWdytxdm8yQW9RUjJoeFcveXorc1hlQmQrZz0_eyJleHBpcmUiOiJcL0RhdGUoMTU3NDc1MDc4NjA3NClcLyIsImtleSI6IjMyNzcyMzg0NTgiLCJrZXlfaWQiOiJfQ29udGFjdFVzXyIsInVzZXJfY291bnQiOjAsImlwIjoiNjYuOC4yMDUuMTc3In01",
            info: {
                author: "Me",
                created: "26.11.19",
            },

            permissions: {
                edit: true,
                download: true,
            },
        },
        editorConfig: {
            mode: "edit",
            lang: "en",
            callbackUrl: "http://178.32.249.86:81/onlyoffice_php/webeditor-ajax.php?\
type=track&userAddress=66.8.205.177&fileName=demo+%281%29.docx",
            embedded: {
                saveUrl: "http://178.32.249.86:81/onlyoffice_php/app_data/66.8.205.177/demo (1).docx",
                embedUrl: "http://178.32.249.86:81/onlyoffice_php/app_data/66.8.205.177/demo (1).docx",
                shareUrl: "http://178.32.249.86:81/onlyoffice_php/app_data/66.8.205.177/demo (1).docx",
                toolbarDocked: "top",
            },
        },
        events: {
            onReady: console.log,
            onBack: console.log,
            onDocumentStateChange: console.log,
            onRequestEditRights: console.log,
            onSave: console.log,
            onError: console.log,
        },
    },
  };
}
