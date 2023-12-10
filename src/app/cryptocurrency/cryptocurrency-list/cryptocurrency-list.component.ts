import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cryptocurrency } from '../../models/cryptocurrency.model';
import { Store } from '@ngrx/store';
import { loadCryptocurrencies } from '../../store/actions/cryptocurrencies.action';
import { getCryptocurrencies } from '../../store/reducers/cryptocurrencies.reducer';
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

  public cryptocurrencies$: Observable<Array<Cryptocurrency>> = this.store.select(getCryptocurrencies)

  public displayedColumns: Array<string> = ['favourite', 'rank', 'name', 'price', 'hour', 'day', 'week', 'marketCap', 'volumeDay', 'circulatingSupply'];

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(loadCryptocurrencies())

    this.cryptocurrencies$.subscribe(resp => console.log(resp))
  }
}
