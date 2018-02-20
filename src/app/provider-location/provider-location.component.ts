import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './provider-location.component.html',
  styleUrls: ['./provider-location.component.css']
})
export class ProviderLocationComponent implements OnInit {

  value: FirebaseObjectObservable<any[]>;
  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation()
  {
    if (navigator.geolocation) {
      const self = this;
      navigator.geolocation.getCurrentPosition(function(response){
        console.log(response);
        self.saveLocation(response);
      }, function() {
        console.log('Unable to get GPS Location');
      }, {
        enableHighAccuracy : true
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  saveLocation(position: any) {
    this.value = this.af.object('/locations/1',{ preserveSnapshot: true });
    const newLocation = {
      lat : position.coords.latitude,
      lng : position.coords.longitude
    }
    this.value.set(newLocation).then(_ => console.log('set!'));
  }

}
