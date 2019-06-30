import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DriveRidesService } from '../../../services/drive_rides.service';
import { UsersService } from '../../../services/users.service';
import { AppComponent } from '../../../app.component';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { NotificationsService } from '../../../services/notification.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-notification-requests',
  templateUrl: './notification-requests.component.html',
  styleUrls: ['./notification-requests.component.css']
})
export class NotificationRequestsComponent implements OnInit, AfterViewInit {
  displayedColumns = ["driver_name", "ride_name" , "location" , "approved"];

  notificationSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(
    private driveRidesService : DriveRidesService,
    private userService : UsersService,
    private notificationService : NotificationsService, 
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {
    this.notificationSource.data  = this.notificationService.getNotificationsForSpecificUserRequest(this.userService.getCurrenSession().id_user)
    //this.notificationSource.data =  this.driveRidesService.getDriverRides(this.userService.getCurrenSession().id_user);
    for (let elem in this.notificationSource.data){
      let current_user = this.userService.getProfileData(this.notificationSource.data[elem].id_driver);
      let uniqueRide = this.driveRidesService.getUniqueRide(this.notificationSource.data[elem].ride_id);

      let rideName = uniqueRide.name;
      let locationToFrom = `${uniqueRide.start_location} - ${uniqueRide.end_location}`;
      

      let fname = current_user.fname;
      let lname = current_user.lname;
      this.notificationSource.data[elem]["driverName"] = `${fname} ${lname}`;
      this.notificationSource.data[elem]["rideName"] = rideName;
      this.notificationSource.data[elem]["locationToFrom"] = locationToFrom;
    }
  }
  ngAfterViewInit(){  
    this.notificationSource.sort = this.sort;
    this.notificationSource.paginator = this.paginator;
  }
  doFilter(filterValue: string){
    this.notificationSource.filter = filterValue.trim().toLowerCase();
  }

  onProfileUse(id:number){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/profile", {userID: id} ]));
  }

}
