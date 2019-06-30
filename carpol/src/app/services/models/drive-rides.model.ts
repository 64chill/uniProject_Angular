export interface DriveRidesModel {
    id_drive_rides  : number;
    id_driver       : number;
    name            : string;
    start_location  : string;
    end_location    : string;
    departure_time  : string;
    start_time      : string;
    end_time        : string;
    drive_ride_status :  'ended' | 'canceled' | 'ongoing';
    passengers_limit  : number;
    current_passengers_number : number;
    current_passengers_data : Array<CurrentPassengersModel>;
    drive_ride_stops        : Array<DriveRidesStopsModel>;
    date  : Date;
    //id_current_passengers : number; // CurrentPassengers    interface
    //id_drive_rides_stops:   number; // DriveRidesStops      interface 
}

export interface CurrentPassengersModel{
    //id_current_passenger : number;
    //id_drive_rides        : number;
    id_user               : number;
}
export interface DriveRidesStopsModel{
    //id_drive_rides_stops    : number;
    //id_drive_rides          : number;
    stop_name  : string;
}
