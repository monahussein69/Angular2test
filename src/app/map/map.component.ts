import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';


declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements OnInit {

  // initial center position for the map
  lat = 51.65509289460655;
  lng = 6.815982;
  currentlat = 0;
  currentlng =  0;
  currentAddress = '';

  location_marker =  {
    lat : 51.65509289460655,
    lng : 6.815982,
    draggable: true,
    iconUrl : '../../assets/images/user.png'
  };

  services = [
    {name : 'Plumber'},
    {name : 'Electrically'},
    {name : 'Carpentry'}
  ];

  constructor() {}
  getGeoLocation(lat: number, lng: number) {
    if (navigator.geolocation) {
      const geocoder = new google.maps.Geocoder();
      const latlng = new google.maps.LatLng(lat, lng);
      const request = { latLng: latlng };

      geocoder.geocode(request, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const result = results[0];
          const rsltAdrComponent = result.address_components;
          const resultLength = rsltAdrComponent.length;
          if (result != null) {
            this.currentAddress = result.formatted_address;
          } else {
            console.log('No address available!');
          }
        }
      });
    }
  }



  markerDragEnd(m: Marker, $event: MouseEvent) {
    // console.log('dragEnd', m, $event);
    this.getGeoLocation($event.coords.lat, $event.coords.lng);
  }


  ngOnInit() {
    this.currentlat = 51.3233174848105;
    this.currentlng =  8.584780828124963;
    this.currentAddress = 'Korbacher Str. 89, 59929 Brilon, ألمانيا';
  }
}

interface Marker {
  lat: number;
  lng: number;
  draggable: boolean;
  iconUrl: string
}



