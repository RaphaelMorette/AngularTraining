import { ClientsService } from './../../../services/clients.service';
import { CepService } from './../../../services/cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css'],
})
export class CadastrarClienteComponent implements OnInit {
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
    private _clienteService: ClientsService
  ) {}

  ngOnInit(): void {}

  buscarCep() {
    this._cepService.getCep(this.cep).subscribe((data) => {
      this.endereco = data.logradouro;
      this.bairro = data.bairro;
      this.cidade = data.localidade;
      this.estado = data.uf;
    });
  }
  Cadastrar() {
    const params = {
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

    this._clienteService.cadastro(params).subscribe((data) => {
      window.location.reload();
    });
  }
}
