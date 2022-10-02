import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  isTotal:boolean = false

  ngOnInit(): void {
    if(window.localStorage.getItem("acesso")){
      this.isTotal = true;
    }
  }

  logout() {
    window.localStorage.removeItem("user")
    window.localStorage.removeItem("acesso")
    this._router.navigate(['/login'])
  }
}
