import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-services',
  templateUrl: './company-services.component.html',
  styleUrls: ['./company-services.component.scss']
})
export class CompanyServicesComponent implements OnInit {
  contentHasLoaded: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => this.contentHasLoaded = true, 1000)
  }

}
