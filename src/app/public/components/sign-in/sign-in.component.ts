import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ServerRequestService } from '../../../shared/services/server-request.service';
import { EventsService } from '../../../shared/services/events.service';
import { StorageService } from '../../../shared/services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  private userId: any;

  public username: any="";
  public password: any="";
  public showLoginError: any = false;
  public showLoginProcessing: any = false;

  constructor(private serverRequest: ServerRequestService, private events: EventsService, private router: Router, 
    private storage: StorageService) { }

  ngOnInit(): void {
  }

  public login() {
    this.showLoginProcessing = true;
    this.serverRequest.post("login", {
        username:this.username,
        password: this.password
    }).subscribe((response) => {
        this.showLoginProcessing = false;
        if (response.contentData.status == false){
          this.showLoginError = true;
        }
        else {
          this.showLoginError = false;
          const userId = response.contentData.userId;
          const sessionId = response.contentData.sessionId;
          const token = response.contentData.sessionData.token;
          const accountType = response.contentData.accountType;

          const auth = token+","+sessionId+","+userId;
          this.userId = userId;

          this.serverRequest.setHeaders({
              "Authorization": auth
          })

          let sessionInfo: any = {
            "userId": userId,
            "token": token,
            "username":this.username
          }

          this.storage.setItem("sessionInfo", JSON.stringify(sessionInfo));

          if (accountType == 1){
            this.router.navigate(['/field/new-incidence']);
          }
          else if (accountType == 2) {
            this.router.navigate(['/data-office/field-reports']);
          }
          else {
            this.router.navigate(['/user']);
          }
        }
    });
  }

}
