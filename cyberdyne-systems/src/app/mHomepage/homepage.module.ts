import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../mShared/shared.module";
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
}];

@NgModule({
  declarations: [
    HomepageComponent,
    OpenCloseComponent
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
