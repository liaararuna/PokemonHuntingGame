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

  getPokemons() : void {
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }
}
