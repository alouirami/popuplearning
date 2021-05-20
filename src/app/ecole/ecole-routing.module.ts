import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcoleComponent } from './ecole.component';
import { GererDashboardComponent } from './gerer-dashboard/gerer-dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: EcoleComponent
  },
  {
    path: 'GererDashboard',
    component: GererDashboardComponent
  },
      
      {path: 'GererProfesseur',loadChildren: () => import('./gerer-prof/gerer-prof.module').then(m => m.GererProfModule) },
      {path: 'GererEtudiant',loadChildren: () => import('./gerer-etudiant/gerer-etudiant.module').then(m => m.GererEtudiantModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcoleRoutingModule { }
