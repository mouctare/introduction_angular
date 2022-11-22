import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//On déclare les routes
const routes: Routes = [
  //On relie un path à un composant
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  //Toujours le declarer en dernier
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
