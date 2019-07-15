import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DriveRidesService } from '../../../../services/drive_rides.service';
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgForm } from '@angular/forms';
import { UsersService } from '../../../../services/users.service';
import { NotificationsService } from '../../../../services/notification.service';
import { ReputationService } from '../../../../services/reputation.service';

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.css']
})
export class RateDialogComponent implements OnInit {
  private feedback: string;

  constructor(private dialogRef: 
    MatDialogRef<RateDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
      private router: Router,
      private _snackBar: MatSnackBar,
      private userService : UsersService,
      private notificationService : NotificationsService,
      private reputationService : ReputationService ) {
        this.feedback = "positive";
        
      }

  ngOnInit() {
  }

onCancel(){this.dialogRef.close();}
onSubmit(form : NgForm) {
  // set that user has rated the ride
  if(this.userService.getCurrenSession().acc_type == "driver"){
      this.notificationService.setRideEndRatedDriver(this.data.id_notification);
  } else {
    this.notificationService.setRideEndRatedPassenger(this.data.id_notification);
  }
  //set positive or negative feedback
  if(this.feedback == "positive"){
    this.reputationService.addPositive(this.data.data_id);
  } else {
    this.reputationService.setNegative(this.data.data_id);
  }
  //set comment if not empty
  if(form.value.comment != ""){
    //setNewComment(id:number,id_from:number, comment:string){
      //to whom, from , comment
    this.reputationService.setNewComment(this.data.data_id, this.userService.getCurrenSession().id_user ,form.value.comment );
  }
  this._snackBar.open("Success! Feedback score was added!", "close", {
    duration: 2000,
  });
  //close dialog
  this.onCancel();

}

}

