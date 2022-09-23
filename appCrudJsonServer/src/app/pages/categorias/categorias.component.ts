import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  constructor(private _produtosService: ProdutosService) {}

  categories: any[] = [];

  ngOnInit(): void {
    this.getCategoriesData();
  }

  getCategoriesData() {
    this._produtosService
      .getCategories('categorias')
      .subscribe((data: any[]) => {
        this.categories = data;
      });
  }

  goDelete(id: number) {
    const params = {
      id: id,
      tabela: 'categorias',
    };
    this._produtosService.deleteItem(params).subscribe((data) => {
      this.getCategoriesData();
    });
  }
}
