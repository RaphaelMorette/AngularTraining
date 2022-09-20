import { Router } from '@angular/router';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.css'],
})
export class UsersContentComponent implements OnInit {
  constructor(private _usersService: UsersService, private _router:Router) {}

  users: any[] = [];

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    this._usersService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  goAcessar(id:number) {
    this._router.navigate(['/users-details', id])
  }
}
