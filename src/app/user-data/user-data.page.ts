import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
  public userId = 0;


  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
   this.userId = this.route.snapshot.params['id']
  }

}
