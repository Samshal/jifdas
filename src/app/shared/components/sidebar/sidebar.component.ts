import { Component, OnInit, Input } from '@angular/core';

declare var KTDrawer: any;
declare var KTApp: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() module = 'field';
  constructor() { }

  ngOnInit(): void {
    KTDrawer.init();
    KTApp.init();
  }

  urls: any = {
    "field":[
      {
        link: "/field/new-incidence",
        title: "Dashboard",
        icon: "bi bi-house fs-2"
      },
      {
        link: "/field/new-incidence",
        title: "New Incidence Report",
        icon: "bi bi-file-text fs-2"
      }
    ],
    "data-office":[
      {
        link: "/data-office/field-reports",
        title: "Dashboard",
        icon: "bi bi-house fs-2"
      },
      {
        link: "/data-office/field-reports",
        title: "Process Field Reports",
        icon: "bi bi-file-earmark-check fs-2"
      },
      {
        link: "/data-office/charts",
        title: "Charts",
        icon: "bi bi-bar-chart fs-2"
      }
    ],
    "analysts":[
      {
        link: "/analyst/incidents",
        title: "Dashboard",
        icon: "bi bi-house fs-2"
      },
      // {
      //   link: "/data-office/field-reports",
      //   title: "Field Reports",
      //   icon: "bi bi-file-earmark-check fs-2"
      // },
      {
        link: "/analyst/incidents",
        title: "Incidents Workspace",
        icon: "bi bi-card-list fs-2"
      },
      {
        link: "/analyst/view-analyses",
        title: "Analysis Workspace",
        icon: "bi bi-file-earmark-medical fs-2"
      },
      {
        link: "/analyst/charts",
        title: "Charts",
        icon: "bi bi-bar-chart fs-2"
      }
    ]
  }

}
