import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
 
})

export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  // Ici, on rend le pokemon disponible au template, soit j'ai un objet pokemon ou rien
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit() {
    this.pokemonList = POKEMONS
    //On récuper la route courante avec les params
   const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

   if(pokemonId){
    // Si pokemonId est defini 
    this.pokemon =  this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
   }
   
}

goToPokemonList(){
  this.router.navigate(['/pokemons']);
}

}
