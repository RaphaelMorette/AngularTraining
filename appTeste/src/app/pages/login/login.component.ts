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

  constructor(private _router: Router) {}

  erroUser: any = document.querySelector('p.msgUser');
  erroPassword: any = document.querySelector('p.msgPassword');


  entrar() {
    if (this.user === '') {
      console.log('User em branco');
      console.log(this.erroUser);
    } else if (this.password === '') {
      console.log('Senha em Branco')
      console.log(this.erroPassword)
    } else {
      this._router.navigate(['/home']);
    }
  }

  ngOnInit(): void {}
}
