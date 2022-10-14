import { ModalidadesService } from './../../../services/modalidades.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-content',
  templateUrl: './mod-content.component.html',
  styleUrls: ['./mod-content.component.css', '../../shared/style.css'],
})
export class ModContentComponent implements OnInit {
  listaModalidades: any[] = [];

  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _modService: ModalidadesService
  ) {}

  ngOnInit(): void {
    if (!this._authService.authentication() === true) {
      this._router.navigate(['/login']);
    }

    this.listar();
  }

  listar() {
    this._modService.buscarModalidades().subscribe((data) => {
      this.listaModalidades = data;
    });
  }

  criarModalidade() {
    this._router.navigate(['/modalidades-cadastro']);
  }

  goAlterar(id: number) {
    this._router.navigate(['/modalidades-edicao', id]);
  }

  deletar(id: number) {
    this._modService.delete(id).subscribe((data) => {
      this.listar();
    });
  }
}
