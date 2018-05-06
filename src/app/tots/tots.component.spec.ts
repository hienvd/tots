import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsComponent } from './tots.component';

describe('TotsComponent', () => {
  let component: TotsComponent;
  let fixture: ComponentFixture<TotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
