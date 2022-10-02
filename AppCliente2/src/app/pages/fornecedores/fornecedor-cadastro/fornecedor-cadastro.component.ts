import { AuthenticationService } from './../../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Fornecedor } from './../../../models/fornecedor';
import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-cadastro',
  templateUrl: './fornecedor-cadastro.component.html',
  styleUrls: ['./fornecedor-cadastro.component.css'],
})
export class FornecedorCadastroComponent implements OnInit {
  formFornecedor: Fornecedor;

  cepNaoEncontrado: boolean = false;
  classToApply: string = 'noShow';

  constructor(
    private _router: Router,
    private _http: HttpClient,
    private _authService: AuthenticationService,
    private _fornecedorService: FornecedorService
  ) {
    this.formFornecedor = new Fornecedor();
  }

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }
  }

  buscarCep(event: any) {
    // console.log('cep', event.target.value);
    const cep = event.target.value;
    this._http
      .get('https://viacep.com.br/ws/' + cep + '/json/')
      .subscribe((dataCep: any) => {
        // console.log("dataCep =>", dataCep)
        if (dataCep.erro) {
          this.classToApply = 'noShow';
          this.cepNaoEncontrado = true;
          setTimeout(() => {
            this.cepNaoEncontrado = false;
            this.formFornecedor.enderecos.cep = '';
          }, 3000);
          return;
        }
        this.classToApply = 'show';
        this.formFornecedor.enderecos.logradouro = dataCep['logradouro'];
        this.formFornecedor.enderecos.bairro = dataCep['bairro'];
        this.formFornecedor.enderecos.cidade = dataCep['localidade'];
        this.formFornecedor.enderecos.estado = dataCep['uf'];
      });
  }

  cadastro() {
    this._fornecedorService.cadastrar(this.formFornecedor).subscribe((data) => {
      this._router.navigate(['/fornecedor']);
    });
  }
}
