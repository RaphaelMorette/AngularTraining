import { ClientsService } from './../../../services/clients.service';
import { CepService } from './../../../services/cep.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
})
export class EditarClienteComponent implements OnInit {
  id: number = 0;
  nome: string = '';
  telefone: string = '';
  email: string = '';
  cep: string = '';
  endereco: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';

  constructor(
    private _cepService: CepService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _clienteService: ClientsService
  ) {}

  ngOnInit(): void {
    this.id = Number(this._route.snapshot.paramMap.get('id'));
    this.buscarCliente();
  }

  buscarCep() {
    this._cepService.getCep(this.cep).subscribe((data) => {
      this.endereco = data.logradouro;
      this.bairro = data.bairro;
      this.cidade = data.localidade;
      this.estado = data.uf;
    });
  }

  buscarCliente() {
    const params = {
      id: this.id,
      tabela: 'clientes',
    };

    this._clienteService.buscarUmCliente(params).subscribe((data) => {
      this.nome = data.nome;
      this.telefone = data.telefone;
      this.email = data.email;
      this.cep = data.cep;
      this.endereco = data.endereco;
      this.bairro = data.bairro;
      this.cidade = data.cidade;
      this.estado = data.estado;
    });
  }

  editar() {
    const params = {
      id: this.id,
      nome: this.nome,
      telefone: this.telefone,
      email: this.email,
      cep: this.cep,
      endereco: this.endereco,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      tabela: 'clientes',
    };

    this._clienteService.edicao(params).subscribe((data) => {
      this._router.navigate(['/clientes']);
    });
  }
}
