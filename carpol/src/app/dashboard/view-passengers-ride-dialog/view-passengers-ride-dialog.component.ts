import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DriveRidesService } from '../../services/drive_rides.service';
import { UsersService } from '../../services/users.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-passengers-ride-dialog',
  templateUrl: './view-passengers-ride-dialog.component.html',
  styleUrls: ['./view-passengers-ride-dialog.component.css']
})
export class ViewPassengersRideDialogComponent implements OnInit {
  private passengersArray = [];

  constructor(private dialogRef: 
    MatDialogRef<ViewPassengersRideDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
      private driverService : DriveRidesService,
      private usersService : UsersService,
      private router: Router,
     ) {
      let passengerObjectArray = this.driverService.getPassengersArray(data.data_id);

      for (let elem in passengerObjectArray){
        let userData = this.usersService.getProfileData(passengerObjectArray[elem].id_user);

        this.passengersArray.push({
          pID : passengerObjectArray[elem].id_user,
          name : `${userData.fname} ${userData.lname}`,
        });
      }

      }

  ngOnInit() {
  }

  onCancel(){this.dialogRef.close();}

  onPassengerView(id:number){
    this.router.navigate(["/profile", {userID: id} ]);
    this.onCancel();
  }
}
