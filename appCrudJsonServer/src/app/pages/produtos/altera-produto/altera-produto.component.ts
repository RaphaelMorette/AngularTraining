import { ProdutosService } from 'src/app/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altera-produto',
  templateUrl: './altera-produto.component.html',
  styleUrls: ['./altera-produto.component.css'],
})
export class AlteraProdutoComponent implements OnInit {
  id: number = 0;
  nome: string = '';
  descricao: string = '';
  preco: number = 0.0;
  categoria: number = 0;

  categorias: any[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.id = Number(this._route.snapshot.paramMap.get('id'));
    this.getItem();
    this.getCategories();
  }

  getCategories() {
    this._produtosService.getCategories('categorias').subscribe((data) => {
      this.categorias = data;
    });
  }

  getItem() {
    const params = {
      id: this.id,
      tabela: 'produtos',
    };

    this._produtosService.getItem(params).subscribe((data) => {
      console.log('Data returned from getItem =>', data);
      this.nome = data.nome;
      this.descricao = data.descricao;
      this.preco = data.preco;
      this.categoria = data.categoria_id;
    });
  }

  goAltera() {
    const params = {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco,
      categoria_id: this.categoria,
      tabela: 'produtos',
    };

    this._produtosService.putItem(params).subscribe((data) => {
      console.log('data returned from put =>', data);
      this._router.navigate(['/produtos']);
    });
  }
}
