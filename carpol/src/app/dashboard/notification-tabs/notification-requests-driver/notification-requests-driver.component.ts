import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DriveRidesService } from '../../../services/drive_rides.service';
import { UsersService } from '../../../services/users.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { NotificationsService } from '../../../services/notification.service';
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-notification-requests-driver',
  templateUrl: './notification-requests-driver.component.html',
  styleUrls: ['./notification-requests-driver.component.css']
})

export class NotificationRequestsDriverComponent implements OnInit, AfterViewInit {
  displayedColumns = ["passenger_name", "ride_name", "location", "actions"];
  notificationSource = new MatTableDataSource<any>();

  constructor(private driveRidesService : DriveRidesService,
    private userService : UsersService,
    private notificationService : NotificationsService, 
    public dialog: MatDialog,
    private router: Router,
    private _snackBar: MatSnackBar,) { }


    @ViewChild(MatSort) sort : MatSort;
    @ViewChild(MatPaginator) paginator : MatPaginator;

  ngOnInit() {
    this.setUpValues()
  }

  setUpValues(){
    this.notificationSource.data  = this.notificationService.getNotificationsForSpecificDriverRequest(this.userService.getCurrenSession().id_user)
    for (let elem in this.notificationSource.data){
      let current_user = this.userService.getProfileData(this.notificationSource.data[elem].id_passanger);
      let uniqueRide = this.driveRidesService.getUniqueRide(this.notificationSource.data[elem].ride_id);

      let rideName = uniqueRide.name;
      let locationToFrom = `${uniqueRide.start_location} - ${uniqueRide.end_location}`;
      
      let fname = current_user.fname;
      let lname = current_user.lname;
      this.notificationSource.data[elem]["passengerName"] = `${fname} ${lname}`;
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

  onApprove(notifyID:number){
    //approve
    this.notificationService.setRequestApprovedTrue(notifyID);
    //add to the passenger to the list
    let passengerID: number = this.notificationService.getPassengerIdFromNotification(notifyID);
    let driveID    : number = this.notificationService.getRideIDFromNotification(notifyID);

    let result = this.driveRidesService.addPassengerToDriveListIfThereIsFreeSpace(driveID,passengerID );

    switch(result) { 
      case "success": { 
        this._snackBar.open("Success! You have approved the passanger", "close", {
          duration: 2000,
        });
         
         break; 
      }
      case "aleardy_exist": { 
        this._snackBar.open("Passanger is already registered!", "close", {
          duration: 2000,
        });
        
        break; 
     } 
      case "full": { 
        this._snackBar.open("You can't do that! That ride is full!", "close", {
          duration: 2000,
        });
        
         break; 
      }
    } // switch end;

    this.setUpValues(); // reset values in table

  }

  onDismiss(notifyID:number){
    this.notificationService.setDissmissedTrue(notifyID);
    this.setUpValues(); // reset values in table

  }

}
