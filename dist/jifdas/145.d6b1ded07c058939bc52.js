(self.webpackChunkjifdas=self.webpackChunkjifdas||[]).push([[145],{1145:(t,e,n)=>{"use strict";n.r(e),n.d(e,{DataManagersModule:()=>j});var i=n(1116),a=n(1462),o=n(5425),r=n(5366),d=function(){function t(t,e,n){this.el=t,this.vcr=e,this.renderer=n,this.dtOptions={}}return t.prototype.ngOnInit=function(){var t=this;this.dtTrigger?this.dtTrigger.subscribe(function(){t.displayTable()}):this.displayTable()},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(){var t=this,e=this;this.dtInstance=new Promise(function(n,i){Promise.resolve(t.dtOptions).then(function(i){setTimeout(function(){var a={rowCallback:function(n,a,o){if(i.columns){var r=i.columns;r.filter(function(t){return t.ngPipeInstance&&!t.ngTemplateRef}).forEach(function(t){var e=t.ngPipeInstance,i=r.findIndex(function(e){return e.data==t.data}),a=n.childNodes.item(i),o=$(a).text(),d=e.transform(o);$(a).text(d)}),r.filter(function(t){return t.ngTemplateRef&&!t.ngPipeInstance}).forEach(function(t){var i=t.ngTemplateRef,o=i.ref,d=i.context,l=r.findIndex(function(e){return e.data==t.data}),c=n.childNodes.item(l),s=Object.assign({},d,null==d?void 0:d.userData,{adtData:a}),g=e.vcr.createEmbeddedView(o,s);e.renderer.appendChild(c,g.rootNodes[0])})}t.dtOptions.rowCallback&&t.dtOptions.rowCallback(n,a,o)}};a=Object.assign({},i,a),t.dt=$(t.el.nativeElement).DataTable(a),n(t.dt)})})})},t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(r.s_b),r.Y36(r.Qsj))},t.\u0275dir=r.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}(),l=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.ez]]}),t}(),c=n(1190),s=n(549),g=n(3458),u=n(570);let Z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-shell"]],decls:5,vars:0,consts:[[1,"d-flex","flex-column","flex-root"],[1,"page","d-flex","flex-row","flex-column-fluid"],["title","Info Officers Dashboard"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r._UZ(2,"app-sidebar"),r._UZ(3,"app-header",2),r._UZ(4,"router-outlet"),r.qZA(),r.qZA())},directives:[g.k,u.G,c.lC],styles:[""]}),t})();var p=n(3559),f=n(7320),m=n(4126),h=n(9151),T=n(3219);function A(t,e){if(1&t&&(r.TgZ(0,"div",19),r.TgZ(1,"div",20),r._UZ(2,"img",21),r.TgZ(3,"div",22),r.TgZ(4,"a",23),r._UZ(5,"i",24),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t){const t=e.$implicit;r.xp6(2),r.MGl("src","data:image/png;base64,",t,"",r.LSH),r.xp6(2),r.MGl("href","file://data:image/png;base64,",t,"",r.LSH)}}let q=(()=>{class t{constructor(){this.incidentData={}}ngOnInit(){}initMap(){this.map=T.map("incident-poi").setView([0,0],13);let t={"Street Map":T.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),"Aerial View":T.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]})},e=T.control.layers(t);this.marker=T.marker([0,0],{icon:T.icon({iconSize:[25,41],iconAnchor:[13,41],iconUrl:"assets/marker-icon.png",shadowUrl:"assets/marker-shadow.png"})}),t["Street Map"].addTo(this.map),e.addTo(this.map),this.marker.addTo(this.map)}invalidateSize(){setTimeout(()=>{this.map.invalidateSize()},500)}ngOnChanges(t){const e=t.incidentData;if(this.initMap(),void 0!==e.currentValue.IncidentId){let t=e.currentValue.IncidentPointOfInterest;t=t.replace("POINT(","").replace(")","").split(" "),this.invalidateSize(),this.map.setView(t),this.marker.setLatLng(t),this.marker.bindPopup(e.currentValue.IncidentTypeName)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-view-single-field-report"]],inputs:{incidentData:"incidentData"},features:[r.TTD],decls:55,vars:11,consts:[["id","kt_content_container",1,"container"],[1,"card"],[1,"card-body"],[1,"mb-5"],[1,"mb-1"],[1,"text-center","mb-5"],[1,"fs-2hx","text-dark"],[1,"fs-5","text-muted"],[1,"fw-bold"],[1,"row","mb-10"],["id","incident-poi",2,"height","20vh"],[1,"col-7"],[1,"fs-5","fw-bold"],[1,"table-responsive","mb-4"],[1,"table"],[1,"text-muted"],[1,"mb-4"],[1,"col-5"],["class","col-12 mb-5",4,"ngFor","ngForOf"],[1,"col-12","mb-5"],[1,"overlay"],["alt","",1,"w-100","card-rounded",3,"src"],[1,"overlay-layer","bg-dark","card-rounded","bg-opacity-25"],["target","_blank",1,"btn","btn-link",3,"href"],[1,"bi","bi-eye-fill","fs-2x","text-white"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"div",4),r.TgZ(5,"div",5),r.TgZ(6,"h3",6),r._uU(7),r.qZA(),r.TgZ(8,"div",7),r.TgZ(9,"span",8),r._uU(10),r.qZA(),r._UZ(11,"br"),r.TgZ(12,"span"),r._uU(13),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(14,"div",9),r._UZ(15,"div",10),r.qZA(),r.TgZ(16,"div",9),r.TgZ(17,"div",11),r.TgZ(18,"div",12),r.TgZ(19,"div",13),r.TgZ(20,"table",14),r.TgZ(21,"tr"),r.TgZ(22,"td",15),r._uU(23,"Country"),r.qZA(),r.TgZ(24,"td"),r._uU(25),r.qZA(),r.qZA(),r.TgZ(26,"tr"),r.TgZ(27,"td",15),r._uU(28,"Region"),r.qZA(),r.TgZ(29,"td"),r._uU(30),r.qZA(),r.qZA(),r.TgZ(31,"tr"),r.TgZ(32,"td",15),r._uU(33,"State"),r.qZA(),r.TgZ(34,"td"),r._uU(35),r.qZA(),r.qZA(),r.TgZ(36,"tr"),r.TgZ(37,"td",15),r._uU(38,"LGA"),r.qZA(),r.TgZ(39,"td"),r._uU(40),r.qZA(),r.qZA(),r.TgZ(41,"tr"),r.TgZ(42,"td",15),r._uU(43,"Ward"),r.qZA(),r.TgZ(44,"td"),r._uU(45),r.qZA(),r.qZA(),r.TgZ(46,"tr"),r.TgZ(47,"td",15),r._uU(48,"Village"),r.qZA(),r.TgZ(49,"td"),r._uU(50),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(51,"p",16),r._uU(52),r.qZA(),r.qZA(),r.qZA(),r.TgZ(53,"div",17),r.YNc(54,A,6,2,"div",18),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(7),r.Oqu(e.incidentData.IncidentTypeName),r.xp6(3),r.Oqu(e.incidentData.AccountName),r.xp6(3),r.hij("Reported on ",e.incidentData.DateReported,""),r.xp6(12),r.Oqu(e.incidentData.Country),r.xp6(5),r.Oqu(e.incidentData.Region),r.xp6(5),r.Oqu(e.incidentData.State),r.xp6(5),r.Oqu(e.incidentData.LGA),r.xp6(5),r.Oqu(e.incidentData.Ward),r.xp6(5),r.Oqu(e.incidentData.Village),r.xp6(2),r.Oqu(e.incidentData.IncidentName),r.xp6(2),r.Q6J("ngForOf",e.incidentData.IncidentImages))},directives:[i.sg],styles:[""]}),t})();var v=n(9609),b=n(8135),x=n(5943),y=n(8281),D=n(9130);function _(t,e){if(1&t&&(r.TgZ(0,"option",30),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.s9C("value",t.id),r.xp6(1),r.Oqu(t.text)}}function w(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"tr"),r.TgZ(1,"td"),r._uU(2),r.qZA(),r.TgZ(3,"td"),r._uU(4),r.qZA(),r.TgZ(5,"td",34),r.NdJ("click",function(){const e=r.CHM(t).index;return r.oxw(2).removeMetadataField(e)}),r.TgZ(6,"span",35),r._UZ(7,"i",36),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit;r.xp6(2),r.Oqu(t.field),r.xp6(2),r.Oqu(t.value)}}function U(t,e){if(1&t&&(r.TgZ(0,"div",4),r.TgZ(1,"div",31),r.TgZ(2,"table",32),r.TgZ(3,"thead"),r.TgZ(4,"th"),r._uU(5,"Metadata"),r.qZA(),r.TgZ(6,"th"),r._uU(7,"Value"),r.qZA(),r.TgZ(8,"th"),r._uU(9,"Action"),r.qZA(),r.qZA(),r.TgZ(10,"tbody"),r.YNc(11,w,8,2,"tr",33),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(11),r.Q6J("ngForOf",t.metadataFields)}}function M(t,e){if(1&t&&(r.TgZ(0,"option",30),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.s9C("value",t),r.xp6(1),r.Oqu(t)}}let C=(()=>{class t{constructor(t,e,n,i,a){this.serverRequest=t,this.modalService=e,this.toastService=n,this.storage=i,this.events=a,this.incidentData={},this.metadataFields=[],this.incidentTypeList=[],this.selectedMetadata={field:"",value:""},this.select2Options={containerCssClass:"form-control",width:"100%"},this.select2Options_metadata={containerCssClass:"form-control",width:"100%"},this.select2Data={countryList:[],regionList:[],stateList:[],lgaList:[],wardList:[],villageList:[],localityList:[],incidentCategoryList:[],incidentTypeList:[],factionList:[],friendlyForcesList:[],terrainList:[],associatedFeatureList:[],metadataList:[]},this.formData={}}ngOnInit(){this.storage.getItem("sessionInfo").subscribe(t=>{t=JSON.parse(t),this.userId=t.userId}),this.initFormData(),this.loadCountries(),this.loadIncidentTypes(),this.loadMetadataFields(),this.events.getEvent("approve-reviewed-incident").subscribe(t=>{null!=t&&t.IncidentId==this.incidentData.IncidentId&&this.saveIncidence()})}saveIncidence(){void 0!==this.formData.poiLatitude&&""!=this.formData.poiLatitude||(this.formData.poiLatitude=0),void 0!==this.formData.poiLongitude&&""!=this.formData.poiLongitude||(this.formData.poiLongitude=0);let t={name:this.formData.incidentTitle,type:this.formData.incidentType,location:{country:this.formData.country,region:this.formData.region,state:this.formData.state,lga:this.formData.lga,ward:this.formData.ward,village:this.formData.village,locality:this.formData.locality},date:v(this.formData.incidentDate+"T"+this.formData.incidentTime).format("D/M/YYYY HH:mm:ss"),pointOfInterest:"POINT("+this.formData.poiLatitude+" "+this.formData.poiLongitude+")",description:this.formData.comments,images:this.formData.files,metadata:{}};this.metadataFields.forEach(e=>{t.metadata[e.field]=e.value}),this.serverRequest.post("incidents/incident/edit-incident",{incidentId:this.incidentData.IncidentId,incidentData:t}).subscribe(t=>{alert("Incidence has been reviewed and approved successfully"),this.initFormData(),this.modalService.dismissAll()},t=>{this.toastService.show("An error occurred. Incidence record not reported successfully",{classname:"bg-danger text-white",delay:1e4})})}addMetadataField(){this.metadataFields.push({field:this.selectedMetadata.field,value:this.selectedMetadata.value}),this.selectedMetadata={field:"",value:""}}removeMetadataField(t){this.metadataFields.splice(t,1)}initFormData(){this.formData={country:"",region:"",state:"",lga:"",ward:"",village:"",locality:"",incidentTitle:"",incidentCategory:"",incidentType:"",comments:"",files:[],metadata:[]}}loadCountries(){this.loadSpatialEntityList("countryList","spatial-entity/entity/view-entities-by-type?entityType=1")}loadSpatialEntityChildren(t,e){""!=e&&this.loadSpatialEntityList(t,"spatial-entity/entity/view-entity-children?entityId="+e)}loadSpatialEntityList(t,e){this.serverRequest.get(e).subscribe(e=>{this.select2Data[t]=[],e.contentData.forEach(e=>{this.select2Data[t].push(e.EntityName)})})}loadRegions(t){this.loadSpatialEntityChildren("regionList",this.formData.country)}loadStates(t){this.loadSpatialEntityChildren("stateList",this.formData.region)}loadLgas(t){this.loadSpatialEntityChildren("lgaList",this.formData.state)}loadWards(t){this.loadSpatialEntityChildren("wardList",this.formData.lga)}loadVillages(t){this.loadSpatialEntityChildren("villageList",this.formData.ward)}loadLocalities(t){this.loadSpatialEntityChildren("localityList",this.formData.village)}loadIncidentTypes(){this.serverRequest.get("incidents/incident-type/view-incident-types?resourceId=1").subscribe(t=>{this.select2Data.incidentTypeList=[],t.contentData.forEach(t=>{this.select2Data.incidentTypeList.push({id:t.IncidentTypeId,text:t.IncidentTypeName})})})}getLatLon(t){return t.replace("POINT(","").replace(")","").split(" ")}loadMetadataFields(){this.serverRequest.get("incidents/metadata/get-list").subscribe(t=>{t.contentData.forEach(t=>{this.select2Data.metadataList.push(t.FieldName)})})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(f.I),r.Y36(m.FF),r.Y36(b.k),r.Y36(x.V),r.Y36(h.n))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-edit-field-report"]],inputs:{incidentData:"incidentData"},decls:121,vars:35,consts:[["id","kt_content_container",1,"container"],[1,"card"],[1,"card-body"],[1,"mb-5"],[1,"row"],[1,"col-5","form-group"],[1,"font-weight-semibold"],[1,"badge","badge-light-primary","fs-7","fw-bold"],["name","incidentType",1,"form-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-4","form-group"],["type","date","name","incidentDate",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","form-group"],["type","time","name","incidentTime",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-6","form-group"],["name","country",3,"ngModel","data","options","ngModelChange"],["name","region",3,"ngModel","data","options","ngModelChange"],["name","state",3,"ngModel","data","options","ngModelChange"],["name","lga",3,"ngModel","data","options","ngModelChange"],["type","text","name","ward",1,"form-control",3,"ngModel","ngModelChange","change"],["type","text","name","village",1,"form-control",3,"ngModel","ngModelChange","change"],["type","text","name","locality",1,"form-control",3,"ngModel","ngModelChange"],["class","row",4,"ngIf"],[1,"row","more-height"],["name","selectedMetadataField",1,"form-select",3,"ngModel","ngModelChange"],["type","number","name","selectedMetadataValue",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","d-flex","justify-content-center"],["type","button",1,"btn","btn-primary","col-4",3,"click"],[1,"fa","fa-plus"],["aria-live","polite","aria-atomic","true"],[3,"value"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"click"],[1,"btn","btn-link","btn-sm"],[1,"text-danger","fa","fa-times"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"form"),r.TgZ(5,"div",4),r.TgZ(6,"div",5),r.TgZ(7,"label",6),r._uU(8,"Incident Type "),r._UZ(9,"br"),r.TgZ(10,"span",7),r._uU(11),r.qZA(),r._uU(12,":"),r.qZA(),r.TgZ(13,"select",8),r.NdJ("ngModelChange",function(t){return e.formData.incidentType=t}),r._UZ(14,"option"),r.YNc(15,_,2,2,"option",9),r.qZA(),r.qZA(),r.TgZ(16,"div",10),r.TgZ(17,"label",6),r._uU(18,"Date "),r._UZ(19,"span",7),r._uU(20,":"),r._UZ(21,"br"),r.qZA(),r.TgZ(22,"input",11),r.NdJ("ngModelChange",function(t){return e.formData.incidentDate=t}),r.qZA(),r.qZA(),r.TgZ(23,"div",12),r.TgZ(24,"label",6),r._uU(25,"Time "),r._UZ(26,"span",7),r._uU(27,":"),r._UZ(28,"br"),r.qZA(),r.TgZ(29,"input",13),r.NdJ("ngModelChange",function(t){return e.formData.incidentTime=t}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(30,"div",4),r.TgZ(31,"div",14),r.TgZ(32,"label",6),r._uU(33,"Country "),r._UZ(34,"br"),r.TgZ(35,"span",7),r._uU(36),r.qZA(),r._uU(37,":"),r.qZA(),r.TgZ(38,"ng-select2",15),r.NdJ("ngModelChange",function(t){return e.formData.country=t})("ngModelChange",function(t){return e.loadRegions(t)}),r.qZA(),r.qZA(),r.TgZ(39,"div",14),r.TgZ(40,"label",6),r._uU(41,"Region "),r._UZ(42,"br"),r.TgZ(43,"span",7),r._uU(44),r.qZA(),r._uU(45,":"),r.qZA(),r.TgZ(46,"ng-select2",16),r.NdJ("ngModelChange",function(t){return e.formData.region=t})("ngModelChange",function(t){return e.loadStates(t)}),r.qZA(),r.qZA(),r.TgZ(47,"div",14),r.TgZ(48,"label",6),r._uU(49,"State "),r._UZ(50,"br"),r.TgZ(51,"span",7),r._uU(52),r.qZA(),r._uU(53,":"),r.qZA(),r.TgZ(54,"ng-select2",17),r.NdJ("ngModelChange",function(t){return e.formData.state=t})("ngModelChange",function(t){return e.loadLgas(t)}),r.qZA(),r.qZA(),r.TgZ(55,"div",14),r.TgZ(56,"label",6),r._uU(57,"LGA "),r._UZ(58,"br"),r.TgZ(59,"span",7),r._uU(60),r.qZA(),r._uU(61,":"),r.qZA(),r.TgZ(62,"ng-select2",18),r.NdJ("ngModelChange",function(t){return e.formData.lga=t})("ngModelChange",function(t){return e.loadWards(t)}),r.qZA(),r.qZA(),r.TgZ(63,"div",14),r.TgZ(64,"label",6),r._uU(65,"Ward "),r._UZ(66,"br"),r.TgZ(67,"span",7),r._uU(68),r.qZA(),r._uU(69,":"),r.qZA(),r.TgZ(70,"input",19),r.NdJ("ngModelChange",function(t){return e.formData.ward=t})("change",function(t){return e.loadVillages(t)}),r.qZA(),r.qZA(),r.TgZ(71,"div",14),r.TgZ(72,"label",6),r._uU(73,"Village "),r._UZ(74,"br"),r.TgZ(75,"span",7),r._uU(76),r.qZA(),r._uU(77,":"),r.qZA(),r.TgZ(78,"input",20),r.NdJ("ngModelChange",function(t){return e.formData.village=t})("change",function(t){return e.loadLocalities(t)}),r.qZA(),r.qZA(),r.TgZ(79,"div",14),r.TgZ(80,"label",6),r._uU(81,"Locality / Area "),r._UZ(82,"br"),r.TgZ(83,"span",7),r._uU(84),r.qZA(),r._uU(85,":"),r.qZA(),r.TgZ(86,"input",21),r.NdJ("ngModelChange",function(t){return e.formData.locality=t}),r.qZA(),r.qZA(),r.TgZ(87,"div",12),r.TgZ(88,"label",6),r._uU(89,"POI Latitude "),r._UZ(90,"br"),r.TgZ(91,"span",7),r._uU(92),r.qZA(),r._uU(93,":"),r.qZA(),r.TgZ(94,"input",21),r.NdJ("ngModelChange",function(t){return e.formData.poiLatitude=t}),r.qZA(),r.qZA(),r.TgZ(95,"div",12),r.TgZ(96,"label",6),r._uU(97,"POI Longitude "),r._UZ(98,"br"),r.TgZ(99,"span",7),r._uU(100),r.qZA(),r._uU(101,":"),r.qZA(),r.TgZ(102,"input",21),r.NdJ("ngModelChange",function(t){return e.formData.poiLongitude=t}),r.qZA(),r.qZA(),r.qZA(),r.YNc(103,U,12,1,"div",22),r.TgZ(104,"div",23),r.TgZ(105,"div",14),r.TgZ(106,"label",6),r._uU(107,"Metadata:"),r.qZA(),r.TgZ(108,"select",24),r.NdJ("ngModelChange",function(t){return e.selectedMetadata.field=t}),r.TgZ(109,"option"),r._uU(110,"Select"),r.qZA(),r.YNc(111,M,2,2,"option",9),r.qZA(),r.qZA(),r.TgZ(112,"div",14),r.TgZ(113,"label",6),r._uU(114,"Value:"),r.qZA(),r.TgZ(115,"input",25),r.NdJ("ngModelChange",function(t){return e.selectedMetadata.value=t}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(116,"div",26),r.TgZ(117,"button",27),r.NdJ("click",function(){return e.addMetadataField()}),r._UZ(118,"i",28),r._uU(119," Add Metadata"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r._UZ(120,"app-toast-container",29)),2&t&&(r.xp6(11),r.Oqu(e.incidentData.IncidentTypeName),r.xp6(2),r.Q6J("ngModel",e.formData.incidentType),r.xp6(2),r.Q6J("ngForOf",e.select2Data.incidentTypeList),r.xp6(7),r.Q6J("ngModel",e.formData.incidentDate),r.xp6(7),r.Q6J("ngModel",e.formData.incidentTime),r.xp6(7),r.Oqu(e.incidentData.Country),r.xp6(2),r.Q6J("ngModel",e.formData.country)("data",e.select2Data.countryList)("options",e.select2Options),r.xp6(6),r.Oqu(e.incidentData.Region),r.xp6(2),r.Q6J("ngModel",e.formData.region)("data",e.select2Data.regionList)("options",e.select2Options),r.xp6(6),r.Oqu(e.incidentData.State),r.xp6(2),r.Q6J("ngModel",e.formData.state)("data",e.select2Data.stateList)("options",e.select2Options),r.xp6(6),r.Oqu(e.incidentData.LGA),r.xp6(2),r.Q6J("ngModel",e.formData.lga)("data",e.select2Data.lgaList)("options",e.select2Options),r.xp6(6),r.Oqu(e.incidentData.Ward),r.xp6(2),r.Q6J("ngModel",e.formData.ward),r.xp6(6),r.Oqu(e.incidentData.Village),r.xp6(2),r.Q6J("ngModel",e.formData.village),r.xp6(6),r.Oqu(e.incidentData.Locality),r.xp6(2),r.Q6J("ngModel",e.formData.locality),r.xp6(6),r.Oqu(e.getLatLon(e.incidentData.IncidentPointOfInterest)[0]),r.xp6(2),r.Q6J("ngModel",e.formData.poiLatitude),r.xp6(6),r.Oqu(e.getLatLon(e.incidentData.IncidentPointOfInterest)[1]),r.xp6(2),r.Q6J("ngModel",e.formData.poiLongitude),r.xp6(1),r.Q6J("ngIf",e.metadataFields.length>0),r.xp6(5),r.Q6J("ngModel",e.selectedMetadata.field),r.xp6(3),r.Q6J("ngForOf",e.select2Data.metadataList),r.xp6(4),r.Q6J("ngModel",e.selectedMetadata.value))},directives:[a._Y,a.JL,a.F,a.EJ,a.JJ,a.On,a.YN,a.Kr,i.sg,a.Fj,y.c,i.O5,a.wV,D.J],styles:[".more-height[_ngcontent-%COMP%] > .form-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]{height:45px}"]}),t})(),I=(()=>{class t{constructor(){this.incidentData={}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-decline-field-report"]],inputs:{incidentData:"incidentData"},decls:10,vars:0,consts:[["id","kt_content_container",1,"container"],[1,"card"],[1,"card-body"],[1,"mb-5"],[1,"row"],[1,"col-12","form-group"],[1,"font-weight-semibold"],["rows","10",1,"form-control"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"form"),r.TgZ(5,"div",4),r.TgZ(6,"div",5),r.TgZ(7,"label",6),r._uU(8,"Comments:"),r.qZA(),r._UZ(9,"textarea",7),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA())},directives:[a._Y,a.JL,a.F],styles:[""]}),t})();function O(t,e){if(1&t&&(r.TgZ(0,"span",53),r.TgZ(1,"span",54),r._uU(2),r.qZA(),r.TgZ(3,"span",55),r._uU(4,"Area"),r.qZA(),r.qZA()),2&t){const t=r.oxw().$implicit;r.xp6(2),r.hij("",t.Locality," ")}}function L(t,e){if(1&t&&(r.TgZ(0,"span",53),r.TgZ(1,"span",54),r._uU(2),r.qZA(),r.TgZ(3,"span",55),r._uU(4,"Ward"),r.qZA(),r.qZA()),2&t){const t=r.oxw().$implicit;r.xp6(2),r.hij("",t.Ward," ")}}function N(t,e){if(1&t&&(r.TgZ(0,"span",53),r.TgZ(1,"span",54),r._uU(2),r.qZA(),r.TgZ(3,"span",55),r._uU(4,"Village"),r.qZA(),r.qZA()),2&t){const t=r.oxw().$implicit;r.xp6(2),r.hij("",t.Village," ")}}function k(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"tr"),r.TgZ(1,"td",41),r.NdJ("click",function(){const e=r.CHM(t).$implicit,n=r.oxw(2),i=r.MAs(67);return n.openIncident(e,i)}),r._uU(2),r.qZA(),r.TgZ(3,"td",42),r.NdJ("click",function(){const e=r.CHM(t).$implicit,n=r.oxw(2),i=r.MAs(67);return n.openIncident(e,i)}),r._uU(4),r.qZA(),r.TgZ(5,"td",41),r.NdJ("click",function(){const e=r.CHM(t).$implicit,n=r.oxw(2),i=r.MAs(67);return n.openIncident(e,i)}),r.TgZ(6,"div",3),r.TgZ(7,"div",43),r.TgZ(8,"span",44),r._uU(9),r.qZA(),r.TgZ(10,"span",45),r._uU(11),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(12,"td",41),r.NdJ("click",function(){const e=r.CHM(t).$implicit,n=r.oxw(2),i=r.MAs(67);return n.openIncident(e,i)}),r.TgZ(13,"span",46),r._uU(14),r.qZA(),r.YNc(15,O,5,1,"span",47),r.YNc(16,L,5,1,"span",47),r.YNc(17,N,5,1,"span",47),r.TgZ(18,"span",48),r._uU(19),r.qZA(),r.qZA(),r.TgZ(20,"td",41),r.NdJ("click",function(){const e=r.CHM(t).$implicit,n=r.oxw(2),i=r.MAs(67);return n.openIncident(e,i)}),r._uU(21),r.qZA(),r.TgZ(22,"td",41),r.NdJ("click",function(){const e=r.CHM(t).$implicit,n=r.oxw(2),i=r.MAs(67);return n.openIncident(e,i)}),r._uU(23),r.qZA(),r.TgZ(24,"td",41),r.NdJ("click",function(){const e=r.CHM(t).$implicit,n=r.oxw(2),i=r.MAs(67);return n.openIncident(e,i)}),r.TgZ(25,"span",49),r._uU(26,"Unreviewed"),r.qZA(),r.qZA(),r.TgZ(27,"td"),r.TgZ(28,"span",50),r.NdJ("click",function(){const e=r.CHM(t).$implicit,n=r.oxw(2),i=r.MAs(67);return n.openIncidentForReview(e,i)}),r._UZ(29,"i",51),r._uU(30,"\xa0 "),r.qZA(),r.TgZ(31,"span",50),r.NdJ("click",function(){const e=r.CHM(t).$implicit,n=r.oxw(2),i=r.MAs(67);return n.openIncidentForDecline(e,i)}),r._UZ(32,"i",52),r._uU(33,"\xa0 "),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit;r.xp6(2),r.Oqu(t.IncidentId),r.xp6(2),r.Oqu(t.IncidentName),r.xp6(5),r.Oqu(t.AccountName),r.xp6(2),r.AsE("",t.FirstName," ",t.LastName,""),r.xp6(3),r.AsE("",t.LGA,", ",t.State,""),r.xp6(1),r.Q6J("ngIf","UNKNOWN LOCALITY"!=t.Locality),r.xp6(1),r.Q6J("ngIf","UNKNOWN WARD"!=t.Ward),r.xp6(1),r.Q6J("ngIf","UNKNOWN VILLAGE"!=t.Village),r.xp6(2),r.Oqu(t.Country),r.xp6(2),r.Oqu(t.IncidentTypeName),r.xp6(2),r.Oqu(t.IncidentDate)}}function J(t,e){if(1&t&&(r.TgZ(0,"tbody"),r.YNc(1,k,34,13,"tr",40),r.qZA()),2&t){const t=r.oxw();r.xp6(1),r.Q6J("ngForOf",t.currentData)}}function F(t,e){1&t&&(r.TgZ(0,"tbody"),r.TgZ(1,"tr"),r.TgZ(2,"td",56),r._uU(3,"No incidences available"),r.qZA(),r.qZA(),r.qZA())}function R(t,e){if(1&t&&(r.TgZ(0,"div",67),r._UZ(1,"app-edit-field-report",64),r.qZA()),2&t){const t=r.oxw(2);r.xp6(1),r.Q6J("incidentData",t.currentView)}}function S(t,e){if(1&t&&(r.TgZ(0,"div",67),r._UZ(1,"app-decline-field-report",64),r.qZA()),2&t){const t=r.oxw(2);r.xp6(1),r.Q6J("incidentData",t.currentView)}}function Q(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",68),r.TgZ(1,"button",69),r.NdJ("click",function(){return r.CHM(t),r.oxw(2).initForReview()}),r._uU(2,"Review & Approve"),r.qZA(),r.TgZ(3,"button",70),r.NdJ("click",function(){return r.CHM(t),r.oxw(2).initForDecline()}),r._uU(4,"Decline"),r.qZA(),r.qZA()}}function Y(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",68),r.TgZ(1,"button",71),r.NdJ("click",function(){return r.CHM(t),r.oxw(2).sendApproveEvent()}),r._uU(2,"Approve Report"),r.qZA(),r.qZA()}}function E(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",68),r.TgZ(1,"button",70),r.NdJ("click",function(){return r.CHM(t),r.oxw(2).sendDeclineEvent()}),r._uU(2,"Decline Report"),r.qZA(),r.qZA()}}const V=function(t,e){return{"col-12":t,"col-5":e}};function P(t,e){if(1&t&&(r.TgZ(0,"div",57),r.TgZ(1,"h4",58),r._uU(2,"Field Incident Report"),r.qZA(),r.TgZ(3,"button",59),r.NdJ("click",function(){return e.$implicit.dismiss("Cross click")}),r.TgZ(4,"span",60),r._uU(5,"\xd7"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(6,"div",61),r.TgZ(7,"div",62),r.TgZ(8,"div",63),r._UZ(9,"app-view-single-field-report",64),r.qZA(),r.YNc(10,R,2,1,"div",65),r.YNc(11,S,2,1,"div",65),r.qZA(),r.qZA(),r.YNc(12,Q,5,0,"div",66),r.YNc(13,Y,3,0,"div",66),r.YNc(14,E,3,0,"div",66)),2&t){const t=r.oxw();r.xp6(8),r.Q6J("ngClass",r.WLB(7,V,!t.forReview&&!t.forDecline,t.forReview||t.forDecline)),r.xp6(1),r.Q6J("incidentData",t.currentView),r.xp6(1),r.Q6J("ngIf",t.forReview),r.xp6(1),r.Q6J("ngIf",t.forDecline),r.xp6(1),r.Q6J("ngIf",!t.forReview&&!t.forDecline),r.xp6(1),r.Q6J("ngIf",t.forReview),r.xp6(1),r.Q6J("ngIf",t.forDecline)}}const z=[{path:"",component:Z,canActivate:[s.P],children:[{path:"field-reports",component:(()=>{class t{constructor(t,e,n){this.serverRequest=t,this.modalService=e,this.events=n,this.globalDateRange={startDate:"",endDate:""},this.currentData=[],this.currentView={},this.forReview=!1,this.forDecline=!1,this.dtOptions={paging:!1,lengthChange:!1,pagingType:"full_numbers",pageLength:100,serverSide:!0,processing:!0,ajax:(t,e)=>{this.serverRequest.get("incidents/incident/view-raw-data?length="+t.length+"&start="+t.start+"&search="+t.search.value+"&startDate="+this.globalDateRange.startDate+"&endDate="+this.globalDateRange.endDate).subscribe(t=>{this.currentData=[],this.currentData=t.contentData.data,e({recordsTotal:t.contentData.recordsTotal,recordsFiltered:t.contentData.recordsFiltered,data:[]})})}},this.dtTrigger=new p.xQ}ngOnInit(){this.dtTrigger.next(),setTimeout(()=>{this.rerender()},500)}ngAfterViewInit(){this.dtTrigger.next()}ngOnDestroy(){this.dtTrigger.unsubscribe()}rerender(){this.dtElement.dtInstance.then(t=>{t.destroy(),this.dtTrigger.next()})}openIncident(t,e){this.forReview=!1,this.forDecline=!1,this.currentView=t,this.modalRef=this.modalService.open(e,{backdropClass:"modal-backdrop",size:"xl",scrollable:!0})}openIncidentForReview(t,e){this.initForReview(),this.currentView=t,this.modalRef=this.modalService.open(e,{backdropClass:"modal-backdrop",size:"xl",scrollable:!0})}openIncidentForDecline(t,e){this.initForDecline(),this.currentView=t,this.modalRef=this.modalService.open(e,{backdropClass:"modal-backdrop",size:"xl",scrollable:!0})}initForReview(){this.forReview=!0,this.forDecline=!1}initForDecline(){this.forDecline=!0,this.forReview=!1}sendApproveEvent(){this.events.broadcast("approve-reviewed-incident",{IncidentId:this.currentView.IncidentId})}sendDeclineEvent(){this.events.broadcast("decline-reviewed-incident",{status:!0})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(f.I),r.Y36(m.FF),r.Y36(h.n))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-view-field-reports"]],viewQuery:function(t,e){if(1&t&&r.Gf(d,5),2&t){let t;r.iGM(t=r.CRH())&&(e.dtElement=t.first)}},decls:68,vars:4,consts:[[1,"wrapper","d-flex","flex-column","flex-row-fluid"],[1,"card","rounded-0","bgi-no-repeat","bgi-position-x-end","bgi-size-cover",2,"background-color","#4b5320","background-size","auto 100%"],[1,"card-body","container","pt-10","pb-8"],[1,"d-flex","align-items-center"],[1,"fw-bold","me-3","text-white"],[1,"fw-bold","text-white","opacity-50"],[1,"d-flex","flex-column"],[1,"d-lg-flex","align-lg-items-center"],[1,"rounded","d-flex","flex-column","flex-lg-row","align-items-lg-center","bg-white","p-5","w-xxl-850px","h-lg-60px","me-lg-10","my-5"],[1,"row","flex-grow-1","mb-5","mb-lg-0"],[1,"col-lg-4","d-flex","align-items-center","mb-3","mb-lg-0"],[1,"svg-icon","svg-icon-1","svg-icon-gray-400","me-1"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","24px","height","24px","viewBox","0 0 24 24","version","1.1"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["x","0","y","0","width","24","height","24"],["d","M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z","fill","#000000","fill-rule","nonzero","opacity","0.3"],["d","M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z","fill","#000000","fill-rule","nonzero"],["type","text","name","search","value","","placeholder","Keyword",1,"form-control","form-control-flush","flex-grow-1"],[1,"col-lg-4","d-flex","align-items-center","mb-5","mb-lg-0"],[1,"bullet","bg-secondary","d-none","d-lg-block","h-30px","w-2px","me-5"],["x","5","y","5","width","5","height","5","rx","1","fill","#000000"],["x","14","y","5","width","5","height","5","rx","1","fill","#000000","opacity","0.3"],["x","5","y","14","width","5","height","5","rx","1","fill","#000000","opacity","0.3"],["x","14","y","14","width","5","height","5","rx","1","fill","#000000","opacity","0.3"],["data-control","select2","data-placeholder","Incident Type","data-hide-search","true",1,"form-select","border-0","flex-grow-1"],["value",""],["value","1","selected","selected"],[1,"col-lg-4","d-flex","align-items-center"],[1,"svg-icon","svg-icon-1","svg-icon-gray-400","me-3"],["d","M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z","fill","#000000","fill-rule","nonzero"],["type","text","name","search","value","","placeholder","Location",1,"form-control","form-control-flush","flex-grow-1"],[1,"min-w-150px","text-end"],["type","submit","id","kt_advanced_search_button_1",1,"btn","btn-dark"],[1,"col-md-12","table-responsive"],["datatable","",1,"table","table-hover","align-middle","gs-0","gy-4",3,"dtOptions","dtTrigger"],[1,"fw-bolder","text-muted","bg-light"],[1,"min-w-200px"],[1,"text-center"],[4,"ngIf"],["content",""],[4,"ngFor","ngForOf"],[3,"click"],[1,"min-w-200px",3,"click"],[1,"d-flex","justify-content-start","flex-column"],[1,"text-dark","fw-bolder","text-hover-primary","mb-1","fs-6"],[1,"text-muted","fw-bold","text-muted","d-block","fs-7"],[1,"text-dark","fw-bolder","text-hover-primary","d-block","mb-1","fs-6"],["class","text-muted d-block fs-7",4,"ngIf"],[1,"text-muted","text-small","text-muted","d-block","fs-7"],[1,"badge","badge-light-primary","fs-7","fw-bold"],[1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","me-1",3,"click"],[1,"fa","fa-edit"],[1,"fa","fa-times","text-danger"],[1,"text-muted","d-block","fs-7"],[1,"text-muted","fw-bold"],[1,"text-small"],["colspan","10"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[3,"ngClass"],[3,"incidentData"],["class","col-7 left-border",4,"ngIf"],["class","modal-footer",4,"ngIf"],[1,"col-7","left-border"],[1,"modal-footer"],["type","button",1,"btn","btn-info",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-success",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"h1",4),r._uU(5,"Reported Field Incidents"),r.qZA(),r.TgZ(6,"span",5),r._uU(7,"Data Management Portal"),r.qZA(),r.qZA(),r.TgZ(8,"div",6),r.TgZ(9,"div",7),r.TgZ(10,"div",8),r.TgZ(11,"div",9),r.TgZ(12,"div",10),r.TgZ(13,"span",11),r.O4$(),r.TgZ(14,"svg",12),r.TgZ(15,"g",13),r._UZ(16,"rect",14),r._UZ(17,"path",15),r._UZ(18,"path",16),r.qZA(),r.qZA(),r.qZA(),r.kcU(),r._UZ(19,"input",17),r.qZA(),r.TgZ(20,"div",18),r._UZ(21,"div",19),r.TgZ(22,"span",11),r.O4$(),r.TgZ(23,"svg",12),r.TgZ(24,"g",13),r._UZ(25,"rect",20),r._UZ(26,"rect",21),r._UZ(27,"rect",22),r._UZ(28,"rect",23),r.qZA(),r.qZA(),r.qZA(),r.kcU(),r.TgZ(29,"select",24),r._UZ(30,"option",25),r.TgZ(31,"option",26),r._uU(32,"Incident Type"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(33,"div",27),r._UZ(34,"div",19),r.TgZ(35,"span",28),r.O4$(),r.TgZ(36,"svg",12),r.TgZ(37,"g",13),r._UZ(38,"rect",14),r._UZ(39,"path",29),r.qZA(),r.qZA(),r.qZA(),r.kcU(),r._UZ(40,"input",30),r.qZA(),r.qZA(),r.TgZ(41,"div",31),r.TgZ(42,"button",32),r._uU(43,"Search"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(44,"div",33),r.TgZ(45,"table",34),r.TgZ(46,"thead"),r.TgZ(47,"tr",35),r.TgZ(48,"th"),r._uU(49,"ID"),r.qZA(),r.TgZ(50,"th",36),r._uU(51,"Incident"),r.qZA(),r.TgZ(52,"th"),r._uU(53,"Account"),r.qZA(),r.TgZ(54,"th"),r._uU(55,"Location"),r.qZA(),r.TgZ(56,"th"),r._uU(57,"Incident Type"),r.qZA(),r.TgZ(58,"th"),r._uU(59,"Date"),r.qZA(),r.TgZ(60,"th"),r._uU(61,"Status"),r.qZA(),r.TgZ(62,"th",37),r._uU(63,"Actions"),r.qZA(),r.qZA(),r.qZA(),r.YNc(64,J,2,1,"tbody",38),r.YNc(65,F,4,0,"tbody",38),r.qZA(),r.qZA(),r.qZA(),r.YNc(66,P,15,10,"ng-template",null,39,r.W1O)),2&t&&(r.xp6(45),r.Q6J("dtOptions",e.dtOptions)("dtTrigger",e.dtTrigger),r.xp6(19),r.Q6J("ngIf",0!=(null==e.currentData?null:e.currentData.length)),r.xp6(1),r.Q6J("ngIf",0==(null==e.currentData?null:e.currentData.length)))},directives:[a.YN,a.Kr,d,i.O5,i.sg,i.mk,q,C,I],styles:[".wrapper[_ngcontent-%COMP%]{width:95vw;padding-left:0}.modal-backdrop[_ngcontent-%COMP%]{background-color:#4b5320}.w-50[_ngcontent-%COMP%]{width:50%!important}.left-border[_ngcontent-%COMP%]{min-height:100vh;border-left:1px solid #4b5320;border-radius:25px 0}"]}),t})()}]}];let H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[c.Bz.forChild(z)],c.Bz]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.ez,H,o.m,l,y.I,a.u5]]}),t})()}}]);