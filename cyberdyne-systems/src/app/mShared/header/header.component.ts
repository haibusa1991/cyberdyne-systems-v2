import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  rippleColor = 'rgba(255,0,0,0.24)';

  constructor() { }

  ngOnInit(): void {
  }

}
