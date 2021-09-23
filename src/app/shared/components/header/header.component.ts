import { Component, OnInit, Input } from '@angular/core';

import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';

  userInfo: any = {};
  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.storage.getItem("sessionInfo").subscribe(data => {
      if (data != null){
        this.userInfo = JSON.parse(data);
        console.log(data);
      }
    })
  }

}
