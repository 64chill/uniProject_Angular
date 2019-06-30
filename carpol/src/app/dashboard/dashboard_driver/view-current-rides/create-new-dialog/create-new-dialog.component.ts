import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {NgForm } from '@angular/forms';
import { DriveRidesService } from '../../../../services/drive_rides.service';
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-new-dialog',
  templateUrl: './create-new-dialog.component.html',
  styleUrls: ['./create-new-dialog.component.css']
})
export class CreateNewDialogComponent implements OnInit {
  private datePicker_input: Date = null;

  constructor(
    private driverService : DriveRidesService,
    private dialogRef: 
    MatDialogRef<CreateNewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  onSubmit(form : NgForm) {
    let stopsDriverRidesStopsModelList =[];

    let split_stops = form.value.stops.split(",");
    for (let elem in split_stops) {
      stopsDriverRidesStopsModelList.push({
        stop_name : split_stops[elem]
      })
   }    
    
    this.driverService.setDriveRide(this.data.data_id,
      form.value.rideName,
      form.value.startLocation,
      form.value.EndLocation,
      form.value.startTime,
      form.value.endTime,
      form.value.passangerLimit,
      new Date(form.value.dateFiled),
      stopsDriverRidesStopsModelList);

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/view-current-rides"]));
    this._snackBar.open("Drive created "+ form.value.rideName+".", "Dismiss", {
      duration: 2000,
    });
    this.onCancel();
}

  onCancel(){
    this.dialogRef.close();
  }

}
