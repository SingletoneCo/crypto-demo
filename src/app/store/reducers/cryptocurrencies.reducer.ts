import { Cryptocurrency } from '../../models/cryptocurrency.model';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import * as CryptocurrenciesActions from '../actions/cryptocurrencies.action';


/*I've included loading value, as in a normal project I would add a one to all states and use it for displaying a loading bar instead of the content.
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

export const cryptocurrenciesFeature = createFeature({
  name: 'cryptocurrencies',
  reducer: createReducer(
      initialState,
      on(CryptocurrenciesActions.loadCryptocurrenciesSuccess, (state, { cryptocurrencies }) => ({
        ...state,
        cryptocurrencies,
        loading: false,
        loaded: true
      })),
      on(CryptocurrenciesActions.loadCryptocurrenciesFail, state => ({
        ...state,
        loading: false
      })),
      on(CryptocurrenciesActions.toggleCurrencyFavouriteParam, (state, { id }) => ({
        ...state,
        cryptocurrencies: state.cryptocurrencies.map((cryptocurrency: Cryptocurrency) => {
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
  selectCryptocurrencies,
  selectLoaded
} = cryptocurrenciesFeature;
export const selectCryptocurrencyById = (id: string) => createSelector(
    selectCryptocurrencies, (cryptocurrencies: Array<Cryptocurrency>) => cryptocurrencies
        .find((cryptocurrency: Cryptocurrency) => cryptocurrency.id === id)
)


