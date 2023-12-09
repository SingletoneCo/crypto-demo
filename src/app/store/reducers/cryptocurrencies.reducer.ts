import { Cryptocurrency } from '../../models/cryptocurrency.model';
import { createFeature, createReducer, on } from '@ngrx/store';
import * as CryptocurrenciesActions from '../actions/cryptocurrencies.action';

export interface CryptocurrenciesState {
  data: Cryptocurrency[],
  loaded: boolean,
  loading: boolean
}

export const initialState: CryptocurrenciesState = {
  data: [],
  loaded: false,
  loading: false
}

export const cryptocurrenciesFeature = createFeature({
  name: 'cryptocurrencies',
  reducer: createReducer(
      initialState,
      on(CryptocurrenciesActions.loadCryptocurrencies, state => ({
        ...state,
        loading: true
      })),
      on(CryptocurrenciesActions.loadCryptocurrenciesSuccess, state => ({
        ...state,
        loading: false,
        loaded: true
      })),
      on(CryptocurrenciesActions.loadCryptocurrenciesFail, state => ({
        ...state,
        loading: false
      }))
  )
})
