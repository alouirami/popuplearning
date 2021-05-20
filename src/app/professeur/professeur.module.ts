import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { ProfesseurRoutingModule } from './professeur-routing.module';
import{ProfesseurComponent} from './professeur.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { ScreenShareComponent } from './chat-app/screen-share/screen-share.component';



@NgModule({
  declarations: [ProfesseurComponent, ChatAppComponent, ScreenShareComponent ],
  imports: [
    CommonModule,
    ProfesseurRoutingModule,
    FormsModule
  ]
})
export class ProfesseurModule { }
