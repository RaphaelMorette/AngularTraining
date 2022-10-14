import { UserService } from './../../../services/user.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from './../../../models/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edicao',
  templateUrl: './user-edicao.component.html',
  styleUrls: ['./user-edicao.component.css'],
})
export class UserEdicaoComponent implements OnInit {
  formUsuario: Users;

  cepNaoEncontrado: boolean = false;
  classToApply: string = 'noShow';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _http: HttpClient,
    private _authService: AuthenticationService,
    private _userService: UserService
  ) {
    this.formUsuario = new Users();
  }

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }

    this.buscarUsuario(Number(this._route.snapshot.paramMap.get('id')))
  }

  buscarUsuario(id: number) {
    this._userService.buscarUmUsuario(id).subscribe((data) => {
      this.formUsuario = data;
    });
  }

  editar() {
    this._userService.edicao(this.formUsuario).subscribe((data) => {
      this._router.navigate(['/user']);
    });
  }

  buscarCep(event: any) {
    const cep = event.target.value;
    this._http.get('https://viacep.com.br/ws/' + cep + '/json/').subscribe((dataCep: any) => {
        if (dataCep.erro) {
          this.classToApply = 'noShow';
          this.cepNaoEncontrado = true;
          setTimeout(() => {
            this.cepNaoEncontrado = false;
            this.formUsuario.cep = '';
          }, 3000);
          return;
        }
        this.classToApply = 'show';
        this.formUsuario.logradouro = dataCep['logradouro'];
        this.formUsuario.bairro = dataCep['bairro'];
        this.formUsuario.cidade = dataCep['localidade'];
        this.formUsuario.estado = dataCep['uf'];
      });
  }
}
