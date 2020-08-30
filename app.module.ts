import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SwapiComponent } from './swapi/swapi.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CharacterComponent } from './character/character.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SwapiComponent,
    HomeComponent,
    ContactComponent,
    CharacterComponent,
    AboutComponent,
    NewsComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
