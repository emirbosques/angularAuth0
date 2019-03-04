import { TestBed } from '@angular/core/testing';

import { ServiceGuardService } from './service-guard.service';

describe('ServiceGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceGuardService = TestBed.get(ServiceGuardService);
    expect(service).toBeTruthy();
  });
});
