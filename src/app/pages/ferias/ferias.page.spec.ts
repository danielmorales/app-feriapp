import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriasPage } from './ferias.page';

describe('FeriasPage', () => {
  let component: FeriasPage;
  let fixture: ComponentFixture<FeriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
