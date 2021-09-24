import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './models/Hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroesUrl = 'api/heroes'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // private allHeroes = [
  //   { id: 11, name: 'Dr Nice' },
  //   { id: 12, name: 'Narco' },
  //   { id: 13, name: 'Bombasto' },
  //   { id: 14, name: 'Celeritas' },
  //   { id: 15, name: 'Magneta' },
  //   { id: 16, name: 'RubberMan' },
  //   { id: 17, name: 'Dynama' },
  //   { id: 18, name: 'Dr IQ' },
  //   { id: 19, name: 'Magma' },
  //   { id: 20, name: 'Tornado' },
  // ];

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}`);
  }

  getHeroById(payload: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${payload}`);
  }

  createHero(payload: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, payload, this.httpOptions);
  }

  updateHero(payload: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, payload, this.httpOptions);
  }

  deleteHero(payload: number): Observable<any> {
    return this.http.delete(`${this.heroesUrl}/${payload}`);
  }
}
