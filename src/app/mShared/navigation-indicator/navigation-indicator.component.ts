import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {navigationSequence} from "../../constants";

@Component({
  selector: 'app-navigation-indicator',
  templateUrl: './navigation-indicator.component.html',
  styleUrls: ['./navigation-indicator.component.scss']
})
export class NavigationIndicatorComponent implements OnInit {
  private currentRouteIndex!: number;
  @ViewChild('navIndicator') navIndicator!: ElementRef;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe(e => {
      let url = (e as NavigationEnd).url;
      this.currentRouteIndex = navigationSequence.indexOf(url);
      this.updateNavIndicator();
    });
  }


  updateNavIndicator() {
    let element = this.navIndicator.nativeElement;
    [...element.children].forEach(e=>e.classList.remove('indicator-active'))
    element.children[this.currentRouteIndex].classList.add('indicator-active')
  }
}
