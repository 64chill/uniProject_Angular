import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DriveRidesService } from '../../../../services/drive_rides.service';
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';
import { UsersService } from '../../../../services/users.service';
import { NotificationsService } from '../../../../services/notification.service';

@Component({
  selector: 'app-request-ride-dialog',
  templateUrl: './request-ride-dialog.component.html',
  styleUrls: ['./request-ride-dialog.component.css']
})
export class RequestRideDialogComponent implements OnInit {

  constructor(private dialogRef: 
    MatDialogRef<RequestRideDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
      private driverService : DriveRidesService,
      private _snackBar: MatSnackBar,
      private userService : UsersService,
      private notificationService : NotificationsService) { }

  ngOnInit() {
  }

  onCancel(){this.dialogRef.close();}

  onRequestARide(){
    let passID = this.userService.getCurrenSession().id_user;
    let driverID  = this.driverService.getUniqueRide(this.data.data_id).id_driver;
    let rideID = this.data.data_id;
    this.notificationService.setNewRequest(passID, driverID,rideID);
    this.onCancel();
  }

}
