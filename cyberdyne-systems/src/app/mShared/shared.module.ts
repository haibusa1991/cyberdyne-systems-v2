import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { LoadingSpinnerOverlayComponent } from './loading-spinner-overlay/loading-spinner-overlay.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoadingSpinnerComponentComponent } from './loading-spinner-component/loading-spinner-component.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoadingSpinnerOverlayComponent,
    LoadingSpinnerComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerOverlayComponent,
    LoadingSpinnerComponentComponent,
  ]
})
export class SharedModule { }
