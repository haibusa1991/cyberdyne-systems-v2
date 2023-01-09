import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../mShared/shared.module";

const routes: Routes = [{
  path: '',
  component: SummaryComponent
}];

@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CustomerSupportModule { }
