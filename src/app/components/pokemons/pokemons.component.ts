import { Component } from '@angular/core';
import { Pokemon } from 'src/app/domain/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [];
  
  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  //Returns a list of pokemons
  getPokemons() : void {
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

  //Returns informations about an specific pokemon using your id number.
  getPokemon(id: number) : void {
    this.pokemonService.getPokemon(id).subscribe();
  }

  //Allows you to delete a pokemon from the database.
  delete(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter(p => p !== pokemon);
    this.pokemonService.deletePokemon(pokemon.id).subscribe();
  }

}
