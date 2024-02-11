import { Injectable } from '@angular/core';
import { Pokemon } from '../domain/pokemon';
import { Observable, of } from 'rxjs';
import { POKEMONS } from '../mock-pokemons';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl = 'https://softwium.com/api/pokemons';

  constructor(
    private http: HttpClient ) { }

  getPokemons() : Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl);
  }

  getPokemon(id: number): Observable<Pokemon> {
    //Constructs a request URL with the desired hero's id
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url);
  }

  /** PUT: update the hero on the server */
updatePokemon(pokemon: Pokemon): Observable<any> {
  return this.http.put(this.pokemonUrl, pokemon, this.httpOptions);
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/** POST: add a new hero to the server */
addPokemon(pokemon: Pokemon): Observable<Pokemon> {
  return this.http.post<Pokemon>(this.pokemonUrl, pokemon, this.httpOptions)
}

/** DELETE: delete the hero from the server */
deletePokemon(id: number): Observable<Pokemon> {
  const url = `${this.pokemonUrl}/${id}`;

  return this.http.delete<Pokemon>(url, this.httpOptions)
}
}
