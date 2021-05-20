import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, InscriptionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
