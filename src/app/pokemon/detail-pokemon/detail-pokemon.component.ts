import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
 
})

export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  // Ici, on rend le pokemon disponible au template, soit j'ai un objet pokemon ou rien
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
    ){}
    
  ngOnInit() {
    
  //On récuper la route courante avec les params
   const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

   if(pokemonId){
    // Si pokemonId est defini 
    this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
   }
   
}

goToPokemonList(){
  this.router.navigate(['/pokemons']);
}

}
