import { Routes } from '@angular/router';
import { CryptocurrenciesOverviewComponent } from './cryptocurrencies-overview/cryptocurrencies-overview.component';
import { CryptocurrencyDetailsComponent } from './cryptocurrency-details/cryptocurrency-details.component';

export const CRYPTOCURRENCIES_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CryptocurrenciesOverviewComponent
  },
  {
    path: 'details/:id',
    component: CryptocurrencyDetailsComponent
  }
]
