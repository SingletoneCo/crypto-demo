import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, exhaustMap, filter, map, Observable, of, take, tap } from 'rxjs';
import { Cryptocurrency } from '../../models/cryptocurrency.model';
import { selectCryptocurrencyById, selectLoaded } from '../../store/reducers/cryptocurrencies.reducer';
import { AsyncPipe, CurrencyPipe, DatePipe, NgForOf, NgIf, PercentPipe } from '@angular/common';
import { CryptocurrencyIconComponent } from '../cryptocurrency-icon/cryptocurrency-icon.component';
import { loadCryptocurrencies } from '../../store/actions/cryptocurrencies.action';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-cryptocurrency-details',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    CryptocurrencyIconComponent,
    NgForOf,
    MatExpansionModule,
    DatePipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './cryptocurrency-details.component.html',
  styleUrl: './cryptocurrency-details.component.scss'
})
export class CryptocurrencyDetailsComponent implements OnInit {

  public cryptocurrency$: Observable<Cryptocurrency | undefined> = of(undefined);
  public cryptocurrencyDetails: Array<any> = [];
  private id: Observable<string> = this.route.params.pipe(map((params: Params) => params['id']));

  constructor(
      private route: ActivatedRoute,
      private store: Store
  ) {}

  ngOnInit() {
    this.store.select(selectLoaded).pipe(take(1)).subscribe((isLoaded: boolean) => {
      if (!isLoaded) this.store.dispatch(loadCryptocurrencies())
    })

    this.cryptocurrency$ = this.id.pipe(
        exhaustMap((id: string) => this.store.select(selectCryptocurrencyById(id))),
        filter((cryptocurrency: Cryptocurrency | undefined) => cryptocurrency !== undefined),
        tap((cryptocurrency: Cryptocurrency | undefined) => {
          // TODO: remove?

          // this.cryptocurrencyDetails = this.getCryptocurrencyDetails(cryptocurrency as Cryptocurrency)
        }),
        catchError(() => of(undefined))
    )
  }
}
