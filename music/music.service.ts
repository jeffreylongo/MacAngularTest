import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const discogsApi = 'https://api.discogs.com/artists/1';
const httpOptions = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Headers' : '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  musicTestCall(): Observable<any> {
    return this.httpClient
      .get(discogsApi, httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}
