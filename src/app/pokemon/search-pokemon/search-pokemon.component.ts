import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged,  Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
 
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();// Subject apparient à RXJS, pour construire un flux dans le temps des recherches de l'utilisateur{..."a", ..'b'} stocké 
  pokemons$: Observable<Pokemon[]>; //un flux de resultat concret de recherche

  constructor(
    private router:Router,
    private pokemonService: PokemonService
    ) {}

    ngOnInit(): void{
      this.pokemons$ = this.searchTerms.pipe(
        debounceTime(300), // Optimisation des requete vers le serveur
        distinctUntilChanged(), // eliminer s'il ya des redondances
        switchMap((terme) => this.pokemonService.searchPokemonList(terme))//Uniquement le resultat correspondant
      )
    }

    search(term: string){
      //Chaque fois que l'utilisateur fait une recherche on la stocke grace à la méthode next = push avec les tableaux
      this.searchTerms.next(term)

    }

    //Rediriger vers le pokemon trouvé
    goToDetail(pokemon: Pokemon){
      const link = ['/pokemon', pokemon.id];
      this.router.navigate(link);
    }
  }


