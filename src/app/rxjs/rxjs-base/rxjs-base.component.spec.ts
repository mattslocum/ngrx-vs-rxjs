import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBaseComponent } from './rxjs-base.component';

describe('RxjsBaseComponent', () => {
  let component: RxjsBaseComponent;
  let fixture: ComponentFixture<RxjsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
