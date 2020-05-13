import { TestBed } from '@angular/core/testing';

import { SupermercadosService } from './supermercados.service';

describe('SupermercadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupermercadosService = TestBed.get(SupermercadosService);
    expect(service).toBeTruthy();
  });
});
