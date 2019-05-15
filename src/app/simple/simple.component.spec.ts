/* testing file */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {

  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  /* Before Each block */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('p'));
    element  = debugElement.nativeElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud display startup name value', () => {

    expect(element.textContent).not.toContain(component.name);
    fixture.detectChanges();
    expect(element.textContent).toContain(component.name);
  });

  it('shoud display updateed name value', () => {
    component.name = 'Cauchon';
    fixture.detectChanges();

    expect(element.textContent).toContain('Cauchon');
  });
});
