import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cryptocurrency } from '../../models/cryptocurrency.model';
import { Store } from '@ngrx/store';
import { loadCryptocurrencies, toggleCurrencyFavouriteParam } from '../../store/actions/cryptocurrencies.action';
import { selectCryptocurrencies } from '../../store/reducers/cryptocurrencies.reducer';
import { MatTableModule } from '@angular/material/table';
import { AsyncPipe, CurrencyPipe, DecimalPipe, LowerCasePipe, NgIf, PercentPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cryptocurrency-list',
  standalone: true,
  imports: [
    MatTableModule,
    AsyncPipe,
    NgIf,
    MatIconModule,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe
  ],
  templateUrl: './cryptocurrency-list.component.html',
  styleUrl: './cryptocurrency-list.component.scss'
})
export class CryptocurrencyListComponent implements OnInit {

  public cryptocurrencies$: Observable<Array<Cryptocurrency>> = this.store.select(selectCryptocurrencies)

  public displayedColumns: Array<string> = ['favourite', 'rank', 'name', 'price', 'hour', 'day', 'week', 'marketCap', 'volumeDay', 'circulatingSupply'];

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(loadCryptocurrencies())
  }

  public toggleFavouriteProperty(cryptocurrencyId: string) {
    this.store.dispatch(toggleCurrencyFavouriteParam({ id: cryptocurrencyId }))
  }
}
