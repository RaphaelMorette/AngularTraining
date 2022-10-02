import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';
  msgErro: string = '';
  constructor(private _userService: UserService, private _router: Router) {}

  classesToApply: string = 'noShow';

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
        if (item.nome === this.user && item.senha === this.password) {
          window.localStorage.setItem('user', item.nome);
          if (item.acesso === 'total') {
            window.localStorage.setItem('acesso', item.acesso);
          }
          this._router.navigate(['/home']);
          // console.log('Acesso permitido');
        } else {
          // console.log('Acesso não permitido');
          this.classesToApply = 'show';
          setTimeout(() => {
            this.classesToApply = 'noShow';
          }, 3000);
          return;
        }
      });
    });
  }
}
