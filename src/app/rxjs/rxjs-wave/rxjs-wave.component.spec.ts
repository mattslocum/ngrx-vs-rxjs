import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWaveComponent } from './rxjs-wave.component';

describe('RxjsWaveComponent', () => {
  let component: RxjsWaveComponent;
  let fixture: ComponentFixture<RxjsWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsWaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
