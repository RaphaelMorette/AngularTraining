import { Clients } from './../../../models/clients';
import { AuthenticationService } from './../../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css', '../../shared/style.css'],
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
    this._clienteService.cadastro(this.formCliente).subscribe(data => {
      this._router.navigate(['/home'])
    });
  }

  buscarCep(event: any) {
    const cep = event.target.value;
    this._http
      .get("https://viacep.com.br/ws/" + cep + "/json/").subscribe((dataCep: any) => {
        if (dataCep.erro) {
          this.classToApply = 'noShow';
          this.cepNaoEncontrado = true;
          setTimeout(() => {
            this.cepNaoEncontrado = false;
            this.formCliente.cep = '';
          }, 3000);
          return
        }
        this.classToApply = 'show';
        this.formCliente.logradouro = dataCep['logradouro'];
        this.formCliente.bairro = dataCep['bairro'];
        this.formCliente.cidade = dataCep['localidade'];
        this.formCliente.estado = dataCep['uf'];
      });
  }
}
