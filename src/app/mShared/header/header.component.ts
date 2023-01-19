import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @ViewChild('homeButton') homeButton!: ElementRef;
  @ViewChild('productsButton') productsButton!: ElementRef;
  @ViewChild('servicesButton') servicesButton!: ElementRef;
  @ViewChild('companyButton') companyButton!: ElementRef;
  @ViewChild('supportButton') supportButton!: ElementRef;

  isHamburgerMenuVisible = false;

  constructor() {
  }

  ngOnInit(): void {
    // todo leaving this here in case I need it - calls setActiveButton() everytime the route changes successfully
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd))
    //   .subscribe(e => {
    //     let activePage = (e as NavigationEnd).url;
    //     this.setActiveButton(activePage)
    //   });
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
}
