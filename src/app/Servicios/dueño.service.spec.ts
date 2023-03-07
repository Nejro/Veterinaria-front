import { TestBed } from '@angular/core/testing';

import { DueñoService } from './dueño.service';

describe('DueñoService', () => {
  let service: DueñoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DueñoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
