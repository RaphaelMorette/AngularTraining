import { ClientService } from './../../../services/client.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Clients } from './../../../models/clients';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css'],
})
export class ClienteCadastroComponent implements OnInit {
  formCliente: Clients;

  cepNaoEncontrado: boolean = false;
  classToApply: string = 'noShow';

  constructor(
    private _router: Router,
    private _http: HttpClient,
    private _authService: AuthenticationService,
    private _clienteService: ClientService
  ) {
    this.formCliente = new Clients();
  }

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }
  }

  cadastro() {
    this._clienteService.cadastrar(this.formCliente).subscribe(data => {
      this._router.navigate(['/clientes'])
    })
  }

  buscarCep(event: any) {
    // console.log('cep', event.target.value);
    const cep = event.target.value;
    this._http
      .get("https://viacep.com.br/ws/" + cep + "/json/").subscribe((dataCep: any) => {
        // console.log("dataCep =>", dataCep)
        if (dataCep.erro) {
          this.classToApply = 'noShow';
          this.cepNaoEncontrado = true;
          setTimeout(() => {
            this.cepNaoEncontrado = false;
            this.formCliente.enderecos.cep = '';
          }, 3000);
          return
        }
        this.classToApply = 'show';
        this.formCliente.enderecos.logradouro = dataCep['logradouro'];
        this.formCliente.enderecos.bairro = dataCep['bairro'];
        this.formCliente.enderecos.cidade = dataCep['localidade'];
        this.formCliente.enderecos.estado = dataCep['uf'];
      });
  }
}
