import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-detail',
  templateUrl: './json-detail.component.html',
  styleUrls: ['./json-detail.component.css']
})
export class JsonDetailComponent implements OnInit {

  @Input('carrosFiltrados') carrosFiltrados: any
  @Input('marca') marca: any

  constructor() { }

  ngOnInit(): void {
  }

}
