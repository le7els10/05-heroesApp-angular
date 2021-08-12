import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url = environment.apiUrl;
  constructor(private _http: HttpClient) {}

  getHeroes = () => {
    return this._http.get<Hero[]>(`${this.url}/heroes`);
  };

  getHeroById = (id: string) => {
    return this._http.get<Hero>(`${this.url}/heroes/${id}`);
  };

  addHero = (hero: Hero) => {
    return this._http.post<Hero>(`${this.url}/heroes`, hero);
  };
}
