import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlAPI = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any> {
    return this._http.get(this.urlAPI)
  }

}
