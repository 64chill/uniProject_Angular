import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {NgForm } from '@angular/forms';
import { DriveRidesService } from '../../../../services/drive_rides.service';
import { NotificationsService } from '../../../../services/notification.service';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  private currentRide;
  private rideTEMP;
  private userStopStr;

  constructor(private dialogRef: 
    MatDialogRef<EditDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
      private driverService : DriveRidesService,
      private notificationService : NotificationsService) {
        this.rideTEMP = this.driverService.getUniqueRide(data.data_id);
        this.currentRide = {
          id_drive_rides  : -1,
            id_driver       : -1,
            name            : "",
            start_location  : "",
            end_location    : "",
            departure_time  : "",
            start_time      : "",
            end_time        : "",
            drive_ride_status :  '',
            passengers_limit  : -1,
            current_passengers_number : -1,
            current_passengers_data : [],
            drive_ride_stops        : [],
            notifications: [],
            date : new Date()
        }
        Object.keys(this.rideTEMP).forEach(key=>this.currentRide[key]=this.rideTEMP[key]);
    
        let stopsArray = [];
        for (let elem in this.currentRide.drive_ride_stops){
          stopsArray.push(this.currentRide.drive_ride_stops[elem].stop_name);
        }
        this.userStopStr = stopsArray.join(",");
      }

  ngOnInit() {
  }

  onSubmit(form : NgForm) {
    Object.keys(this.currentRide).forEach(key=>this.rideTEMP[key]=this.currentRide[key]);
    if(this.currentRide.drive_ride_status == "ended"){
      let id_ride =  this.rideTEMP.id_drive_rides;
      let id_driver = this.rideTEMP.id_driver;
      let objectListPassData = this.rideTEMP.current_passengers_data;

      for (let elem in objectListPassData){
        let id_passenger = objectListPassData[elem].id_user;
        this.notificationService.setNewDriveEnd(id_passenger,id_driver,id_ride );
      }
    }    
    this.onCancel();
  }

  onCancel(){
    this.dialogRef.close();
  }

}
