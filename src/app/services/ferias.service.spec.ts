import { TestBed } from '@angular/core/testing';

import { FeriasService } from './ferias.service';

describe('FeriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeriasService = TestBed.get(FeriasService);
    expect(service).toBeTruthy();
  });
});
