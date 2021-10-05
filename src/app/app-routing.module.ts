import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./public/public.module").then(m => m.PublicModule)
  },
  {
    path: "user",
    loadChildren: () => import("./default-account/default-account.module").then(m => m.DefaultAccountModule)
  },
  {
    path: "field",
    loadChildren: () => import("./field/field.module").then(m => m.FieldModule)
  },
  {
    path: "data-office",
    loadChildren: () => import("./data-managers/data-managers.module").then(m => m.DataManagersModule)
  },
  {
    path: "analyst",
    loadChildren: () => import("./analysts/analysts.module").then(m => m.AnalystsModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "supervisor",
    loadChildren: () => import("./supervisors/supervisors.module").then(m => m.SupervisorsModule)
  },
  {
    path: "reports",
    loadChildren: () => import("./reports/reports.module").then(m => m.ReportsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: false
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
