import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCatalogsComponent } from './all-catalogs/all-catalogs.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../mShared/shared.module";

const routes: Routes = [{
  path: '',
  component: AllCatalogsComponent
}];


@NgModule({
  declarations: [
    AllCatalogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProductsModule { }
