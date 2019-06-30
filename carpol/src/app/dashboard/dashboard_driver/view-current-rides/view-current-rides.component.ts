import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DriveRidesService } from '../../../services/drive_rides.service';
import { UsersService } from '../../../services/users.service';
import { AppComponent } from '../../../app.component';
import { DriveRidesModel } from '../../../services/models/drive-rides.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { CreateNewDialogComponent } from './create-new-dialog/create-new-dialog.component';
import { ViewPassengersRideDialogComponent } from '../../view-passengers-ride-dialog/view-passengers-ride-dialog.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-current-rides',
  templateUrl: './view-current-rides.component.html',
  styleUrls: ['./view-current-rides.component.css']
})
export class ViewCurrentRidesComponent implements OnInit, AfterViewInit {
  displayedColumns = ["name", "start_location", "end_location", "time", "date" , "drive_ride_status", "passengers_limit" , "current_passengers" , "actions"];
  private disabled: boolean;
  ridesSource = new MatTableDataSource<DriveRidesModel>();

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private driveRidesService : DriveRidesService,
    private appComponent : AppComponent,
    private userService : UsersService,
    public dialog: MatDialog,
    private router: Router,) {
      //___________________________________________ reddirect
      if( this.userService.getCurrenSession().id_user == -1){
        this.router.navigate(["/"]);
       }
     //___________________________________________ reddirect end
     }

  ngOnInit() {
    this.ridesSource.data =  this.driveRidesService.getDriverRides(this.userService.getCurrenSession().id_user);
  }

  ngAfterViewInit(){  
    this.ridesSource.sort = this.sort;
    this.ridesSource.paginator = this.paginator;
  }
  editRide(id : number){
    this.dialog.open(EditDialogComponent, {data: { data_id: id}},);
  }
  deleteRide(id : number, name:string){
    this.dialog.open(DeleteDialogComponent, {data: { data_id: id, data_name: name}},);
  }
  createRide(){
    let driverID = this.userService.getCurrenSession().id_user;
    this.dialog.open(CreateNewDialogComponent, {data: { data_id: driverID}},);
  }

  onViewPassengers(id:number){
    this.dialog.open(ViewPassengersRideDialogComponent, {data: { data_id: id}},);
  }

  doFilter(filterValue: string){
    this.ridesSource.filter = filterValue.trim().toLowerCase();
  }

}
