import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
   contentHasLoaded:boolean=false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>this.contentHasLoaded=true)
  }

}
