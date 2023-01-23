import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {navigationSequence} from "../../constants";
import {ViewSwipeService} from "../../core/view-swipe/view-swipe.service";

@Component({
  selector: 'app-swipe-overlay',
  templateUrl: './swipe-overlay.component.html',
  styleUrls: ['./swipe-overlay.component.scss']
})
export class SwipeOverlayComponent implements OnInit {
  private MAX_SWIPE_DURATION = 500; //swipe cannot be longer than this many milliseconds
  private MIN_SWIPE_DISTANCE = 60; //swipe must be at least this many pixels long

  private currentRouteIndex!: number;

  constructor(private router: Router,
              private viewSwipe: ViewSwipeService) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe(e => {
      let url = (e as NavigationEnd).url;
      this.currentRouteIndex = navigationSequence.indexOf(url);
    });
  }

  private touchData = {
    startX: 0,
    startTime: 0,
    deltaX: 0,
    deltaTime: 0,
  };

  @HostListener('touchstart', ['$event', 'passive:true'])
  onTouchStart(event: TouchEvent) {
    let touch = event.touches[0]

    this.touchData.startX = touch.pageX;
    this.touchData.startTime = event.timeStamp;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    let touch = event.changedTouches[0];

    this.touchData.deltaX = touch.pageX - this.touchData.startX;
    this.touchData.deltaTime = event.timeStamp - this.touchData.startTime;
    this.onSwipe();
  }

  onSwipe() {
    if (
      Math.abs(this.touchData.deltaX) < this.MIN_SWIPE_DISTANCE
      || this.touchData.deltaTime > this.MAX_SWIPE_DURATION) {
      return;
    }

    //navigate left
    if (this.currentRouteIndex > 0 && this.touchData.deltaX > 0) {
      this.router.navigateByUrl(navigationSequence[this.currentRouteIndex - 1]);
      this.viewSwipe.onSwipe();
    }

    //navigate navigate right
    if (this.currentRouteIndex < navigationSequence.length - 1 && this.touchData.deltaX < 0) {
      this.router.navigateByUrl(navigationSequence[this.currentRouteIndex + 1]);
      this.viewSwipe.onSwipe();
    }
  }

  onClick() {
    this.viewSwipe.onSwipe();
  }
}

