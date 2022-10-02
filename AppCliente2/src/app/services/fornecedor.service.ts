import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  urlFornecedor: string = 'http://localhost:3000/fornecedores';

  constructor(private _http: HttpClient) {}

  buscarFornecedores(): Observable<any> {
    return this._http.get<any>(this.urlFornecedor);
  }

  buscarUmFornecedor(id: number): Observable<Fornecedor> {
    return this._http.get<Fornecedor>(this.urlFornecedor + '/' + id)
  }

  cadastrar(data: Fornecedor): Observable<Fornecedor> {
    return this._http.post<Fornecedor>(this.urlFornecedor, data)
  }

  editar(data: Fornecedor): Observable<Fornecedor> {
    return this._http.put<Fornecedor>(this.urlFornecedor + '/' + data.id, data)
  }

  deletar(id: number): Observable<Fornecedor> {
    return this._http.delete<Fornecedor>(this.urlFornecedor + '/' + id)
  }
}
