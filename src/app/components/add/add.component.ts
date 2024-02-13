import { Component } from '@angular/core';
import { Pokemon } from 'src/app/domain/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  pokemon: Pokemon = {
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    types: [''],
    family: '',
  }

  pokemons: Pokemon[] = [];

  confirmationMsg = '';
  sucess = false;

  constructor(
    private pokemonService: PokemonService,
    private location: Location,
  ) {}

  goBack(): void {
    this.location.back();
  } 

  //Allows you to create a new pokemon
  add(name: string, height: number, weight: number, types: string[], family: string): void {
    name = name.trim();
    family = family.trim();

    if (!name && !types && !family) {
      console.error('Name, types and/or family cannot be empty')
       return; 
    }

    if(height <= 0 || weight <= 0) {
      console.error('Height and weight must be greater than zero.');
      return;
    }
    
    this.pokemonService.addPokemon({ name, height, weight, types, family } as Pokemon)
    .subscribe({
      next: addedPokemon => { 
        this.pokemons.push(addedPokemon);
        this.sucess = true;
        this.confirmationMsg = 'Pokemon added successfully!';
      },
      error: error => {
        console.error('Failed to add Pokemon:', error);
      }
    });
  }
}
