import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-simple-json',
  templateUrl: './simple-json.component.html',
  styleUrls: ['./simple-json.component.css'],
})
export class SimpleJsonComponent implements OnInit {
  constructor() {}

  carros = [
    {
      veiculo: '350z',
      marca: 'Nissan',
      ano: 2008,
      cor: 'vermelho',
      especificacoes: {
        body_kit: 'sim',
        kit_angulo: 'não',
        swap_motor: 'não',
        cambagem_dianteira: 'não',
      },
    },
    {
      veiculo: 'brz',
      marca: 'Subaru',
      ano: 2019,
      cor: 'azul',
      especificacoes: {
        body_kit: 'não',
        kit_angulo: 'não',
        swap_motor: 'não',
        cambagem_dianteira: 'não',
      },
    },
    {
      veiculo: 'silvia s14',
      marca: 'Nissan',
      ano: 1997,
      cor: 'azul escuro',
      especificacoes: {
        body_kit: 'sim',
        kit_angulo: 'sim',
        swap_motor: 'sim',
        cambagem_dianteira: 'sim',
      },
    },
    {
      veiculo: 'GT86',
      marca: 'Toyota',
      ano: 2013,
      cor: 'branco',
      especificacoes: {
        body_kit: 'não',
        kit_angulo: 'não',
        swap_motor: 'Não',
        cambagem_dianteira: 'não',
      },
    },
    {
      veiculo: 'hachiroku AE86',
      marca: 'Toyota',
      ano: 1983,
      cor: 'Branco/preto',
      especificacoes: {
        body_kit: 'não',
        kit_angulo: 'não',
        swap_motor: 'sim',
        cambagem_dianteira: 'não',
      },
    },
    {
      veiculo: 'impreza',
      marca: 'Subaru',
      ano: 2004,
      cor: 'azul',
      especificacoes: {
        body_kit: 'sim',
        kit_angulo: 'não',
        swap_motor: 'sim',
        cambagem_dianteira: 'não',
      },
    },
  ];

  desabilitar:boolean = false
  mostraDetail: boolean = false;
  marca:string = ''

  ngOnInit(): void {}


  filtrar(valor: string): void {
    if(valor === 'Todos'){
      window.location.reload()
      this.desabilitar = false
    }

    const newArray: any[] = []
    this.carros.forEach(dado => {
      if(dado.marca === valor){
        newArray.push(dado)
      }
    });
    this.desabilitar = true
    this.carros = newArray
    this.marca = valor
    this.mostraDetail=true
  }
}
