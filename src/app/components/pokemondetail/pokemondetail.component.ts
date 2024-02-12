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

  save(): void {
    if (this.pokemon) {
      this.pokemonService.updatePokemon(this.pokemon)
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
}