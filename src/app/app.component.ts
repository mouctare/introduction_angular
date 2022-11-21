import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  
  
  
})
export class AppComponent implements OnInit {
  //Un pokemonList est un tableau de Pokemon
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;
  // Initialisation
  ngOnInit(){
    console.table(this.pokemonList);
    //this.selectPokemon(this.pokemonList[0]);

    }

    //Passer à la fonction un type Pokemon cad pokemonName contient bien l'objet Pokemon
    selectPokemon(pokemonId: string){
      //const id =  +pokemonId;
      const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId) ;
      if(pokemon){
      //Syntaxe avec les baltics et accolade c'est pour injecter des variables dynamiquement
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
      }else{
        console.log(`Vous avez demandé un pokemon qui n'éxiste pas.`);
        this.pokemonSelected = pokemon;
      }
      
      
    }
}
