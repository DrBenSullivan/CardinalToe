import { TestBed } from '@angular/core/testing';

import { LocationDataService } from './location-data.service';

describe('LocationDataFetcherService', () => {
  let service: LocationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
