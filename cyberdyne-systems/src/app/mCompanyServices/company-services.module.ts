import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyServicesComponent } from './all-services/company-services.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../mShared/shared.module";

const routes: Routes = [{
  path: '',
  component: CompanyServicesComponent,
  data: {animationModuleName:'CompanyServices'}
}];

@NgModule({
  declarations: [
    CompanyServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CompanyServicesModule { }
