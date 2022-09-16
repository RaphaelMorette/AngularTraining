import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-event',
  templateUrl: './first-event.component.html',
  styleUrls: ['./first-event.component.css']
})
export class FirstEventComponent implements OnInit {

  texto:string = '';
  eventoClicado: boolean = false;

  carros =[ {
    nome: '350z',
    marca: 'Nissan',
    dados: {
      km: 1000,
      cor: 'Amarelo'
    }
  },
  {
    nome: 'Supra',
    marca: 'toyota',
    dados: {
      km: 0,
      cor: 'Amarelo'
    }
  },
  {
    nome: 'Rx7',
    marca: 'Mazda',
    dados: {
      km: 2000,
      cor: 'Amarelo'
    }
  }]

  constructor() { }

  ngOnInit(): void {
  }

  cliqueBotao (nome: string) {
    this.carros.map ((dado, i) => {
      console.log('element', dado + ' ' + i)
    })

    console.log('Clicou no botão!' + ' ' + nome);
    this.texto = 'Cliquei no botão ' + nome
    this.eventoClicado = !this.eventoClicado
    }

}
