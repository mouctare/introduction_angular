import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

//Mécanisme d'injection de dependance providedIn: 'root'
@Injectable()
export class PokemonService {

  constructor(private http: HttpClient){}

  //Cette méthode renvoit une liste de pokemon en la typant avec la class Pokemon
 // getPokemonList(): Pokemon[]{
  //  return POKEMONS;
  //}

  //Observable c'est à dire qu'on va recevoir une données qui va arriver dans le temps qui contient un tableau de Pokemon
  getPokemonList(): Observable<Pokemon[]> {
    //La fonction return un Observable
    return this.http.get<Pokemon[]>('/api/pokemons').pipe(
      //tap = console log adapté au observable
     // tap((pokemonList)  => console.table(pokemonList)),
     tap((response) => this.log(response)),
     catchError((error) => this.handleError(error, []))
     //catchError((error) => {
      //console.log(error);
      //Si je n'ai pas ma liste de pokemon , je veux une liste vide
      //return of([]);
    );
    
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    //return POKEMONS.find(pokemon => pokemon.id == pokemonId)
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      //tap = console log adapté au observable
     //tap((pokemon)  => console.log(pokemon)),
     tap((response) => this.log(response)),
     catchError((error) => this.handleError(error, undefined))
     //catchError((error) => {
      //console.log(error);
      //Si j'ai pas mon objet pokemon, je veux un objet vide
      //return of(undefined);
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put('/api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  //Requete post
  addPokemon(pokemon:Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Pokemon>('/api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  //Fonction de recherche
  searchPokemonList(term: string): Observable<Pokemon[]> {
    if(term.length <= 1){
      //On ne requete pas le serveur avec seulement une recherche avec 1 caractère dans ce cas, on return un flux de tableau vide(optimisation)
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

 deletePokemonById(pokemonId: number) {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );

  }

  private log(response: any){
    console.table(response);
  }

  private handleError(error:Error, errorValue: any){
    console.error(error);
    return of(errorValue)

  }
  getPokemonTypeList(): string[]{
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electrick', 
      'Poisson', 
      'Fée', 
      'Vol', 
      'Combat', 
      'Psy'
    ]
  }
}
function tab(arg0: (response: any) => void): import("rxjs").OperatorFunction<Pokemon, unknown> {
  throw new Error('Function not implemented.');
}

