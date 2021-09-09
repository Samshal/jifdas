import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StorageService) { }

  public isAuthenticated(): boolean {
    let resp: boolean = false;
    this.storage.getItem("sessionInfo").subscribe(data => {
      if (data != null){
        resp = true;
      }
    })

    return resp;
  }
}
