import { ClientService } from './../../services/client.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../shared/style.css'],
})
export class HomeComponent implements OnInit {
  listaClientes: any[] = [];

  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _clientService: ClientService
  ) {}

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }

    this.listar();
  }

  listar() {
    this._clientService.buscarClientes().subscribe((data) => {
      this.listaClientes = data;
    });
  }

  criarCliente() {
    this._router.navigate(['/cliente-cadastro']);
  }

  goAlterar(id: number) {
    this._router.navigate(['/cliente-edicao', id]);
  }

  deletar(id: number) {
    this._clientService.deletar(id).subscribe((data) => {
      this.listar();
    });
  }
}
