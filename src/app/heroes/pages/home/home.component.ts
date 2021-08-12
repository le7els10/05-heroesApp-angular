import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/auth.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  get auth() {
    return this._authService.auth;
  }

  constructor(private _router: Router, private _authService: AuthService) {}

  ngOnInit(): void {}

  logOut = () => {
    this._authService.logout();
    this._router.navigate(['./auth']);
  };
}
