import { TestBed } from '@angular/core/testing';

import { KinopoiskAPIService } from './kinopoisk-api.service';

describe('KinopoiskAPIService', () => {
  let service: KinopoiskAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KinopoiskAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
