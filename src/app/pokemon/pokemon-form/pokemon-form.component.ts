import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
 })
export class PokemonFormComponent implements OnInit{
 @Input() pokemon: Pokemon
  types: string[];
  isAddForm: boolean;
  constructor(
    private pokemonService: PokemonService,
    private router: Router
    ) {}

  //Initialisation
  ngOnInit() {
   // L'initialisation avec tous les types de pokemons dans le projet
   this.types = this.pokemonService.getPokemonTypeList();
   this.isAddForm = this.router.url.includes('add'); // Si le terme add dans ma route ça veut dire que je suis entrain d'ajouter
  }

  
  hasType(type: string): boolean {
    //Je vais savoir si mon pokemon il a dans ces types , le type qui m'a été envoyé en parametre
    return this.pokemon.types.includes(type)
  }

  //
  selectType($envent: Event, type: string) {
    const isChecked: boolean = ($envent.target as HTMLInputElement).checked;

    if(isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    
    //Si l'utilisateur a cocher une seule case , il faut l'empecher de decoher cette case car un pokemon doit avoir au moins un type
    if(this.pokemon.types.length == 1 && this.hasType(type)){
        return false;
    }

    //S'il a déja cocher plus de 2 case if faut l'empecher de cocher une 4eme case
    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }
    return true
  }

  onSubmit() {
    if(this.isAddForm){
      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon:Pokemon) =>  this.router.navigate(['/pokemon', pokemon.id]))
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
      .subscribe(() =>  this.router.navigate(['/pokemon', this.pokemon.id]))
        //Redirigé vers la page du pokemon qu'il vient de modifier 

    }

   }
}

