import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-catalogs',
  templateUrl: './all-catalogs.component.html',
  styleUrls: ['./all-catalogs.component.scss']
})
export class AllCatalogsComponent implements OnInit {
  contentHasLoaded: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => this.contentHasLoaded = true)
  }

}
