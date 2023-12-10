import { Cryptocurrency } from '../../models/cryptocurrency.model';
import { createFeature, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as CryptocurrenciesActions from '../actions/cryptocurrencies.action';


/*I've included loaded and loading values, as in a normal project I would add them to all states and use them for displaying a loading bar / error message instead of the content.
I would create a reusable solution for that purpose*/
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
  name: 'cryptocurrencies',
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
      })),
      on(CryptocurrenciesActions.toggleCurrencyFavouriteParam, (state, { id }) => ({
        ...state,
        cryptocurrencies: state.cryptocurrencies.map((cryptocurrency) => {
          return cryptocurrency.id === id ? {
            ...cryptocurrency,
            favourite: !cryptocurrency.favourite
          } : cryptocurrency;
        })
      }))
  )
})

export const {
  name,
  selectCryptocurrencies
} = cryptocurrenciesFeature


