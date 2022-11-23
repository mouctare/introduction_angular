import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',

})
export class ListPokemonComponent implements OnInit{
  //pokemonList: Pokemon[] = POKEMONS;
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    //on utilise le pokemon service
    private pokemonService: PokemonService
    ){}

    ngOnInit(){
      //On appelle le serviece et ses méthodes
      this.pokemonList = this.pokemonService.getPokemonList();
    }

  

  //On met la navigation sur chaque élément de la liste
  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
  

}
