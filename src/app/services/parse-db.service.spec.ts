import { TestBed } from '@angular/core/testing';

import { ParseDbService } from './parse-db.service';

describe('ParseDbService', () => {
  let service: ParseDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
