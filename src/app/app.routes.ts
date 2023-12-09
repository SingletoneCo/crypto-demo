import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import {
  CryptocurrenciesOverviewComponent
} from './cryptocurrency/cryptocurrencies-overview/cryptocurrencies-overview.component';
import { cryptocurrenciesFeature } from './store/reducers/cryptocurrencies.reducer';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cryptocurrencies',
    pathMatch: 'full'
  }, {
    path: 'cryptocurrencies',
    providers: [
      provideState(cryptocurrenciesFeature)
    ],
    component: CryptocurrenciesOverviewComponent
  }, {
    path: '**',
    redirectTo: 'cryptocurrencies'
  }
];
