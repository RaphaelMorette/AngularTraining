import { HttpClient } from '@angular/common/http';
import { UserService } from './../../../services/user.service';
import { Users } from './../../../models/users';
import { AuthenticationService } from './../../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-cadastro',
  templateUrl: './users-cadastro.component.html',
  styleUrls: ['./users-cadastro.component.css'],
})
export class UsersCadastroComponent implements OnInit {
  formUsuario: Users;

  cepNaoEncontrado: boolean = false;
  classToApply: string = 'noShow';

  constructor(
    private _router: Router,
    private _http: HttpClient,
    private _authService: AuthenticationService,
    private _usersService: UserService
  ) {
    this.formUsuario = new Users();
  }

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }
  }

  cadastro() {
    // console.log('this.User', this.formUsuario);

    this._usersService.cadastrar(this.formUsuario).subscribe((data) => {
      // console.log('Retorno formUser', data)
      this._router.navigate(['/users']);
    });
  }

  buscarCep(event: any) {
    // console.log('cep', event.target.value);
    const cep = event.target.value;
    this._http
      .get("https://viacep.com.br/ws/" + cep + "/json/").subscribe((dataCep: any) => {
        // console.log("dataCep =>", dataCep)
        if (dataCep.erro) {
          this.classToApply = 'noShow';
          this.cepNaoEncontrado = true;
          setTimeout(() => {
            this.cepNaoEncontrado = false;
            this.formUsuario.enderecos.cep = '';
          }, 3000);
          return
        }
        this.classToApply = 'show';
        this.formUsuario.enderecos.logradouro = dataCep['logradouro'];
        this.formUsuario.enderecos.bairro = dataCep['bairro'];
        this.formUsuario.enderecos.cidade = dataCep['localidade'];
        this.formUsuario.enderecos.estado = dataCep['uf'];
      });
  }
}
