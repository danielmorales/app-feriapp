import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaFeriasPage } from './mapa-ferias.page';

describe('MapaFeriasPage', () => {
  let component: MapaFeriasPage;
  let fixture: ComponentFixture<MapaFeriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaFeriasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaFeriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
