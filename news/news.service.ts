import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const newsApiURL = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=7c5a9d0602604ea5a8306cc70fd12e37';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  getNews(): Observable<any> {
    return this.httpClient
      .get(newsApiURL, httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}
