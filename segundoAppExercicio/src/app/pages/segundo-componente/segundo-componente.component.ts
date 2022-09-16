import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent implements OnInit {

  meu_endereco = {
    bairro: "Santana",
    cidade: "São Paulo",
    cep: "02498-000",
    endereco: {
      logradouro: "Rua Augusto Tolle",
      numero: 123
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
