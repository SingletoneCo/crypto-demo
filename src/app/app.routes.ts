import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import {
  CryptocurrenciesOverviewComponent
} from './cryptocurrency/cryptocurrencies-overview/cryptocurrencies-overview.component';
import { cryptocurrenciesFeature } from './store/reducers/cryptocurrencies.reducer';
import { provideEffects } from '@ngrx/effects';
import { CryptocurrenciesEffects } from './store/effects/cryptocurrencies.effects';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cryptocurrencies',
    pathMatch: 'full'
  }, {
    path: 'cryptocurrencies',
    providers: [
      provideState(cryptocurrenciesFeature),
      provideEffects(CryptocurrenciesEffects)
    ],
    component: CryptocurrenciesOverviewComponent
  }, {
    path: '**',
    redirectTo: 'cryptocurrencies'
  }
];

