import { FornecedorService } from './../../../services/fornecedor.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor-content',
  templateUrl: './fornecedor-content.component.html',
  styleUrls: ['./fornecedor-content.component.css', '../../../shared/style.css'],
})
export class FornecedorContentComponent implements OnInit {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _fornecedorService: FornecedorService
  ) {}

  listaFornecedores: any[] = [];

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }

    this.listar();
  }

  listar() {
    this._fornecedorService.buscarFornecedores().subscribe((data: any[]) => {
      this.listaFornecedores = data;
    });
  }

  criarFornecedor() {
    this._router.navigate(['/fornecedor-cadastro']);
  }

  goAltera(id: number) {
    this._router.navigate(['/fornecedor-editar', id]);
  }

  deletar(id: number) {
    this._fornecedorService.deletar(id).subscribe((data) => {
      this.listar();
    });
  }
}
