import { UserService } from './../../../services/user.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.css', '../../../shared/style.css'],
})
export class UsersContentComponent implements OnInit {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _userService: UserService
  ) {}

  listaUsuario: any[] = [];

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }

    this.listagem();
  }

  listagem() {
    this._userService.listar().subscribe((data: any[]) => {
      this.listaUsuario = data;
    });
  }

  deletar(id: number) {
    id: id;
    this._userService.deletar(id).subscribe((data) => {
      this.listagem();
    });
  }

  goAltera(id:number) {
    this._router.navigate(['/users-editar', id])
  }

  CriarUsuario() {
    this._router.navigate(['/users-cadastro'])
  }
}
