import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {toggleScrollToTopButton} from "../../animations";


@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  animations: [
    toggleScrollToTopButton
  ]
})
export class ScrollToTopComponent implements OnInit {

  isHidden = true

  constructor(private scroll: ViewportScroller) {
  }

  ngOnInit(): void {
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

  @HostListener('window:scroll')
  getScrollPosition() {
    this.isHidden = window.scrollY < 100
  }
}
