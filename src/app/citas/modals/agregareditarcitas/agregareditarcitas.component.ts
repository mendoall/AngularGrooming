import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbActiveModal, NgbAlertModule,
  NgbDatepickerModule, NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-agregareditar',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbDatepickerModule,
    NgbAlertModule, NgbTimepickerModule, GoogleMapsModule],
  templateUrl: './agregareditarcitas.component.html',
  styleUrl: './agregareditarcitas.component.css',
  providers: [NgbActiveModal]
})
export class AgregareditarcitasComponent implements OnInit {
  @Input() args: any;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 9.846378557445108, lng: -84.31587786294504 },
    zoom: 15
  };

  markerOptions: google.maps.MarkerOptions =
    { icon: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless.png' };

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.args.markers.length > 0) {
      this.mapOptions.center = this.args.markers[0];
    }
  }

  createMapClick(map: any) {
    var coordinates = map.latLng.toJSON();

    if (this.args.markers.length == 0) {
      this.args.markers.push(coordinates);
      this.args.data.ubicacion = coordinates;
    }
  }

  refrescarMapa() {
    this.args.markers = [];
  }
}
