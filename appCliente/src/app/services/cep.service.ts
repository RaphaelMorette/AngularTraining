import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  urlCep: string = 'https://viacep.com.br/ws/';

  constructor(private _http: HttpClient) {}

  getCep(cep: string) {
    return this._http.get<any>(this.urlCep + cep + '/json');
  }
}
