import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
 
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  constructor(){}

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

}
