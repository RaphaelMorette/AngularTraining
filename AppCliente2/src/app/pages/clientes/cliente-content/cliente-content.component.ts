import { Clients } from './../../../models/clients';
import { ClientService } from './../../../services/client.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-content',
  templateUrl: './cliente-content.component.html',
  styleUrls: ['./cliente-content.component.css', '../../../shared/style.css'],
})
export class ClienteContentComponent implements OnInit {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _clienteServices: ClientService
  ) {}

  listaClientes: any[] = [];

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }

    this.listar();
  }

  listar() {
    this._clienteServices.buscarClientes().subscribe((data: any[]) => {
      this.listaClientes = data
    });
  }

  criarCliente() {
    this._router.navigate(['/clientes-cadastro'])
  }

  goAltera(id: number) {
    this._router.navigate(['/clientes-editar', id])
  }

  deletar(id: number) {
    this._clienteServices.deletar(id).subscribe(data => {
      this.listar();
    })
  }
}
