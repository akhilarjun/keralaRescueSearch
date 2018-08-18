import { TestBed, inject } from '@angular/core/testing';

import { KeralaRescueDataService } from './kerala-rescue-data.service';

describe('KeralaRescueDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeralaRescueDataService]
    });
  });

  it('should be created', inject([KeralaRescueDataService], (service: KeralaRescueDataService) => {
    expect(service).toBeTruthy();
  }));
});
