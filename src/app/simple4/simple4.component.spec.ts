import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simple4Component } from './simple4.component';

describe('Simple4Component', () => {
  let component: Simple4Component;
  let fixture: ComponentFixture<Simple4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simple4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simple4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
