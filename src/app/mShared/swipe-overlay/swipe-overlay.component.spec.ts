import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeOverlayComponent } from './swipe-overlay.component';

describe('SwipeOverlayComponent', () => {
  let component: SwipeOverlayComponent;
  let fixture: ComponentFixture<SwipeOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
