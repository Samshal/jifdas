import * as L from 'leaflet';
declare module 'leaflet' {
   var markerClusterGroup: any;
   namespace control {
       function fullscreen(v?: any): Control;
   }
}

