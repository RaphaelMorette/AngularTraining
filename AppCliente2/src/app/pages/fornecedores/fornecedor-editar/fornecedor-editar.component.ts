import { FornecedorService } from './../../../services/fornecedor.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Fornecedor } from './../../../models/fornecedor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor-editar',
  templateUrl: './fornecedor-editar.component.html',
  styleUrls: ['./fornecedor-editar.component.css'],
})
export class FornecedorEditarComponent implements OnInit {
  formFornecedor: Fornecedor;

  cepNaoEncontrado: boolean = false;
  classToApply: string = 'noShow';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
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

    this.buscarFornecedor(Number(this._route.snapshot.paramMap.get('id')))
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

  buscarFornecedor(id: number) {
    this._fornecedorService.buscarUmFornecedor(id).subscribe((data) => {
      this.formFornecedor = data;
    });
  }

  edicao() {
    this._fornecedorService.editar(this.formFornecedor).subscribe(data => {
      this._router.navigate(['/fornecedor'])
    })
  }
}
