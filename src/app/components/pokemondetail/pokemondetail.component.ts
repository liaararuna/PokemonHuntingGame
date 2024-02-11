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

  goBack(): void {
    this.location.back();
  }

  goUpdatePage() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.location.go(`/pokemons/${id}`);
  }
}
