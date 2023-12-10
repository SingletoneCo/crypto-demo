import { Cryptocurrency } from '../../models/cryptocurrency.model';
import { createFeature, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as CryptocurrenciesActions from '../actions/cryptocurrencies.action';

export interface CryptocurrenciesState {
  cryptocurrencies: Cryptocurrency[],
  loaded: boolean,
  loading: boolean
}

export const initialState: CryptocurrenciesState = {
  cryptocurrencies: [],
  loaded: false,
  loading: false
}

const featureKey: string = 'cryptocurrencies';

export const cryptocurrenciesFeature = createFeature({
  name: featureKey,
  reducer: createReducer(
    initialState,
      on(CryptocurrenciesActions.loadCryptocurrenciesSuccess, (state, { payload }) => ({
        ...state,
        cryptocurrencies: payload,
        loading: false,
        loaded: true
      })),
      on(CryptocurrenciesActions.loadCryptocurrenciesFail, state => ({
        ...state,
        loading: false
      }))
  )
})

const selectFeature = createFeatureSelector<CryptocurrenciesState>(featureKey)
export const getCryptocurrencies = createSelector(
    selectFeature,
    (state: CryptocurrenciesState) => state.cryptocurrencies
)

