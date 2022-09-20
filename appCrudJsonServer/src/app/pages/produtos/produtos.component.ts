import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private _produtosService: ProdutosService) { }

  products: any[] = []

  ngOnInit(): void {
    this.getProductsData()
  }

  getProductsData() {
    this._produtosService.getProducts().subscribe((data:any[]) => {
        this.products = data
        console.log(this.products)
      })
  }
}
