import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router:Router,
    private _auth:AuthService
  ) { }

  ngOnInit(): void {
    if(!this._auth.getAuth() === true){
      this._router.navigate(['/login'])
    }
  }

}
