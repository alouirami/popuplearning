import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GererReunionRoutingModule } from './gerer-reunion-routing.module';
import { GestionComponent } from './gestion/gestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditReunionComponent } from './gestion/add-edit-reunion/add-edit-reunion.component';
import { ShowReunionComponent } from './gestion/show-reunion/show-reunion.component';
import { ApprouverEtudiantComponent } from './gestion/approuver-etudiant/approuver-etudiant.component';
import { DownloadFileComponent } from './gestion/download-file/download-file.component';


@NgModule({
  declarations: [GestionComponent, AddEditReunionComponent, ShowReunionComponent, ApprouverEtudiantComponent, DownloadFileComponent],
  imports: [
    CommonModule,
    GererReunionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GererReunionModule { }
