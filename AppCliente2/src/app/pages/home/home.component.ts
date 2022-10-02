import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }
  }
}
