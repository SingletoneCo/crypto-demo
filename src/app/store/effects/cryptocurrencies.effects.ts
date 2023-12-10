import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { CryptocurrenciesService } from '../../services/cryptocurrencies.service';
import {
  loadCryptocurrencies,
  loadCryptocurrenciesFail,
  loadCryptocurrenciesSuccess
} from '../actions/cryptocurrencies.action';

@Injectable()
export class CryptocurrenciesEffects {

  loadCryptocurrencies$ = createEffect(() => this.actions$.pipe(
      ofType(loadCryptocurrencies),
      exhaustMap(() => this.cryptocurrenciesService.getAll()
          .pipe(
              map(cryptocurrencies => loadCryptocurrenciesSuccess({ payload: cryptocurrencies })),
              catchError(error => of(loadCryptocurrenciesFail({ payload: error })))
          ))
  ))

  constructor(
    private actions$: Actions,
    private cryptocurrenciesService: CryptocurrenciesService
  ) {}
}
