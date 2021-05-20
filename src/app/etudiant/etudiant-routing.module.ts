import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { EtudiantComponent } from './etudiant.component';


const routes: Routes = [
 
  {
    path: 'Chat',
    component: ChatAppComponent
  },
  
  {
    path: '',
    component: EtudiantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
