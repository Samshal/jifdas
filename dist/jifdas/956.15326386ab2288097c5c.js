(self.webpackChunkjifdas=self.webpackChunkjifdas||[]).push([[956],{4733:(t,e,n)=>{"use strict";n.d(e,{G:()=>a});var i=n(5366),a=function(){function t(t,e,n){this.el=t,this.vcr=e,this.renderer=n,this.dtOptions={}}return t.prototype.ngOnInit=function(){var t=this;this.dtTrigger?this.dtTrigger.subscribe(function(){t.displayTable()}):this.displayTable()},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(){var t=this,e=this;this.dtInstance=new Promise(function(n,i){Promise.resolve(t.dtOptions).then(function(i){setTimeout(function(){var a={rowCallback:function(n,a,o){if(i.columns){var r=i.columns;r.filter(function(t){return t.ngPipeInstance&&!t.ngTemplateRef}).forEach(function(t){var e=t.ngPipeInstance,i=r.findIndex(function(e){return e.data==t.data}),a=n.childNodes.item(i),o=$(a).text(),d=e.transform(o);$(a).text(d)}),r.filter(function(t){return t.ngTemplateRef&&!t.ngPipeInstance}).forEach(function(t){var i=t.ngTemplateRef,o=i.ref,d=i.context,s=r.findIndex(function(e){return e.data==t.data}),c=n.childNodes.item(s),l=Object.assign({},d,null==d?void 0:d.userData,{adtData:a}),g=e.vcr.createEmbeddedView(o,l);e.renderer.appendChild(c,g.rootNodes[0])})}t.dtOptions.rowCallback&&t.dtOptions.rowCallback(n,a,o)}};a=Object.assign({},i,a),t.dt=$(t.el.nativeElement).DataTable(a),n(t.dt)})})})},t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq),i.Y36(i.s_b),i.Y36(i.Qsj))},t.\u0275dir=i.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}()},7349:(t,e,n)=>{"use strict";n.d(e,{T:()=>o});var i=n(1116),a=(n(4733),n(5366)),o=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez]]}),t}()},2512:(t,e,n)=>{"use strict";n.d(e,{M:()=>s});var i=n(3219),a=n(5366),o=n(1116);function r(t,e){if(1&t&&(a.TgZ(0,"tr"),a.TgZ(1,"td",15),a._uU(2),a.qZA(),a.TgZ(3,"td"),a._uU(4),a.qZA(),a.qZA()),2&t){const t=e.$implicit;a.xp6(2),a.Oqu(t.Field),a.xp6(2),a.Oqu(t.FieldValue)}}function d(t,e){if(1&t&&(a.TgZ(0,"div",20),a.TgZ(1,"div",21),a._UZ(2,"img",22),a.TgZ(3,"div",23),a.TgZ(4,"a",24),a._UZ(5,"i",25),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t){const t=e.$implicit;a.xp6(2),a.MGl("src","data:image/png;base64,",t,"",a.LSH),a.xp6(2),a.MGl("href","file://data:image/png;base64,",t,"",a.LSH)}}let s=(()=>{class t{constructor(){this.incidentData={}}ngOnInit(){}initMap(){this.map=i.map("incident-poi").setView([0,0],13);let t={"Street Map":i.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),"Aerial View":i.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]})},e=i.control.layers(t);this.marker=i.marker([0,0],{icon:i.icon({iconSize:[25,41],iconAnchor:[13,41],iconUrl:"assets/marker-icon.png",shadowUrl:"assets/marker-shadow.png"})}),t["Street Map"].addTo(this.map),e.addTo(this.map),this.marker.addTo(this.map)}invalidateSize(){setTimeout(()=>{this.map.invalidateSize()},500)}ngOnChanges(t){const e=t.incidentData;if(this.initMap(),void 0!==e.currentValue.IncidentId){let t=e.currentValue.IncidentPointOfInterest;t=t.replace("POINT(","").replace(")","").split(" "),this.invalidateSize(),this.map.setView(t),this.marker.setLatLng(t),this.marker.bindPopup(e.currentValue.IncidentTypeName)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-view-single-field-report"]],inputs:{incidentData:"incidentData"},features:[a.TTD],decls:61,vars:12,consts:[["id","kt_content_container",1,"container"],[1,"card"],[1,"card-body"],[1,"mb-5"],[1,"mb-1"],[1,"text-center","mb-5"],[1,"fs-2hx","text-dark"],[1,"fs-5","text-muted"],[1,"fw-bold"],[1,"row","mb-10"],["id","incident-poi",2,"height","20vh"],[1,"col-6"],[1,"fs-5","fw-bold"],[1,"table-responsive","mb-4"],[1,"table"],[1,"text-muted"],[4,"ngFor","ngForOf"],[1,"col-12"],["class","col-12 mb-5",4,"ngFor","ngForOf"],[1,"fs-5","mb-4"],[1,"col-12","mb-5"],[1,"overlay"],["alt","",1,"w-100","card-rounded",3,"src"],[1,"overlay-layer","bg-dark","card-rounded","bg-opacity-25"],["target","_blank",1,"btn","btn-link",3,"href"],[1,"bi","bi-eye-fill","fs-2x","text-white"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a.TgZ(5,"div",5),a.TgZ(6,"h3",6),a._uU(7),a.qZA(),a.TgZ(8,"div",7),a.TgZ(9,"span",8),a._uU(10),a.qZA(),a._UZ(11,"br"),a.TgZ(12,"span"),a._uU(13),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(14,"div",9),a._UZ(15,"div",10),a.qZA(),a.TgZ(16,"div",9),a.TgZ(17,"div",11),a.TgZ(18,"div",12),a.TgZ(19,"div",13),a.TgZ(20,"table",14),a.TgZ(21,"tr"),a.TgZ(22,"td",15),a._uU(23,"Country"),a.qZA(),a.TgZ(24,"td"),a._uU(25),a.qZA(),a.qZA(),a.TgZ(26,"tr"),a.TgZ(27,"td",15),a._uU(28,"Region"),a.qZA(),a.TgZ(29,"td"),a._uU(30),a.qZA(),a.qZA(),a.TgZ(31,"tr"),a.TgZ(32,"td",15),a._uU(33,"State"),a.qZA(),a.TgZ(34,"td"),a._uU(35),a.qZA(),a.qZA(),a.TgZ(36,"tr"),a.TgZ(37,"td",15),a._uU(38,"LGA"),a.qZA(),a.TgZ(39,"td"),a._uU(40),a.qZA(),a.qZA(),a.TgZ(41,"tr"),a.TgZ(42,"td",15),a._uU(43,"Ward"),a.qZA(),a.TgZ(44,"td"),a._uU(45),a.qZA(),a.qZA(),a.TgZ(46,"tr"),a.TgZ(47,"td",15),a._uU(48,"Village"),a.qZA(),a.TgZ(49,"td"),a._uU(50),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(51,"div",11),a.TgZ(52,"div",12),a.TgZ(53,"div",13),a.TgZ(54,"table",14),a.YNc(55,r,5,2,"tr",16),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(56,"div",17),a.YNc(57,d,6,2,"div",18),a.qZA(),a.TgZ(58,"div",17),a.TgZ(59,"p",19),a._uU(60),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(7),a.Oqu(e.incidentData.IncidentTypeName),a.xp6(3),a.Oqu(e.incidentData.AccountName),a.xp6(3),a.hij("Reported on ",e.incidentData.DateReported,""),a.xp6(12),a.Oqu(e.incidentData.Country),a.xp6(5),a.Oqu(e.incidentData.Region),a.xp6(5),a.Oqu(e.incidentData.State),a.xp6(5),a.Oqu(e.incidentData.LGA),a.xp6(5),a.Oqu(e.incidentData.Ward),a.xp6(5),a.Oqu(e.incidentData.Village),a.xp6(5),a.Q6J("ngForOf",e.incidentData.metadata),a.xp6(2),a.Q6J("ngForOf",e.incidentData.IncidentImages),a.xp6(3),a.Oqu(e.incidentData.IncidentName))},directives:[o.sg],styles:[""]}),t})()},4956:(t,e,n)=>{"use strict";n.r(e),n.d(e,{DataManagersModule:()=>W});var i=n(1116),a=n(1462),o=n(5425),r=n(7349),d=n(1190),s=n(549),c=n(5366),l=n(3458),g=n(570);let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-shell"]],decls:5,vars:0,consts:[[1,"d-flex","flex-column","flex-root"],[1,"page","d-flex","flex-row","flex-column-fluid"],["title","Info Officers Dashboard"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c._UZ(2,"app-sidebar"),c._UZ(3,"app-header",2),c._UZ(4,"router-outlet"),c.qZA(),c.qZA())},directives:[l.k,g.G,d.lC],styles:[""]}),t})();var Z=n(3559),p=n(4733),f=n(7320),m=n(4126),h=n(9151),T=n(2512),A=n(9609),q=n(8135),v=n(5943),b=n(8281),x=n(9130);function w(t,e){if(1&t&&(c.TgZ(0,"option",30),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.s9C("value",t.id),c.xp6(1),c.Oqu(t.text)}}function _(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td",34),c.NdJ("click",function(){const e=c.CHM(t).index;return c.oxw(2).removeMetadataField(e)}),c.TgZ(6,"span",35),c._UZ(7,"i",36),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit;c.xp6(2),c.Oqu(t.field),c.xp6(2),c.Oqu(t.value)}}function y(t,e){if(1&t&&(c.TgZ(0,"div",4),c.TgZ(1,"div",31),c.TgZ(2,"table",32),c.TgZ(3,"thead"),c.TgZ(4,"th"),c._uU(5,"Metadata"),c.qZA(),c.TgZ(6,"th"),c._uU(7,"Value"),c.qZA(),c.TgZ(8,"th"),c._uU(9,"Action"),c.qZA(),c.qZA(),c.TgZ(10,"tbody"),c.YNc(11,_,8,2,"tr",33),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(11),c.Q6J("ngForOf",t.metadataFields)}}function D(t,e){if(1&t&&(c.TgZ(0,"option",30),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.s9C("value",t),c.xp6(1),c.Oqu(t)}}let U=(()=>{class t{constructor(t,e,n,i,a){this.serverRequest=t,this.modalService=e,this.toastService=n,this.storage=i,this.events=a,this.incidentData={},this.metadataFields=[],this.incidentTypeList=[],this.selectedMetadata={field:"",value:""},this.select2Options={containerCssClass:"form-control",width:"100%"},this.select2Options_metadata={containerCssClass:"form-control",width:"100%"},this.select2Data={countryList:[],regionList:[],stateList:[],lgaList:[],wardList:[],villageList:[],localityList:[],incidentCategoryList:[],incidentTypeList:[],factionList:[],friendlyForcesList:[],terrainList:[],associatedFeatureList:[],metadataList:[]},this.formData={}}ngOnInit(){this.storage.getItem("sessionInfo").subscribe(t=>{t=JSON.parse(t),this.userId=t.userId}),this.initFormData(),this.loadCountries(),this.loadIncidentTypes(),this.loadMetadataFields(),this.events.getEvent("approve-reviewed-incident").subscribe(t=>{null!=t&&t.IncidentId==this.incidentData.IncidentId&&this.saveIncidence()})}saveIncidence(){void 0!==this.formData.poiLatitude&&""!=this.formData.poiLatitude||(this.formData.poiLatitude=0),void 0!==this.formData.poiLongitude&&""!=this.formData.poiLongitude||(this.formData.poiLongitude=0);let t={name:this.formData.incidentTitle,type:this.formData.incidentType,location:{country:this.formData.country,region:this.formData.region,state:this.formData.state,lga:this.formData.lga,ward:this.formData.ward,village:this.formData.village,locality:this.formData.locality},date:A(this.formData.incidentDate+"T"+this.formData.incidentTime).format("D/M/YYYY HH:mm:ss"),pointOfInterest:"POINT("+this.formData.poiLatitude+" "+this.formData.poiLongitude+")",description:this.formData.comments,images:this.formData.files,metadata:{}};this.metadataFields.forEach(e=>{t.metadata[e.field]=e.value}),this.serverRequest.post("incidents/incident/edit-incident",{userId:this.userId,incidentId:this.incidentData.IncidentId,incidentData:t}).subscribe(t=>{alert("Incidence has been reviewed and approved successfully"),this.initFormData(),this.modalService.dismissAll()},t=>{this.toastService.show("An error occurred. Incidence record not reported successfully",{classname:"bg-danger text-white",delay:1e4})})}addMetadataField(){this.metadataFields.push({field:this.selectedMetadata.field,value:this.selectedMetadata.value}),this.selectedMetadata={field:"",value:""}}removeMetadataField(t){this.metadataFields.splice(t,1)}initFormData(){this.formData={country:"",region:"",state:"",lga:"",ward:"",village:"",locality:"",incidentTitle:"",incidentCategory:"",incidentType:"",comments:"",files:[],metadata:[]}}loadCountries(){this.loadSpatialEntityList("countryList","spatial-entity/entity/view-entities-by-type?entityType=1")}loadSpatialEntityChildren(t,e){""!=e&&this.loadSpatialEntityList(t,"spatial-entity/entity/view-entity-children?entityId="+e)}loadSpatialEntityList(t,e){this.serverRequest.get(e).subscribe(e=>{this.select2Data[t]=[],e.contentData.forEach(e=>{this.select2Data[t].push(e.EntityName)})})}loadRegions(t){this.loadSpatialEntityChildren("regionList",this.formData.country)}loadStates(t){this.loadSpatialEntityChildren("stateList",this.formData.region)}loadLgas(t){this.loadSpatialEntityChildren("lgaList",this.formData.state)}loadWards(t){this.loadSpatialEntityChildren("wardList",this.formData.lga)}loadVillages(t){this.loadSpatialEntityChildren("villageList",this.formData.ward)}loadLocalities(t){this.loadSpatialEntityChildren("localityList",this.formData.village)}loadIncidentTypes(){this.serverRequest.get("incidents/incident-type/view-incident-types?resourceId=1").subscribe(t=>{this.select2Data.incidentTypeList=[],t.contentData.forEach(t=>{this.select2Data.incidentTypeList.push({id:t.IncidentTypeId,text:t.IncidentTypeName})})})}getLatLon(t){return t.replace("POINT(","").replace(")","").split(" ")}loadMetadataFields(){this.serverRequest.get("incidents/metadata/get-list").subscribe(t=>{t.contentData.forEach(t=>{this.select2Data.metadataList.push(t.FieldName)})})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(f.I),c.Y36(m.FF),c.Y36(q.k),c.Y36(v.V),c.Y36(h.n))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-edit-field-report"]],inputs:{incidentData:"incidentData"},decls:121,vars:35,consts:[["id","kt_content_container",1,"container"],[1,"card"],[1,"card-body"],[1,"mb-5"],[1,"row"],[1,"col-5","form-group"],[1,"font-weight-semibold"],[1,"badge","badge-light-primary","fs-7","fw-bold"],["name","incidentType",1,"form-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-4","form-group"],["type","date","name","incidentDate",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","form-group"],["type","time","name","incidentTime",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-6","form-group"],["name","country",3,"ngModel","data","options","ngModelChange"],["name","region",3,"ngModel","data","options","ngModelChange"],["name","state",3,"ngModel","data","options","ngModelChange"],["name","lga",3,"ngModel","data","options","ngModelChange"],["type","text","name","ward",1,"form-control",3,"ngModel","ngModelChange","change"],["type","text","name","village",1,"form-control",3,"ngModel","ngModelChange","change"],["type","text","name","locality",1,"form-control",3,"ngModel","ngModelChange"],["class","row",4,"ngIf"],[1,"row","more-height"],["name","selectedMetadataField",1,"form-select",3,"ngModel","ngModelChange"],["type","number","name","selectedMetadataValue",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","d-flex","justify-content-center"],["type","button",1,"btn","btn-primary","col-4",3,"click"],[1,"fa","fa-plus"],["aria-live","polite","aria-atomic","true"],[3,"value"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"click"],[1,"btn","btn-link","btn-sm"],[1,"text-danger","fa","fa-times"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"form"),c.TgZ(5,"div",4),c.TgZ(6,"div",5),c.TgZ(7,"label",6),c._uU(8,"Incident Type "),c._UZ(9,"br"),c.TgZ(10,"span",7),c._uU(11),c.qZA(),c._uU(12,":"),c.qZA(),c.TgZ(13,"select",8),c.NdJ("ngModelChange",function(t){return e.formData.incidentType=t}),c._UZ(14,"option"),c.YNc(15,w,2,2,"option",9),c.qZA(),c.qZA(),c.TgZ(16,"div",10),c.TgZ(17,"label",6),c._uU(18,"Date "),c._UZ(19,"span",7),c._uU(20,":"),c._UZ(21,"br"),c.qZA(),c.TgZ(22,"input",11),c.NdJ("ngModelChange",function(t){return e.formData.incidentDate=t}),c.qZA(),c.qZA(),c.TgZ(23,"div",12),c.TgZ(24,"label",6),c._uU(25,"Time "),c._UZ(26,"span",7),c._uU(27,":"),c._UZ(28,"br"),c.qZA(),c.TgZ(29,"input",13),c.NdJ("ngModelChange",function(t){return e.formData.incidentTime=t}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(30,"div",4),c.TgZ(31,"div",14),c.TgZ(32,"label",6),c._uU(33,"Country "),c._UZ(34,"br"),c.TgZ(35,"span",7),c._uU(36),c.qZA(),c._uU(37,":"),c.qZA(),c.TgZ(38,"ng-select2",15),c.NdJ("ngModelChange",function(t){return e.formData.country=t})("ngModelChange",function(t){return e.loadRegions(t)}),c.qZA(),c.qZA(),c.TgZ(39,"div",14),c.TgZ(40,"label",6),c._uU(41,"Region "),c._UZ(42,"br"),c.TgZ(43,"span",7),c._uU(44),c.qZA(),c._uU(45,":"),c.qZA(),c.TgZ(46,"ng-select2",16),c.NdJ("ngModelChange",function(t){return e.formData.region=t})("ngModelChange",function(t){return e.loadStates(t)}),c.qZA(),c.qZA(),c.TgZ(47,"div",14),c.TgZ(48,"label",6),c._uU(49,"State "),c._UZ(50,"br"),c.TgZ(51,"span",7),c._uU(52),c.qZA(),c._uU(53,":"),c.qZA(),c.TgZ(54,"ng-select2",17),c.NdJ("ngModelChange",function(t){return e.formData.state=t})("ngModelChange",function(t){return e.loadLgas(t)}),c.qZA(),c.qZA(),c.TgZ(55,"div",14),c.TgZ(56,"label",6),c._uU(57,"LGA "),c._UZ(58,"br"),c.TgZ(59,"span",7),c._uU(60),c.qZA(),c._uU(61,":"),c.qZA(),c.TgZ(62,"ng-select2",18),c.NdJ("ngModelChange",function(t){return e.formData.lga=t})("ngModelChange",function(t){return e.loadWards(t)}),c.qZA(),c.qZA(),c.TgZ(63,"div",14),c.TgZ(64,"label",6),c._uU(65,"Ward "),c._UZ(66,"br"),c.TgZ(67,"span",7),c._uU(68),c.qZA(),c._uU(69,":"),c.qZA(),c.TgZ(70,"input",19),c.NdJ("ngModelChange",function(t){return e.formData.ward=t})("change",function(t){return e.loadVillages(t)}),c.qZA(),c.qZA(),c.TgZ(71,"div",14),c.TgZ(72,"label",6),c._uU(73,"Village "),c._UZ(74,"br"),c.TgZ(75,"span",7),c._uU(76),c.qZA(),c._uU(77,":"),c.qZA(),c.TgZ(78,"input",20),c.NdJ("ngModelChange",function(t){return e.formData.village=t})("change",function(t){return e.loadLocalities(t)}),c.qZA(),c.qZA(),c.TgZ(79,"div",14),c.TgZ(80,"label",6),c._uU(81,"Locality / Area "),c._UZ(82,"br"),c.TgZ(83,"span",7),c._uU(84),c.qZA(),c._uU(85,":"),c.qZA(),c.TgZ(86,"input",21),c.NdJ("ngModelChange",function(t){return e.formData.locality=t}),c.qZA(),c.qZA(),c.TgZ(87,"div",12),c.TgZ(88,"label",6),c._uU(89,"POI Latitude "),c._UZ(90,"br"),c.TgZ(91,"span",7),c._uU(92),c.qZA(),c._uU(93,":"),c.qZA(),c.TgZ(94,"input",21),c.NdJ("ngModelChange",function(t){return e.formData.poiLatitude=t}),c.qZA(),c.qZA(),c.TgZ(95,"div",12),c.TgZ(96,"label",6),c._uU(97,"POI Longitude "),c._UZ(98,"br"),c.TgZ(99,"span",7),c._uU(100),c.qZA(),c._uU(101,":"),c.qZA(),c.TgZ(102,"input",21),c.NdJ("ngModelChange",function(t){return e.formData.poiLongitude=t}),c.qZA(),c.qZA(),c.qZA(),c.YNc(103,y,12,1,"div",22),c.TgZ(104,"div",23),c.TgZ(105,"div",14),c.TgZ(106,"label",6),c._uU(107,"Metadata:"),c.qZA(),c.TgZ(108,"select",24),c.NdJ("ngModelChange",function(t){return e.selectedMetadata.field=t}),c.TgZ(109,"option"),c._uU(110,"Select"),c.qZA(),c.YNc(111,D,2,2,"option",9),c.qZA(),c.qZA(),c.TgZ(112,"div",14),c.TgZ(113,"label",6),c._uU(114,"Value:"),c.qZA(),c.TgZ(115,"input",25),c.NdJ("ngModelChange",function(t){return e.selectedMetadata.value=t}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(116,"div",26),c.TgZ(117,"button",27),c.NdJ("click",function(){return e.addMetadataField()}),c._UZ(118,"i",28),c._uU(119," Add Metadata"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(120,"app-toast-container",29)),2&t&&(c.xp6(11),c.Oqu(e.incidentData.IncidentTypeName),c.xp6(2),c.Q6J("ngModel",e.formData.incidentType),c.xp6(2),c.Q6J("ngForOf",e.select2Data.incidentTypeList),c.xp6(7),c.Q6J("ngModel",e.formData.incidentDate),c.xp6(7),c.Q6J("ngModel",e.formData.incidentTime),c.xp6(7),c.Oqu(e.incidentData.Country),c.xp6(2),c.Q6J("ngModel",e.formData.country)("data",e.select2Data.countryList)("options",e.select2Options),c.xp6(6),c.Oqu(e.incidentData.Region),c.xp6(2),c.Q6J("ngModel",e.formData.region)("data",e.select2Data.regionList)("options",e.select2Options),c.xp6(6),c.Oqu(e.incidentData.State),c.xp6(2),c.Q6J("ngModel",e.formData.state)("data",e.select2Data.stateList)("options",e.select2Options),c.xp6(6),c.Oqu(e.incidentData.LGA),c.xp6(2),c.Q6J("ngModel",e.formData.lga)("data",e.select2Data.lgaList)("options",e.select2Options),c.xp6(6),c.Oqu(e.incidentData.Ward),c.xp6(2),c.Q6J("ngModel",e.formData.ward),c.xp6(6),c.Oqu(e.incidentData.Village),c.xp6(2),c.Q6J("ngModel",e.formData.village),c.xp6(6),c.Oqu(e.incidentData.Locality),c.xp6(2),c.Q6J("ngModel",e.formData.locality),c.xp6(6),c.Oqu(e.getLatLon(e.incidentData.IncidentPointOfInterest)[0]),c.xp6(2),c.Q6J("ngModel",e.formData.poiLatitude),c.xp6(6),c.Oqu(e.getLatLon(e.incidentData.IncidentPointOfInterest)[1]),c.xp6(2),c.Q6J("ngModel",e.formData.poiLongitude),c.xp6(1),c.Q6J("ngIf",e.metadataFields.length>0),c.xp6(5),c.Q6J("ngModel",e.selectedMetadata.field),c.xp6(3),c.Q6J("ngForOf",e.select2Data.metadataList),c.xp6(4),c.Q6J("ngModel",e.selectedMetadata.value))},directives:[a._Y,a.JL,a.F,a.EJ,a.JJ,a.On,a.YN,a.Kr,i.sg,a.Fj,b.c,i.O5,a.wV,x.J],styles:[".more-height[_ngcontent-%COMP%] > .form-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]{height:45px}"]}),t})(),M=(()=>{class t{constructor(){this.incidentData={}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-decline-field-report"]],inputs:{incidentData:"incidentData"},decls:10,vars:0,consts:[["id","kt_content_container",1,"container"],[1,"card"],[1,"card-body"],[1,"mb-5"],[1,"row"],[1,"col-12","form-group"],[1,"font-weight-semibold"],["rows","10",1,"form-control"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"form"),c.TgZ(5,"div",4),c.TgZ(6,"div",5),c.TgZ(7,"label",6),c._uU(8,"Comments:"),c.qZA(),c._UZ(9,"textarea",7),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA())},directives:[a._Y,a.JL,a.F],styles:[""]}),t})();function C(t,e){if(1&t&&(c.TgZ(0,"span",52),c.TgZ(1,"span",53),c._uU(2),c.qZA(),c.TgZ(3,"span",54),c._uU(4,"Area"),c.qZA(),c.qZA()),2&t){const t=c.oxw().$implicit;c.xp6(2),c.hij("",t.Locality," ")}}function I(t,e){if(1&t&&(c.TgZ(0,"span",52),c.TgZ(1,"span",53),c._uU(2),c.qZA(),c.TgZ(3,"span",54),c._uU(4,"Ward"),c.qZA(),c.qZA()),2&t){const t=c.oxw().$implicit;c.xp6(2),c.hij("",t.Ward," ")}}function O(t,e){if(1&t&&(c.TgZ(0,"span",52),c.TgZ(1,"span",53),c._uU(2),c.qZA(),c.TgZ(3,"span",54),c._uU(4,"Village"),c.qZA(),c.qZA()),2&t){const t=c.oxw().$implicit;c.xp6(2),c.hij("",t.Village," ")}}function N(t,e){1&t&&(c.TgZ(0,"span",55),c._uU(1,"Unreviewed"),c.qZA())}function L(t,e){1&t&&(c.TgZ(0,"span",56),c._uU(1,"Approved"),c.qZA())}function k(t,e){if(1&t&&(c.TgZ(0,"span",44),c._UZ(1,"br"),c._uU(2),c.qZA()),2&t){const t=c.oxw().$implicit;c.xp6(2),c.Oqu(t.ReviewedByAccountName)}}function J(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"td"),c.TgZ(1,"span",57),c.NdJ("click",function(){c.CHM(t);const e=c.oxw().$implicit,n=c.oxw(2),i=c.MAs(67);return n.openIncidentForReview(e,i)}),c._UZ(2,"i",58),c._uU(3,"\xa0 "),c.qZA(),c.TgZ(4,"span",57),c.NdJ("click",function(){c.CHM(t);const e=c.oxw().$implicit,n=c.oxw(2),i=c.MAs(67);return n.openIncidentForDecline(e,i)}),c._UZ(5,"i",59),c._uU(6,"\xa0 "),c.qZA(),c.qZA()}}function F(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"td"),c.TgZ(1,"span",60),c.NdJ("click",function(){c.CHM(t);const e=c.oxw().$implicit,n=c.oxw(2),i=c.MAs(67);return n.openIncident(e,i)}),c._uU(2," view "),c.qZA(),c.qZA()}}function S(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"td",41),c.NdJ("click",function(){const e=c.CHM(t).$implicit,n=c.oxw(2),i=c.MAs(67);return n.openIncident(e,i)}),c._uU(2),c.qZA(),c.TgZ(3,"td",42),c.NdJ("click",function(){const e=c.CHM(t).$implicit,n=c.oxw(2),i=c.MAs(67);return n.openIncident(e,i)}),c._uU(4),c.qZA(),c.TgZ(5,"td",41),c.NdJ("click",function(){const e=c.CHM(t).$implicit,n=c.oxw(2),i=c.MAs(67);return n.openIncident(e,i)}),c.TgZ(6,"div",3),c.TgZ(7,"div",43),c.TgZ(8,"span",44),c._uU(9),c.qZA(),c.TgZ(10,"span",45),c._uU(11),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(12,"td",41),c.NdJ("click",function(){const e=c.CHM(t).$implicit,n=c.oxw(2),i=c.MAs(67);return n.openIncident(e,i)}),c.TgZ(13,"span",46),c._uU(14),c.qZA(),c.YNc(15,C,5,1,"span",47),c.YNc(16,I,5,1,"span",47),c.YNc(17,O,5,1,"span",47),c.TgZ(18,"span",48),c._uU(19),c.qZA(),c.qZA(),c.TgZ(20,"td",41),c.NdJ("click",function(){const e=c.CHM(t).$implicit,n=c.oxw(2),i=c.MAs(67);return n.openIncident(e,i)}),c._uU(21),c.qZA(),c.TgZ(22,"td",41),c.NdJ("click",function(){const e=c.CHM(t).$implicit,n=c.oxw(2),i=c.MAs(67);return n.openIncident(e,i)}),c._uU(23),c.qZA(),c.TgZ(24,"td",41),c.NdJ("click",function(){const e=c.CHM(t).$implicit,n=c.oxw(2),i=c.MAs(67);return n.openIncident(e,i)}),c.YNc(25,N,2,0,"span",49),c.YNc(26,L,2,0,"span",50),c.YNc(27,k,3,1,"span",51),c.qZA(),c.YNc(28,J,7,0,"td",38),c.YNc(29,F,3,0,"td",38),c.qZA()}if(2&t){const t=e.$implicit;c.xp6(2),c.Oqu(t.IncidentId),c.xp6(2),c.Oqu(t.IncidentName),c.xp6(5),c.Oqu(t.AccountName),c.xp6(2),c.AsE("",t.FirstName," ",t.LastName,""),c.xp6(3),c.AsE("",t.LGA,", ",t.State,""),c.xp6(1),c.Q6J("ngIf","UNKNOWN LOCALITY"!=t.Locality),c.xp6(1),c.Q6J("ngIf","UNKNOWN WARD"!=t.Ward),c.xp6(1),c.Q6J("ngIf","UNKNOWN VILLAGE"!=t.Village),c.xp6(2),c.Oqu(t.Country),c.xp6(2),c.Oqu(t.IncidentTypeName),c.xp6(2),c.Oqu(t.IncidentDate),c.xp6(2),c.Q6J("ngIf",0!=t.StatusCode),c.xp6(1),c.Q6J("ngIf",0==t.StatusCode),c.xp6(1),c.Q6J("ngIf",0==t.StatusCode),c.xp6(1),c.Q6J("ngIf",0!=t.StatusCode),c.xp6(1),c.Q6J("ngIf",0==t.StatusCode)}}function R(t,e){if(1&t&&(c.TgZ(0,"tbody"),c.YNc(1,S,30,18,"tr",40),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngForOf",t.currentData)}}function Q(t,e){1&t&&(c.TgZ(0,"tbody"),c.TgZ(1,"tr"),c.TgZ(2,"td",61),c._uU(3,"No incidences available"),c.qZA(),c.qZA(),c.qZA())}function Y(t,e){if(1&t&&(c.TgZ(0,"div",72),c._UZ(1,"app-edit-field-report",69),c.qZA()),2&t){const t=c.oxw(2);c.xp6(1),c.Q6J("incidentData",t.currentView)}}function E(t,e){if(1&t&&(c.TgZ(0,"div",72),c._UZ(1,"app-decline-field-report",69),c.qZA()),2&t){const t=c.oxw(2);c.xp6(1),c.Q6J("incidentData",t.currentView)}}function V(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",73),c.TgZ(1,"button",74),c.NdJ("click",function(){return c.CHM(t),c.oxw(2).initForReview()}),c._uU(2,"Review & Approve"),c.qZA(),c.TgZ(3,"button",75),c.NdJ("click",function(){return c.CHM(t),c.oxw(2).initForDecline()}),c._uU(4,"Decline"),c.qZA(),c.qZA()}}function $(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",73),c.TgZ(1,"button",76),c.NdJ("click",function(){return c.CHM(t),c.oxw(2).sendApproveEvent()}),c._uU(2,"Approve Report"),c.qZA(),c.qZA()}}function P(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",73),c.TgZ(1,"button",75),c.NdJ("click",function(){return c.CHM(t),c.oxw(2).sendDeclineEvent()}),c._uU(2,"Decline Report"),c.qZA(),c.qZA()}}const j=function(t,e){return{"col-12":t,"col-5":e}};function z(t,e){if(1&t&&(c.TgZ(0,"div",62),c.TgZ(1,"h4",63),c._uU(2,"Field Incident Report"),c.qZA(),c.TgZ(3,"button",64),c.NdJ("click",function(){return e.$implicit.dismiss("Cross click")}),c.TgZ(4,"span",65),c._uU(5,"\xd7"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"div",66),c.TgZ(7,"div",67),c.TgZ(8,"div",68),c._UZ(9,"app-view-single-field-report",69),c.qZA(),c.YNc(10,Y,2,1,"div",70),c.YNc(11,E,2,1,"div",70),c.qZA(),c.qZA(),c.YNc(12,V,5,0,"div",71),c.YNc(13,$,3,0,"div",71),c.YNc(14,P,3,0,"div",71)),2&t){const t=c.oxw();c.xp6(8),c.Q6J("ngClass",c.WLB(7,j,!t.forReview&&!t.forDecline,t.forReview||t.forDecline)),c.xp6(1),c.Q6J("incidentData",t.currentView),c.xp6(1),c.Q6J("ngIf",t.forReview),c.xp6(1),c.Q6J("ngIf",t.forDecline),c.xp6(1),c.Q6J("ngIf",!t.forReview&&!t.forDecline),c.xp6(1),c.Q6J("ngIf",t.forReview),c.xp6(1),c.Q6J("ngIf",t.forDecline)}}const H=[{path:"",component:u,canActivate:[s.P],children:[{path:"field-reports",component:(()=>{class t{constructor(t,e,n){this.serverRequest=t,this.modalService=e,this.events=n,this.globalDateRange={startDate:"",endDate:""},this.currentData=[],this.currentView={},this.forReview=!1,this.forDecline=!1,this.dtOptions={paging:!1,lengthChange:!1,pagingType:"full_numbers",pageLength:100,serverSide:!0,processing:!0,ajax:(t,e)=>{this.serverRequest.get("incidents/incident/view-raw-data?length="+t.length+"&start="+t.start+"&search="+t.search.value+"&startDate="+this.globalDateRange.startDate+"&endDate="+this.globalDateRange.endDate).subscribe(t=>{this.currentData=[],this.currentData=t.contentData.data,e({recordsTotal:t.contentData.recordsTotal,recordsFiltered:t.contentData.recordsFiltered,data:[]})})}},this.dtTrigger=new Z.xQ}ngOnInit(){this.dtTrigger.next(),setTimeout(()=>{this.rerender()},500)}ngAfterViewInit(){this.dtTrigger.next()}ngOnDestroy(){this.dtTrigger.unsubscribe()}rerender(){this.dtElement.dtInstance.then(t=>{t.destroy(),this.dtTrigger.next()})}openIncident(t,e){this.forReview=!1,this.forDecline=!1,this.currentView=t,this.modalRef=this.modalService.open(e,{backdropClass:"modal-backdrop",size:"xl",scrollable:!0})}openIncidentForReview(t,e){this.initForReview(),this.currentView=t,this.modalRef=this.modalService.open(e,{backdropClass:"modal-backdrop",size:"xl",scrollable:!0})}openIncidentForDecline(t,e){this.initForDecline(),this.currentView=t,this.modalRef=this.modalService.open(e,{backdropClass:"modal-backdrop",size:"xl",scrollable:!0})}initForReview(){this.forReview=!0,this.forDecline=!1}initForDecline(){this.forDecline=!0,this.forReview=!1}sendApproveEvent(){this.events.broadcast("approve-reviewed-incident",{IncidentId:this.currentView.IncidentId})}sendDeclineEvent(){this.events.broadcast("decline-reviewed-incident",{status:!0})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(f.I),c.Y36(m.FF),c.Y36(h.n))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-view-field-reports"]],viewQuery:function(t,e){if(1&t&&c.Gf(p.G,5),2&t){let t;c.iGM(t=c.CRH())&&(e.dtElement=t.first)}},decls:68,vars:4,consts:[[1,"wrapper","d-flex","flex-column","flex-row-fluid"],[1,"card","rounded-0","bgi-no-repeat","bgi-position-x-end","bgi-size-cover",2,"background-color","#4b5320","background-size","auto 100%"],[1,"card-body","container","pt-10","pb-8"],[1,"d-flex","align-items-center"],[1,"fw-bold","me-3","text-white"],[1,"fw-bold","text-white","opacity-50"],[1,"d-flex","flex-column"],[1,"d-lg-flex","align-lg-items-center"],[1,"rounded","d-flex","flex-column","flex-lg-row","align-items-lg-center","bg-white","p-5","w-xxl-850px","h-lg-60px","me-lg-10","my-5"],[1,"row","flex-grow-1","mb-5","mb-lg-0"],[1,"col-lg-4","d-flex","align-items-center","mb-3","mb-lg-0"],[1,"svg-icon","svg-icon-1","svg-icon-gray-400","me-1"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","24px","height","24px","viewBox","0 0 24 24","version","1.1"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["x","0","y","0","width","24","height","24"],["d","M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z","fill","#000000","fill-rule","nonzero","opacity","0.3"],["d","M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z","fill","#000000","fill-rule","nonzero"],["type","text","name","search","value","","placeholder","Keyword",1,"form-control","form-control-flush","flex-grow-1"],[1,"col-lg-4","d-flex","align-items-center","mb-5","mb-lg-0"],[1,"bullet","bg-secondary","d-none","d-lg-block","h-30px","w-2px","me-5"],["x","5","y","5","width","5","height","5","rx","1","fill","#000000"],["x","14","y","5","width","5","height","5","rx","1","fill","#000000","opacity","0.3"],["x","5","y","14","width","5","height","5","rx","1","fill","#000000","opacity","0.3"],["x","14","y","14","width","5","height","5","rx","1","fill","#000000","opacity","0.3"],["data-control","select2","data-placeholder","Incident Type","data-hide-search","true",1,"form-select","border-0","flex-grow-1"],["value",""],["value","1","selected","selected"],[1,"col-lg-4","d-flex","align-items-center"],[1,"svg-icon","svg-icon-1","svg-icon-gray-400","me-3"],["d","M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z","fill","#000000","fill-rule","nonzero"],["type","text","name","search","value","","placeholder","Location",1,"form-control","form-control-flush","flex-grow-1"],[1,"min-w-150px","text-end"],["type","submit","id","kt_advanced_search_button_1",1,"btn","btn-dark"],[1,"col-md-12","table-responsive"],["datatable","",1,"table","table-hover","align-middle","gs-0","gy-4",3,"dtOptions","dtTrigger"],[1,"fw-bolder","text-muted","bg-light"],[1,"min-w-200px"],[1,"text-center"],[4,"ngIf"],["content",""],[4,"ngFor","ngForOf"],[3,"click"],[1,"min-w-200px",3,"click"],[1,"d-flex","justify-content-start","flex-column"],[1,"text-dark","fw-bolder","text-hover-primary","mb-1","fs-6"],[1,"text-muted","fw-bold","text-muted","d-block","fs-7"],[1,"text-dark","fw-bolder","text-hover-primary","d-block","mb-1","fs-6"],["class","text-muted d-block fs-7",4,"ngIf"],[1,"text-muted","text-small","text-muted","d-block","fs-7"],["class","badge badge-light-primary fs-7 fw-bold",4,"ngIf"],["class","badge badge-success fs-7 fw-bold",4,"ngIf"],["class","text-dark fw-bolder text-hover-primary mb-1 fs-6",4,"ngIf"],[1,"text-muted","d-block","fs-7"],[1,"text-muted","fw-bold"],[1,"text-small"],[1,"badge","badge-light-primary","fs-7","fw-bold"],[1,"badge","badge-success","fs-7","fw-bold"],[1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","me-1",3,"click"],[1,"fa","fa-edit"],[1,"fa","fa-times","text-danger"],[1,"btn","btn-icon","btn-bg-light","btn-active-color-success","btn-sm","me-1",3,"click"],["colspan","10"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[3,"ngClass"],[3,"incidentData"],["class","col-7 left-border",4,"ngIf"],["class","modal-footer",4,"ngIf"],[1,"col-7","left-border"],[1,"modal-footer"],["type","button",1,"btn","btn-info",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-success",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"h1",4),c._uU(5,"Reported Field Incidents"),c.qZA(),c.TgZ(6,"span",5),c._uU(7,"Data Management Portal"),c.qZA(),c.qZA(),c.TgZ(8,"div",6),c.TgZ(9,"div",7),c.TgZ(10,"div",8),c.TgZ(11,"div",9),c.TgZ(12,"div",10),c.TgZ(13,"span",11),c.O4$(),c.TgZ(14,"svg",12),c.TgZ(15,"g",13),c._UZ(16,"rect",14),c._UZ(17,"path",15),c._UZ(18,"path",16),c.qZA(),c.qZA(),c.qZA(),c.kcU(),c._UZ(19,"input",17),c.qZA(),c.TgZ(20,"div",18),c._UZ(21,"div",19),c.TgZ(22,"span",11),c.O4$(),c.TgZ(23,"svg",12),c.TgZ(24,"g",13),c._UZ(25,"rect",20),c._UZ(26,"rect",21),c._UZ(27,"rect",22),c._UZ(28,"rect",23),c.qZA(),c.qZA(),c.qZA(),c.kcU(),c.TgZ(29,"select",24),c._UZ(30,"option",25),c.TgZ(31,"option",26),c._uU(32,"Incident Type"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(33,"div",27),c._UZ(34,"div",19),c.TgZ(35,"span",28),c.O4$(),c.TgZ(36,"svg",12),c.TgZ(37,"g",13),c._UZ(38,"rect",14),c._UZ(39,"path",29),c.qZA(),c.qZA(),c.qZA(),c.kcU(),c._UZ(40,"input",30),c.qZA(),c.qZA(),c.TgZ(41,"div",31),c.TgZ(42,"button",32),c._uU(43,"Search"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(44,"div",33),c.TgZ(45,"table",34),c.TgZ(46,"thead"),c.TgZ(47,"tr",35),c.TgZ(48,"th"),c._uU(49,"ID"),c.qZA(),c.TgZ(50,"th",36),c._uU(51,"Incident"),c.qZA(),c.TgZ(52,"th"),c._uU(53,"Account"),c.qZA(),c.TgZ(54,"th"),c._uU(55,"Location"),c.qZA(),c.TgZ(56,"th"),c._uU(57,"Incident Type"),c.qZA(),c.TgZ(58,"th"),c._uU(59,"Date"),c.qZA(),c.TgZ(60,"th"),c._uU(61,"Status"),c.qZA(),c.TgZ(62,"th",37),c._uU(63,"Actions"),c.qZA(),c.qZA(),c.qZA(),c.YNc(64,R,2,1,"tbody",38),c.YNc(65,Q,4,0,"tbody",38),c.qZA(),c.qZA(),c.qZA(),c.YNc(66,z,15,10,"ng-template",null,39,c.W1O)),2&t&&(c.xp6(45),c.Q6J("dtOptions",e.dtOptions)("dtTrigger",e.dtTrigger),c.xp6(19),c.Q6J("ngIf",0!=(null==e.currentData?null:e.currentData.length)),c.xp6(1),c.Q6J("ngIf",0==(null==e.currentData?null:e.currentData.length)))},directives:[a.YN,a.Kr,p.G,i.O5,i.sg,i.mk,T.M,U,M],styles:[".wrapper[_ngcontent-%COMP%]{width:95vw;padding-left:0}.modal-backdrop[_ngcontent-%COMP%]{background-color:#4b5320}.w-50[_ngcontent-%COMP%]{width:50%!important}.left-border[_ngcontent-%COMP%]{min-height:100vh;border-left:1px solid #4b5320;border-radius:25px 0}"]}),t})()}]}];let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[d.Bz.forChild(H)],d.Bz]}),t})(),W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,G,o.m,r.T,b.I,a.u5]]}),t})()},9151:(t,e,n)=>{"use strict";n.d(e,{n:()=>o});var i=n(8512),a=n(5366);let o=(()=>{class t{constructor(){this.behaviorSubjects=new Map}getBehaviorSubject(t){let e=this.behaviorSubjects.get(t);return e||(e=new i.X(null),this.behaviorSubjects.set(t,e)),e}broadcast(t,e){this.getBehaviorSubject(t).next(e)}getEvent(t){return this.getBehaviorSubject(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);