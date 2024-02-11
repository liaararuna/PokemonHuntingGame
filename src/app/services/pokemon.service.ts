import { Injectable } from '@angular/core';
import { Pokemon } from '../domain/pokemon';
import { Observable, of } from 'rxjs';
import { POKEMONS } from '../mock-pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl ="https://softwium.com/api/pokemons";

  constructor() { }

  getPokemons() : Observable<Pokemon[]> {
    const pokemons = of(POKEMONS);
    return pokemons;
  }
}
