import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { POKEMONS } from './pokemon/mock-pokemon-list';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

//simmuler une api rest
createDb() {
  const pokemons = POKEMONS;
  return {pokemons}
}
 
}
