import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemondetailComponent } from './components/pokemondetail/pokemondetail.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent, 
    children: [ 
    { path: 'pokemons', component: HeaderComponent }
    ]
  },
  { path: 'pokemons/:id', component: PokemondetailComponent, },
  { path: 'menu', component: MenuComponent},
  { path: 'add', component: AddComponent},
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
