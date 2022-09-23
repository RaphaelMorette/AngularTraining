import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  urlApi:string = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  getProducts(tabela:string): Observable<any> {
    return this._http.get<any>(this.urlApi+tabela);
  }

  deleteItem(params: any): Observable<any>{
    const tabela = params.tabela;
    const id = params.id;
    return this._http.delete<any>(this.urlApi+tabela+'/'+id)
  }

  getCategories(tabela:string): Observable<any> {
    return this._http.get<any>(this.urlApi+tabela);
  }

  postItem(data: any): Observable<any> {
    const params = {
      nome: data.nome,
      descricao: data.descricao,
      preco: data.preco,
      categoria_id: data.categoria_id
    }
    const tabela = data.tabela
    return this._http.post<any>(this.urlApi + tabela, params)
  }

  getItem(params: any): Observable<any>{
    const id = params.id
    const tabela = params.tabela
    console.warn(this.urlApi+tabela+'/'+id)
    return this._http.get<any>(this.urlApi+tabela+'/'+id)
  }

  putItem(data: any): Observable<any> {
    const params = {
      nome: data.nome,
      descricao: data.descricao,
      preco: data.preco,
      categoria_id: data.categoria_id
    }
    const id = data.id
    const tabela = data.tabela
    return this._http.put<any>(this.urlApi+tabela+'/'+id,params)
  }
}
