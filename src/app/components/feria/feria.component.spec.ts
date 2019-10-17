import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriaComponent } from './feria.component';

describe('FeriaComponent', () => {
  let component: FeriaComponent;
  let fixture: ComponentFixture<FeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
