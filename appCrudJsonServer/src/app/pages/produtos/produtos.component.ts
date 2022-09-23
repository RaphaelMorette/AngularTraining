import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  constructor(
    private _produtosService: ProdutosService,
    private _router: Router
  ) {}

  products: any[] = [];

  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData() {
    this._produtosService.getProducts('produtos').subscribe((data: any[]) => {
      this.products = data;
      console.log(this.products);
    });
  }

  goDelete(id: number) {
    const params = {
      id: id,
      tabela: 'produtos',
    };
    this._produtosService.deleteItem(params).subscribe((data) => {
      this.getProductsData();
    });
  }

  goAltera(id: number) {
    this._router.navigate(['/altera-produto', id]);
  }
}
