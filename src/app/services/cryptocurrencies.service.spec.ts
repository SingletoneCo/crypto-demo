import { TestBed } from '@angular/core/testing';

import { CryptocurrenciesService } from './cryptocurrencies.service';

describe('CryptocurrenciesService', () => {
  let service: CryptocurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptocurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return array of cryptocurrencies by getAll method called', () => {
    const cryptocurrencies$ = service.getAll();
    cryptocurrencies$.subscribe(value => {
      expect(value.length).toEqual(20);
    })
  });
});
