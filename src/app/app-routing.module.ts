import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemondetailComponent } from './components/pokemondetail/pokemondetail.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { UpdateComponent } from './components/update/update.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent, 
  children: [ 
    { path: 'pokemons', component: HeaderComponent }
  ]},
  { path: 'pokemons/:id', component: PokemondetailComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'edit', component: UpdateComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
