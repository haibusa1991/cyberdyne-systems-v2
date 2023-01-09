import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  contentHasLoaded:boolean=false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>this.contentHasLoaded=true,1000)
  }

}
