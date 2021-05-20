import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'ecole',loadChildren: () => import('./ecole/ecole.module').then(m => m.EcoleModule) },
  {path: 'professeur',loadChildren: () => import('./professeur/professeur.module').then(m => m.ProfesseurModule) },
  {path: 'etudiant',loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
  {path:'inscription',component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
