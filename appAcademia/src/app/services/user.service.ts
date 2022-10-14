import { Users } from './../models/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlUsuario: string = 'http://localhost:3000/usuarios';

  constructor(private _http: HttpClient ) {}

  buscarUsuarios(): Observable<any> {
    return this._http.get<any>(this.urlUsuario)
  }

  buscarUmUsuario(id:number): Observable<Users> {
    return this._http.get<Users>(this.urlUsuario + '/' + id)
  }

  cadastro(dados: Users): Observable<Users>{
    return this._http.post<Users>(this.urlUsuario, dados)
  }

  edicao(dados: Users): Observable<Users> {
    return this._http.put<Users>(this.urlUsuario + '/' + dados.id, dados)
  }

  deletar(id: number): Observable<Users> {
    return this._http.delete<Users>(this.urlUsuario + '/' + id)
  }
}
