import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'velio-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  map:any;
  constructor() {
  }

  ngAfterViewInit(): void {
    this.createMap();
  }
  createMap() {
    const park = {
      lat: 43.604652 ,
      lng: 1.444209,
    };
    const zoomLevel = 14;
    this.map = L.map('map', {
      center: [park.lat, park.lng],
      zoom: zoomLevel
    })
    const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      minZoom: 12,
      maxZoom: 17,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      accessToken: 'pk.eyJ1IjoidG90b3RvNzg5IiwiYSI6ImNreDdscjl5djE5N3cyeG81dGh4cm1rbG4ifQ.eYM2nGT0LL1YeMha-D1eAQ'
    });
    mainLayer.addTo(this.map);
  }
}


