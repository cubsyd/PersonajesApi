import { TestBed } from '@angular/core/testing';

import { DragonBallApi } from './dragon-ball-api';

describe('DragonBallApi', () => {
  let service: DragonBallApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonBallApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
