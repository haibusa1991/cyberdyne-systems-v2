import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../mShared/shared.module";

const routes: Routes = [{
  path: '',
  component: HomepageComponent,
  data: {animationModuleName:'Homepage'}
}];

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule {
}
