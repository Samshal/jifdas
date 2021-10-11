import { Component, OnInit } from '@angular/core';
import  * as L from 'leaflet'; 
import * as moment from 'moment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ServerRequestService } from '../../../shared/services/server-request.service';
import { EventsService } from '../../../shared/services/events.service';

@Component({
	selector: 'app-incidence-timeline',
	templateUrl: './incidence-timeline.component.html',
	styleUrls: ['./incidence-timeline.component.css']
})
export class IncidenceTimelineComponent implements OnInit {
	map;
	json;
	eventsLayer;
	infoLayer;
	infoText;
	typeColors: any = {};
	globalDateRange: any = {"startDate":"", "endDate":""};
	constructor(private http: HttpClient, private serverRequest: ServerRequestService, private eventsService: EventsService) { }

	ngOnInit(): void {
		this.eventsService.getEvent('timeline-element-selected').subscribe(response=>{
			if (response != null){
				this.loadGeoJson(response);
			}
		});

		this.eventsService.getEvent('perform-global-search').subscribe(response=>{
			if (response != null){
				this.globalDateRange = response.dateRange;
				console.log(this.globalDateRange);
				if (this.globalDateRange.startDate != "" && typeof this.globalDateRange.startDate.format !== "undefined"){
		          this.globalDateRange.startDate = this.globalDateRange.startDate.format("YYYY-MM-DD");
		          this.globalDateRange.endDate = this.globalDateRange.endDate.format("YYYY-MM-DD");
		        }
			}
			setTimeout(()=>{
				this.loadTimelineDates();
			}, 500);
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
		var geojsonMarkerEventsOptions = {
		    radius: 5,
		    fillColor: this.getIncidentTypeColor(feature.properties.type),
		    color: "#f00",
		    weight: 0.8,
		    opacity: 0.9,
		    fillOpacity: 0.8
		};

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

		let layer = L.control.layers(basemaps, {}, {position: 'topleft'});
		layer.addTo(this.map);

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

		
		// this.http.get('assets/data/data.geojson').subscribe((json: any) => {
	 //        this.json = json;
	 //        L.geoJSON(this.json, {
	 //        	pointToLayer: function (feature, latlng) {
	 //        		return L.marker(latlng, {icon: shieldIcon});
		// 	        // return L.circleMarker(latlng, geojsonMarkerOptions);
		// 	    },
		// 	    onEachFeature: function(feature, layer) {
		// 	    	console.log(feature)
		// 	    	layer.bindPopup("Military location")
		// 	    }
	 //        }).addTo(map);
	 //    });

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


        this.infoLayer.addTo(map);
    	$(".leaflet-info-bar").addClass("hidden");
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

			this.eventsLayer = L.geoJSON(this.json, {
	        	pointToLayer:  ((feature, latlng) => {
	        		let style = this.getIncidentTypeStyle(feature);
			        return L.circleMarker(latlng, style);
			    }),
			    onEachFeature: function(feature, layer) {
			    	layer.on({
			    		click: (e => {
			    			$(".leaflet-info-bar").removeClass("hidden");
			    			const _hider = '$(".leaflet-info-bar").addClass("hidden")';
			    			const hide = "<button class='btn btn-link pull-right text-primary' onclick='"+_hider+"'>&times;<small> close</small></button>";
			    			const html = "<h1>"+feature.properties.type+" ("+feature.properties.category+")&nbsp;&nbsp;&nbsp;&nbsp;"+hide+"</h1><p>"+feature.properties.title+"</p>"
			    			$(".leaflet-info-bar").html(html);
			    		}),
			    		// mouseout: (e => {
			    		// 	$(".leaflet-info-bar").addClass("hidden");
			    		// })
			    	})
			    }
	        });

			const html = "<h4>"+moment(eDate).format("DD MMMM, YYYY")+"</h4><h6 class='font-weight-semibold' style='line-height: 0;'>Total Incidences = "+this.json["features"].length +"</h6>"
	        $(".leaflet-control-zoom").html(html);

	        this.map.addLayer(this.eventsLayer);
		})
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
}
