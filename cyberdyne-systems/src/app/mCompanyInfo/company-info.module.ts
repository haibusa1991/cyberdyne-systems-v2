import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInfoComponent } from './about-us/company-info.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../mShared/shared.module";

const routes: Routes = [{
  path: '',
  component: CompanyInfoComponent,
  data: {animation:'homeFlyIn'}
}];

@NgModule({
  declarations: [
    CompanyInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CompanyInfoModule { }
