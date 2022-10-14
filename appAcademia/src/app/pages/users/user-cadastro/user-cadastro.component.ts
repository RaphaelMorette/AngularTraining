import { Users } from './../../../models/users';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cadastro',
  templateUrl: './user-cadastro.component.html',
  styleUrls: ['./user-cadastro.component.css', '../../shared/style.css'],
})
export class UserCadastroComponent implements OnInit {
  formUsuario: Users;

  cepNaoEncontrado: boolean = false;
  classToApply: string = 'noShow';

  constructor(
    private _router: Router,
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
  }

  cadastro() {
    // console.log("Dados Cadastro => ", this.formUsuario)
    this._userService.cadastro(this.formUsuario).subscribe((data) => {
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
