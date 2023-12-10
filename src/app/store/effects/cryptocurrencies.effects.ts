import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { CryptocurrenciesService } from '../../services/cryptocurrencies.service';
import {
  loadCryptocurrencies,
  loadCryptocurrenciesFail,
  loadCryptocurrenciesSuccess, toggleCurrencyFavouriteParam
} from '../actions/cryptocurrencies.action';
import { Cryptocurrency } from '../../models/cryptocurrency.model';

@Injectable()
export class CryptocurrenciesEffects {

  loadCryptocurrencies$ = createEffect(() => this.actions$.pipe(
      ofType(loadCryptocurrencies),
      exhaustMap(() => this.cryptocurrenciesService.getAll()
          .pipe(
              map((cryptocurrencies: Array<Cryptocurrency>) => cryptocurrencies.map(currency => {
                // of course normally I wouldn't assign false as a value, it would be part of db entity
                return {
                  ...currency,
                  favourite: false
                }
              })),
              map((cryptocurrencies: Array<Cryptocurrency>) => loadCryptocurrenciesSuccess({ payload: cryptocurrencies })),
              catchError(error => of(loadCryptocurrenciesFail({ payload: error })))
          ))
  ))

  constructor(
    private actions$: Actions,
    private cryptocurrenciesService: CryptocurrenciesService
  ) {}
}
