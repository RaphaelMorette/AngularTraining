import { Clients } from './../../../models/clients';
import { ClientService } from './../../../services/client.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-edicao',
  templateUrl: './cliente-edicao.component.html',
  styleUrls: ['./cliente-edicao.component.css'],
})
export class ClienteEdicaoComponent implements OnInit {
  formCliente: Clients;

  cepNaoEncontrado: boolean = false;
  classToApply: string = 'noShow';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
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

    this.buscarCliente(Number(this._route.snapshot.paramMap.get('id')));
  }

  buscarCliente(id: number) {
    this._clienteService.buscarUmCliente(id).subscribe((data) => {
      this.formCliente = data;
    });
  }

  editar() {
    this._clienteService.edicao(this.formCliente).subscribe((data) => {
      this._router.navigate(['/home']);
    });
  }

  buscarCep(event: any) {
    const cep = event.target.value;
    this._http
      .get('https://viacep.com.br/ws/' + cep + '/json/')
      .subscribe((dataCep: any) => {
        if (dataCep.erro) {
          this.classToApply = 'noShow';
          this.cepNaoEncontrado = true;
          setTimeout(() => {
            this.cepNaoEncontrado = false;
            this.formCliente.cep = '';
          }, 3000);
          return;
        }
        this.classToApply = 'show';
        this.formCliente.logradouro = dataCep['logradouro'];
        this.formCliente.bairro = dataCep['bairro'];
        this.formCliente.cidade = dataCep['localidade'];
        this.formCliente.estado = dataCep['uf'];
      });
  }
}
