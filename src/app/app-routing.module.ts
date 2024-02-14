import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemondetailComponent } from './components/pokemondetail/pokemondetail.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddComponent } from './components/add/add.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { VerifyAuthService } from './services/verify-auth.service';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent, 
    children: [ 
    { path: 'pokemons', component: HeaderComponent }
    ]
  },
  { path: 'pokemons/:id', component: PokemondetailComponent, },
  { path: 'menu', component: MenuComponent},
  { path: 'add', component: AddComponent},
  { path: 'login', component: LoginComponent},
  { path: 'private', component: PrivateComponent, canActivate: [VerifyAuthService] },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
