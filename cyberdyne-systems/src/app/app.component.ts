import {Component} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {mainRoutesAnimations} from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    mainRoutesAnimations
  ]
})
export class AppComponent {

  title = 'cyberdyne-systems';


  constructor(private contexts:ChildrenOutletContexts) {
  }

  getRouterAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animationModuleName'];
  }
}
