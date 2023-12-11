import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, exhaustMap, map, Observable, of, take } from 'rxjs';
import { Cryptocurrency } from '../../models/cryptocurrency.model';
import { selectCryptocurrencyById, selectLoaded } from '../../store/reducers/cryptocurrencies.reducer';
import { AsyncPipe, CurrencyPipe, DatePipe, NgForOf, NgIf, PercentPipe, Location } from '@angular/common';
import { CryptocurrencyIconComponent } from '../cryptocurrency-icon/cryptocurrency-icon.component';
import { loadCryptocurrencies, toggleCurrencyFavouriteParam } from '../../store/actions/cryptocurrencies.action';
import { MatExpansionModule } from '@angular/material/expansion';
import { SpaceNumberDelimiterPipePipe } from '../../pipes/space-number-delimiter.pipe';
import { MatIconModule } from '@angular/material/icon';

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
    PercentPipe,
    SpaceNumberDelimiterPipePipe,
    MatIconModule
  ],
  templateUrl: './cryptocurrency-details.component.html',
  styleUrl: './cryptocurrency-details.component.scss'
})
export class CryptocurrencyDetailsComponent implements OnInit {

  public cryptocurrency$: Observable<Cryptocurrency | undefined> = of(undefined);
  private id$: Observable<string> = this.route.params.pipe(map((params: Params) => params['id']));

  constructor(
      private route: ActivatedRoute,
      private store: Store,
      private location: Location
  ) {
  }

  ngOnInit() {
    this.store.select(selectLoaded).pipe(
        take(1)
    ).subscribe((isLoaded: boolean) => {
      if (!isLoaded) this.store.dispatch(loadCryptocurrencies())
    })

    this.cryptocurrency$ = this.id$.pipe(
        exhaustMap((id: string) => this.store.select(selectCryptocurrencyById(id))),
        catchError(_ => of(undefined))
    )
  }

  public goBack() {
    this.location.back();
  }

  public toggleFavouriteProperty(cryptocurrencyId: string) {
    this.store.dispatch(toggleCurrencyFavouriteParam({ id: cryptocurrencyId }))
  }
}
