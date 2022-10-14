import { UserService } from './../../../services/user.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css', '../../shared/style.css'],
})
export class UserContentComponent implements OnInit {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }

    this.listar();
  }

  listaUsuarios: any[] = [];

  listar() {
    this._userService.buscarUsuarios().subscribe((data: any) => {
      this.listaUsuarios = data;
    });
  }

  criarUsuario() {
    this._router.navigate(['/user-cadastro']);
  }

  goAlterar(id: number) {
    this._router.navigate(['/user-edicao', id]);
  }

  deletar(id: number) {
    this._userService.deletar(id).subscribe((data) => {
      this.listar();
    });
  }
}
