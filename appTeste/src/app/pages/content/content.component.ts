import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private _carsService: CarsService) {}

  cars: any[] = [];

  ngOnInit(): void {
    this.getCarsData();
  }

  getCarsData() {
    this._carsService.getdata().subscribe((data: any[]) => {
      this.cars = data;
      console.log('Data Response => ', this.cars);
    });
  }
}
