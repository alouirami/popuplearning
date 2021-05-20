import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GererProfRoutingModule } from './gerer-prof-routing.module';
import { GestionComponent } from './gestion/gestion.component';
import { ShowProfComponent } from './gestion/show-prof/show-prof.component';
import { AddEditProfComponent } from './gestion/add-edit-prof/add-edit-prof.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [GestionComponent, ShowProfComponent, AddEditProfComponent],
  imports: [
    CommonModule,
    GererProfRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GererProfModule { }
