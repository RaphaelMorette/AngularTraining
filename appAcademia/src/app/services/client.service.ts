import { Clients } from './../models/clients';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  urlClient: string = 'http://localhost:3000/clientes';

  constructor(private _http: HttpClient) {}

  buscarClientes(): Observable<any> {
    return this._http.get<any>(this.urlClient);
  }

  buscarUmCliente(id: number): Observable<Clients> {
    return this._http.get<Clients>(this.urlClient + '/' + id);
  }

  cadastro(dados: Clients): Observable<Clients> {
    return this._http.post<Clients>(this.urlClient, dados);
  }

  edicao(dados: Clients): Observable<Clients> {
    return this._http.put<Clients>(this.urlClient + '/' + dados.id, dados);
  }

  deletar(id: number): Observable<Clients> {
    return this._http.delete<Clients>(this.urlClient + '/' + id)
  }
}
