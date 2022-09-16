import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terceiro-componente',
  templateUrl: './terceiro-componente.component.html',
  styleUrls: ['./terceiro-componente.component.css']
})
export class TerceiroComponenteComponent implements OnInit {

  meu_documento = {
    rg: '38.098.234-2',
    cpf: '498.987.987-23',
    cnh: '12312312'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
