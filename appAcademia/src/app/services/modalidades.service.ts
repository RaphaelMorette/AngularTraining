import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modalidades } from '../models/modalidades';

@Injectable({
  providedIn: 'root',
})
export class ModalidadesService {
  urlModalidades: string = 'http://localhost:3000/modalidades';

  constructor(private _http: HttpClient) {}

  buscarModalidades(): Observable<any> {
    return this._http.get<any>(this.urlModalidades);
  }

  buscarUmaModalidade(id: number): Observable<Modalidades> {
    return this._http.get<Modalidades>(this.urlModalidades + '/' + id);
  }

  cadastro(dados: Modalidades): Observable<Modalidades> {
    return this._http.post<Modalidades>(this.urlModalidades, dados);
  }

  edicao(dados: Modalidades): Observable<Modalidades> {
    return this._http.put<Modalidades>(
      this.urlModalidades + '/' + dados.id,
      dados
    );
  }

  delete(id: number): Observable<Modalidades> {
    return this._http.delete<Modalidades>(this.urlModalidades + '/' + id);
  }
}
