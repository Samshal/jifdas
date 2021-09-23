import { Component } from '@angular/core';

declare var KTDrawer: any;
declare var KTApp: any;
declare var KTMenu: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jifdas';

  ngOnInit(): void {
    KTDrawer.init();
    KTApp.init();
    KTMenu.init();
  }
}
