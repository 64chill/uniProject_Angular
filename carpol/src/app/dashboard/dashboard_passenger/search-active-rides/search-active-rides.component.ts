import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Router } from "@angular/router";

import { DriveRidesService } from '../../../services/drive_rides.service';
import { UsersService } from '../../../services/users.service';
import { DriveRidesModel } from '../../../services/models/drive-rides.model';
import { ViewPassengersRideDialogComponent } from '../../view-passengers-ride-dialog/view-passengers-ride-dialog.component';
import { RequestRideDialogComponent } from './request-ride-dialog/request-ride-dialog.component';
import { StopsRideDialogComponent } from './stops-ride-dialog/stops-ride-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-search-active-rides',
  templateUrl: './search-active-rides.component.html',
  styleUrls: ['./search-active-rides.component.css']
})
export class SearchActiveRidesComponent implements OnInit, AfterViewInit {
  displayedColumns = ["driver_name" , "ride_name","location" , "time", "date" , "status", "limit" , "current_passengers" , "actions"];
  private userID: number;
  private toggleBtn : boolean;

  private ridesSource = new MatTableDataSource<DriveRidesModel>();
  private ridesSource2 = new MatTableDataSource<DriveRidesModel>();

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private driveRidesService : DriveRidesService,
    private appComponent : AppComponent,
    private userService : UsersService,
    public dialog: MatDialog,
    private router: Router,
    private _snackBar: MatSnackBar,) {
      this.toggleBtn = true;

      //___________________________________________ reddirect
      if( this.userService.getCurrenSession().id_user == -1){
       this.router.navigate(["/"]);
      }
    //___________________________________________ reddirect end
     }

  ngOnInit() {
    this.userID = this.userService.getCurrenSession().id_user;
    this.ridesSource.data  =  this.driveRidesService.getOngoingDrives();
    this.ridesSource2.data = this.driveRidesService.getSpecificInactivePassengerRides(this.userID);

    this.ridesSource.data  = this.setDriversName(this.ridesSource.data);
    this.ridesSource2.data = this.setDriversName(this.ridesSource2.data);
    
  }

  setDriversName(source_data_in){
    for (let elem in source_data_in){
      let current_user = this.userService.getProfileData(source_data_in[elem].id_driver);
      let fname = current_user.fname;
      let lname = current_user.lname;
      source_data_in[elem]["driverName"] = `${fname} ${lname}`;
    }
    return source_data_in;
  }

  ngAfterViewInit(){  
    this.ridesSource.sort = this.sort;
    this.ridesSource.paginator = this.paginator;

    this.ridesSource2.sort = this.sort;
    this.ridesSource2.paginator = this.paginator;
  }


  doFilter(filterValue: string){
    this.ridesSource.filter = filterValue.trim().toLowerCase();
  }
  doFilter2(filterValue: string){
    this.ridesSource2.filter = filterValue.trim().toLowerCase();
  }

  onDriverView(id:number){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/profile", {userID: id} ]));
  }

  onViewPassengers(id:number){
    this.dialog.open(ViewPassengersRideDialogComponent, {data: { data_id: id}},);
  }

  onRequest(id: number){
    let result = this.driveRidesService.isRequestAvailableForUniqueUser(id, this.userService.getCurrenSession().id_user);
    switch(result) { 
      case "success": { 
        this.dialog.open(RequestRideDialogComponent, 
          {
            data: { data_id: id,
                  data_name: this.driveRidesService.getUniqueRide(id).name }
            },);
         break; 
      }
      case "aleardy_exist": { 
        this._snackBar.open("You are already registered as passanger!", "close", {
          duration: 2000,
        });
        
        break; 
     } 
      case "full": { 
        this._snackBar.open("You can't do that! That ride is full!", "close", {
          duration: 2000,
        });
        
         break; 
      } // case full end
    } // switch end;
  } // onRequest end;

  onViewStops(id: number){
    this.dialog.open(StopsRideDialogComponent, {data: { data_id: id}},);
  }
}
