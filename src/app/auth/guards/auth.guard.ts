import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return this._authService.auth.id ? true : false;
    return this._authService.verifyAuth().pipe(
      tap((isAuth) => {
        if (!isAuth) {
          this._router.navigate(['./auth/login']);
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return this._authService.verifyAuth();
    return this._authService.verifyAuth().pipe(
      tap((isAuth) => {
        if (!isAuth) {
          this._router.navigate(['./auth/login']);
        }
      })
    );
    // return this._authService.auth.id ? true : false;
  }
}
