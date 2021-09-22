import { Component, OnInit } from '@angular/core';

declare var KTDrawer: any;
declare var KTApp: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    KTDrawer.init();
    KTApp.init();
  }

}
