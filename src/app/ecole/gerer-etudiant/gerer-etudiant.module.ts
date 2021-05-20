import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GererEtudiantRoutingModule } from './gerer-etudiant-routing.module';
import{AddEditEtudiantComponent} from './gestion/add-edit-etudiant/add-edit-etudiant.component';
import{ShowEtudiantComponent} from './gestion/show-etudiant/show-etudiant.component';
import { GestionComponent } from './gestion/gestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddEditEtudiantComponent,ShowEtudiantComponent, GestionComponent],
  imports: [
    CommonModule,
    GererEtudiantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GererEtudiantModule { }
