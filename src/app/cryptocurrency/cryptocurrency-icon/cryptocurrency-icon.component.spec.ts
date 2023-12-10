import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyIconComponent } from './cryptocurrency-icon.component';

describe('CryptocurrencyIconComponent', () => {
  let component: CryptocurrencyIconComponent;
  let fixture: ComponentFixture<CryptocurrencyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptocurrencyIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CryptocurrencyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
