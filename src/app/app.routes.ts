import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
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
    loadChildren: () => import('./cryptocurrency/cryptocurrencies.routes').then(m => m.CRYPTOCURRENCIES_ROUTES)
  }, {
    path: '**',
    redirectTo: 'cryptocurrencies'
  }
];

