import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllServicesComponent } from './all-services/all-services.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: AllServicesComponent
}];

@NgModule({
  declarations: [
    AllServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesModule { }
