import { Router } from '@angular/router';
import { ClientsService } from './../../services/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  constructor(
    private _clienteService: ClientsService,
    private _router: Router
  ) {}

  clients: any[] = [];

  ngOnInit(): void {
    this.listagem();
  }

  listagem() {
    this._clienteService.listar('clientes').subscribe((data: any[]) => {
      this.clients = data;
    });
  }

  deletar(id: number) {
    const params = {
      id: id,
      tabela: 'clientes',
    };
    this._clienteService.delete(params).subscribe((data) => {
      this.listagem();
    })
  }
}
