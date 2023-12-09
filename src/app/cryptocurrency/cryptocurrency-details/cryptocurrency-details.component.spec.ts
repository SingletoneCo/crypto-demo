import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyDetailsComponent } from './cryptocurrency-details.component';

describe('CurrencyDetailsComponent', () => {
  let component: CryptocurrencyDetailsComponent;
  let fixture: ComponentFixture<CryptocurrencyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptocurrencyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptocurrencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
