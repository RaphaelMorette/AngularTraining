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
  isLogged: boolean = false;
  constructor(private _router: Router, private _userService: UsersService) {}

  ngOnInit(): void {
    if (window.localStorage.getItem('user')) {
      this._router.navigate(['/home']);
    }
  }

  entrar() {
    if (this.user === '') {
      console.log('User em branco');
    } else if (this.password === '') {
      console.log('Senha em Branco');
    } else {
      this.testeLogin();
    }
  }

  testeLogin() {
    this._userService.getUsers().subscribe((dados) => {
      dados.forEach((element: any) => {
        if (element.username === this.user) {
          window.localStorage.setItem('user', element.username);
          this._router.navigate(['/home']);
        }
      });

      this.isLogged = true;
      setTimeout(() => {
        this.isLogged = true;
      }, 4000);
    });
  }
}
