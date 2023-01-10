import {Component, HostListener, OnInit} from '@angular/core';
import {getSpinnerSize} from '../../utils';

@Component({
  selector: 'app-loading-spinner-component',
  templateUrl: './loading-spinner-component.component.html',
  styleUrls: ['./loading-spinner-component.component.scss']
})
export class LoadingSpinnerComponentComponent implements OnInit {

  readonly SPINNER_DIAMETER_FACTOR = 0.20;
  readonly SPINNER_OVERFLOW_DIAMETER_FACTOR = 0.6;

  spinnerDiameter!: number;

  ngOnInit(): void {
    this.spinnerDiameter = window.innerHeight * this.SPINNER_DIAMETER_FACTOR;
  }

  @HostListener('window:resize', ['$event'])
  setSpinnerSize(event: UIEvent){
    this.spinnerDiameter = getSpinnerSize(event,this.SPINNER_DIAMETER_FACTOR,this.SPINNER_OVERFLOW_DIAMETER_FACTOR)
  }
}
