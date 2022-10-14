import { Modalidades } from './../../../models/modalidades';
import { ModalidadesService } from './../../../services/modalidades.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-edicao',
  templateUrl: './mod-edicao.component.html',
  styleUrls: ['./mod-edicao.component.css'],
})
export class ModEdicaoComponent implements OnInit {
  formModalidade: Modalidades;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthenticationService,
    private _modService: ModalidadesService
  ) {
    this.formModalidade = new Modalidades();
  }

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }

    this.buscarModalidade(Number(this._route.snapshot.paramMap.get('id')))
  }

  buscarModalidade(id: number) {
    this._modService.buscarUmaModalidade(id).subscribe((dados) => {
      this.formModalidade = dados;
    });
  }

  editar(){
    this._modService.edicao(this.formModalidade).subscribe(dados => {
      this._router.navigate(['/modalidades'])
    })
  }
}
