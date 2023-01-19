import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-swipe-overlay',
  templateUrl: './swipe-overlay.component.html',
  styleUrls: ['./swipe-overlay.component.scss']
})
export class SwipeOverlayComponent implements OnInit {
  private MAX_SWIPE_DURATION = 500; //swipe cannot be longer than this many milliseconds
  private MIN_SWIPE_DISTANCE = 60; //swipe must be at least this many pixels long

  constructor() {
  }

  ngOnInit(): void {
  }


  private lastTouch = {
    startX: 0,
    startTime: 0,
    deltaX: 0,
    deltaTime: 0,
    swipeEvent: undefined
  };

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    let touch = event.touches[0]
    // console.log('touch start')
    console.log(this.lastTouch)

    this.lastTouch.startX = touch.pageX;
    this.lastTouch.deltaX = 0;

    this.lastTouch.startTime = event.timeStamp;
    this.lastTouch.deltaTime = 0;

    // @ts-ignore
    this.lastTouch.swipeEvent = event;
  }

  @HostListener('touchend')
  onTouchEnd() {
    // console.log(`touch end`)
    console.log(this.lastTouch)
    // let touch = event.touches[0] || event.changedTouches[0];
    let touch = this.lastTouch.swipeEvent;

    // @ts-ignore
    // console.log(touch.pageX)
    //@ts-ignore
    // this.lastTouch.deltaX = touch.pageX - this.lastTouch.startX;
    // @ts-ignore
    // this.lastTouch.deltaTime = touch.timeStamp - this.lastTouch.startTime;
  }

  onSwipe() {
    console.log('on swipe')
    if (this.lastTouch.deltaTime > this.MAX_SWIPE_DURATION) {
      console.log('swipe takes too long!')
      return;
    }

    if (this.lastTouch.deltaX > this.MIN_SWIPE_DISTANCE) {
      let direction = this.lastTouch.deltaX > 0 ? 'right' : 'left';
      console.log(`swiped ${direction}!`);
    }

    console.log('swipe too short!')

  }


  //
  // defaultTouch = {x: 0, y: 0, time: 0};
  //
  // @HostListener('touchstart', ['$event'])
  // //@HostListener('touchmove', ['$event'])
  // @HostListener('touchend', ['$event'])
  // @HostListener('touchcancel', ['$event'])
  // handleTouch(event:TouchEvent) {
  //   let touch = event.touches[0] || event.changedTouches[0];
  //
  //   // check the events
  //   if (event.type === 'touchstart') {
  //     console.log('touch start')
  //     this.defaultTouch.x = touch.pageX;
  //     this.defaultTouch.y = touch.pageY;
  //     this.defaultTouch.time = event.timeStamp;
  //   }
  //   else if (event.type === 'touchend') {
  //
  //   }
  // }
  //
  // onTouchEnd(){
  //   let deltaX = touch.pageX - this.defaultTouch.x;
  //   let deltaY = touch.pageY - this.defaultTouch.y;
  //   let deltaTime = event.timeStamp - this.defaultTouch.time;
  //
  //   // simulte a swipe -> less than 500 ms and more than 60 px
  //   if (deltaTime < 500) {
  //     // touch movement lasted less than 500 ms
  //     if (Math.abs(deltaX) > 60) {
  //       // delta x is at least 60 pixels
  //       if (deltaX > 0) {
  //         this.doSwipeRight(event);
  //       } else {
  //         this.doSwipeLeft(event);
  //       }
  //     }
  //
  //     if (Math.abs(deltaY) > 60) {
  //       // delta y is at least 60 pixels
  //       if (deltaY > 0) {
  //         this.doSwipeDown(event);
  //       } else {
  //         this.doSwipeUp(event);
  //       }
  //     }
  //   }
  // }
  //
  // doSwipeLeft(event : TouchEvent) {
  //   console.log('swipe left');
  // }
  //
  // doSwipeRight(event : TouchEvent) {
  //   console.log('swipe right');
  // }
  //
  // doSwipeUp(event : TouchEvent) {
  //   console.log('swipe up');
  // }
  //
  // doSwipeDown(event : TouchEvent) {
  //   console.log('swipe down');
  // }
}

