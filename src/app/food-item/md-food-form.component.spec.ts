import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdFoodFormComponent } from './md-food-form.component';

describe('MdFoodFormComponent', () => {
  let component: MdFoodFormComponent;
  let fixture: ComponentFixture<MdFoodFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdFoodFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdFoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
