import { createAction, props } from '@ngrx/store';
import { Cryptocurrency } from '../../models/cryptocurrency.model';


export const loadCryptocurrencies = createAction('[Cryptocurrencies] Load');
export const loadCryptocurrenciesSuccess = createAction('[Cryptocurrencies] Load Success', props<{ payload: Array<Cryptocurrency> }>());
export const loadCryptocurrenciesFail = createAction('[Cryptocurrencies] Load Fail', props<{ payload: any }>());

