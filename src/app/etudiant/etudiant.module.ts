import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { ScreenShareComponent } from './chat-app/screen-share/screen-share.component';
import { DownloadFileComponent } from './download-file/download-file.component';



@NgModule({
  declarations: [EtudiantComponent, ChatAppComponent,ScreenShareComponent, DownloadFileComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule
  ]
})
export class EtudiantModule { }
