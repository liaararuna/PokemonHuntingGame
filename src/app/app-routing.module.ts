import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemondetailComponent } from './components/pokemondetail/pokemondetail.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'detail/:id', component: PokemondetailComponent },
  { path: 'menu', component: MenuComponent},
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
