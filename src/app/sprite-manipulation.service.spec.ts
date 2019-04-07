import { TestBed } from '@angular/core/testing';

import { SpriteManipulationService } from './sprite-manipulation.service';

describe('SpriteManipulationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpriteManipulationService = TestBed.get(SpriteManipulationService);
    expect(service).toBeTruthy();
  });
});
