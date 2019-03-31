import { TestBed } from '@angular/core/testing';

import { SpriteStoreService } from './sprite-store.service';

describe('SpriteStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpriteStoreService = TestBed.get(SpriteStoreService);
    expect(service).toBeTruthy();
  });
});
