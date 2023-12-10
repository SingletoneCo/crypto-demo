import { createAction, props } from '@ngrx/store';
import { Cryptocurrency } from '../../models/cryptocurrency.model';


export const loadCryptocurrencies = createAction('[Cryptocurrencies] Load');
export const loadCryptocurrenciesSuccess = createAction('[Cryptocurrencies] Load Success', props<{ cryptocurrencies: Array<Cryptocurrency> }>());
export const loadCryptocurrenciesFail = createAction('[Cryptocurrencies] Load Fail', props<{ error: string }>());

export const toggleCurrencyFavouriteParam = createAction('[Cryptocurrencies] Toggle favourite param', props<{ id: string }>())

