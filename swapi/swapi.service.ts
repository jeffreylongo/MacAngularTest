import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const swapi = 'https://swapi.co/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers' : '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  getPeople(): Observable<any> {
    return this.httpClient
      .get(swapi + 'people', httpOptions);
  }

  getPerson(id): Observable<any> {
    return this.httpClient
      .get(swapi + 'people/' + id);
  }

  getFilms(): Observable<any> {
    return this.httpClient
      .get(swapi + 'films', httpOptions);
  }

  getPlanets(): Observable<any> {
    return this.httpClient
      .get(swapi + 'planets', httpOptions);
  }

  getSpecies(): Observable<any> {
    return this.httpClient
      .get(swapi + 'species', httpOptions);
  }

  getStarships(): Observable<any> {
    return this.httpClient
      .get(swapi + 'starships', httpOptions);
  }

  getVehicles(): Observable<any> {
    return this.httpClient
      .get(swapi + 'vehicles', httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}

// {
//   "films": "https://swapi.co/api/films/",
//   "people": "https://swapi.co/api/people/",
//   "planets": "https://swapi.co/api/planets/",
//   "species": "https://swapi.co/api/species/",
//   "starships": "https://swapi.co/api/starships/",
//   "vehicles": "https://swapi.co/api/vehicles/"
// }
