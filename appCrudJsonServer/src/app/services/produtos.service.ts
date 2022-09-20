import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  urlApi = 'http://localhost:3000/produtos'

  constructor(private _http: HttpClient) { }

  getProducts():Observable<any> {
    return this._http.get(this.urlApi)
  }
}
