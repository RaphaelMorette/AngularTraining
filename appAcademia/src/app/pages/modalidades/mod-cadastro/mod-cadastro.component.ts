import { ModalidadesService } from './../../../services/modalidades.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Router } from '@angular/router';
import { Modalidades } from './../../../models/modalidades';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-cadastro',
  templateUrl: './mod-cadastro.component.html',
  styleUrls: ['./mod-cadastro.component.css', '../../shared/style.css'],
})
export class ModCadastroComponent implements OnInit {
  formModalidade: Modalidades;

  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _modService: ModalidadesService
  ) {
    this.formModalidade = new Modalidades();
  }

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }
  }

  cadastrar(){
    this._modService.cadastro(this.formModalidade).subscribe(data => {
      this._router.navigate(['/modalidades'])
    })
  }
}
