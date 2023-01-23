import {Component, OnInit} from '@angular/core';
import {animate, animateChild, group, query, state, style, transition, trigger} from "@angular/animations";
import {ViewSwipeService} from "../../core/view-swipe/view-swipe.service";

const ANIMATION_DURATION = 200 //ms

let bunsAnimation = trigger('hamburgerBuns', [
  state('open', style({'transform': 'translateX(0.5rem)'})),
  state('closed', style({'transform': 'translateX(0)'})),
  transition('open => closed',
    group([
      query('@topBun,@steak,@bottomBun', [animateChild()]),
      animate(`${ANIMATION_DURATION}ms`)
    ]))
]);

let topBunAnimation = trigger('topBun', [
  state('open', style({
    'width': '2.2rem',
    'transform': 'rotateZ(45deg)',
  })),
  state('closed', style({
    'width': '75%',
    'transform': 'rotateZ(0)',
  })),
  transition('open <=> closed', [animate(`${ANIMATION_DURATION}ms`)])
])

let steakAnimation = trigger('steak', [
  state('open', style({'transform': 'translateX(-3.5rem)'})),
  state('closed', style({'transform': 'translateX(0)'})),
  transition('open <=> closed', [animate(`${ANIMATION_DURATION}ms`)])
]);

let bottomBunAnimation = trigger('bottomBun', [
  state('open', style({
    'width': '2.2rem',
    'transform': 'rotateZ(-45deg)',
  })),
  state('closed', style({
    'width': '75%',
    'transform': 'rotateZ(0)',
  })),
  transition('open <=> closed', [animate(`${ANIMATION_DURATION}ms`)])
])

@Component({
  selector: 'app-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss'],
  animations: [
    bunsAnimation,
    topBunAnimation,
    steakAnimation,
    bottomBunAnimation,
  ]
})

export class HamburgerButtonComponent implements OnInit {

  isActive: boolean = false;

  constructor(private viewSwipe: ViewSwipeService) {
  }

  ngOnInit(): void {
    this.viewSwipe.getSwipeStatus().subscribe(e => this.isActive = !e);
  }

  onClick() {
    this.isActive = !this.isActive;
  }
}
