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
import {MatRippleModule} from "@angular/material/core";
import { SwipeOverlayComponent } from './swipe-overlay/swipe-overlay.component';
import { NavigationIndicatorComponent } from './navigation-indicator/navigation-indicator.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoadingSpinnerOverlayComponent,
    LoadingSpinnerComponentComponent,
    SwipeOverlayComponent,
    NavigationIndicatorComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatRippleModule
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LoadingSpinnerOverlayComponent,
        LoadingSpinnerComponentComponent,
        SwipeOverlayComponent,
        NavigationIndicatorComponent,
        ScrollToTopComponent,
    ]
})
export class SharedModule { }
