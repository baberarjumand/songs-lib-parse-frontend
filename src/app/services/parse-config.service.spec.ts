import { TestBed } from '@angular/core/testing';

import { ParseConfigService } from './parse-config.service';

describe('ParseConfigService', () => {
  let service: ParseConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
