import { Component } from '@angular/core';
import { CryptocurrencyListComponent } from '../cryptocurrency-list/cryptocurrency-list.component';

@Component({
  selector: 'app-cryptocurrencies-overview',
  standalone: true,
  imports: [
    CryptocurrencyListComponent
  ],
  templateUrl: './cryptocurrencies-overview.component.html',
  styleUrl: './cryptocurrencies-overview.component.scss'
})
export class CryptocurrenciesOverviewComponent {
}
