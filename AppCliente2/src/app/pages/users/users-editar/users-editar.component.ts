import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../../../services/authentication.service';
import { Users } from './../../../models/users';
import { UserService } from './../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-editar',
  templateUrl: './users-editar.component.html',
  styleUrls: ['./users-editar.component.css'],
})
export class UsersEditarComponent implements OnInit {
  formUsuario: Users;

  cepNaoEncontrado: boolean = false;
  classToApply: string = 'noShow';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _http: HttpClient,
    private _userService: UserService,
    private _authService: AuthenticationService
  ) {
    this.formUsuario = new Users();
  }

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }

    this.buscarUsuario(Number(this._route.snapshot.paramMap.get('id')));
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

  buscarUsuario(id: number) {
    this._userService.buscarUmUsuario(id).subscribe(data => {
      this.formUsuario = data
    })
  }

  editar() {
    this._userService.edicao(this.formUsuario).subscribe(data => {
      // console.log(data)
      this._router.navigate(['/users'])
    })
  }
}
