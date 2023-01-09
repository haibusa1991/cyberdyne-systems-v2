import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class OpenCloseComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  isOpen = true;
  isShown = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  flyToggle() {
    this.isShown = !this.isShown;
  }
}
