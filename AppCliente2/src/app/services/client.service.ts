import { Observable } from 'rxjs';
import { Clients } from './../models/clients';
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

  cadastrar(data: Clients): Observable<Clients> {
    return this._http.post<Clients>(this.urlClient, data);
  }

  editar(data: Clients): Observable<Clients> {
    return this._http.put<Clients>(this.urlClient + '/' + data.id, data)
  }

  deletar(id: number): Observable<Clients> {
    return this._http.delete<Clients>(this.urlClient + '/' + id)
  }
}
