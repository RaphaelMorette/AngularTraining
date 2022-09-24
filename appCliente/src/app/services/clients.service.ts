import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  urlApi: string = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  listar(tabela: string): Observable<any> {
    return this._http.get<any>(this.urlApi + tabela);
  }

  delete(params: any): Observable<any> {
    const tabela = params.tabela;
    const id = params.id;
    return this._http.delete<any>(this.urlApi + tabela + '/' + id);
  }

  cadastro(data: any): Observable<any> {
    const params = {
      nome: data.nome,
      telefone: data.telefone,
      email: data.email,
      cep: data.cep,
      endereco: data.endereco,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
    };
    const tabela = data.tabela;
    return this._http.post<any>(this.urlApi + tabela, params);
  }

  buscarUmCliente(params: any): Observable<any> {
    const id = params.id;
    const tabela = params.tabela;

    return this._http.get<any>(this.urlApi + tabela + '/' + id);
  }

  edicao(data: any): Observable<any> {
    const params = {
      nome: data.nome,
      telefone: data.telefone,
      email: data.email,
      cep: data.cep,
      endereco: data.endereco,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
    };
    const id = data.id
    const tabela = data.tabela

    return this._http.put<any>(this.urlApi+tabela+'/'+id,params)
  }
}
