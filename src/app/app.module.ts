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
import { AddComponent } from './components/add/add.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { httpInterceptorProviders } from './httpinterceptorproviders';
import { CustomAttributeDirective } from './directives/custom-attribute.directive';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemondetailComponent,
    MenuComponent,
    HeaderComponent,
    PagenotfoundComponent,
    AddComponent,
    CapitalizePipe,
    CustomAttributeDirective,
    LoginComponent,
    PrivateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
