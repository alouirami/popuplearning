import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcoleRoutingModule } from './ecole-routing.module';
import { EcoleComponent } from './ecole.component';
import { GererDashboardComponent } from './gerer-dashboard/gerer-dashboard.component';




@NgModule({
  declarations: [EcoleComponent, GererDashboardComponent],
  imports: [
    CommonModule,
    EcoleRoutingModule
  ]
})
export class EcoleModule { }
