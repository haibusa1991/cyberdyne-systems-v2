import {Component, HostListener, OnInit} from '@angular/core';
import {getSpinnerSize} from "../../utils";

@Component({
  selector: 'app-loading-spinner-overlay',
  templateUrl: './loading-spinner-overlay.component.html',
  styleUrls: ['./loading-spinner-overlay.component.scss']
})
export class LoadingSpinnerOverlayComponent implements OnInit {

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
  setSpinnerSize(event:UIEvent) {
    this.spinnerDiameter = getSpinnerSize(event,this.SPINNER_DIAMETER_FACTOR,this.SPINNER_OVERFLOW_DIAMETER_FACTOR);
  }

}
