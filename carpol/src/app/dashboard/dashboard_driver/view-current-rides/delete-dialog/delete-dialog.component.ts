import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DriveRidesService } from '../../../../services/drive_rides.service';
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {


  constructor(
    private dialogRef: 
    MatDialogRef<DeleteDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
      private driverService : DriveRidesService,
      private router: Router,
      private _snackBar: MatSnackBar
  ) { 

  }

  ngOnInit() {
  }

  onCancel(){this.dialogRef.close();}


  onDelete(){
    this.driverService.removeUniqueRide(this.data.data_id);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/view-current-rides"]));
    this._snackBar.open("Drive deleted "+this.data.data_name+".", "Dismiss", {
      duration: 2000,
    });
    this.onCancel();
  }

}
