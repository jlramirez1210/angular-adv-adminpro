import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {Grafica1Component} from "./grafica1/grafica1.component";
import {NgModule} from "@angular/core";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {RxjsComponent} from "./rxjs/rxjs.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {path: '', component: DashboardComponent, data: {titulo:'Dashboard'}},
      {path: 'progress', component: ProgressComponent, data: {titulo:'ProgressBar'}},
      {path: 'grafica1', component: Grafica1Component, data: {titulo:'Grafica1'}},
      {path: 'account-settings', component:AccountSettingsComponent, data: {titulo:'Ajuste de cuenta'}},
      {path: 'rxjs', component:RxjsComponent, data: {titulo:'Rxjs'}},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
