import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/swapi/swapi.service';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {
people: any = [];
films: any = [];
planets: any = [];
species: any = [];
starships: any = [];
vehicles: any = [];
constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getPeople()
      .subscribe((data: any) => {
        this.people = data.results;
      });
    this.swapiService.getStarships()
      .subscribe((data: any) => {
        this.starships = data.results;
      });
    this.swapiService.getVehicles()
      .subscribe((data: any) => {
        this.vehicles = data.results;
      });
    this.swapiService.getSpecies()
      .subscribe((data: any) => {
        this.species = data.results;
      });
    this.swapiService.getFilms()
      .subscribe((data: any) => {
        this.films = data.results;
      });
    this.swapiService.getPlanets()
      .subscribe((data: any) => {
        this.planets = data.results;
      });
  }

}

// {
//   "films": "https://swapi.co/api/films/",
//   "people": "https://swapi.co/api/people/",
//   "planets": "https://swapi.co/api/planets/",
//   "species": "https://swapi.co/api/species/",
//   "starships": "https://swapi.co/api/starships/",
//   "vehicles": "https://swapi.co/api/vehicles/"
// }
