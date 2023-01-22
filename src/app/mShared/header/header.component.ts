import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ViewSwipeService} from "../../core/view-swipe/view-swipe.service";
import {toggleHamburgerMenu} from "../../animations";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    toggleHamburgerMenu
  ]
})

export class HeaderComponent implements OnInit {
  @ViewChild('homeButton') homeButton!: ElementRef;
  @ViewChild('productsButton') productsButton!: ElementRef;
  @ViewChild('servicesButton') servicesButton!: ElementRef;
  @ViewChild('companyButton') companyButton!: ElementRef;
  @ViewChild('supportButton') supportButton!: ElementRef;

  isHamburgerMenuVisible = false;

  constructor(private viewSwipe: ViewSwipeService) {
  }

  ngOnInit(): void {
    // todo leaving this here in case I need it - calls setActiveButton() everytime the route changes successfully
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd))
    //   .subscribe(e => {
    //     let activePage = (e as NavigationEnd).url;
    //     this.setActiveButton(activePage)
    //   });

    this.viewSwipe.getSwipeStatus().subscribe(e => this.isHamburgerMenuVisible = !e);
  }

  setActiveButton(activePage: string) {
    let buttons: { [key: string]: ElementRef } = {
      '/': this.homeButton,
      '/products': this.productsButton,
      '/services': this.servicesButton,
      '/company': this.companyButton,
      '/support': this.supportButton
    };

    Object.values(buttons).map(e => e.nativeElement.classList.remove('header-button-active'));
    buttons[activePage].nativeElement.classList.add('header-button-active');
  }

  toggleHamburgerMenu() {
    this.isHamburgerMenuVisible = !this.isHamburgerMenuVisible;
  }

  hideHamburgerMenu() {
    this.isHamburgerMenuVisible = false;
  }

  @HostListener('window:scroll',['$event'])
  onScroll() {
    this.isHamburgerMenuVisible = false;
  }
}
