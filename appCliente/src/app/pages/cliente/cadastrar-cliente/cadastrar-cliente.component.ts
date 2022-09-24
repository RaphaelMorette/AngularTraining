import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css'],
})
export class CadastrarClienteComponent implements OnInit {
  nome: string = '';
  telefone: string = '';
  email: string = '';
  cep: number = 0;
  endereco: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';

  constructor() {}

  ngOnInit(): void {}
}
