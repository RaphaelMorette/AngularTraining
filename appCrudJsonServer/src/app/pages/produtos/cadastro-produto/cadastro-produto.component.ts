import { Observable } from 'rxjs';
import { ProdutosComponent } from './../produtos.component';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css'],
})
export class CadastroProdutoComponent implements OnInit {
  nome: string = '';
  descricao: string = '';
  preco: number = 0.0;
  categoria: number = 0;

  categorias: any[] = [];
  constructor(private _categoryService: ProdutosService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this._categoryService.getCategories('categorias').subscribe((data) => {
      this.categorias = data;
      console.log('Data from get categories', data);
    });
  }

  goCadastro() {
    const params = {
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco,
      categoria_id: this.categoria,
      tabela: 'produtos',
    };

    this._categoryService.postItem(params).subscribe(data => {
      console.log(data)
      window.location.reload()
    })

    console.log('params:', params);
  }
}
