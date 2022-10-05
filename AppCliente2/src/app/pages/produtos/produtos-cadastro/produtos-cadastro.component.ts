import { Users } from './../../../models/users';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css'],
})
export class ProdutosCadastroComponent implements OnInit {
  formularioInvalido: boolean = false;

  formUsuario: Users;

  formProdutos = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    telefone: new FormGroup({
      residencial: new FormControl(''),
      celular: new FormControl(''),
    }),
  });

  constructor() {
    this.formUsuario = new Users();
  }

  ngOnInit(): void {
    this.formProdutos.controls.nome.setValue('');
  }

  goSalvar() {
    console.log('this.formUsuario:', this.formProdutos.value);
    this.formProdutos.reset();
  }
}
