import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  contentHasLoaded: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => this.contentHasLoaded = true, 1000)
  }

}
