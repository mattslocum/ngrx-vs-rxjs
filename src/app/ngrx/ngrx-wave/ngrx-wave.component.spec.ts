import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWaveComponent } from './ngrx-wave.component';

describe('NgrxWaveComponent', () => {
  let component: NgrxWaveComponent;
  let fixture: ComponentFixture<NgrxWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxWaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
