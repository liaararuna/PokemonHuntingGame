import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/domain/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.css']
})
export class PokemondetailComponent implements OnInit{
  pokemon: Pokemon | undefined
  additionalInfo = false;
  confirmationMessage = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  //AJUSTAR!!!
  goBack(): void {
    this.location.back();
  }

  showAdditionalInfo(): void {
    this.additionalInfo = true;
  }

  save(id: number, name: string, height: number, weight: number, types: string[], family: string): void {
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
    
    this.pokemonService.updatePokemon({ id, name, height, weight, types, family } as Pokemon)
      .subscribe({
        next: updatedPokemon => {
          this.pokemon = updatedPokemon;
          this.confirmationMessage = 'Pokemon updated successfully!';
        },
        error: error => {
          this.confirmationMessage = 'Failed to update Pokemon.';
          console.error(error);
        }
      });
    }
  } 
