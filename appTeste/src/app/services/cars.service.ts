import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  urlAPI = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private _http: HttpClient) {}

  getdata(): Observable<any> {
    return this._http.get(this.urlAPI)
  }
}


