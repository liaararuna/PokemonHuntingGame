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

  getPokemon(id: number) : void {
    this.pokemonService.getPokemon(id).subscribe();
  }

  add(name: string, height: number, weight: number, types: string[], family: string): void {
    name = name.trim();
    family = family.trim();
    if (!name && !height && !weight && types == null && !family) {
       return; 
    }
    this.pokemonService.addPokemon({ name, height, weight, types, family } as Pokemon)
      .subscribe(pokemon => {
        this.pokemons.push(pokemon);
      });
  }

  delete(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter(p => p !== pokemon);
    this.pokemonService.deletePokemon(pokemon.id).subscribe();
  }
}
