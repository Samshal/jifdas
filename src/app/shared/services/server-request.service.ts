import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  // private serverUrlEndpoint = 'http://172.16.70.33:6789/v1/';  // URL to web api
  // private serverUrlEndpoint = 'http://localhost:6789/v1/';  // URL to web api
  // private serverUrlEndpoint = 'http://172.16.70.4:6789/v1/';  // URL to web api
  private serverUrlEndpoint = 'https://3f91-41-73-6-110.ngrok.io/v1/';  // URL to web api
  private headers = {};
  constructor(private http: HttpClient) { 
  }

  setHeaders(headers: any = {}): void {
    this.headers = headers;
  }

  get(url: any): Observable<any> {
    return this.http.get<any>(this.serverUrlEndpoint+url)
  }

  post(url: any, data: any): Observable<any> {
    return this.http.post<any>(this.serverUrlEndpoint+url, data);
  }
}
