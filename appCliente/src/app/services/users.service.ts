import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  urlApi: string = 'http://localhost:3000/usuarios';

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<any> {
    return this._http.get<any>(this.urlApi)
  }
}
