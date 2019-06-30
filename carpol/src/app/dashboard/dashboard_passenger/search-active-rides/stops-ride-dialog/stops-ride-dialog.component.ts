import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DriveRidesService } from '../../../../services/drive_rides.service';

@Component({
  selector: 'app-stops-ride-dialog',
  templateUrl: './stops-ride-dialog.component.html',
  styleUrls: ['./stops-ride-dialog.component.css']
})
export class StopsRideDialogComponent implements OnInit {
  private stopsArray = [];

  constructor(private dialogRef: 
    MatDialogRef<StopsRideDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
      private driverService : DriveRidesService,
      ) {
      this.stopsArray = this.driverService.getStopsArray(data.data_id);
      }

  ngOnInit() {
  }

  onCancel(){this.dialogRef.close();}

}
