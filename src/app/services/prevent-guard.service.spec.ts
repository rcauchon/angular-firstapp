import { TestBed } from '@angular/core/testing';

import { PreventGuardService } from './prevent-guard.service';

describe('PreventGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreventGuardService = TestBed.get(PreventGuardService);
    expect(service).toBeTruthy();
  });
});
