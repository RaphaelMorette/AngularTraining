import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.css'],
})
export class UsersContentComponent implements OnInit {
  constructor(private _usersService: UsersService) {}

  users: any[] = [];

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    this._usersService.getUsers().subscribe((data: any[]) => {
      this.users = data;
      console.log('Data users =>', this.users);
    });
  }
}
