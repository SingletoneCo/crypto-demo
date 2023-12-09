import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrenciesOverviewComponent } from './cryptocurrencies-overview.component';

describe('CurrenciesOverviewComponent', () => {
  let component: CryptocurrenciesOverviewComponent;
  let fixture: ComponentFixture<CryptocurrenciesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptocurrenciesOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptocurrenciesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
