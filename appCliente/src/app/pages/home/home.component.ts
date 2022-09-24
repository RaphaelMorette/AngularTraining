import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  constructor(
    private _router: Router,
    private _auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    if(!this._auth.authentication() === true) {
      this._router.navigate(['/login'])
    }
  }
}
