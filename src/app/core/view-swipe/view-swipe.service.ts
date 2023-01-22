import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ViewSwipeService {

  constructor() {
  }

  private hasSwiped = new Subject();

  onSwipe() {
    this.hasSwiped.next(true);
  }

  getSwipeStatus() {
    return new Observable<boolean>(e => {
      this.hasSwiped.subscribe(status => e.next(status as boolean));
    })
  }
}
