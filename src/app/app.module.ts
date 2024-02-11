import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './base/app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemondetailComponent } from './components/pokemondetail/pokemondetail.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemondetailComponent,
    MenuComponent,
    HeaderComponent,
    UpdateComponent,
    PagenotfoundComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
