import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-notification-tabs',
  templateUrl: './notification-tabs.component.html',
  styleUrls: ['./notification-tabs.component.css']
})
export class NotificationTabsComponent implements OnInit {

  constructor(
    private userService : UsersService,
    private router: Router,
    ) {
  //___________________________________________ reddirect
  if( this.userService.getCurrenSession().id_user == -1){
    this.router.navigate(["/"]);
   }
 //___________________________________________ reddirect end
     }

  ngOnInit() {
  }

}
