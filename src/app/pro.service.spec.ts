import { TestBed } from '@angular/core/testing';

import { ProService } from './pro.service';

describe('ProService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProService = TestBed.get(ProService);
    expect(service).toBeTruthy();
  });
});
