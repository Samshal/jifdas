(self.webpackChunkjifdas=self.webpackChunkjifdas||[]).push([[984],{3890:function(t){"use strict";!function(e){function i(t){return window.btoa([].slice.call(new Uint8Array(t)).map(function(t){return String.fromCharCode(t)}).join(""))}t.exports=function(t,e){return"fetch"in window&&"Promise"in window?fetch(t,e||{}).then(function(t){return t.arrayBuffer()}).then(i):Promise.reject("[*] image-to-base64 is not compatible with your browser.")}}()},7984:(t,e,i)=>{"use strict";i.r(e),i.d(e,{FieldModule:()=>_});var a=i(1116),n=i(1462),o=i(5425),s=i(1190),r=i(549),l=i(5366),d=i(3458),c=i(570);let g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-shell"]],decls:5,vars:0,consts:[[1,"d-flex","flex-column","flex-root"],[1,"page","d-flex","flex-row","flex-column-fluid"],["title","Field Agents Dashboard"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l._UZ(2,"app-sidebar"),l._UZ(3,"app-header",2),l._UZ(4,"router-outlet"),l.qZA(),l.qZA())},directives:[d.k,c.G,s.lC],styles:[""]}),t})();var u=i(6673),h=i(8870);function p(t,e=h.P){return i=>i.lift(new m(t,e))}class m{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new f(t,this.dueTime,this.scheduler))}}class f extends u.L{constructor(t,e,i){super(t),this.dueTime=e,this.scheduler=i,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(Z,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function Z(t){t.debouncedNext()}var y=i(8720),T=i(9996),D=i(3219),L=i(3890),A=i.n(L),v=i(9609),b=i(7320),q=i(8135),C=i(5943),M=i(8281),w=i(4126),x=i(1882),J=i(9130);function U(t,e){1&t&&l._UZ(0,"img",41),2&t&&l.MGl("src","data:image/png;base64,",e.$implicit,"",l.LSH)}const I=[{path:"",component:g,canActivate:[r.P],children:[{path:"new-incidence",component:(()=>{class t{constructor(t,e,i){this.serverRequest=t,this.toastService=e,this.storage=i,this.select2Options={containerCssClass:"form-control",width:"100%"},this.select2Options_multiple={containerCssClass:"form-control",width:"100%",multiple:!0},this.select2Data={countryList:[],regionList:[],stateList:[],lgaList:[],wardList:[],villageList:[],localityList:[],incidentCategoryList:[],incidentTypeList:[],factionList:[],friendlyForcesList:[],terrainList:[],associatedFeatureList:[]},this.leafletOptions={layers:[D.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",{maxZoom:20,attribution:"...",subdomains:["mt0","mt1","mt2","mt3"]})],zoom:5,center:D.latLng(11,6)},this.formData={},this.searchCountries=t=>t.pipe(p(200),(0,y.x)(),(0,T.U)(t=>""===t?[]:this.select2Data.countryList.filter(e=>e.toLowerCase().indexOf(t.toLowerCase())>-1).slice(0,10))),this.searchRegions=t=>t.pipe(p(200),(0,y.x)(),(0,T.U)(t=>""===t?[]:this.select2Data.regionList.filter(e=>e.toLowerCase().indexOf(t.toLowerCase())>-1).slice(0,10))),this.searchStates=t=>t.pipe(p(200),(0,y.x)(),(0,T.U)(t=>""===t?[]:this.select2Data.stateList.filter(e=>e.toLowerCase().indexOf(t.toLowerCase())>-1).slice(0,10))),this.searchLGAs=t=>t.pipe(p(200),(0,y.x)(),(0,T.U)(t=>""===t?[]:this.select2Data.lgaList.filter(e=>e.toLowerCase().indexOf(t.toLowerCase())>-1).slice(0,10))),this.searchWards=t=>t.pipe(p(200),(0,y.x)(),(0,T.U)(t=>""===t?[]:this.select2Data.wardList.filter(e=>e.toLowerCase().indexOf(t.toLowerCase())>-1).slice(0,10))),this.searchVillages=t=>t.pipe(p(200),(0,y.x)(),(0,T.U)(t=>""===t?[]:this.select2Data.villageList.filter(e=>e.toLowerCase().indexOf(t.toLowerCase())>-1).slice(0,10))),this.searchLocalities=t=>t.pipe(p(200),(0,y.x)(),(0,T.U)(t=>""===t?[]:this.select2Data.localityList.filter(e=>e.toLowerCase().indexOf(t.toLowerCase())>-1).slice(0,10)))}ngOnInit(){this.storage.getItem("sessionInfo").subscribe(t=>{t=JSON.parse(t),this.userId=t.userId}),this.initFormData(),this.loadCountries(),this.loadIncidentTypes(),[{id:"faction",list:"factionList"},{id:"friendly_forces",list:"friendlyForcesList"},{id:"terrain",list:"terrainList"},{id:"associated_feature",list:"associatedFeatureList"}].forEach(t=>{this.loadMetadata(t.id,t.list)})}initFormData(){this.formData={country:"",region:"",state:"",lga:"",ward:"",village:"",locality:"",incidentTitle:"",incidentCategory:"",incidentType:"",faction:[],friendlyForces:[],terrain:[],associatedFeatures:[],kia:0,mia:0,wia:0,civilliansKilled:0,civilliansAbducted:0,criminalsKilled:0,suspectsArrested:0,comments:"",files:[]}}loadCountries(){this.loadSpatialEntityList("countryList","spatial-entity/entity/view-entities-by-type?entityType=1")}loadSpatialEntityChildren(t,e){""!=e&&this.loadSpatialEntityList(t,"spatial-entity/entity/view-entity-children?entityId="+e)}loadSpatialEntityList(t,e){this.serverRequest.get(e).subscribe(e=>{this.select2Data[t]=[],e.contentData.forEach(e=>{this.select2Data[t].push(e.EntityName)})})}loadRegions(t){this.loadSpatialEntityChildren("regionList",this.formData.country)}loadStates(t){this.loadSpatialEntityChildren("stateList",this.formData.region)}loadLgas(t){this.loadSpatialEntityChildren("lgaList",this.formData.state)}loadWards(t){this.loadSpatialEntityChildren("wardList",this.formData.lga)}loadVillages(t){this.loadSpatialEntityChildren("villageList",this.formData.ward)}loadLocalities(t){this.loadSpatialEntityChildren("localityList",this.formData.village)}loadIncidentCategories(){this.serverRequest.get("incidents/incident-type/view-categories").subscribe(t=>{this.select2Data.incidentCategoryList=[]})}loadIncidentTypes(){this.serverRequest.get("incidents/incident-type/view-incident-types?resourceId=1").subscribe(t=>{this.select2Data.incidentTypeList=[],t.contentData.forEach(t=>{this.select2Data.incidentTypeList.push({id:t.IncidentTypeId,text:t.IncidentTypeName})})})}loadMetadata(t,e){}saveIncidence(){void 0!==this.formData.poiLatitude&&""!=this.formData.poiLatitude||(this.formData.poiLatitude=0),void 0!==this.formData.poiLongitude&&""!=this.formData.poiLongitude||(this.formData.poiLongitude=0);let t={name:this.formData.incidentTitle,type:this.formData.incidentType,location:{country:this.formData.country,region:this.formData.region,state:this.formData.state,lga:this.formData.lga,ward:this.formData.ward,village:this.formData.village,locality:this.formData.locality},date:v(this.formData.incidentDate+"T"+this.formData.incidentTime).format("D/M/YYYY HH:mm:ss"),pointOfInterest:"POINT("+this.formData.poiLatitude+" "+this.formData.poiLongitude+")",description:this.formData.comments,images:this.formData.files,metadata:[]};this.serverRequest.post("incidents/incident/new-raw-data",{userId:this.userId,incidentData:t}).subscribe(t=>{this.toastService.show("Incidence has been reported successfully",{classname:"bg-success text-white",delay:1e4}),this.initFormData()},t=>{this.toastService.show("An error occurred. Incidence record not reported successfully",{classname:"bg-danger text-white",delay:1e4})})}onMapReady(t){this.map=t,this.marker=D.marker([-10,-10],{icon:D.icon({iconSize:[25,41],iconAnchor:[13,41],iconUrl:"assets/marker-icon.png",shadowUrl:"assets/marker-shadow.png"})}),this.marker.addTo(t)}updatePoi(){if(void 0!==this.formData.poiLongitude&&void 0!==this.formData.poiLatitude){const t=this.formData.poiLatitude,e=this.formData.poiLongitude;this.map.setView([t,e],16),this.marker.setLatLng([t,e]),this.marker.bindPopup(t+", "+e)}}showImages(t){this.formData.files=[];let e=t.target.files;for(let i=0;i<e.length;i++){let t=URL.createObjectURL(e[i]);A()(t).then(t=>{this.formData.files.push(t)}).catch(t=>{console.log(t)})}}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(b.I),l.Y36(q.k),l.Y36(C.V))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-new-incidence"]],decls:90,vars:30,consts:[[1,"page-content",2,"padding","1rem !important","margin-top","50px"],[1,"content-wrapper"],[1,"content"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","header-elements-inline"],[1,"card-title"],[1,"header-elements"],[1,"list-icons"],[1,"card-body"],["action","#"],[1,"col-md-6"],[1,"col-md-4","form-group"],[1,"font-weight-semibold"],["name","country",3,"ngModel","data","options","ngModelChange"],["name","region",3,"ngModel","data","options","ngModelChange"],["name","state",3,"ngModel","data","options","ngModelChange"],["name","lga",3,"ngModel","data","options","ngModelChange"],["type","text","name","ward",1,"form-control",3,"ngModel","ngbTypeahead","ngModelChange","change"],["type","text","name","village",1,"form-control",3,"ngModel","ngbTypeahead","ngModelChange","change"],[1,"col-md-6","form-group"],["type","text","name","locality",1,"form-control",3,"ngModel","ngbTypeahead","ngModelChange"],[1,"col-md-3","form-group"],["type","text","name","poiLatitude",1,"form-control",3,"ngModel","ngModelChange","change"],["type","text","name","poiLongitude",1,"form-control",3,"ngModel","ngModelChange","change"],[1,"col-md-12","form-group"],["name","incidentType","placeholder","Select an incident type",3,"ngModel","data","options","ngModelChange"],[1,"form-group"],["rows","4","cols","5","placeholder","Enter information about the incident here","name","incidentTitle",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-8","form-group"],["type","date","name","incidentDate",1,"form-control",3,"ngModel","ngModelChange"],["type","time","name","incidentTime",1,"form-control",3,"ngModel","ngModelChange"],["rows","7","cols","5","placeholder","Enter your comment / analysis here","name","comments",1,"form-control",3,"ngModel","ngModelChange"],["type","file","name","files","multiple","",1,"form-control",3,"ngModel","change"],["class","img-fluid col-6",3,"src",4,"ngFor","ngForOf"],["leaflet","",2,"height","40vh","margin-top","15px","margin-bottom","10px",3,"leafletOptions","leafletMapReady"],[1,"text-center"],["type","submit",1,"btn","btn-primary","bg-indigo",3,"click"],[1,"icon-paperplane","ml-2"],["aria-live","polite","aria-atomic","true"],[1,"img-fluid","col-6",3,"src"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"div",6),l.TgZ(7,"h5",7),l._uU(8,"Record a new Incidence"),l.qZA(),l.TgZ(9,"div",8),l._UZ(10,"div",9),l.qZA(),l.qZA(),l.TgZ(11,"div",10),l.TgZ(12,"form",11),l.TgZ(13,"div",3),l.TgZ(14,"div",12),l.TgZ(15,"div",3),l.TgZ(16,"div",13),l.TgZ(17,"label",14),l._uU(18,"Country:"),l.qZA(),l.TgZ(19,"ng-select2",15),l.NdJ("ngModelChange",function(t){return e.formData.country=t})("ngModelChange",function(t){return e.loadRegions(t)}),l.qZA(),l.qZA(),l.TgZ(20,"div",13),l.TgZ(21,"label",14),l._uU(22,"Region:"),l.qZA(),l.TgZ(23,"ng-select2",16),l.NdJ("ngModelChange",function(t){return e.formData.region=t})("ngModelChange",function(t){return e.loadStates(t)}),l.qZA(),l.qZA(),l.TgZ(24,"div",13),l.TgZ(25,"label",14),l._uU(26,"State:"),l.qZA(),l.TgZ(27,"ng-select2",17),l.NdJ("ngModelChange",function(t){return e.formData.state=t})("ngModelChange",function(t){return e.loadLgas(t)}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(28,"div",3),l.TgZ(29,"div",13),l.TgZ(30,"label",14),l._uU(31,"LGA:"),l.qZA(),l.TgZ(32,"ng-select2",18),l.NdJ("ngModelChange",function(t){return e.formData.lga=t})("ngModelChange",function(t){return e.loadWards(t)}),l.qZA(),l.qZA(),l.TgZ(33,"div",13),l.TgZ(34,"label",14),l._uU(35,"Ward:"),l.qZA(),l.TgZ(36,"input",19),l.NdJ("ngModelChange",function(t){return e.formData.ward=t})("change",function(t){return e.loadVillages(t)}),l.qZA(),l.qZA(),l.TgZ(37,"div",13),l.TgZ(38,"label",14),l._uU(39,"Village:"),l.qZA(),l.TgZ(40,"input",20),l.NdJ("ngModelChange",function(t){return e.formData.village=t})("change",function(t){return e.loadLocalities(t)}),l.qZA(),l.qZA(),l.TgZ(41,"div",21),l.TgZ(42,"label",14),l._uU(43,"Locality / Area:"),l.qZA(),l.TgZ(44,"input",22),l.NdJ("ngModelChange",function(t){return e.formData.locality=t}),l.qZA(),l.qZA(),l.TgZ(45,"div",23),l.TgZ(46,"label",14),l._uU(47,"POI Latitude:"),l.qZA(),l.TgZ(48,"input",24),l.NdJ("ngModelChange",function(t){return e.formData.poiLatitude=t})("change",function(){return e.updatePoi()}),l.qZA(),l.qZA(),l.TgZ(49,"div",23),l.TgZ(50,"label",14),l._uU(51,"POI Longitude:"),l.qZA(),l.TgZ(52,"input",25),l.NdJ("ngModelChange",function(t){return e.formData.poiLongitude=t})("change",function(){return e.updatePoi()}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(53,"div",3),l.TgZ(54,"div",26),l.TgZ(55,"label",14),l._uU(56,"Incident Type:"),l.qZA(),l.TgZ(57,"ng-select2",27),l.NdJ("ngModelChange",function(t){return e.formData.incidentType=t}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(58,"div",28),l.TgZ(59,"label",14),l._uU(60,"Incidence Description:"),l.qZA(),l.TgZ(61,"textarea",29),l.NdJ("ngModelChange",function(t){return e.formData.incidentTitle=t}),l.qZA(),l.qZA(),l.TgZ(62,"div",3),l.TgZ(63,"div",30),l.TgZ(64,"label",14),l._uU(65,"Incidence Date:"),l.qZA(),l.TgZ(66,"input",31),l.NdJ("ngModelChange",function(t){return e.formData.incidentDate=t}),l.qZA(),l.qZA(),l.TgZ(67,"div",13),l.TgZ(68,"label",14),l._uU(69,"Time:"),l.qZA(),l.TgZ(70,"input",32),l.NdJ("ngModelChange",function(t){return e.formData.incidentTime=t}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(71,"div",28),l.TgZ(72,"label",14),l._uU(73,"Comments / Analysis:"),l.qZA(),l.TgZ(74,"textarea",33),l.NdJ("ngModelChange",function(t){return e.formData.comments=t}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(75,"div",12),l.TgZ(76,"div",3),l.TgZ(77,"div",28),l.TgZ(78,"label",14),l._uU(79,"Upload Images:"),l.qZA(),l.TgZ(80,"input",34),l.NdJ("change",function(t){return e.showImages(t)}),l.qZA(),l.qZA(),l.TgZ(81,"div",4),l.YNc(82,U,1,1,"img",35),l.qZA(),l.qZA(),l.TgZ(83,"div",36),l.NdJ("leafletMapReady",function(t){return e.onMapReady(t)}),l.qZA(),l.qZA(),l.TgZ(84,"div",4),l.TgZ(85,"div",37),l.TgZ(86,"button",38),l.NdJ("click",function(){return e.saveIncidence()}),l._uU(87,"Submit Incidence Report "),l._UZ(88,"i",39),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(89,"app-toast-container",40)),2&t&&(l.xp6(19),l.Q6J("ngModel",e.formData.country)("data",e.select2Data.countryList)("options",e.select2Options),l.xp6(4),l.Q6J("ngModel",e.formData.region)("data",e.select2Data.regionList)("options",e.select2Options),l.xp6(4),l.Q6J("ngModel",e.formData.state)("data",e.select2Data.stateList)("options",e.select2Options),l.xp6(5),l.Q6J("ngModel",e.formData.lga)("data",e.select2Data.lgaList)("options",e.select2Options),l.xp6(4),l.Q6J("ngModel",e.formData.ward)("ngbTypeahead",e.searchWards),l.xp6(4),l.Q6J("ngModel",e.formData.village)("ngbTypeahead",e.searchVillages),l.xp6(4),l.Q6J("ngModel",e.formData.locality)("ngbTypeahead",e.searchLocalities),l.xp6(4),l.Q6J("ngModel",e.formData.poiLatitude),l.xp6(4),l.Q6J("ngModel",e.formData.poiLongitude),l.xp6(5),l.Q6J("ngModel",e.formData.incidentType)("data",e.select2Data.incidentTypeList)("options",e.select2Options),l.xp6(4),l.Q6J("ngModel",e.formData.incidentTitle),l.xp6(5),l.Q6J("ngModel",e.formData.incidentDate),l.xp6(4),l.Q6J("ngModel",e.formData.incidentTime),l.xp6(4),l.Q6J("ngModel",e.formData.comments),l.xp6(6),l.Q6J("ngModel",e.formData.upload),l.xp6(2),l.Q6J("ngForOf",e.formData.files),l.xp6(1),l.Q6J("leafletOptions",e.leafletOptions))},directives:[n._Y,n.JL,n.F,M.c,n.JJ,n.On,n.Fj,w.dR,a.sg,x.je,J.J],styles:["input.form-control[_ngcontent-%COMP%], select.form-control[_ngcontent-%COMP%]{height:40px}"]}),t})()}]}];let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[s.Bz.forChild(I)],s.Bz]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[a.ez,O,o.m,n.u5,x.UO,M.I,w.ZS,w.aE]]}),t})()}}]);