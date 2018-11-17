import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCounterComponent } from './rxjs-counter.component';

describe('RxjsCounterComponent', () => {
  let component: RxjsCounterComponent;
  let fixture: ComponentFixture<RxjsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
