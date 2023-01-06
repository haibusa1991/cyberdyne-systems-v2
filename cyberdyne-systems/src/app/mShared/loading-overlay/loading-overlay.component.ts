import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {

  //spinner diameter is always 20% from viewport height
  readonly SPINNER_DIAMETER_FACTOR = 0.20;
  readonly SPINNER_OVERFLOW_DIAMETER_FACTOR = 0.6;

  spinnerDiameter!: number;

  constructor() {
  }

  ngOnInit(): void {
    this.spinnerDiameter = window.innerHeight * this.SPINNER_DIAMETER_FACTOR;
  }

  @HostListener('window:resize', ['$event'])
  resizeSpinner(event: UIEvent) {
    let browserWindow = event.target as Window;
    let height = browserWindow.innerHeight;
    let width = browserWindow.innerWidth;

    // if the spinner is about to overflow sideways from the window, reduce the diameter to
    // SPINNER_OVERFLOW_DIAMETER_FACTOR percent of the window width
    if (height * this.SPINNER_DIAMETER_FACTOR > width * this.SPINNER_OVERFLOW_DIAMETER_FACTOR) {
      this.spinnerDiameter = width * this.SPINNER_OVERFLOW_DIAMETER_FACTOR;
      return;
    }

    this.spinnerDiameter = (event.target as Window).innerHeight * this.SPINNER_DIAMETER_FACTOR;
  }

}
