import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatAppComponent } from './chat-app/chat-app.component';


const routes: Routes = [
  
  {path: '',loadChildren: () => import('./gerer-reunion/gerer-reunion.module').then(m => m.GererReunionModule) },
  {
    path: 'Chat',
    component: ChatAppComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }
