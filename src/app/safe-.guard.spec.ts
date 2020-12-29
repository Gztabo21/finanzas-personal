import { TestBed } from '@angular/core/testing';

import { SafeGuard } from './safe-.guard';

describe('SafeGuard', () => {
  let guard: SafeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SafeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
