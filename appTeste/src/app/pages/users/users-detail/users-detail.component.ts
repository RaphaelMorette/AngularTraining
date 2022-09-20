import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  userData:any;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UsersService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getDataUser(Number(this._route.snapshot.paramMap.get("id")))
    // console.log("rota", this._route.snapshot.paramMap.get("id"))
  }

  getDataUser(id: number) {
    // console.log("id", id);
    this._userService.getOnlyOneUser(id).subscribe(onlyUser => {
      this.userData = onlyUser
      // console.log('Return olyUser', this.userData)
    })
  }

  goBack() {
    this._router.navigate(['/users']);
  }

}
