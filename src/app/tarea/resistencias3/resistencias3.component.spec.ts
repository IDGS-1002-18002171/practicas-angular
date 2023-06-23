import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resistencias3Component } from './resistencias3.component';

describe('Resistencias3Component', () => {
  let component: Resistencias3Component;
  let fixture: ComponentFixture<Resistencias3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Resistencias3Component]
    });
    fixture = TestBed.createComponent(Resistencias3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
