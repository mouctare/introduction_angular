import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/pokemon/pokemon';
import { PokemonService } from 'src/app/pokemon/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>
   <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined

  constructor(
  
    private route: ActivatedRoute, // Récuperer l'id courant
    private pokemonService: PokemonService
    ) {}
  ngOnInit() {
    const pokemonIdDepuisLurl: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonIdDepuisLurl){
      //Si j'ai un id , je l'ajoute dans ma proprité pokemon
      this.pokemon = this.pokemonService.getPokemonById(+pokemonIdDepuisLurl)
    } else {
      this.pokemon = undefined;
    }
    
  }

}
