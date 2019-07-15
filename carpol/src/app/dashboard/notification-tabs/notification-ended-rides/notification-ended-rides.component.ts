import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DriveRidesService } from '../../../services/drive_rides.service';
import { UsersService } from '../../../services/users.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { NotificationsService } from '../../../services/notification.service';
import { Router } from "@angular/router";
import { RateDialogComponent } from './rate-dialog/rate-dialog.component';

@Component({
  selector: 'app-notification-ended-rides',
  templateUrl: './notification-ended-rides.component.html',
  styleUrls: ['./notification-ended-rides.component.css']
})
export class NotificationEndedRidesComponent implements OnInit {
  displayedColumns = ["driver_name","passenger_name" , "action"];
  notificationSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private driveRidesService : DriveRidesService,
    private userService : UsersService,
    private notificationService : NotificationsService, 
    public dialog: MatDialog,
    private router: Router,) { }

  ngOnInit() {
    this.setUpDataForTable();
  }

  setUpDataForTable(){
    this.notificationSource.data  = this.notificationService.getNotificationsForSpecificUserEndedRides(this.userService.getCurrenSession().id_user);
    for (let elem in this.notificationSource.data){
        let current_driver = this.userService.getProfileData(this.notificationSource.data[elem].id_driver);
        let current_passenger = this.userService.getProfileData(this.notificationSource.data[elem].id_passenger);
        this.notificationSource.data[elem]["driverName"] = `${current_driver.fname} ${current_driver.lname}`;
        this.notificationSource.data[elem]["passengerName"] = `${current_passenger.fname} ${current_passenger.lname}`;
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

  onRateUser(id:number, id_notification:number){ //
    
    let user = this.userService.getProfileData(id);
    let username = `${user.fname} ${user.lname}`;
    this.dialog.open(RateDialogComponent, {data: { data_id: id,
      id_notification : id_notification,
       data_name: username}},);
    this.dialog._afterAllClosed.subscribe(() => {
      this.setUpDataForTable();
      });
  }
  

}
