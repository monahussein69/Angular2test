import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  lat = 51.65509289460655;
  lng = 6.815982;
  latLocation = 0;
  lngLocation =  0;

   /* newLocation = {
    lat : 51.65509289460655,
    lng: 6.815982
  } */
  locations: FirebaseListObservable<any[]>;
  value: FirebaseObjectObservable<any[]>;
  constructor(private af: AngularFireDatabase) {
    this.locations = this.af.list('/locations/1');
    this.value = this.af.object('/locations/1',{ preserveSnapshot: true });

    this.value.subscribe(snapshot => {
      this.handleUserData(snapshot);
    });

    // this.value.set(this.newLocation).then(_ => console.log('set!'));

  }

  handleUserData(snapshot) {
    this.latLocation = snapshot.val().lat;
    this.lngLocation = snapshot.val().lng;
    this.lat = snapshot.val().lat;
    this.lng = snapshot.val().lng;
  }

  ngOnInit() {
  }

}
