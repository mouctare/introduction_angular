import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';


//Point d'entré de l'appli
@NgModule({
  declarations: [
    //Import des components racine
    AppComponent,
    PageNotFoundComponent,
  
  ],
  //Import des modules
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    AppRoutingModule,
   
  ],
  // injection de dependance
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
