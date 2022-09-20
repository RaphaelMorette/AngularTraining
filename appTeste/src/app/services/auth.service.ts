import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuth() {
    if (window.localStorage.getItem("user")){
      return true;
    }
    return false;
  }
}
