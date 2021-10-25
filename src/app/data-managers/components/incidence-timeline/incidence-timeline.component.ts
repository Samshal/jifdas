import { Component, OnInit, ViewChild } from '@angular/core';
import  * as L from 'leaflet'; 
import * as moment from 'moment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ServerRequestService } from '../../../shared/services/server-request.service';
import { EventsService } from '../../../shared/services/events.service';

declare var MarkerClusterGroup: any;

import '../../../../../node_modules/leaflet.markercluster/dist/leaflet.markercluster.js';

import * as screenfull from 'screenfull';
import '../../../../../node_modules/leaflet.fullscreen/Control.FullScreen.js';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'app-incidence-timeline',
	templateUrl: './incidence-timeline.component.html',
	styleUrls: ['./incidence-timeline.component.css']
})
export class IncidenceTimelineComponent implements OnInit {
	@ViewChild('content') content: any;

	map;
	json;
	eventsLayer;
	infoLayer;
	infoText;
	typeColors: any = {};
	globalDateRange: any = {"startDate":"", "endDate":""};
  	markers = L.markerClusterGroup();
  	overlays: any = {};
  	layer: any;
  	markerClusters: any = {};

  	markerIcon = L.icon({
	    iconUrl: 'assets/media/leaflet-icons/marker-icon.png',
	    shadowUrl: 'assets/media/leaflet-icons/marker-shadow.png'
	});

	currentView: any = {};
	modalRef: any;

	constructor(private http: HttpClient, private serverRequest: ServerRequestService, 
		private eventsService: EventsService, private modalService: NgbModal) { }

	ngOnInit(): void {
		window.screenfull = screenfull;
		this.eventsService.getEvent('timeline-element-selected').subscribe(response=>{
			if (response != null){
				this.loadGeoJson(response);
			}
		});

		this.eventsService.getEvent('perform-global-search').subscribe(response=>{
			if (response != null){
				this.globalDateRange = response.dateRange;
				if (this.globalDateRange.startDate != "" && typeof this.globalDateRange.startDate.format !== "undefined"){
		          this.globalDateRange.startDate = this.globalDateRange.startDate.format("YYYY-MM-DD");
		          this.globalDateRange.endDate = this.globalDateRange.endDate.format("YYYY-MM-DD");
		        }
			}
			setTimeout(()=>{
				this.loadTimelineDates();
			}, 500);
		});

		$(document).on('click', $(".incident-caller").find('a').eq(0), (e) =>{
		  if (typeof $(e.target).attr("incident") !== "undefined"){
		  	const incidentId = $(e.target).attr("incident");
		  	this.viewIncident(incidentId);
		  }
		});
	}

	getIncidentTypeColor(type):any {
		if (type in this.typeColors){
			return this.typeColors[type]
		}
		else {
			var r, g, b;
		    var h = Math.floor(Math.random()*this.json["features"].length) / this.json["features"].length;
		    var i = ~~(h * 6);
		    var f = h * 6 - i;
		    var q = 1 - f;
		    switch(i % 6){
		        case 0: r = 1; g = f; b = 0; break;
		        case 1: r = q; g = 1; b = 0; break;
		        case 2: r = 0; g = 1; b = f; break;
		        case 3: r = 0; g = q; b = 1; break;
		        case 4: r = f; g = 0; b = 1; break;
		        case 5: r = 1; g = 0; b = q; break;
		    }
		    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
		    
		    this.typeColors[type] = c;

		    return c;
		}
	}

	getIncidentTypeStyle(feature): any {
		if (feature.geometry.type == 'Point'){
			var geojsonMarkerEventsOptions: any = {
			    radius: 5,
			    fillColor: this.getIncidentTypeColor(feature.properties.type),
			    color: "#f00",
			    weight: 0.8,
			    opacity: 0.9,
			    fillOpacity: 0.8
			};	
		}
		else {
			var geojsonMarkerEventsOptions: any = {
			    color: "#312df4",
			    weight: 1,
			    fillOpacity: 0
			};
		}

		return geojsonMarkerEventsOptions;
	}

	leafletOptions = {
		layers: [
			L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
			    maxZoom: 20,
			    subdomains:['mt0','mt1','mt2','mt3']
			})
		],
		zoom: 5,
		center: L.latLng(11.0, 6.0)
	};

	onMapReady(map: L.Map): void {
		this.map = map;

		let basemaps = {
			"Default Map": L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution: '...' }),
			"Street Map": L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
			    maxZoom: 20,
			    subdomains:['mt0','mt1','mt2','mt3']
			}),
			"Aerial View": L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
			    maxZoom: 20,
			    subdomains:['mt0','mt1','mt2','mt3']
			})
		};

		let fullscreen = L.control.fullscreen({
			position: 'topleft'
		});

		fullscreen.addTo(this.map);

		this.layer = L.control.layers(basemaps, this.overlays, {position: 'topright'});
		this.layer.addTo(this.map);
		this.markers.addTo(this.map);

		var geojsonMarkerOptions = {
		    radius: 8,
		    fillColor: "#00f",
		    color: "#fff",
		    weight: 1,
		    opacity: 1,
		    fillOpacity: 0.8
		};

		var shieldIcon = L.icon({
		    iconUrl: 'assets/media/marker.png',
		    shadowUrl: '',

		    iconSize:     [38, 38], // size of the icon
		    shadowSize:   [50, 64], // size of the shadow
		    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 62],  // the same for the shadow
		    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});

	    this.eventsLayer = L.geoJSON(this.json, {
        	pointToLayer: ((feature, latlng) => {
        		let style = this.getIncidentTypeStyle(feature);
		        return L.circleMarker(latlng, style);
		    })
        });

        this.infoLayer = new L.Control();
        this.infoLayer.onAdd = (map => {
        	this.infoText = L.DomUtil.create('div', 'leaflet-info-bar');
		    return this.infoText;
        })

        map.addLayer(this.eventsLayer);   

        this.map.on('overlayadd', (e)=>{
        	setTimeout((g)=>{
        		this.buildMarkerClusters();
        	}, 1000);
        });
        this.map.on('overlayremove', (e)=>{
        	setTimeout((g)=>{
        		this.buildMarkerClusters();
        	}, 1000);
        }); 


        this.infoLayer.addTo(map);
    	$(".leaflet-info-bar").addClass("hidden");

    	$(".leaflet-top.leaflet-left").prepend("<div class='leaflet-control-zoom-info' style='padding-left:20px; padding-top:10px;'></div>");
	}

	timeline: any = [
	];

	loadTimelineDates():void {
		const sDate = this.globalDateRange.startDate;
		const eDate = this.globalDateRange.endDate;		
		this.serverRequest
		.get("incidents/timeline/get-dates?startDate="+sDate+"&endDate="+eDate)
		.subscribe(response => {
			this.timeline = []
			let data = response.contentData;
			data.forEach(key => {
				let _ind = {
					date: new Date(key.IncidentDate),
					title: key.TotalIncidences + " Incidences"
				}

				this.timeline.push(_ind);
			})
		})
	}

	loadGeoJson(requestData):void {
		const sDate = this.globalDateRange.startDate;
		const eDate = moment(requestData.date).format("YYYY-MM-DD");		
		this.serverRequest
		.get("incidents/timeline/get-incidents-geojson?startDate="+sDate+"&endDate="+eDate)
		.subscribe(response => {
			this.json = response.contentData;
			this.map.removeLayer(this.eventsLayer);

	        var features: any = {};

	        for (var i = 0; i < this.json.features.length; i++) {
		        var feature = this.json.features[i];
		        var type = feature.properties.type;
		        if (type in features){
		        	features[type].push(feature);
		        }
		        else {
		        	features[type] = [feature];
		        }
		    }

		    this.layer._layers.splice(3, (this.layer._layers).length-1);
		    this.markers.clearLayers();

		    for(let index in features){
		    	const json: any = {features: features[index],type: "FeatureCollection"};
		    	if (this.overlays[index]){
		    		delete this.overlays[index];
		    	}
		    	this.overlays[index] = L.geoJSON(json, {
					style: ((feature)=>{
						return this.getIncidentTypeStyle(feature);
					}),
		        	pointToLayer:  ((feature, latlng) => {
		        		let style = this.getIncidentTypeStyle(feature);
		        		var ellipsis = "";
		        		if (feature.properties.title.length > 100) {
		        			ellipsis = "...";
		        		}
		        		var title = "<div style='text-align: left !important'><h3 style='margin: 0 !important' class='incident-caller'><a class='btn' incident='"+feature.properties.incidentId+"'>#"+feature.properties.incidentId+": "+feature.properties.type+"</a></h3><p style='padding:0 !important; margin: 0 !important'>"+feature.properties.date+"</p><p style='padding:0 !important; margin: 0 !important'>"+feature.properties.title.substr(0, 100)+ellipsis+"</p></div>";
		        		var marker = L.marker(latlng, { title: feature.properties.type, icon: this.markerIcon });
				        marker.bindPopup(title);
				        this.markers.addLayer(marker);
				        return L.circleMarker(latlng, style);
				    }),
				    onEachFeature: function(feature, layer) {
				    	layer.on({
				    		click: (e => {
				    			$(".leaflet-info-bar").removeClass("hidden");
				    			const _hider = '$(".leaflet-info-bar").addClass("hidden")';
				    			const hide = "<button class='btn btn-link pull-right text-primary' onclick='"+_hider+"'>&times;<small> close</small></button>";
				    			const html = "<h1>"+feature.properties.type+" ("+feature.properties.category+")&nbsp;&nbsp;&nbsp;&nbsp;"+hide+"</h1><p>"+feature.properties.title+"</p>";
				    			$(".leaflet-info-bar").html(html);
				    		}),
				    		// mouseout: (e => {
				    		// 	$(".leaflet-info-bar").addClass("hidden");
				    		// })
				    	})
				    }
		        }).addTo(this.map);
		        this.layer.addOverlay(this.overlays[index], index)
		    }

			const html = "<h4>"+moment(sDate).format("DD MMMM, YYYY")+" - "+moment(eDate).format("DD MMMM, YYYY")+"</h4>";
	        $(".leaflet-control-zoom-info").html(html);

	        this.map.addLayer(this.eventsLayer);
		})
	}

	buildMarkerClusters(): void {
		let points = this.layer._layers;

		console.log(this.overlays, this.layer);

		if (typeof this.markers !== "undefined"){
			this.markers.clearLayers();
		}

		for (let index = 0; index < points.length; index++){
			if (points[index].layer._map !== null){
				const _layers = points[index].layer._layers;
				for (let i in _layers){
					const _layer = _layers[i];
					if (typeof _layer._latlng !== "undefined"){
		        		var ellipsis = "";
		        		if (_layer.feature.properties.title.length > 100) {
		        			ellipsis = "...";
		        		}
						var marker = L.marker(_layer._latlng, { title: _layer.feature.properties.type, icon: this.markerIcon });
						var title = "<div style='text-align: left !important'><h3 style='margin: 0 !important'>#"+_layer.feature.properties.incidentId+": "+_layer.feature.properties.type+"</h3><p style='padding:0 !important; margin: 0 !important'>"+_layer.feature.properties.date+"</p><p style='padding:0 !important; margin: 0 !important'>"+_layer.feature.properties.title.substr(0, 100)+ellipsis+"</p></div>";
				        marker.bindPopup(title);
				        this.markers.addLayer(marker);
					}
				}
			}
		}
	}

	drawnItems: L.FeatureGroup = L.featureGroup();

	drawOptions: any = {
		draw: {
			position: "topleft",
			// marker: {
			// 	icon: L.icon({
			// 		iconSize: [ 25, 41 ],
			// 		iconAnchor: [ 13, 41 ],
			// 		iconUrl: '2b3e1faf89f94a4835397e7a43b4f77d.png',
			// 		iconRetinaUrl: '680f69f3c2e6b90c1812a813edf67fd7.png',
			// 		shadowUrl: 'a0c6cc1401c107b501efee6477816891.png'
			// 	})
			// },
			// polyline: false,
			circle: {
				shapeOptions: {
					color: '#d4af37'
				}
			},
			rectangle: false,
			polygon: false,
			marker: false,
			circlemarker: false
		},
		edit: {
			featureGroup: this.drawnItems,
			edit: false
		}
	};

	public onDrawCreated(e: any) {
		var type = e.layerType;
		if (type == 'circle') {
			var theRadius = e.layer.getRadius();		
			this.drawnItems.addLayer((e as L.DrawEvents.Created).layer);
			this.drawnItems.bringToBack();

			this.drawnItems.bindPopup("Radius: "+ (Math.round((theRadius/1000)*100)/100) + " KM");
			this.drawnItems.openPopup();
		}
		else if (type == 'polyline') {
		}
	}

	viewIncident(id: any): void {
		this.currentView = id;
    	this.modalRef = this.modalService.open(this.content, {backdrop: false, backdropClass: 'modal-backdrop', size: 'lg', scrollable: true, container: "#mapEl"});
	}
}
