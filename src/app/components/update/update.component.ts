import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/domain/pokemon';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  pokemon: Pokemon | undefined

  constructor(
    private pokemonService: PokemonService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  save(): void {
    if (this.pokemon) {
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.go('/menu');
  }
}
