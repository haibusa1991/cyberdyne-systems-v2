import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyServicesComponent } from './all-services/company-services.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: CompanyServicesComponent
}];

@NgModule({
  declarations: [
    CompanyServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyServicesModule { }
