import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyListComponent } from './cryptocurrency-list.component';
import { provideState, provideStore } from '@ngrx/store';
import { cryptocurrenciesFeature } from '../../store/reducers/cryptocurrencies.reducer';
import { By } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { CryptocurrenciesEffects } from '../../store/effects/cryptocurrencies.effects';

describe('CurrencyListComponent', () => {
  let component: CryptocurrencyListComponent;
  let fixture: ComponentFixture<CryptocurrencyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptocurrencyListComponent],
      providers: [
        provideStore(),
        provideState(cryptocurrenciesFeature),
        provideEffects(CryptocurrenciesEffects)
      ]
    })
        .compileComponents();

    fixture = TestBed.createComponent(CryptocurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table', () => {
    const { debugElement } = fixture;
    const table = debugElement.query(By.css('table'))
    expect(table).toBeTruthy();
  });
});
