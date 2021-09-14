import { Component, OnInit } from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

import  * as L from 'leaflet'; 
import imageToBase64 from 'image-to-base64/browser';

import { ToastService } from '../../../shared/services/toast.service';
import { ServerRequestService } from '../../../shared/services/server-request.service';
import { StorageService } from '../../../shared/services/storage.service';

import * as moment from 'moment';

@Component({
  selector: 'app-new-incidence',
  templateUrl: './new-incidence.component.html',
  styleUrls: ['./new-incidence.component.css']
})
export class NewIncidenceComponent implements OnInit {
  map: any;
  marker: any;
  userId: any;
  public functions;
  constructor(private serverRequest: ServerRequestService, private toastService: ToastService, private storage: StorageService) { 
  }

  ngOnInit(): void {
    this.storage.getItem("sessionInfo").subscribe((data)=> {
      data = JSON.parse(data);
      this.userId = data.userId;
    });
    this.initFormData();
    
    this.loadCountries();
    // this.loadIncidentCategories();
    this.loadIncidentTypes();
    let metadataFields = [
      {"id":"faction", "list":"factionList"},
      {"id":"friendly_forces", "list":"friendlyForcesList"},
      {"id":"terrain", "list":"terrainList"},
      {"id":"associated_feature", "list":"associatedFeatureList"},
    ];

    metadataFields.forEach(field => {
      this.loadMetadata(field.id, field.list);
    })
  }

  select2Options: any = {
    containerCssClass: "form-control",
    width: "100%"
  }

  select2Options_multiple: any = {
    containerCssClass: "form-control",
    width: "100%",
    multiple: true
  }

  select2Data: any = {
    countryList: [],
    regionList: [],
    stateList: [],
    lgaList: [],
    wardList: [],
    villageList: [],
    localityList: [],
    incidentCategoryList: [],
    incidentTypeList: [],
    factionList: [],
    friendlyForcesList: [],
    terrainList: [],
    associatedFeatureList: []
  }

  leafletOptions = {
    layers: [
      L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', { maxZoom: 20, attribution: '...', "subdomains":['mt0', 'mt1', 'mt2', 'mt3'] })
    ],
    zoom: 5,
    center: L.latLng(11.0, 6.0)
  };

  formData: any = {
  }

  initFormData(): void {
    this.formData = {
      country: "",
      region: "",
      state: "",
      lga: "",
      ward: "",
      village: "",
      locality: "",
      incidentTitle:"",
      incidentCategory: "",
      incidentType: "",
      faction: [],
      friendlyForces: [],
      terrain:[],
      associatedFeatures:[],
      kia:0,
      mia:0,
      wia:0,
      civilliansKilled:0,
      civilliansAbducted:0,
      criminalsKilled:0,
      suspectsArrested:0,
      comments:"",
      files: []
    }
  }

  loadCountries(): void {
    this.loadSpatialEntityList("countryList", "spatial-entity/entity/view-entities-by-type?entityType=1")
  }

  loadSpatialEntityChildren(list, parentId): void {
    if (parentId != ""){
      this.loadSpatialEntityList(list, "spatial-entity/entity/view-entity-children?entityId="+parentId);  
    }
  }

  loadSpatialEntityList(list, endpoint): void {
    this.serverRequest.get(endpoint).subscribe(res => {
      this.select2Data[list] = [];
      (res.contentData).forEach(data => {
        this.select2Data[list].push(data.EntityName)
      })
    });   
  }

  loadRegions(event: any): void{
    this.loadSpatialEntityChildren("regionList", this.formData.country);
  }

  loadStates(event: any): void{
    this.loadSpatialEntityChildren("stateList", this.formData.region);
  }

  loadLgas(event: any): void{
    this.loadSpatialEntityChildren("lgaList", this.formData.state);
  }

  loadWards(event: any): void{
    this.loadSpatialEntityChildren("wardList", this.formData.lga);
  }

  loadVillages(event: any): void{
    this.loadSpatialEntityChildren("villageList", this.formData.ward);
  }

  loadLocalities(event: any): void{
    this.loadSpatialEntityChildren("localityList", this.formData.village);
  }

  loadIncidentCategories(): void {
    this.serverRequest.get("incidents/incident-type/view-categories").subscribe(res => {
      this.select2Data.incidentCategoryList = [];
      // (res.contentData).forEach(data => {
      //   this.select2Data.incidentCategoryList.push({
      //     "id":data.IncidentCategoryId,
      //     "text":data.IncidentCategoryName,
      //   })
      // })
    });   
  }

  loadIncidentTypes(): void {
    this.serverRequest.get("incidents/incident-type/view-incident-types?resourceId=1").subscribe(res => {
      this.select2Data.incidentTypeList = [];
      (res.contentData).forEach(data => {
        this.select2Data.incidentTypeList.push({
          "id":data.IncidentTypeId,
          "text":data.IncidentTypeName,
        })
      })
    });       
  }

  loadMetadata(field, list): void {
    // this.serverRequest.get("incidents/metadata/view-values?field="+field).subscribe(res => {
    //   this.select2Data[list] = [];
    //   (res.contentData).forEach(data => {
    //     this.select2Data[list].push({
    //       "id":data.Value,
    //       "text":data.Value,
    //     })
    //   })
    // });
  }

  saveIncidence(): void {
    if (typeof this.formData.poiLatitude == "undefined" || this.formData.poiLatitude == ""){
      this.formData.poiLatitude = 0;
    }

    if (typeof this.formData.poiLongitude == "undefined" || this.formData.poiLongitude == ""){
      this.formData.poiLongitude = 0;
    }


    let incidentData: any = {
      name: this.formData.incidentTitle,
      type: this.formData.incidentType,
      location: {
        country: this.formData.country,
        region: this.formData.region,
        state: this.formData.state,
        lga: this.formData.lga,
        ward: this.formData.ward,
        village: this.formData.village,
        locality: this.formData.locality
      },
      date: moment(this.formData.incidentDate+"T"+this.formData.incidentTime).format("D/M/YYYY HH:mm:ss"),
      pointOfInterest: "POINT("+this.formData.poiLatitude+" "+this.formData.poiLongitude+")",
      description: this.formData.comments,
      images: this.formData.files,
      metadata: [
      ]
    }

    // console.log(incidentData);

    // this.formData.faction.forEach(f=>{
    //   incidentData.metadata.push({
    //     faction:f
    //   })
    // })

    // this.formData.friendlyForces.forEach(f=>{
    //   incidentData.metadata.push({
    //     friendly_forces:f
    //   })
    // })

    // this.formData.terrain.forEach(f=>{
    //   incidentData.metadata.push({
    //     terrain:f
    //   })
    // })

    // this.formData.associatedFeatures.forEach(f=>{
    //   incidentData.metadata.push({
    //     associated_feature:f
    //   })
    // })

    let payload = {
      userId: this.userId,
      incidentData: incidentData
    };
    
    this.serverRequest.post("incidents/incident/new-raw-data", payload).subscribe(res => {
      this.toastService.show("Incidence has been reported successfully", { classname: 'bg-success text-white', delay: 10000 });
      // Swal.fire('Operation Successful', 'Incidence has been saved successfully', 'success');
      this.initFormData();
    }, err => {
      this.toastService.show("An error occurred. Incidence record not reported successfully", { classname: 'bg-danger text-white', delay: 10000 });
      // Swal.fire("An error occurred", "Incidence record not saved", "error");
    });   
  }

  onMapReady(map: L.Map): void {
    this.map = map;
    this.marker = L.marker([-10,-10], {
      icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    });
    this.marker.addTo(map);
  }

  updatePoi(): void {
    if (typeof this.formData.poiLongitude !== "undefined" && typeof this.formData.poiLatitude !== "undefined"){
      const lat = this.formData.poiLatitude;
      const lon = this.formData.poiLongitude;
      this.map.setView([lat, lon], 16);
      this.marker.setLatLng([lat, lon]);
      this.marker.bindPopup(lat+", "+lon);
    }
  }

  searchCountries: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.select2Data.countryList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchRegions: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.select2Data.regionList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchStates: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.select2Data.stateList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchLGAs: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.select2Data.lgaList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchWards: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.select2Data.wardList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchVillages: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.select2Data.villageList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchLocalities: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.select2Data.localityList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  showImages(e): void {
    this.formData.files = [];
    let images = e.target.files;
    for (let i=0; i < images.length; i++){
      let path = URL.createObjectURL(images[i]);
      imageToBase64(path).then((response)=> {
        this.formData.files.push(response);
      }).catch((error)=>{
        console.log(error);
      })
    }
  }

}
