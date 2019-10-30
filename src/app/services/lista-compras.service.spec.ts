import { TestBed } from '@angular/core/testing';

import { ListaComprasService } from './lista-compras.service';

describe('ListaComprasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaComprasService = TestBed.get(ListaComprasService);
    expect(service).toBeTruthy();
  });
});
