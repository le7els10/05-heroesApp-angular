import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/auth.interfaces';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.apiUrl;

  private _auth: Usuario | undefined;

  constructor(private _http: HttpClient) {}

  get auth() {
    return { ...this._auth };
  }

  login = () => {
    return this._http.get<Usuario>(`${this.baseUrl}/usuarios/1`).pipe(
      tap((auth) => {
        this._auth = auth;

        localStorage.setItem('id', auth.id.toString());
      })
    );
  };

  logout() {
    this._auth = undefined;
    localStorage.removeItem('id');
  }

  verifyAuth = (): Observable<boolean> => {
    if (!localStorage.getItem('id')) {
      return of(false);
    }

    return this._http.get<Usuario>(`${this.baseUrl}/usuarios/1`).pipe(
      map((auth) => {
        this._auth = auth;
        return true;
      })
    );
  };
}
