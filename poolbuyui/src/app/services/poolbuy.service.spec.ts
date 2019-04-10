import { TestBed } from '@angular/core/testing';

import { PoolbuyService } from './poolbuy.service';

describe('PoolbuyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoolbuyService = TestBed.get(PoolbuyService);
    expect(service).toBeTruthy();
  });
});
