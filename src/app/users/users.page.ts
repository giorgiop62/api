import { Observable } from 'rxjs';
import { MovieService } from '../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public users$: Observable <any>;

  constructor(private UsersService:MovieService) { }

  ngOnInit() {
      this.users$ = this.UsersService.getUsers();

  }

}
