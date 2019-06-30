import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './frontpage/login/login.component';
import { SignupComponent } from './frontpage/signup/signup.component';


import { ProfileComponent } from './dashboard/profile/profile.component';

import { UsersService } from './services/users.service';
import { NotificationsService } from './services/notification.service';
import { ReputationService } from './services/reputation.service';
import { DriveRidesService } from './services/drive_rides.service';
import { EditProfileComponent } from './dashboard/profile/edit-profile/edit-profile.component';
import { ViewCurrentRidesComponent } from './dashboard/dashboard_driver/view-current-rides/view-current-rides.component';
import { EditDialogComponent } from './dashboard/dashboard_driver/view-current-rides/edit-dialog/edit-dialog.component';
import { CreateNewDialogComponent } from './dashboard/dashboard_driver/view-current-rides/create-new-dialog/create-new-dialog.component';
import { DeleteDialogComponent } from './dashboard/dashboard_driver/view-current-rides/delete-dialog/delete-dialog.component';
import { SearchActiveRidesComponent } from './dashboard/dashboard_passenger/search-active-rides/search-active-rides.component';
import { ViewPassengersRideDialogComponent } from './dashboard/view-passengers-ride-dialog/view-passengers-ride-dialog.component';
import { RequestRideDialogComponent } from './dashboard/dashboard_passenger/search-active-rides/request-ride-dialog/request-ride-dialog.component';
import { StopsRideDialogComponent } from './dashboard/dashboard_passenger/search-active-rides/stops-ride-dialog/stops-ride-dialog.component';
import { NotificationTabsComponent } from './dashboard/notification-tabs/notification-tabs.component';
import { NotificationRequestsComponent } from './dashboard/notification-tabs/notification-requests/notification-requests.component';
import { NotificationEndedRidesComponent } from './dashboard/notification-tabs/notification-ended-rides/notification-ended-rides.component';
import { NotificationRequestsDriverComponent } from './dashboard/notification-tabs/notification-requests-driver/notification-requests-driver.component';
import { RateDialogComponent } from './dashboard/notification-tabs/notification-ended-rides/rate-dialog/rate-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EditProfileComponent,
    ViewCurrentRidesComponent,
    EditDialogComponent,
    CreateNewDialogComponent,
    DeleteDialogComponent,
    SearchActiveRidesComponent,
    ViewPassengersRideDialogComponent,
    RequestRideDialogComponent,
    StopsRideDialogComponent,
    NotificationTabsComponent,
    NotificationRequestsComponent,
    NotificationEndedRidesComponent,
    NotificationRequestsDriverComponent,
    RateDialogComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModule, 
    RoutingModule,
    BrowserAnimationsModule, 
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [UsersService, ReputationService, DriveRidesService, NotificationsService],
  bootstrap: [AppComponent],
  entryComponents : [
    EditProfileComponent,
    CreateNewDialogComponent, 
    DeleteDialogComponent, 
    EditDialogComponent,
    ViewPassengersRideDialogComponent,
    RequestRideDialogComponent,
    StopsRideDialogComponent,
    RateDialogComponent
  ] 
})


export class AppModule {}
