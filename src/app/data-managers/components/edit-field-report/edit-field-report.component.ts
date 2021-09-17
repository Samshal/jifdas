import { Component, OnInit, Input } from '@angular/core';


import { ToastService } from '../../../shared/services/toast.service';

import { ServerRequestService } from '../../../shared/services/server-request.service';
import { StorageService } from '../../../shared/services/storage.service';
import { EventsService } from '../../../shared/services/events.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';

@Component({
  selector: 'app-edit-field-report',
  templateUrl: './edit-field-report.component.html',
  styleUrls: ['./edit-field-report.component.css']
})
export class EditFieldReportComponent implements OnInit {
  @Input() incidentData: any = {};
  
  userId: any;
  metadataFields: any = [];
  incidentTypeList: any = [];
  selectedMetadataGroup: any = '';
  selectedMetadata: any = {
    field: '',
    value: ''
  };

  constructor(private serverRequest: ServerRequestService, private modalService: NgbModal, private toastService: ToastService, private storage: StorageService, private events: EventsService) { }

  ngOnInit(): void {
    this.storage.getItem("sessionInfo").subscribe((data)=> {
      data = JSON.parse(data);
      this.userId = data.userId;
    });
    this.initFormData();
    
    this.loadCountries();
    // this.loadIncidentCategories();
    this.loadIncidentTypes();
    this.loadMetadataFields();

    this.events.getEvent('approve-reviewed-incident').subscribe((data)=> {
      if (data != null && data.IncidentId == this.incidentData.IncidentId){
        // this.formData.metadata = this.metadataFields;
        this.saveIncidence();
        // this.modalService.dismissAll();
      }
    })
  }

  saveIncidence(): void {
    if (typeof this.formData.poiLatitude == "undefined" || this.formData.poiLatitude == ""){
      this.formData.poiLatitude = 0;
    }

    if (typeof this.formData.poiLongitude == "undefined" || this.formData.poiLongitude == ""){
      this.formData.poiLongitude = 0;
    }


    let _incidentData: any = {
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
      metadata: {}
    }

    this.metadataFields.forEach(f=>{
        _incidentData.metadata[f.field] = f.value;
    })

    let payload = {
      userId: this.userId,
      incidentId: this.incidentData.IncidentId,
      incidentData: _incidentData
    };
    
    this.serverRequest.post("incidents/incident/edit-incident", payload).subscribe(res => {
      alert("Incidence has been reviewed and approved successfully");
      // this.toastService.show("Incidence has been reviewed and approved successfully", { classname: 'bg-success text-white', delay: 10000 });
      // Swal.fire('Operation Successful', 'Incidence has been saved successfully', 'success');
      this.initFormData();
      this.modalService.dismissAll();
    }, err => {
      this.toastService.show("An error occurred. Incidence record not reported successfully", { classname: 'bg-danger text-white', delay: 10000 });
      // Swal.fire("An error occurred", "Incidence record not saved", "error");
    });   
  }

  addMetadataField(): void {
    this.metadataFields.push({
      field: this.selectedMetadata.field,
      value: this.selectedMetadata.value
    });

    this.selectedMetadata = {
      field: '',
      value: ''
    };
  }

  removeMetadataField(index: any): void {
    this.metadataFields.splice(index, 1);
  }

  select2Options: any = {
    containerCssClass: "form-control",
    width: "100%"
  }

  select2Options_metadata: any = {
    containerCssClass: "form-control",
    width: "100%"
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
    associatedFeatureList: [],
    metadataList: []
  }

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
      comments:"",
      files: [],
      metadata: []
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

  getLatLon(poi: any): any {
    let latLon = (poi.replace("POINT(", "")).replace(")", "").split(" ");
    return latLon;
  }

  loadMetadataFields(): void {
    this.serverRequest.get("incidents/metadata/get-list").subscribe(res => {
      // (res.contentData).forEach(data => {
      //   this.select2Data.metadataList.push(data.FieldName);
      // });

      this.select2Data.metadataList = res.contentData;
    });
  }

}
