import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

//Mécanisme d'injection de dependance providedIn: 'root'
@Injectable()
export class PokemonService {

  //Cette méthode renvoit une liste de pokemon en la typant avec la class Pokemon
  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
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
