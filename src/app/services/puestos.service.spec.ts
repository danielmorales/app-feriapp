import { TestBed } from '@angular/core/testing';

import { PuestosService } from './puestos.service';

describe('PuestosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuestosService = TestBed.get(PuestosService);
    expect(service).toBeTruthy();
  });
});
