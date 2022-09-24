import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';

  constructor(private _userService: UsersService, private _router: Router) {}

  ngOnInit(): void {}

  logIn() {
    if (this.user === '') {
      window.alert('Usuário em branco!');
    } else if (this.password === '') {
      window.alert('Senha em branco!');
    } else {
      this.autenticar();
    }
  }

  autenticar() {
    this._userService.getUsers().subscribe((dados) => {
      dados.forEach((item: any) => {
        if (item.username === this.user && item.senha === this.password) {
          window.localStorage.setItem('user', item.username);
          if(item.acesso === 'total'){
            window.localStorage.setItem('acesso', item.acesso)
          }
          this._router.navigate(['/home']);
        }
        // window.location.reload();
        // window.alert('Usuário ou senha inválido!');
      });
    });
  }
}
