import { NgModule } from '../../node_modules/@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './frontpage/login/login.component';
import { SignupComponent } from './frontpage/signup/signup.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ViewCurrentRidesComponent } from './dashboard/dashboard_driver/view-current-rides/view-current-rides.component';
import { SearchActiveRidesComponent } from './dashboard/dashboard_passenger/search-active-rides/search-active-rides.component';
import { NotificationTabsComponent } from './dashboard/notification-tabs/notification-tabs.component';

const rute: Routes = [
{path : '',                     component: LoginComponent ,pathMatch: 'full' },
{path : 'signup',               component: SignupComponent },
{path : 'profile',              component: ProfileComponent },
{path : 'view-current-rides',   component: ViewCurrentRidesComponent },
{path : 'search-active-rides' , component: SearchActiveRidesComponent },
{path : 'notifications' ,       component: NotificationTabsComponent}
];

@NgModule ({

    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]

})

export class RoutingModule {}
