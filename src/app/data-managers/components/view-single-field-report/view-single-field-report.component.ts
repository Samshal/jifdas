import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import  * as L from 'leaflet'; 

@Component({
  selector: 'app-view-single-field-report',
  templateUrl: './view-single-field-report.component.html',
  styleUrls: ['./view-single-field-report.component.css']
})
export class ViewSingleFieldReportComponent implements OnInit {
  map;
  marker;
  @Input() incidentData: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  initMap(): void {
    this.map = L.map("incident-poi").setView([0,0], 13);
    let basemaps = {
      "Street Map": L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
      }),
      "Aerial View": L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
      })
    };

    let layer = L.control.layers(basemaps);

    this.marker = L.marker([0,0],  {
      icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    });
    (basemaps["Street Map"]).addTo(this.map);
    layer.addTo(this.map);
    this.marker.addTo(this.map);
  }

  invalidateSize(): void {
    setTimeout(() => {
        this.map.invalidateSize();
      }, 500);
  }

  ngOnChanges(changes: SimpleChanges){
    const currentIncident: SimpleChange = changes.incidentData;

    this.initMap();

    if (typeof currentIncident.currentValue.IncidentId !== "undefined"){
      let poi = currentIncident.currentValue.IncidentPointOfInterest;
      poi = (poi.replace("POINT(", "")).replace(")", "").split(" ");
      this.invalidateSize();
      this.map.setView(poi);
      this.marker.setLatLng(poi);
      this.marker.bindPopup(currentIncident.currentValue.IncidentTypeName);
    }
  }

}
