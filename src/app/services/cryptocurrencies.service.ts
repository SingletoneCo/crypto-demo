import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Cryptocurrency } from '../models/cryptocurrency.model';
import { cryptocurrenciesData } from '../cryptocurrency/data';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrenciesService {

  public getAll(): Observable<Array<Cryptocurrency>> {
    return of(cryptocurrenciesData).pipe(
        take(1)
    );
  }
}
