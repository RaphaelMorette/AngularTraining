import { Users } from './../models/users';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlUser: string = 'http://localhost:3000/usuarios';

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<any> {
    return this._http.get<any>(this.urlUser);
  }

  listar(): Observable<any> {
    return this._http.get<any>(this.urlUser);
  }

  deletar(id: number): Observable<any> {
    const _id = id;
    // console.log(this.urlUser + '/' + _id);
    return this._http.delete<any>(this.urlUser + '/' + _id);
  }

  cadastrar(data: any): Observable<any> {
    return this._http.post<any>(this.urlUser, data);
  }

  buscarUmUsuario(id: number): Observable<any> {
    return this._http.get<any>(this.urlUser + '/' + id)
  }

  edicao(dados: Users):Observable<any> {
    return this._http.put<Users>(this.urlUser + '/' + dados.id, dados)
  }
}
