import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-categorias',
  templateUrl: './cadastro-categorias.component.html',
  styleUrls: ['./cadastro-categorias.component.css'],
})
export class CadastroCategoriasComponent implements OnInit {
  nomeCategoria: string = '';

  constructor(private _produtosService: ProdutosService) {}

  ngOnInit(): void {}

  cadastrarCategoria() {
    const params = {
      nomeCategoria: this.nomeCategoria,
      tabela: 'categorias',
    };


  }
}
