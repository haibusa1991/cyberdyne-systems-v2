import { TestBed } from '@angular/core/testing';

import { ViewSwipeService } from './view-swipe.service';

describe('ViewSwipeService', () => {
  let service: ViewSwipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSwipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
