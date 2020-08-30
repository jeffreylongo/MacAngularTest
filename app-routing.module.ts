import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SwapiComponent } from './swapi/swapi.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CharacterComponent } from './character/character.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'swapi', component: SwapiComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
